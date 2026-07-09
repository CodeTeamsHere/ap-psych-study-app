/*
 * export.js — Backup/restore progress as a JSON file.
 * Required because all progress lives in this browser's localStorage (no accounts,
 * no cross-device sync). Wires any [data-export-progress], [data-import-progress],
 * and [data-reset-progress] controls on the page.
 */
(function () {
  "use strict";

  function download(filename, text) {
    var blob = new Blob([text], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
  }

  function stamp() {
    var d = new Date();
    function p(n) { return String(n).padStart(2, "0"); }
    return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + "-" + p(d.getHours()) + p(d.getMinutes());
  }

  function doExport() {
    if (!window.Progress) return;
    var data = {
      _app: "AP Psychology Self-Study Studio",
      _exported: new Date().toISOString(),
      progress: window.Progress.exportState()
    };
    download("ap-psych-progress-" + stamp() + ".json", JSON.stringify(data, null, 2));
    if (window.Gamification) window.Gamification.toast("⬇️ Progress exported");
  }

  function doImport(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var parsed = JSON.parse(reader.result);
        var state = parsed.progress ? parsed.progress : parsed; // accept either shape
        if (!window.confirm("Importing will replace your current progress in this browser. Continue?")) return;
        window.Progress.importState(state);
        if (window.Gamification) window.Gamification.toast("✅ Progress imported");
        if (window.Shell) window.Shell.refresh();
        setTimeout(function () { location.reload(); }, 700);
      } catch (e) {
        alert("Could not import that file — it does not look like a valid progress export.\n\n" + e.message);
      }
    };
    reader.readAsText(file);
  }

  function doReset() {
    if (!window.Progress) return;
    if (!window.confirm("Reset ALL progress, mastery, XP, streaks, and badges in this browser? This cannot be undone (export a backup first if unsure).")) return;
    window.Progress.reset();
    if (window.Shell) window.Shell.refresh();
    location.reload();
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-export-progress]")) { e.preventDefault(); doExport(); }
    else if (e.target.closest("[data-reset-progress]")) { e.preventDefault(); doReset(); }
    else if (e.target.closest("[data-import-trigger]")) {
      e.preventDefault();
      var input = document.querySelector("[data-import-progress]");
      if (input) input.click();
    }
  });
  document.addEventListener("change", function (e) {
    if (e.target.matches("[data-import-progress]") && e.target.files && e.target.files[0]) {
      doImport(e.target.files[0]);
      e.target.value = "";
    }
  });

  window.ProgressIO = { export: doExport, reset: doReset };
})();
