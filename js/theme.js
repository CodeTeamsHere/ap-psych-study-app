/*
 * theme.js — Dark-mode toggle with persistence.
 * A tiny inline script in each page's <head> sets data-theme before first paint
 * (prevents flash). This module wires the toggle button and reacts to OS changes.
 */
(function () {
  "use strict";
  var KEY = "apsych:theme";

  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function systemPref() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function current() {
    return document.documentElement.getAttribute("data-theme") || stored() || systemPref();
  }
  function apply(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.style.colorScheme = mode;
    updateButtons(mode);
  }
  function set(mode) {
    apply(mode);
    try { localStorage.setItem(KEY, mode); } catch (e) {}
  }
  function toggle() { set(current() === "dark" ? "light" : "dark"); }

  function updateButtons(mode) {
    var btns = document.querySelectorAll("[data-theme-toggle]");
    btns.forEach(function (b) {
      var dark = mode === "dark";
      b.setAttribute("aria-pressed", String(dark));
      b.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
      b.innerHTML = dark ? "☀️" : "🌙";
      b.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  function init() {
    // Ensure an explicit attribute exists (inline head script usually set it already)
    if (!document.documentElement.getAttribute("data-theme")) {
      apply(stored() || systemPref());
    } else {
      updateButtons(current());
    }
    document.addEventListener("click", function (e) {
      var t = e.target.closest && e.target.closest("[data-theme-toggle]");
      if (t) { e.preventDefault(); toggle(); }
    });
    // Follow OS changes only when the user hasn't explicitly chosen
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var handler = function () { if (!stored()) apply(systemPref()); };
      if (mq.addEventListener) mq.addEventListener("change", handler);
      else if (mq.addListener) mq.addListener(handler);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.Theme = { set: set, toggle: toggle, current: current };
})();
