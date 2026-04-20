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
