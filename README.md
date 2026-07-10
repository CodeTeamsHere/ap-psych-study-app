# AP Psychology Self-Study Studio

A free, **static-first** study website for **AP® Psychology** — built for a single self-studying
learner. Original study notes, hundreds of original practice questions with full per-answer
explanations, mastery tracking, timed exam simulations, and free-response (AAQ + EBQ) practice
with rubrics and model answers. **No account required** — everything runs in your browser and your
progress is saved locally. Optionally, you can **sign in with Google** to sync your progress across
your devices (the only feature that talks to a server; everything else is fully static and offline-capable).

> Built against the **current** College Board course: **5 units, 35 topics, 4 science practices,
> and a 75-question** multiple-choice section (effective Fall 2024; first exam May 2025).
> This is **not** the old 9-unit / 100-question framework.

---

## ✨ Features

- **Study notes for all 35 topics** — CED learning objectives & essential knowledge, plain-language
  explanations, key vocabulary, researchers, applied examples, mnemonics, "trouble spot" traps, and
  "beyond the scope of the exam" callouts so you don't over-study.
- **Original practice questions** with a full interactive flow: select → **eliminate answers** (the
  eye icon) → submit → lock → **per-answer-choice explanations** (why the right answer is right *and*
  why each distractor is wrong). Keyboard shortcuts: <kbd>A</kbd>–<kbd>D</kbd> to select,
  <kbd>Enter</kbd> to submit/advance.
- **Genuine data-interpretation items** (Science Practice 3) — real tables, bar charts, and
  scatterplots to read, not recall questions in disguise.
- **Progress & mastery tracking** — rolling per-topic accuracy, five mastery levels
  (New → Practiced → Familiar → Proficient → Mastered, with honest demotion), per-unit progress
  rings, and a 35-topic mastery heatmap.
- **Timed unit assessments** — exam-style, with feedback deferred to a results screen (score by
  topic and by science practice, plus a review of everything you missed).
- **AAQ & EBQ free-response practice** — two original Article-Analysis sets and two original
  Evidence-Based sets, each with the official-style 7-point rubric, a model answer, and an
  interactive self-score checklist.
- **Gamification** — daily streaks (with a streak-freeze so one missed day won't reset you), XP,
  and achievement badges. Lightweight by design.
- **Dark mode** (respects your system preference, with a manual toggle), fully **keyboard
  accessible**, screen-reader friendly, and mobile-responsive.
- **Export / import** your progress as a JSON file (since it lives only in your browser).
- **Optional cross-device sync** — sign in with Google (via Firebase) to carry your progress across
  phone, tablet, and computers automatically. Completely optional; signing in *merges* with your
  on-device progress so nothing is lost, and the app works fully without ever signing in.

---

## 📊 Content coverage

**400 original multiple-choice questions** across all 35 topics, plus **2 AAQ + 2 EBQ**
free-response sets. Every question has per-choice explanations and is tagged to a unit, topic,
science practice, and difficulty.

| Unit | Topics | Questions | Notes |
|------|:------:|:---------:|-------|
| 1 — Biological Bases of Behavior | 6 | 63 | ✅ all topics |
| 2 — Cognition *(high-yield)* | 8 | 96 | ✅ all topics |
| 3 — Development and Learning | 9 | 99 | ✅ all topics |
| 4 — Social Psychology and Personality | 7 | 77 | ✅ all topics |
| 5 — Mental and Physical Health *(high-yield)* | 5 | 65 | ✅ all topics |
| **Total** | **35** | **400** | — |

Every topic has **11–13 questions** — comfortably above the project's guaranteed floor of 10 per
topic, with extra weight on the high-yield units (2 and 5) and on genuine **Science Practice 3
(Data Interpretation)** items (tables, bar charts, scatterplots). This is above the floor but below
the project's stretch target of 15 per topic; the question banks are designed to be easy to extend —
just add more objects to the arrays in `data/questions/unit-N.js` following the documented schema.

---

## ▶️ How to run it locally

**The easy way (no tools needed):**

1. Download or clone this repository to your computer.
2. Open the folder and **double-click `index.html`**. It opens in your default browser and works
   immediately — all data ships as local files, so there are **no server requirements**.

**Optional (a local web server), if you prefer:**

- With Python (most computers have it):
  ```bash
  cd ap-psych-study-app
  python -m http.server 8123
  ```
  Then visit `http://localhost:8123` in your browser.
- Or with Node.js: `npx --yes serve` from the project folder.

There are **no build steps** and **no dependencies to install**. It's plain HTML, CSS, and
vanilla JavaScript.

---

## 🚀 How to deploy it to GitHub Pages (free hosting) — step by step

This publishes the site to a public URL like
`https://YOUR-USERNAME.github.io/ap-psych-study-app/`.

### Part 1 — Put the code on GitHub

If it isn't already a git repo, from inside the project folder run:

```bash
git init
git add .
git commit -m "Initial commit: AP Psychology study site"
git branch -M main
```

Then create the GitHub repo and push:

1. Go to **https://github.com/new** in your browser.
2. **Repository name:** `ap-psych-study-app` (or any name you like).
3. Set it to **Public**. **Do NOT** check "Add a README" / "Add .gitignore" / "Add a license"
   (this project already has them — adding them on GitHub would cause a conflict).
4. Click **Create repository**.
5. GitHub now shows a page with commands. Use the **"…or push an existing repository"** block.
   Back in your terminal, run (replace `YOUR-USERNAME`):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/ap-psych-study-app.git
   git push -u origin main
   ```
6. If a login window pops up, sign in to GitHub in the browser it opens (Git Credential Manager
   handles this automatically on Windows). Your files are now on GitHub.

### Part 2 — Turn on GitHub Pages

1. On your repository's GitHub page, click the **Settings** tab (top right).
2. In the left sidebar, click **Pages**.
3. Under **"Build and deployment" → "Source,"** choose **"Deploy from a branch."**
4. Under **"Branch,"** pick **`main`** and the folder **`/ (root)`**, then click **Save**.
5. Wait about 1–2 minutes, then refresh the Pages settings screen. It will show a green banner:
   **"Your site is live at https://YOUR-USERNAME.github.io/ap-psych-study-app/."** Click it. 🎉

> **Why the `.nojekyll` file?** GitHub Pages normally runs a tool called Jekyll that ignores files
> and folders starting with an underscore and can interfere with serving the `/data` folder. The
> empty `.nojekyll` file in the project root turns Jekyll off so every file is served as-is. It's
> already included — don't delete it.

To update the live site later, just commit and push again:
```bash
git add .
git commit -m "Update content"
git push
```

---

## 📁 Project structure

```
index.html               Dashboard: unit cards, mastery rings, streak/XP, "continue where you left off"
exam-overview.html       Exam format, science practices, AAQ/EBQ, scoring context, study plan
how-to-study.html        Study techniques, mnemonics, high-yield units, distractor traps
progress.html            Full progress: mastery heatmap, per-unit breakdown, badges, export/import
units/unit-1..5.html     One page per unit: study notes for every topic + jump-to-topic nav
practice/unit-1..5.html  Practice question sets, filterable by topic / difficulty / practice / status
assessments/unit-1..5.html  Timed unit assessments (deferred feedback) + a self-scored FRQ
frq/aaq-practice.html    Two original Article-Analysis Question sets (rubric + model answer)
frq/ebq-practice.html    Two original Evidence-Based Question sets (rubric + model answer)
css/themes.css           Color tokens (light/dark custom properties)
css/styles.css           Design tokens + all component styles
js/quiz.js               Question engine (render, elimination, submit/lock/explain, exam sessions)
js/progress.js           localStorage model: accuracy, mastery levels, unit/course roll-ups
js/gamification.js       Streaks, XP, badges, session summaries
js/theme.js              Dark-mode toggle + persistence
js/nav.js                Sidebar, mobile drawer, keyboard, progress rings, mastery grid
js/notes.js              Study-notes renderer + FRQ renderer
js/export.js             Export / import / reset progress
js/sync.js               Optional Google sign-in + Firestore cross-device sync (lazy-loaded)
firestore.rules          Firestore security rules (users access only their own progress doc)
data/course.js           Single source of truth: units, topics, science practices, exam date
data/notes/unit-1..5.js  Study-notes content
data/questions/unit-1..5.js  Original question banks
data/frq.js              AAQ + EBQ sets
.nojekyll                Tells GitHub Pages to serve every file as-is
```

**A note on the data format:** question and notes data are shipped as `.js` files that register
onto a global object (loaded via `<script>` tags) rather than as `.json` loaded with `fetch()`.
This is deliberate — it lets the site work when you simply **open `index.html` from your file system**
(browsers block `fetch()` of local files for security), while still working perfectly on GitHub Pages.

---

## 🧠 How progress & mastery work

- Every answer is logged to your browser's `localStorage` **immediately**, and reloaded every time
  you open the app — so on the same browser it persists across closing the tab, restarting your
  computer, and days later, with nothing to press.
- A topic's **accuracy chip** shows your *rolling* accuracy (recent questions). Your **mastery level**
  is computed from that rolling accuracy plus how many questions you've attempted — and it can go
  **down** if your recent accuracy drops, so the signal stays honest.
- **Same browser = automatic.** To move progress to a *different* browser/device, either use
  **Progress → Export/Import** (a JSON file), or **sign in with Google** on the Progress page for
  automatic cross-device sync.
- **Cloud sync (optional):** signing in stores your progress in Firebase Firestore under
  `apsych_progress/{your-uid}`, readable/writable only by you (see `firestore.rules`). Firebase is
  lazy-loaded only after you opt in, so users who never sign in stay 100% local and offline-capable.

---

## ♿ Accessibility

Answer choices are real `<input type="radio">` elements inside a `<fieldset>`/`<legend>`, so
keyboard arrow-key navigation and screen-reader grouping work out of the box. Results are announced
via an `aria-live` region; correct/incorrect states always pair color with an icon **and** text;
focus outlines are always visible; tap targets are ≥44px; and both themes meet WCAG AA contrast.

---

## 📚 Sources, originality & disclaimer

All study content and questions are **original**, written for this project and aligned to the
publicly available AP Psychology CED. No proprietary question banks are reproduced. See
[SOURCES.md](SOURCES.md) for full attribution.

**AP® is a trademark registered by the College Board, which is not affiliated with and does not
endorse this site.** This is a free, single-learner self-study tool — not an official College Board
product. Always confirm the current year's exam date on College Board's official site.

## 📄 License

Code is released under the [MIT License](LICENSE). See [SOURCES.md](SOURCES.md) for how it applies
to the educational content.
