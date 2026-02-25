# Lunes de UNO

Contador de puntos para partidas de UNO. Score tracker con soporte ES/EN.

## Deploy gratis (GitHub Pages)

Tu sitio es estático (un solo `index.html`), así que puedes publicarlo gratis en **GitHub Pages**:

1. Sube los cambios a GitHub (si aún no lo hiciste):
   ```bash
   git add index.html .nojekyll README.md
   git commit -m "Add GitHub Pages support"
   git push origin main
   ```

2. En GitHub: abre el repo **LunesDeUNO** → **Settings** → **Pages**.

3. En **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / **Folder**: `/ (root)`
   - Guarda (Save).

4. En 1–2 minutos el sitio estará en:
   - **https://\<tu-usuario\>.github.io/LunesDeUNO/**

No hace falta build ni configuración extra; con eso queda publicado.

---

## Alternativas gratuitas

- **Netlify**: [netlify.com](https://www.netlify.com) → arrastra la carpeta del proyecto o conecta el repo.
- **Vercel**: [vercel.com](https://vercel.com) → importa el repo de GitHub.
- **Cloudflare Pages**: [pages.cloudflare.com](https://pages.cloudflare.com) → conecta el repo.

Todas sirven bien un `index.html` estático como este.
