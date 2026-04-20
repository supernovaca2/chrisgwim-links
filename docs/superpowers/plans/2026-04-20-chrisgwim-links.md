# chrisgwim-links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a free, Cinematic-Dark static link page to `https://links.chrisgwim.com` via GitHub Pages, with 5 music/social links and a contact email.

**Architecture:** Pure static site — one HTML file + one CSS file + CNAME. No JS, no build step, no framework. Served by GitHub Pages with a custom subdomain via a single CNAME record in GoDaddy DNS.

**Tech Stack:** HTML, CSS, Google Fonts (Inter), GitHub Pages, `gh` CLI for repo creation and Pages config.

**Working directory:** `C:\Users\magnu\chrisgwim-links`

---

## File Structure

```
chrisgwim-links/
├── index.html          # All markup
├── styles.css          # All styling
├── CNAME               # Single line: links.chrisgwim.com
├── README.md           # Editing + deploy notes
├── .gitignore          # Ignore .superpowers/ and OS junk
├── docs/               # (already exists — specs + plans)
└── .superpowers/       # (brainstorm artifacts — ignored)
```

Everything lives at repo root. GitHub Pages serves `/` directly.

---

## Task 1: Initialize git repo and .gitignore

**Files:**
- Create: `C:\Users\magnu\chrisgwim-links\.gitignore`

- [ ] **Step 1: Initialize git**

Run (from project root):
```bash
cd /c/Users/magnu/chrisgwim-links
git init -b main
```
Expected: `Initialized empty Git repository in .../chrisgwim-links/.git/`

- [ ] **Step 2: Create .gitignore**

Write to `.gitignore`:
```
.superpowers/
.DS_Store
Thumbs.db
*.log
```

- [ ] **Step 3: Stage existing spec + plan and .gitignore**

```bash
git add .gitignore docs/
git commit -m "chore: init repo with spec and plan"
```
Expected: one commit created.

---

## Task 2: Create index.html

**Files:**
- Create: `C:\Users\magnu\chrisgwim-links\index.html`

- [ ] **Step 1: Write index.html**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Chris Gwim — Music</title>
  <meta name="description" content="Stream Chris Gwim on Spotify, Apple Music, SoundCloud, Deezer, and follow on TikTok.">
  <meta property="og:title" content="Chris Gwim — Music">
  <meta property="og:description" content="Stream Chris Gwim everywhere you listen.">
  <meta property="og:type" content="website">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a0a0a'/></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="page">
    <header>
      <h1 class="wordmark">CHRIS GWIM</h1>
      <p class="tagline">Musician</p>
    </header>

    <section class="hero" aria-label="Latest release">
      <span class="hero-label">Latest Release</span>
      <span class="hero-title">Music out now</span>
    </section>

    <nav class="links" aria-label="Streaming and social platforms">
      <!-- TODO: replace href="#" with Spotify artist URL -->
      <a class="btn" href="#" target="_blank" rel="noopener" aria-label="Listen on Spotify">
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 9.5c3.5-1 8-.5 11 1M7 13c3-.8 6.5-.3 9 1M7.5 16c2.5-.6 5-.2 7 .8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        <span class="lbl">Spotify</span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <!-- TODO: replace href="#" with Apple Music artist URL -->
      <a class="btn" href="#" target="_blank" rel="noopener" aria-label="Listen on Apple Music">
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 4v11a3 3 0 1 1-3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10 17V7l6-1.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        <span class="lbl">Apple Music</span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <!-- TODO: replace href="#" with SoundCloud profile URL -->
      <a class="btn" href="#" target="_blank" rel="noopener" aria-label="Listen on SoundCloud">
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15v-4M7 16v-7M10 17V9M13 17V7a4 4 0 0 1 7.5 2 3.5 3.5 0 0 1-.5 7H13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="lbl">SoundCloud</span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <!-- TODO: replace href="#" with Deezer artist URL -->
      <a class="btn" href="#" target="_blank" rel="noopener" aria-label="Listen on Deezer">
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="15" width="4" height="3" fill="currentColor"/><rect x="9" y="15" width="4" height="3" fill="currentColor"/><rect x="15" y="15" width="4" height="3" fill="currentColor"/><rect x="9" y="11" width="4" height="3" fill="currentColor"/><rect x="15" y="11" width="4" height="3" fill="currentColor"/><rect x="15" y="7" width="4" height="3" fill="currentColor"/></svg>
        <span class="lbl">Deezer</span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <!-- TODO: replace href="#" with TikTok profile URL -->
      <a class="btn" href="#" target="_blank" rel="noopener" aria-label="Follow on TikTok">
        <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4a5 5 0 0 0 5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        <span class="lbl">TikTok</span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>
    </nav>

    <footer>
      <a class="email" href="mailto:chrisgwim@chrisgwim.com" aria-label="Email Chris Gwim">chrisgwim@chrisgwim.com</a>
    </footer>
  </main>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add index.html markup"
```

---

## Task 3: Create styles.css

**Files:**
- Create: `C:\Users\magnu\chrisgwim-links\styles.css`

- [ ] **Step 1: Write styles.css**

```css
:root {
  --bg: #0a0a0a;
  --fg: #ffffff;
  --muted: rgba(255, 255, 255, 0.55);
  --hairline: rgba(255, 255, 255, 0.08);
  --surface: rgba(255, 255, 255, 0.04);
  --surface-border: rgba(255, 255, 255, 0.1);
  --grad-a: #5078ff;
  --grad-b: #ff3cb4;
  --grad-c: #28dcf0;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  min-height: 100%;
}

body {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 15% 10%, rgba(80, 120, 255, 0.45), transparent 55%),
    radial-gradient(circle at 85% 70%, rgba(255, 60, 180, 0.4), transparent 55%),
    radial-gradient(circle at 50% 110%, rgba(40, 220, 240, 0.25), transparent 60%);
  z-index: 0;
}

.page {
  position: relative;
  z-index: 1;
  max-width: 400px;
  margin: 0 auto;
  padding: 48px 26px 40px;
}

.wordmark {
  margin: 0 0 4px;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: 7px;
  text-align: center;
}

.tagline {
  margin: 0 0 28px;
  text-align: center;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--muted);
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 1 / 1;
  padding: 18px;
  margin-bottom: 26px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--grad-a) 0%, var(--grad-b) 50%, var(--grad-c) 100%);
  box-shadow: 0 12px 50px rgba(255, 60, 180, 0.25);
}

.hero-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.85;
}

.hero-title {
  margin-top: 2px;
  font-size: 22px;
  font-weight: 700;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--surface-border);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--fg);
  text-decoration: none;
  font-size: 13px;
  transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
  outline: none;
}

.btn:focus-visible {
  box-shadow: 0 0 0 2px var(--grad-b);
}

.ico {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: var(--fg);
}

.lbl {
  flex: 1;
  font-weight: 500;
}

.arrow {
  opacity: 0.4;
  font-size: 14px;
}

footer {
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--hairline);
  text-align: center;
}

.email {
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--muted);
  text-decoration: none;
}

.email:hover { color: var(--fg); }

@media (max-width: 380px) {
  .page { padding: 36px 20px 32px; }
  .wordmark { font-size: 22px; letter-spacing: 5px; }
}
```

- [ ] **Step 2: Commit**

```bash
git add styles.css
git commit -m "feat: add styles.css with Cinematic Dark + Prism palette"
```

---

## Task 4: Add CNAME and README

**Files:**
- Create: `C:\Users\magnu\chrisgwim-links\CNAME`
- Create: `C:\Users\magnu\chrisgwim-links\README.md`

- [ ] **Step 1: Create CNAME**

Write a single line to `CNAME` (no trailing newline required):
```
links.chrisgwim.com
```

- [ ] **Step 2: Create README.md**

```markdown
# chrisgwim-links

Static link hub for Chris Gwim, hosted on GitHub Pages at https://links.chrisgwim.com.

## Editing links

Open `index.html` and replace each `href="#"` with the real URL. Look for `<!-- TODO -->` comments above each link:

- Spotify artist profile
- Apple Music artist page
- SoundCloud profile
- Deezer artist page
- TikTok profile

Commit and push — GitHub Pages auto-deploys from `main`.

## Editing the release hero

Change the copy inside `<section class="hero">` in `index.html` (`Latest Release` label and `Music out now` title).

## Local preview

Open `index.html` directly in a browser, or serve the directory:

```powershell
python -m http.server 8080
```

Then visit http://localhost:8080.

## Deploying

Pushes to `main` auto-deploy. The `CNAME` file and the DNS CNAME record in GoDaddy together pin the custom domain.
```

- [ ] **Step 3: Commit**

```bash
git add CNAME README.md
git commit -m "chore: add CNAME and README"
```

---

## Task 5: Visually verify locally

- [ ] **Step 1: Open index.html in browser**

Open `C:\Users\magnu\chrisgwim-links\index.html` in Chrome/Firefox/Edge (double-click or `start index.html` in PowerShell).

**Expected visual:**
- Dark background with soft violet/magenta/cyan radial glows
- "CHRIS GWIM" wordmark centered, thin spaced letters
- "MUSICIAN" tagline below in small uppercase
- Square gradient card showing "Latest Release — Music out now"
- 5 stacked glassmorphic buttons: Spotify, Apple Music, SoundCloud, Deezer, TikTok
- Email footer: `chrisgwim@chrisgwim.com`

- [ ] **Step 2: Click every button and email link**

Expected:
- Clicking each platform button attempts to open `#` (stays on page — correct until URLs are filled in)
- Clicking the email opens the default mail client with `chrisgwim@chrisgwim.com` as recipient
- Tab key cycles focus through buttons in order, with visible focus ring

- [ ] **Step 3: Check mobile sizing**

In browser devtools, toggle device emulation to iPhone or 375px viewport. Confirm:
- Content fits comfortably inside viewport
- No horizontal scroll
- Buttons are tappable (at least 44px tall)

- [ ] **Step 4: If issues found, fix and commit**

If anything looks off, edit `styles.css` or `index.html`, re-verify, commit with `fix:` prefix. Otherwise skip.

---

## Task 6: Create GitHub repo and push

- [ ] **Step 1: Create remote repo via gh CLI**

```bash
cd /c/Users/magnu/chrisgwim-links
gh repo create chrisgwim-links --public --source=. --remote=origin --description "Chris Gwim's music link hub — static site served via GitHub Pages"
```

Expected output: `✓ Created repository supernovaca2/chrisgwim-links on GitHub` then a local/remote link line.

- [ ] **Step 2: Push to origin main**

```bash
git push -u origin main
```

Expected: objects pushed, tracking branch set.

- [ ] **Step 3: Verify repo exists**

```bash
gh repo view supernovaca2/chrisgwim-links --web
```

(Opens in browser — or omit `--web` to see it in terminal.)

---

## Task 7: Enable GitHub Pages with custom domain

- [ ] **Step 1: Enable Pages via API**

```bash
gh api --method POST repos/supernovaca2/chrisgwim-links/pages \
  -f source[branch]=main \
  -f source[path]=/
```

Expected: 201 Created response with Pages config JSON.

- [ ] **Step 2: Set custom domain via API**

```bash
gh api --method PUT repos/supernovaca2/chrisgwim-links/pages \
  -f cname=links.chrisgwim.com \
  -F https_enforced=true
```

Expected: 204 No Content (success, no body).

- [ ] **Step 3: Confirm Pages status**

```bash
gh api repos/supernovaca2/chrisgwim-links/pages
```

Expected JSON contains `"status": "building"` or `"built"`, and `"cname": "links.chrisgwim.com"`.

- [ ] **Step 4: Verify default GitHub Pages URL works first**

Wait 60–90 seconds, then open `https://supernovaca2.github.io/chrisgwim-links/` in a browser. Expected: the Cinematic Dark page renders correctly. (This confirms the build succeeded before DNS is in place. It may redirect to `links.chrisgwim.com` once DNS propagates — that's fine.)

If the page doesn't load, check build status:
```bash
gh api repos/supernovaca2/chrisgwim-links/pages/builds/latest
```

---

## Task 8: Hand off DNS instructions to Magnus

- [ ] **Step 1: Print the exact GoDaddy DNS record to add**

Show Magnus:

> **In GoDaddy DNS manager for `chrisgwim.com`, add ONE record:**
>
> - Type: **CNAME**
> - Name (host): **`links`**
> - Value (points to): **`supernovaca2.github.io`**
> - TTL: 1 hour (or default)
>
> Save. Wait 5–60 minutes for DNS to propagate.

Also note: GitHub may show a warning until DNS resolves. That's normal.

- [ ] **Step 2: Wait for Magnus to confirm DNS is added**

Do not proceed to verification until Magnus says it's done.

---

## Task 9: Verify live deployment

- [ ] **Step 1: Check DNS resolution**

```bash
nslookup links.chrisgwim.com
```

Expected: eventually resolves to a GitHub Pages IP (185.199.108.153 / .109.153 / .110.153 / .111.153) or CNAME to `supernovaca2.github.io`.

- [ ] **Step 2: Re-check Pages HTTPS status**

```bash
gh api repos/supernovaca2/chrisgwim-links/pages
```

Expected `"https_certificate"` object appears with `"state": "approved"` (may take up to ~15 min after DNS is live). If still pending, wait and retry.

- [ ] **Step 3: Open the live URL**

Visit `https://links.chrisgwim.com`. Expected: the Cinematic Dark page loads over HTTPS.

- [ ] **Step 4: Click-test the live site**

Same visual verification as Task 5, Step 2, now against the live site.

- [ ] **Step 5: Announce success**

Magnus: site is live at `https://links.chrisgwim.com`. Point him to `index.html` lines with `<!-- TODO -->` comments so he can drop in the real Spotify / Apple / SoundCloud / Deezer / TikTok URLs.

---

## Done

Site is live. To update links: edit `index.html`, commit, push. GitHub Pages redeploys automatically within ~60 seconds.
