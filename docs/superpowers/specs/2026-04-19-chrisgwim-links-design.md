# chrisgwim-links — Design Spec

**Date:** 2026-04-19
**Owner:** Magnus (Chris Gwim)
**Goal:** Free, premium-feeling link hub hosted on GitHub Pages at `links.chrisgwim.com`, sending fans to all music streaming and social platforms.

---

## 1. Overview

A single-page static site that acts as a central hub for Chris Gwim's music and social presence. Visitors land on a dark, cinematic page with the artist wordmark, a featured release card, and a vertical stack of platform links, ending with a contact email. No framework, no build step — plain HTML, CSS, and a tiny bit of JavaScript.

## 2. Tech & hosting

- **Stack:** HTML + CSS only for v1 (no JS needed — no tabs, no interactive state). Zero dependencies. Google Fonts via `<link>`. Inlined SVG icons.
- **Repo:** GitHub repo `chrisgwim-links` (public).
- **Hosting:** GitHub Pages, free tier, HTTPS enforced.
- **Domain:** `links.chrisgwim.com` via CNAME record in GoDaddy DNS pointing at `<username>.github.io`. Main `chrisgwim.com` site untouched.
- **Analytics:** Out of scope for v1. Can add Plausible or GoatCounter later.

## 3. Visual direction

- **Style:** Cinematic Dark.
- **Palette (Prism):**
  - Background: `#0a0a0a`
  - Gradient glow: radial blends of `#5078ff` (violet-blue), `#ff3cb4` (magenta), `#28dcf0` (cyan)
  - Primary CTA gradient: `linear-gradient(135deg, #ff3cb4, #28dcf0)`
  - Button surface: `rgba(255,255,255,0.04)` with `1px solid rgba(255,255,255,0.1)` border, `backdrop-filter: blur(10px)`
- **Typography:**
  - Wordmark "CHRIS GWIM" — thin weight (200), letter-spacing 7px, uppercase
  - Body — Inter (Google Fonts), system-ui fallback
- **Mood:** Glassmorphic buttons, glowing radial gradients, generous spacing, premium feel.

## 4. Page structure (top to bottom)

1. **Wordmark** — "CHRIS GWIM"
2. **Tagline** — "Musician" (small uppercase, low opacity)
3. **Release hero** — 1:1 aspect ratio card, prism gradient background, with "Latest Release" label and release title. Placeholder copy: `Music out now`.
4. **Link buttons** (vertical stack, full-width, in this order):
   - Spotify
   - Apple Music
   - SoundCloud
   - Deezer
   - TikTok
5. **Footer** — contact email: `chrisgwim@chrisgwim.com` as a `mailto:` link.

No tabs, no sections — single scroll. Each button opens its link in a new tab (`target="_blank" rel="noopener"`).

## 5. File layout

```
chrisgwim-links/
├── index.html          # Page markup
├── styles.css          # All styling
├── assets/
│   └── icons/          # Inlined SVGs referenced from HTML
├── CNAME               # Contains: links.chrisgwim.com
├── README.md           # How to edit links + deploy
└── .gitignore
```

No JavaScript file needed for v1 — the stacked layout has no tab logic to manage.

## 6. Link URLs (placeholders to replace)

All link `href` values start as `#` with a clear `<!-- TODO -->` comment. Magnus fills these in post-build:

| Button | Replace `#` with |
|---|---|
| Spotify | Spotify artist profile URL |
| Apple Music | Apple Music artist page URL |
| SoundCloud | SoundCloud profile URL |
| Deezer | Deezer artist page URL |
| TikTok | TikTok profile URL |

## 7. Responsive behavior

- Max content width: 400px, centered. Page feels native on mobile (where fans will mostly land from social bios).
- On desktop, the content column stays narrow — no stretched buttons. Large empty margins on either side, preserving the premium feel.
- Hero card, buttons, and footer all scale proportionally with viewport.

## 8. Accessibility

- Semantic HTML: `<h1>` for wordmark, `<a>` for every link.
- All buttons reachable by keyboard (Tab navigation).
- Sufficient contrast: white text on dark background meets WCAG AA.
- Icons paired with text labels (not icon-only), so screen readers announce the platform name.
- `aria-label` on the email link describing destination.

## 9. Deployment workflow

1. Create GitHub repo `chrisgwim-links`.
2. Push the 3 files + CNAME + README.
3. Enable GitHub Pages from the `main` branch / root in repo settings.
4. In GoDaddy DNS, add a `CNAME` record: host = `links`, points to `<username>.github.io`.
5. Wait for DNS propagation (5–60 min) and GitHub Pages HTTPS provisioning.
6. Site lives at `https://links.chrisgwim.com`.

## 10. Out of scope (for v1)

- Mailing list signup
- Merch / Bandcamp / Patreon / Ko-fi
- YouTube channel link
- Additional social platforms (Instagram, X, Facebook, Threads)
- Animations / motion
- Analytics
- Real artwork / photo of artist
- Smart-link aggregator ("Listen on all platforms" CTA removed for this version since the 5 platform buttons directly below cover the same function)

These can be added in a v2 pass once v1 ships.

## 11. Success criteria

- Page loads under 1s on mobile 4G.
- All 5 link buttons navigate to the correct platform in a new tab.
- Email button opens a mail client with `chrisgwim@chrisgwim.com` as recipient.
- Site reachable at `https://links.chrisgwim.com` with valid HTTPS.
- Visual match to the approved final mockup (prism gradient hero, glassmorphic buttons, thin letter-spaced wordmark).
