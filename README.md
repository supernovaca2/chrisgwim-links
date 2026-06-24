# chrisgwim-links

Music-first, galaxy-themed one-page site for Chris Gwim. Hosted on GitHub Pages at https://links.chrisgwim.com.

## Layout

A single scrolling page over a starfield/nebula backdrop:

1. **Hero** — `Chris Gwim` wordmark with decorative orbit rings.
2. **Latest release** — embedded Spotify player (plays inline).
3. **Discography** — grid of singles with cover art; each tile opens that release.
4. **Listen everywhere** — Spotify, Apple Music, SoundCloud, YouTube, Deezer.
5. **Footer** — contact email.

See `docs/superpowers/specs/` for design history.

## Editing content

- **Player:** the `<iframe class="player">` in `index.html`. Swap the `src` to feature a specific Spotify album/track, or a SoundCloud embed.
- **Discography:** each release is an `<a class="cover">` in the `.grid`. Cover images live in `covers/` (500×500 JPGs). Newest first; the first tile carries the `is-latest` class + `Latest` badge.
- **Platform links:** the `.platform-row` anchors; the JSON-LD `sameAs` list (incl. Amazon + Tidal) feeds search engines — keep it in sync.

### Refreshing the discography from the catalog

Cover art and release order come from the Deezer public API
(`https://api.deezer.com/artist/132090272/albums`). To refresh, re-download the
500×500 covers into `covers/` and update the `.grid` tiles + JSON-LD `album` list.

## Social share card (og.png)

`og.png` (1200×630) is the link preview. Source: `og-card.html`. App icon source: `icon-180.html`.
Regenerate by rendering each at its native size and screenshotting.

## Local preview

```powershell
python -m http.server 8080
```

Then visit http://localhost:8080.

## Deploying

Pushes to `main` auto-deploy via GitHub Pages in ~30–60 seconds.
