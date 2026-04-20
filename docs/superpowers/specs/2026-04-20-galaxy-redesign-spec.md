# chrisgwim-links — Galaxy Redesign Spec (Phase 2)

**Date:** 2026-04-20
**Owner:** Magnus (Chris Gwim)
**Goal:** Replace the current stacked Cinematic-Dark link page with an orbital/galaxy concept: content centered, 5 platform icons orbiting the center as "planets," all framed in a deep starfield with a soft nebula glow — inspired by lunthra.com's editorial cosmic hero.

---

## 1. Concept

A full-viewport dark cosmic canvas. At the exact center: artist wordmark in an elegant serif display type with an italic accent. Surrounding the center: 5 concentric orbit rings, each carrying one platform icon (Spotify, Apple Music, SoundCloud, Deezer, TikTok) as a clickable "planet." The galaxy *is* the interface.

**Inspiration:** lunthra.com's "Nothing *to* prove." hero — dark starfield, elegant serif with italic accent, centered typographic composition.

**Brand tone:** editorial, cinematic, a little mysterious. Space is the silence; music is the gravity.

## 2. Tech & hosting

- Unchanged from Phase 1: GitHub Pages, custom domain `links.chrisgwim.com`, HTTPS enforced.
- Stack: HTML + CSS + one small JS file.
- JS is used only for: label auto-hide on page load, shooting-star timer, and reduced-motion overrides. No framework, no build step.
- Google Fonts: **Cormorant Garamond** (serif, display) replaces Inter.
- Zero third-party dependencies.

## 3. Canvas & background

- **Base:** `background: radial-gradient(ellipse at center, #12091f 0%, #04020a 70%, #000 100%);` covering the entire viewport.
- **Starfield:** three CSS layers of multi-size stars rendered via `background-image: radial-gradient(...)` repeating patterns. Star sizes 1px/1.5px/2px at opacities 0.4–0.9. Each layer uses a different `background-size` to create parallax-like depth without JS.
- **Nebula glow:** soft violet-magenta radial ellipse centered behind the wordmark:
  `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(180,120,255,0.45) 0%, rgba(255,80,180,0.2) 40%, transparent 70%)`
  Animated via an 8-second `@keyframes` loop that scales between 0.95 and 1.05 (subtle breathing).
- **Shooting star:** a 2×1px white highlight element animated across the canvas every ~20 seconds at a random angle via JS-set CSS custom properties. Single element, reused.

## 4. Center (anchor)

- **Wordmark:** `<h1>Chris <em>Gwim</em></h1>`.
  - Font: Cormorant Garamond, weight 300.
  - Size: clamp(44px, 6vw, 72px).
  - Letter-spacing: 0.04em.
  - `<em>` is italic, weight 400, slightly tinted `#e8d4ff` (pale violet) — the lunthra italic-accent move.
- **Tagline:** `<p class="tagline">MUSICIAN</p>`.
  - Sans-serif system UI, 11px, uppercase, letter-spacing 4px, opacity 0.5.
- **Center pinpoint:** a 4×4px white dot with glow (box-shadow bloom) sits directly beneath the tagline, marking the "center of mass" of the system. Purely decorative.
- **No CTAs in center.** The only interactive elements are the orbiting planets.

## 5. Orbital system

- **5 rings, 5 planets**, mapped innermost → outermost:
  1. Spotify — radius 90px
  2. Apple Music — radius 140px
  3. SoundCloud — radius 190px
  4. Deezer — radius 240px
  5. TikTok — radius 290px
- **Ring styling:**
  - 1px border, colors vary: rgba(180,120,255,0.2) / rgba(255,100,200,0.18) / rgba(100,200,255,0.15) / rgba(255,255,255,0.12) / rgba(255,255,255,0.08) dashed.
  - Rings are purely visual; not clickable.
- **Planet visuals:**
  - 44×44px circular buttons (meets mobile tap-target guidelines).
  - Background: semi-transparent dark (`rgba(20,10,40,0.7)`) with `backdrop-filter: blur(6px)`.
  - Outer glow in the platform's brand color (Spotify green, Apple red-pink, SoundCloud orange, Deezer gradient pink-violet, TikTok cyan) via `box-shadow`.
  - Inside: white SVG icon (22×22), inherited from Phase 1.
- **Rotation:**
  - Each ring rotates via CSS `@keyframes` + `animation: orbit-<n> Xs linear infinite`.
  - Durations: ring 1 = 40s, ring 2 = 55s (reverse), ring 3 = 70s, ring 4 = 85s (reverse), ring 5 = 100s.
  - Starting angles staggered so planets don't align on any axis (`animation-delay`).
  - Implemented by wrapping each planet in a container that rotates; counter-rotating the planet itself so the icon stays upright.
- **Label reveal (mechanics):**
  - Each planet has a label pill (small rounded rectangle with platform name, e.g., "Spotify") absolutely positioned adjacent to the planet.
  - **On page load:** all 5 labels are visible for 3000ms, then fade to opacity 0 over 400ms. Controlled by a single CSS class `labels-intro` on the `<body>` that is removed by JS after the timeout.
  - **On hover (desktop, pointer: fine):** the hovered planet's label fades in (opacity 0→1) over 150ms.
  - **On focus (keyboard Tab):** same as hover, plus a 2px focus ring on the planet.
  - **On tap (mobile, pointer: coarse):** tap navigates immediately. Because the intro showed labels for 3 seconds, users have already seen which icon is which.
- **Click behavior:** each planet is an `<a href="..." target="_blank" rel="noopener">`. Clicking anywhere on the orb navigates to the platform in a new tab. Planet URLs use `#` placeholders with `<!-- TODO -->` comments (replaced by Magnus post-build, same pattern as Phase 1).

## 6. Footer

- `chrisgwim@chrisgwim.com` as a `mailto:` text link.
- Fixed to the bottom-center of the viewport, 24px from bottom edge.
- Styling: 11px, letter-spacing 1px, opacity 0.4, hover opacity 1.
- Z-index higher than orbits so it's always reachable.

## 7. Responsive breakpoints

| Viewport | Orbit diameters (outermost) | Center type clamp | Notes |
|---|---|---|---|
| ≥900px | 580px | 72px | Full spacing |
| 600–900px | 500px | 58px | Orbit radii scaled via CSS `scale` |
| <600px | 360px | 44px | Orbits tight; outermost may bleed past screen edge — intentional |
| <360px (edge) | 320px | 40px | Minimum viable |

- Use a single CSS custom property `--scale` that adjusts orbit sizes proportionally at each breakpoint; planet sizes remain 44px everywhere.
- Minimum viewport height 600px; below that (rare — pinned mobile keyboards etc.), content falls back to vertical stacking via a height-based media query.

## 8. Accessibility

- Semantic HTML: `<h1>` wordmark, `<nav>` for orbital container, `<a>` for each planet.
- `aria-label` on each planet describing destination: `"Listen on Spotify"`, etc.
- Keyboard navigation: Tab cycles through the 5 planets in innermost-to-outermost order; visible focus ring on focused planet.
- `prefers-reduced-motion: reduce` media query disables: orbital rotation, nebula breathing, shooting-star animation. Labels remain persistent (no auto-fade) when reduced motion is requested, so static users always see the names.
- Color contrast: white icons on dark planet backgrounds pass WCAG AA.
- Meta description unchanged from Phase 1.

## 9. Performance targets

- Single HTML file, single CSS file, single small JS file (≤2KB).
- Page weight target: < 50KB total (excl. Google Fonts).
- First paint < 500ms on 4G mobile.
- No animation frames wasted when tab is backgrounded (CSS animations handle this automatically).

## 10. File layout changes

```
chrisgwim-links/
├── index.html          # Replaced: new orbital markup
├── styles.css          # Replaced: cosmic theme + orbital animation
├── script.js           # NEW: label intro timer + shooting-star loop + reduced-motion toggle
├── CNAME               # Unchanged
├── README.md           # Updated: reflects new layout
└── (no other file changes)
```

## 11. Link URLs

Same as Phase 1 — all 5 links remain `href="#"` placeholders with `<!-- TODO -->` comments. Magnus fills them in whenever ready. This is a design swap, not a content change.

## 12. Out of scope

- Release-artwork hero (dropped — the galaxy IS the hero).
- Mailing list signup.
- Any additional platforms beyond the 5.
- A light-mode theme.
- Audio playback on the page.
- "Enter" transition/intro animation sequence — optional later polish; v2-phase-2 ships with the orbits spinning immediately on page load.
- Analytics.

## 13. Success criteria

- Orbital system renders on desktop, tablet, and mobile with planets tappable and rings rotating.
- Planet labels show for 3s on load, hide, re-appear on hover/focus/tap.
- Clicking any planet opens the platform URL in a new tab.
- `prefers-reduced-motion` disables all motion; labels stay visible.
- Keyboard Tab navigation reaches all 5 planets in order with visible focus.
- Page weight under 50KB (excluding font download).
- HTTPS-live deploy at `links.chrisgwim.com` with the new design.
