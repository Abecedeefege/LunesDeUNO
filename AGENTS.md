# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Lunes de UNO is a purely static client-side UNO score tracker web app. There is no build system, no package manager, no backend, no database, and no automated tests. The entire application is self-contained in two HTML files with inline CSS and JS.

### Key files

- `index.html` — Main/stable version of the app (~1260 lines, single self-contained HTML file)
- `index2.html` — Beta version with PDF export, photo sharing, and statistics (~1560 lines)
- `assets/uno-plus4.png` — Card image asset used by `index.html`

### Running the app locally

Serve the workspace root with any static HTTP server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html` (stable) or `http://localhost:8080/index2.html` (beta) in a browser.

### Linting / Testing / Building

- **No linter** is configured. The project uses vanilla HTML/CSS/JS with no tooling.
- **No automated tests** exist.
- **No build step** is required — the HTML files are served directly.
- Manual testing is done by interacting with the app in a browser: set up a game with players, add scores, and verify the UI.

### External CDN dependencies (optional)

- Google Fonts (`fonts.googleapis.com`) — loads Fredoka One and Inter; falls back to system fonts
- jsPDF (`cdnjs.cloudflare.com`) — PDF export in `index2.html` beta only
