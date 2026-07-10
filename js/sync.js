/*
 * sync.js — OPTIONAL cross-device progress sync via Firebase (Google sign-in + Firestore).
 *
 * Design goals:
 *  - The app is fully usable with NO account (localStorage). Sign-in is purely additive.
 *  - Firebase is lazy-loaded from the CDN only for users who have opted in (signed in before),
 *    so non-users keep the zero-dependency, offline-friendly experience.
 *  - Signing in never loses local work: local + cloud states are MERGED (see Progress.mergeState).
 *
 * The Firebase apiKey below is a public client identifier (not a secret); access is controlled
 * by Firebase Auth + Firestore security rules (see firestore.rules).
 */
(function () {
  "use strict";
  var CONFIG = {
    apiKey: "AIzaSyBOnnT8oktHxTCJq10_yHtm6qUrbZFlZTI",
    authDomain: "chess-spire.firebaseapp.com",
    projectId: "chess-spire",
    storageBucket: "chess-spire.firebasestorage.app",
    messagingSenderId: "899996831116",
    appId: "1:899996831116:web:f03baa4f54ddf5054e5aa9"
  };
  var COLLECTION = "apsych_progress";
  var VER = "10.12.5";
  var CDN = "https://www.gstatic.com/firebasejs/" + VER + "/";

  if (window.Sync) return; // guard against double-load

  var fb = null, loading = null, user = null, pushTimer = null, pushAttached = false;

  function optedIn() { try { return localStorage.getItem("apsych:sync") === "1"; } catch (e) { return false; } }
  function setOptIn(v) { try { v ? localStorage.setItem("apsych:sync", "1") : localStorage.removeItem("apsych:sync"); } catch (e) {} }
  function emit() { try { window.dispatchEvent(new CustomEvent("apsych:sync-changed")); } catch (e) {} }

  function load() {
    if (fb) return Promise.resolve(fb);
    if (loading) return loading;
    loading = (async function () {
      var appMod = await import(CDN + "firebase-app.js");
      var authMod = await import(CDN + "firebase-auth.js");
      var fsMod = await import(CDN + "firebase-firestore.js");
      var app = appMod.getApps().length ? appMod.getApps()[0] : appMod.initializeApp(CONFIG);
      var auth = authMod.getAuth(app);
      try { await authMod.setPersistence(auth, authMod.browserLocalPersistence); } catch (e) {}
      var db = fsMod.getFirestore(app);
      fb = { appMod: appMod, authMod: authMod, fsMod: fsMod, app: app, auth: auth, db: db };
      authMod.onAuthStateChanged(auth, onAuthChange);
      try { await authMod.getRedirectResult(auth); } catch (e) {}
      return fb;
    })();
    return loading;
  }

  async function onAuthChange(u) {
    user = u || null;
    emit();
    if (user) { setOptIn(true); attachPush(); await pull(); }
  }

  async function pull() {
    if (!fb || !user) return;
    try {
      var ref = fb.fsMod.doc(fb.db, COLLECTION, user.uid);
      var snap = await fb.fsMod.getDoc(ref);
      if (snap.exists()) {
        var data = snap.data();
        if (data && data.state) window.Progress.mergeState(data.state);
      }
      await push(); // ensure cloud holds the merged union
      try { window.dispatchEvent(new CustomEvent("apsych:progress-updated")); } catch (e) {}
      if (window.Gamification) window.Gamification.toast("☁️ Progress synced");
    } catch (e) { console.warn("Sync: pull failed", e); }
  }

  function attachPush() {
    if (pushAttached) return; pushAttached = true;
    window.addEventListener("apsych:progress-updated", schedulePush);
  }
  function schedulePush() {
    if (!user) return;
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 1500);
  }
  async function push() {
    if (!fb || !user) return;
    try {
      var ref = fb.fsMod.doc(fb.db, COLLECTION, user.uid);
      await fb.fsMod.setDoc(ref, {
        state: window.Progress.exportState(),
        email: user.email || null,
        app: "ap-psych",
        updatedAt: Date.now()
      });
    } catch (e) { console.warn("Sync: push failed", e); }
  }

  var Sync = {
    available: true,
    isSignedIn: function () { return !!user; },
    user: function () { return user ? { email: user.email, name: user.displayName, photo: user.photoURL } : null; },

    signIn: async function () {
      try {
        await load();
        var provider = new fb.authMod.GoogleAuthProvider();
        try {
          await fb.authMod.signInWithPopup(fb.auth, provider);
        } catch (e) {
          // Popups are often blocked on mobile — fall back to a full-page redirect.
          if (e && /popup|cancelled|blocked/i.test(e.code || e.message || "")) {
            await fb.authMod.signInWithRedirect(fb.auth, provider);
            return true;
          }
          throw e;
        }
        return true;
      } catch (e) {
        console.warn("Sync: sign-in failed", e);
        var msg = (e && e.code === "auth/unauthorized-domain")
          ? "This domain isn't authorized in Firebase yet."
          : "Sign-in failed" + (e && e.code ? " (" + e.code + ")" : "");
        if (window.Gamification) window.Gamification.toast("⚠️ " + msg);
        return false;
      }
    },

    signOut: async function () {
      try { if (fb) await fb.authMod.signOut(fb.auth); } catch (e) {}
      user = null; setOptIn(false); emit();
      if (window.Gamification) window.Gamification.toast("Signed out — your progress stays on this device");
    },

    init: function () {
      // Only auto-load Firebase for users who have opted in; everyone else stays fully local.
      emit();
      if (optedIn()) load().catch(function (e) { console.warn("Sync: Firebase load failed", e); });
    }
  };

  window.Sync = Sync;
  window.APSYCH = window.APSYCH || {};
  window.APSYCH.Sync = Sync;
  Sync.init();
})();
