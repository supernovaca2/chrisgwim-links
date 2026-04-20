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
