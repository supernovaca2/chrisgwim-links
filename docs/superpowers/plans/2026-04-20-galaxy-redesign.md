# Galaxy Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current stacked Cinematic-Dark link page with an orbital/galaxy concept — content centered with 5 platform "planets" orbiting on concentric rings against a deep starfield with a nebula glow.

**Architecture:** Full rewrite of `index.html` and `styles.css`; add a small `script.js` for the load-time label intro, shooting-star scheduler, and reduced-motion toggle. No build step, no framework, no external deps beyond Google Fonts.

**Tech Stack:** HTML, CSS (radial gradients for starfield, `@keyframes` for orbits, CSS custom properties for responsive scale), vanilla JS (≤2KB), Google Fonts (Cormorant Garamond).

**Working directory:** `C:\Users\magnu\chrisgwim-links`

**Spec:** `docs/superpowers/specs/2026-04-20-galaxy-redesign-spec.md`

---

## File Structure Changes

```
chrisgwim-links/
├── index.html          # REPLACED — new orbital markup
├── styles.css          # REPLACED — cosmic theme + orbit animations
├── script.js           # NEW — label intro, shooting star, reduced-motion
├── README.md           # UPDATED — reflects new layout
├── CNAME               # unchanged
└── .gitignore          # unchanged
```

---

## Task 1: Rewrite index.html with orbital markup

**Files:**
- Modify (rewrite): `C:\Users\magnu\chrisgwim-links\index.html`

- [ ] **Step 1: Overwrite index.html**

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
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23050208'/></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="labels-intro">
  <div class="stars"></div>
  <div class="nebula"></div>
  <div class="shooting-star" id="shootingStar"></div>

  <main class="galaxy">
    <div class="center">
      <h1 class="wordmark">Chris <em>Gwim</em></h1>
      <p class="tagline">Musician</p>
      <span class="center-pinpoint" aria-hidden="true"></span>
    </div>

    <nav class="orbits" aria-label="Streaming and social platforms">
      <!-- Ring 1 — Spotify (innermost) -->
      <div class="ring ring-1" style="--radius: 90px;">
        <div class="orbit" style="--duration: 40s; --direction: normal;">
          <!-- TODO: replace href="#" with Spotify artist URL -->
          <a class="planet p-spotify" href="#" target="_blank" rel="noopener" aria-label="Listen on Spotify">
            <span class="planet-inner">
              <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 9.5c3.5-1 8-.5 11 1M7 13c3-.8 6.5-.3 9 1M7.5 16c2.5-.6 5-.2 7 .8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </span>
            <span class="label" aria-hidden="true">Spotify</span>
          </a>
        </div>
      </div>

      <!-- Ring 2 — Apple Music -->
      <div class="ring ring-2" style="--radius: 140px;">
        <div class="orbit" style="--duration: 55s; --direction: reverse; --delay: -12s;">
          <!-- TODO: replace href="#" with Apple Music artist URL -->
          <a class="planet p-apple" href="#" target="_blank" rel="noopener" aria-label="Listen on Apple Music">
            <span class="planet-inner">
              <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 4v11a3 3 0 1 1-3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10 17V7l6-1.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
            </span>
            <span class="label" aria-hidden="true">Apple Music</span>
          </a>
        </div>
      </div>

      <!-- Ring 3 — SoundCloud -->
      <div class="ring ring-3" style="--radius: 190px;">
        <div class="orbit" style="--duration: 70s; --direction: normal; --delay: -25s;">
          <!-- TODO: replace href="#" with SoundCloud profile URL -->
          <a class="planet p-soundcloud" href="#" target="_blank" rel="noopener" aria-label="Listen on SoundCloud">
            <span class="planet-inner">
              <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 15v-4M7 16v-7M10 17V9M13 17V7a4 4 0 0 1 7.5 2 3.5 3.5 0 0 1-.5 7H13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <span class="label" aria-hidden="true">SoundCloud</span>
          </a>
        </div>
      </div>

      <!-- Ring 4 — Deezer -->
      <div class="ring ring-4" style="--radius: 240px;">
        <div class="orbit" style="--duration: 85s; --direction: reverse; --delay: -40s;">
          <!-- TODO: replace href="#" with Deezer artist URL -->
          <a class="planet p-deezer" href="#" target="_blank" rel="noopener" aria-label="Listen on Deezer">
            <span class="planet-inner">
              <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="15" width="4" height="3" fill="currentColor"/><rect x="9" y="15" width="4" height="3" fill="currentColor"/><rect x="15" y="15" width="4" height="3" fill="currentColor"/><rect x="9" y="11" width="4" height="3" fill="currentColor"/><rect x="15" y="11" width="4" height="3" fill="currentColor"/><rect x="15" y="7" width="4" height="3" fill="currentColor"/></svg>
            </span>
            <span class="label" aria-hidden="true">Deezer</span>
          </a>
        </div>
      </div>

      <!-- Ring 5 — TikTok (outermost) -->
      <div class="ring ring-5" style="--radius: 290px;">
        <div class="orbit" style="--duration: 100s; --direction: normal; --delay: -60s;">
          <!-- TODO: replace href="#" with TikTok profile URL -->
          <a class="planet p-tiktok" href="#" target="_blank" rel="noopener" aria-label="Follow on TikTok">
            <span class="planet-inner">
              <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4a5 5 0 0 0 5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </span>
            <span class="label" aria-hidden="true">TikTok</span>
          </a>
        </div>
      </div>
    </nav>
  </main>

  <footer class="site-footer">
    <a class="email" href="mailto:chrisgwim@chrisgwim.com" aria-label="Email Chris Gwim">chrisgwim@chrisgwim.com</a>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd /c/Users/magnu/chrisgwim-links
git add index.html
git commit -m "feat(phase2): rewrite index.html with orbital markup"
```

---

## Task 2: Rewrite styles.css with cosmic theme + orbit animations

**Files:**
- Modify (rewrite): `C:\Users\magnu\chrisgwim-links\styles.css`

- [ ] **Step 1: Overwrite styles.css**

```css
/* ===== Tokens ===== */
:root {
  --bg-core: #050208;
  --bg-mid: #0a0514;
  --bg-outer: #12091f;
  --fg: #ffffff;
  --muted: rgba(255, 255, 255, 0.5);
  --violet: #b478ff;
  --magenta: #ff3cb4;
  --cyan: #28dcf0;
  --accent-type: #e8d4ff;
  --scale: 1;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: var(--bg-core);
  color: var(--fg);
  font-family: 'Cormorant Garamond', Georgia, serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

body {
  position: relative;
  background:
    radial-gradient(ellipse at center, var(--bg-outer) 0%, var(--bg-mid) 40%, var(--bg-core) 75%, #000 100%);
  min-height: 100vh;
  overflow: hidden;
}

/* ===== Starfield (3 layers of radial-gradients) ===== */
.stars {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.8), transparent 40%),
    radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.5), transparent 40%),
    radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.9), transparent 40%),
    radial-gradient(2px 2px at 90px 40px, rgba(255,255,255,0.7), transparent 40%),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.4), transparent 40%),
    radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.8), transparent 40%),
    radial-gradient(1px 1px at 180px 200px, rgba(255,255,255,0.6), transparent 40%),
    radial-gradient(1px 1px at 210px 60px, rgba(255,255,255,0.9), transparent 40%),
    radial-gradient(1px 1px at 240px 140px, rgba(255,255,255,0.5), transparent 40%),
    radial-gradient(1.5px 1.5px at 60px 220px, rgba(255,255,255,0.8), transparent 40%),
    radial-gradient(1px 1px at 100px 280px, rgba(255,255,255,0.6), transparent 40%),
    radial-gradient(1px 1px at 170px 320px, rgba(255,255,255,0.4), transparent 40%),
    radial-gradient(2px 2px at 200px 380px, rgba(255,255,255,0.9), transparent 40%),
    radial-gradient(1px 1px at 30px 400px, rgba(255,255,255,0.5), transparent 40%),
    radial-gradient(1px 1px at 220px 450px, rgba(255,255,255,0.7), transparent 40%);
  background-repeat: repeat;
  background-size: 260px 500px, 360px 600px, 500px 800px;
}

/* ===== Nebula glow (breathing) ===== */
.nebula {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 900px;
  height: 700px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  background:
    radial-gradient(ellipse 60% 40% at 50% 50%,
      rgba(180, 120, 255, 0.45) 0%,
      rgba(255, 80, 180, 0.2) 40%,
      transparent 70%);
  filter: blur(20px);
  animation: breathe 8s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.85; }
  50%      { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
}

/* ===== Galaxy layout ===== */
.galaxy {
  position: relative;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center {
  position: relative;
  z-index: 5;
  text-align: center;
  padding: 16px;
}

.wordmark {
  margin: 0;
  font-weight: 300;
  font-size: clamp(44px, 6vw, 72px);
  letter-spacing: 0.04em;
  line-height: 1;
  color: var(--fg);
}

.wordmark em {
  font-style: italic;
  font-weight: 400;
  color: var(--accent-type);
}

.tagline {
  margin: 12px 0 0;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--muted);
}

.center-pinpoint {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--fg);
  margin: 14px auto 0;
  box-shadow: 0 0 8px var(--fg), 0 0 16px rgba(232, 212, 255, 0.6);
}

/* ===== Orbital system ===== */
.orbits {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring {
  position: absolute;
  width: calc(var(--radius) * 2 * var(--scale));
  height: calc(var(--radius) * 2 * var(--scale));
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.ring-1 { border-color: rgba(180, 120, 255, 0.22); }
.ring-2 { border-color: rgba(255, 100, 200, 0.18); }
.ring-3 { border-color: rgba(100, 200, 255, 0.14); }
.ring-4 { border-color: rgba(255, 255, 255, 0.1); }
.ring-5 { border-style: dashed; border-color: rgba(255, 255, 255, 0.08); }

/* The orbit wrapper rotates; the planet counter-rotates to stay upright */
.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--radius) * 2 * var(--scale));
  height: calc(var(--radius) * 2 * var(--scale));
  transform: translate(-50%, -50%);
  animation: orbit var(--duration) linear infinite;
  animation-direction: var(--direction, normal);
  animation-delay: var(--delay, 0s);
  pointer-events: none;
}

@keyframes orbit {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes planet-counter {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}

.planet {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--fg);
  pointer-events: auto;
  cursor: pointer;
  animation: planet-counter var(--duration) linear infinite;
  animation-direction: var(--direction, normal);
  animation-delay: var(--delay, 0s);
  transition: transform 0.2s ease;
}

.planet-inner {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(20, 10, 40, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.planet .ico { width: 22px; height: 22px; }

/* Per-platform brand-color glow */
.p-spotify    .planet-inner { box-shadow: 0 0 16px rgba(29, 185, 84, 0.55); }
.p-apple      .planet-inner { box-shadow: 0 0 16px rgba(255, 80, 120, 0.55); }
.p-soundcloud .planet-inner { box-shadow: 0 0 16px rgba(255, 112, 0, 0.55); }
.p-deezer     .planet-inner { box-shadow: 0 0 16px rgba(162, 56, 255, 0.55); }
.p-tiktok     .planet-inner { box-shadow: 0 0 16px rgba(37, 244, 238, 0.55); }

.planet:hover .planet-inner,
.planet:focus-visible .planet-inner {
  transform: scale(1.15);
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.8);
}

.planet:focus-visible { outline: none; }
.planet:focus-visible .planet-inner {
  border-color: var(--fg);
}

/* ===== Labels ===== */
.label {
  position: absolute;
  top: 50%;
  left: calc(100% + 10px);
  transform: translateY(-50%);
  white-space: nowrap;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(10, 5, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--fg);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

.planet:hover .label,
.planet:focus-visible .label {
  opacity: 1;
}

/* Intro state: first 3s all labels are visible */
body.labels-intro .label {
  opacity: 1;
  transition: opacity 0.4s ease;
}

body.labels-intro.labels-intro-hide .label {
  opacity: 0;
}

/* ===== Shooting star ===== */
.shooting-star {
  position: fixed;
  top: var(--start-y, -10%);
  left: var(--start-x, -10%);
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 8px #fff, 0 0 20px rgba(255,255,255,0.6);
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

.shooting-star.flash {
  animation: shoot 1.6s ease-out forwards;
}

@keyframes shoot {
  0%   { opacity: 0; transform: translate(0, 0); }
  10%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { opacity: 0; transform: translate(var(--dx, 600px), var(--dy, 400px)); }
}

/* ===== Footer ===== */
.site-footer {
  position: fixed;
  bottom: 24px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 5;
}

.email {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.email:hover { color: var(--fg); }

/* ===== Responsive ===== */
@media (max-width: 900px) {
  :root { --scale: 0.85; }
}

@media (max-width: 600px) {
  :root { --scale: 0.62; }
  .nebula { width: 600px; height: 500px; }
}

@media (max-width: 360px) {
  :root { --scale: 0.55; }
}

@media (max-height: 600px) {
  :root { --scale: 0.55; }
}

/* ===== Reduced motion ===== */
@media (prefers-reduced-motion: reduce) {
  .nebula,
  .orbit,
  .planet,
  .shooting-star {
    animation: none !important;
  }
  .label {
    opacity: 1 !important;
    position: static;
    transform: none;
    display: inline-block;
    margin-top: 6px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add styles.css
git commit -m "feat(phase2): cosmic theme, orbit animations, nebula, responsive"
```

---

## Task 3: Create script.js for label intro, shooting star, reduced-motion

**Files:**
- Create: `C:\Users\magnu\chrisgwim-links\script.js`

- [ ] **Step 1: Write script.js**

```js
// Galaxy page JS — label intro timer, shooting-star loop, reduced-motion respect.
(() => {
  const body = document.body;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Label intro: show labels for 3s on load, then fade to icon-only ---
  if (!prefersReducedMotion) {
    setTimeout(() => {
      body.classList.add('labels-intro-hide');
    }, 3000);

    setTimeout(() => {
      body.classList.remove('labels-intro', 'labels-intro-hide');
    }, 3500);
  }
  // Reduced-motion path: CSS keeps labels visible; no class changes needed.

  // --- Shooting star: fire every 15-25s at a random angle ---
  if (prefersReducedMotion) return;

  const star = document.getElementById('shootingStar');
  if (!star) return;

  const fire = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const startX = Math.random() * vw;
    const startY = Math.random() * (vh * 0.5);
    const dx = (Math.random() * 500 + 400) * (Math.random() < 0.5 ? -1 : 1);
    const dy = Math.random() * 300 + 200;

    star.style.setProperty('--start-x', `${startX}px`);
    star.style.setProperty('--start-y', `${startY}px`);
    star.style.setProperty('--dx', `${dx}px`);
    star.style.setProperty('--dy', `${dy}px`);

    star.classList.remove('flash');
    void star.offsetWidth; // force reflow so animation restarts
    star.classList.add('flash');
  };

  // First shooting star after 8s, then every 15-25s.
  setTimeout(function loop() {
    fire();
    setTimeout(loop, 15000 + Math.random() * 10000);
  }, 8000);
})();
```

- [ ] **Step 2: Commit**

```bash
git add script.js
git commit -m "feat(phase2): add JS for label intro timer and shooting-star loop"
```

---

## Task 4: Update README.md for new layout

**Files:**
- Modify (rewrite): `C:\Users\magnu\chrisgwim-links\README.md`

- [ ] **Step 1: Overwrite README.md**

```markdown
# chrisgwim-links

Static galaxy-themed link hub for Chris Gwim. Hosted on GitHub Pages at https://links.chrisgwim.com.

## Design

Orbital interface: wordmark at center, 5 platform icons orbiting on concentric rings against a starfield. See `docs/superpowers/specs/` for design details.

## Editing links

Open `index.html` and find the five `<!-- TODO -->` comments. Each marks an anchor tag whose `href="#"` should be replaced with the real artist URL:

- Spotify artist profile
- Apple Music artist page
- SoundCloud profile
- Deezer artist page
- TikTok profile

Commit and push — GitHub Pages auto-deploys from `main`.

## Tuning the galaxy

- **Orbit speeds / radii:** `index.html` — each `.ring` has `--radius`; each `.orbit` has `--duration`, `--direction`, `--delay`.
- **Colors:** `styles.css` — `:root` custom properties (`--violet`, `--magenta`, `--cyan`, `--accent-type`).
- **Nebula size:** `styles.css` — `.nebula { width, height }`.

## Local preview

Open `index.html` directly, or serve the directory:

```powershell
python -m http.server 8080
```

Then visit http://localhost:8080.

## Deploying

Pushes to `main` auto-deploy via GitHub Pages in ~30 seconds.
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: update README for galaxy layout"
```

---

## Task 5: Visual verification in browser

- [ ] **Step 1: Open index.html in default browser**

```bash
cd /c/Users/magnu/chrisgwim-links
start "" "index.html"
```

- [ ] **Step 2: Verify initial load (first 3 seconds)**

Expected:
- Deep purple-black background with a subtle starfield visible across viewport
- Soft violet-magenta nebula glow centered behind the wordmark, pulsating slowly
- "Chris *Gwim*" in elegant serif at the exact center of the viewport, italic "Gwim" in a pale violet tint
- "MUSICIAN" small uppercase tagline below
- Small white pinpoint dot below the tagline
- 5 concentric faint rings visible around center
- 5 platform icons (Spotify, Apple Music, SoundCloud, Deezer, TikTok) sitting on the rings
- **All 5 labels visible as pills next to each planet** (this is the 3-second intro)
- Email link at bottom center of viewport

- [ ] **Step 3: Verify post-intro state (after ~4 seconds)**

- All 5 labels have faded out
- Planets remain visible
- Rings rotate slowly — inner rings faster than outer rings, alternating directions

- [ ] **Step 4: Verify hover interaction**

- Hovering any planet on desktop: that planet's label re-appears within 200ms, planet grows slightly and gets a white glow ring

- [ ] **Step 5: Verify keyboard navigation**

- Press Tab: focus ring appears on first planet (Spotify); label appears
- Press Tab again: focus moves through all 5 planets in inner-to-outer order
- Press Enter on focused planet: navigates (will try `#` so stays on page)

- [ ] **Step 6: Verify shooting star**

- Watch for ~25 seconds — a faint white streak should cross the page at least once, diagonally

- [ ] **Step 7: Verify responsive mobile**

- Open DevTools, toggle device to iPhone / 375px viewport
- Expected: orbits scale down, all 5 planets still fit inside the viewport, center typography scales down, footer email visible
- No horizontal scroll

- [ ] **Step 8: Verify reduced-motion**

- In DevTools → Rendering → "Emulate CSS prefers-reduced-motion: reduce", toggle on
- Refresh page
- Expected: no rotation anywhere, no nebula breathing, no shooting stars, all 5 labels always visible (static)

- [ ] **Step 9: If any issues, fix inline and commit with `fix:` prefix**

If something isn't right, edit the relevant file, re-verify, commit. Otherwise skip.

---

## Task 6: Push and verify live deployment

- [ ] **Step 1: Push to origin**

```bash
cd /c/Users/magnu/chrisgwim-links
git push
```

Expected: push succeeds, GitHub Pages build queued.

- [ ] **Step 2: Wait for Pages to build (~45 seconds)**

```bash
gh api repos/supernovaca2/chrisgwim-links/pages/builds/latest --jq '{status: .status, sha: .commit[0:7], created: .created_at, error: .error.message}'
```

Wait until `status` = `"built"` and `sha` matches the latest local HEAD commit.

- [ ] **Step 3: Verify live site**

```bash
curl -sI https://links.chrisgwim.com/ | head -3
```

Expected: `HTTP/1.1 200 OK`.

- [ ] **Step 4: Open the live site in browser**

```bash
start "" "https://links.chrisgwim.com"
```

Repeat the visual checks from Task 5 Steps 2–4 against the live site.

- [ ] **Step 5: Report live**

Tell Magnus: new galaxy design is live at https://links.chrisgwim.com. Next step for him is filling in the 5 real platform URLs in `index.html` (same TODO pattern as Phase 1).

---

## Done

Galaxy redesign live. Same deployment flow for future edits: edit files → commit → push → auto-deploys in ~30s.
