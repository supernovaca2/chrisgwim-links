# chrisgwim-links

Static galaxy-themed link hub for Chris Gwim. Hosted on GitHub Pages at https://links.chrisgwim.com.

## Design

Orbital interface: wordmark at center, platform icons orbiting on concentric rings against a starfield.
On phones (≤600px) the orbits collapse into a tappable vertical list of labeled buttons — the reliable
link-in-bio pattern — while keeping the cosmic backdrop. See `docs/superpowers/specs/` for design details.

## Platform links

The five orbiting planets link to Chris Gwim's verified artist profiles (set in `index.html`):

| Planet (inner→outer) | Destination |
|---|---|
| Spotify | https://open.spotify.com/artist/6ig7ktBEad43lWfaIGbVWj |
| Apple Music | https://music.apple.com/us/artist/chris-gwim/1874278935 |
| SoundCloud | https://soundcloud.com/chrisgwim |
| YouTube | https://www.youtube.com/channel/UCmEy0B-IqiFATgSFhqSoFFA |
| Deezer | https://www.deezer.com/us/artist/132090272 |

To change a link, edit the matching `<a class="planet …" href="…">` in `index.html`. The full `sameAs`
list in the JSON-LD block (also Amazon Music + Tidal) feeds search engines — update it there too.

## Tuning the galaxy

- **Orbit speeds / radii:** `index.html` — each `.ring` has `--radius`; each `.orbit` has `--duration`, `--direction`, `--delay`.
- **Colors:** `styles.css` — `:root` custom properties (`--violet`, `--magenta`, `--cyan`, `--accent-type`).
- **Nebula size:** `styles.css` — `.nebula { width, height }`.
- **Desktop:** hovering a planet pauses its orbit so the moving icon is easy to click.

## Social share card (og.png)

`og.png` (1200×630) is the preview image shown when the link is shared. It's rendered from `og-card.html`.
To regenerate: serve the folder, open `og-card.html` at a 1200×630 viewport, and screenshot to `og.png`.

## Local preview

Open `index.html` directly, or serve the directory:

```powershell
python -m http.server 8080
```

Then visit http://localhost:8080.

## Deploying

Pushes to `main` auto-deploy via GitHub Pages in ~30 seconds.
