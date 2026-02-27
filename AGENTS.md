# AGENTS.md

## Cursor Cloud specific instructions

This is a zero-dependency static web application (HTML + CSS + vanilla JS). There is no package manager, build step, linter, or test framework.

### Running the app

Serve the project root with any static HTTP server:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html` in Chrome.

- `index.html` — main (stable) app
- `index2.html` — beta version (adds PDF export via jsPDF CDN, photo overlay, example stats)

### Key caveats

- There are **no automated tests, no linter, and no build process** to run. Validation is done via manual browser testing.
- All application state lives in-memory JS variables; refreshing the page resets the game.
- The only external runtime dependency is Google Fonts (CDN); the app degrades gracefully without network access.
- `scorekeeper-master.zip` in the repo root is an unrelated archived project — ignore it.
- The `.nojekyll` file is for GitHub Pages deployment — do not remove it.
