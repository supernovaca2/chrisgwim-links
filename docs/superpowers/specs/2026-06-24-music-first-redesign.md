# chrisgwim-links — Music-First Redesign Spec

**Date:** 2026-06-24
**Owner:** Magnus (Chris Gwim)
**Goal:** Evolve the page from a pure link hub into a music-first one-page site — visitors *hear* the music on the page, browse the catalog, then link out. Keeps the galaxy aesthetic.

## Direction (approved)

"Plan A — music front-and-center": embedded player for the latest release + a discography grid, with platform links demoted to a secondary row.

## Layout (one scrolling page, galaxy backdrop throughout)

1. **Hero** — `Chris <em>Gwim</em>` wordmark + "Music Producer" tagline over the starfield/nebula. Keep a few **decorative orbit rings** behind the wordmark for the signature look (non-interactive — the orbit is retired as navigation). Compact height so section 2 peeks above the fold.
2. **Latest release** — embedded **Spotify** player (artist embed: `https://open.spotify.com/embed/artist/6ig7ktBEad43lWfaIGbVWj`). Plays inline; visitor never leaves the page. Section label highlights the newest drop (*Techno Blaster*).
3. **Discography** — responsive grid of the **9 singles**, newest first, each tile = real cover art + title, linking to that release. Covers downloaded into `covers/` from the Deezer CDN (500×500). Tiles link to the release (Deezer page for now — repointable to Spotify later).
4. **Listen everywhere** — the 5 platform links (Spotify, Apple Music, SoundCloud, YouTube, Deezer) as a clean icon row (desktop) / stacked pills (mobile). Brand-color accents retained.
5. **Footer** — `chrisgwim@chrisgwim.com`.

## Keep / carry over

- Starfield + nebula background spanning the full page; reduced-motion still disables animation.
- All SEO/social from the prior pass: canonical, OG (`og.png`), Twitter card, `MusicGroup` JSON-LD (extend with `track`/`album` if cheap), favicon + apple-touch-icon.
- Mobile-first: everything stacks; tap targets ≥44px; no horizontal clipping.

## Data sources (no auth)

- Discography + covers + release dates: Deezer public API (`api.deezer.com/artist/132090272/albums`).
- Player: Spotify artist embed (verified reachable). SoundCloud profile embed is a drop-in alternative if preferred.

## Out of scope (this release)

Bio, tour/shows, news, mailing list, merch — that's "Direction B (full artist site)", a later layer. Audio hosted by the page itself. Analytics.

## Success criteria

- Latest release plays inline on desktop + mobile without leaving the page.
- All 9 singles show with correct cover art, newest first, each opening its release.
- Platform links still reachable; page stays < ~1.5 MB; no console errors; reduced-motion respected.
- Deploys to `links.chrisgwim.com` (same repo/domain).
