# CLAUDE.md — Lunes de UNO

## Proyecto

Scoretracker estático para partidas de UNO de un grupo de amigos. GitHub Pages, sin build step, sin npm.

- `index.html` — app principal del juego. **NO TOCAR.**
- `propuestas.html` — galería de tarjetas meme con stats reales. Aquí van las propuestas.
- Sólo modificar `propuestas.html`. Nunca otras páginas.
- Rama de trabajo: `claude/adoring-pascal-URFdF`

---

## Tarea horaria: implementar propuestas de usuarios

### PASO 1 — Consultar Firestore (ir DIRECTO, sin explorar el repo)

```bash
curl -s "https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents:runQuery?key=AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM" \
  -X POST -H "Content-Type: application/json" \
  -d '{"structuredQuery":{"from":[{"collectionId":"Propuestas"}],"where":{"fieldFilter":{"field":{"fieldPath":"integracion"},"op":"EQUAL","value":{"nullValue":"NULL_VALUE"}}},"orderBy":[{"field":{"fieldPath":"createdAt"},"direction":"ASCENDING"}]}}'
```

Cada documento tiene:
- `name`: `projects/lunesdeuno/databases/(default)/documents/Propuestas/DOCID`
- `fields.texto.stringValue`: texto libre del usuario
- `fields.integracion.nullValue`: "NULL_VALUE" = pendiente de implementar

Si el array de respuesta NO contiene ningún objeto con clave `"document"` → **no hacer nada, salir**.

---

### PASO 2 — Implementar cada propuesta en `propuestas.html`

**Punto de inserción exacto:** buscar la línea `};` que cierra `window._modUsuarios` (es la última `};` antes del comentario `// DRAWS:USUARIOS:END`). Insertar el nuevo `registerIdea(...)` **ANTES** de esa `};`.

**Estructura obligatoria:**

```javascript
  // ---------- PROPUESTA: TÍTULO EN MAYÚSCULAS ----------
  // Propuesta Firestore ID: DOCID
  registerIdea({
    id: 'slug-kebab-unico',   // único globalmente, ej: 'prop-tipo-abc12345' (usar 8 chars del DOCID)
    module: 'usuarios',
    title: '🔥 Título Visible',
    desc: 'Descripción de 1-2 frases de qué muestra la tarjeta.',
    pick: function(ctx) {
      // Datos reales. Opciones útiles:
      //   ctx.annualRanking()              → [{id,name,W,L,gamesPlayed,winRate}] mejor→peor
      //   ctx.ALL_STATS[id]               → stats completos por jugador
      //   ctx.NAME_BY_ID                  → {id: nombre}
      //   Devuelve: { protagonist:{id,name}, rival:{id,name}, facts:{...} }
    },
    copies: { nachi: [
      // 3-4 variantes. Placeholders: {protagonist}, {rival}, cualquier key de facts.
      // Tono: sarcástico, bullying, humor negro, sin filtro. Que duela (con cariño).
    ]},
    draw: async function(canvas, opts) {
      // STATE.you y STATE.rival ya están seteados por withPicked() antes de llamar a draw.
      // Helpers disponibles (globals):
      //   gradBG(ctx, w, h, color1, color2)          — fondo degradado
      //   footer(ctx, w, h)                           — pie "🎴 lunes de uno"
      //   wrapText(ctx, text, x, y, maxW, lineH)      — texto multilinea
      //   roundRect(ctx, x, y, w, h, radius)          — path de rectángulo redondeado
      //   drawFaceCircle(ctx, img, cx, cy, radius)    — cara circular con borde blanco
      //   loadFace(id) → Promise<Image>               — carga assets/faces/{id}.png
      //   ALL_STATS, annualRanking(), currentSeasonPointsRanking(), computeAnnualPoints()
      // Canvas: preview 540×675 | full size 1080×1350. Siempre llamar footer() al final.
      const ctx = canvas.getContext('2d');
      const w = canvas.width, h = canvas.height;
      // ... implementación ...
      footer(ctx, w, h);
    }
  });
```

**Jugadores (IDs/slugs):** `pt`, `mac`, `mata`, `gael`, `nachi`, `carucha`, `negro`, `naso`, `tano`, `gordo`, `cobra`

**IDs prohibidos** (eliminados a propósito, NO re-usar):
`mas-fechas`, `oda-campeon`, `ansiedad-segundo`, `mata-patriarcado`

**Dirección creativa:**
- Fondos oscuros con degradados, bordes de colores, caras de jugadores, emojis decorativos
- Cada tarjeta debe tener un estilo visual distinto: llamas, póster de buscado, certificado, neon, NFT, etc.
- Usar stats reales: victorias, derrotas, rachas, H2H, winrate, puntaje acumulado
- Los mensajes de copia (nachi) deben ser graciosos, con bullying, sin piedad pero sin malicia real

---

### PASO 3 — Marcar como implementada en Firestore

```bash
curl -s -X PATCH \
  "https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents/Propuestas/DOCID?updateMask.fieldPaths=integracion&key=AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM" \
  -H "Content-Type: application/json" \
  -d '{"fields":{"integracion":{"stringValue":"IDEA_ID"}}}'
```

---

### PASO 4 — Commit y push

```bash
git add propuestas.html
git commit -m "Implementar propuesta: [título] ([id])"
git push -u origin claude/adoring-pascal-URFdF
```

---

## Firebase

```
projectId : lunesdeuno
apiKey    : AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM
```

## Colecciones Firestore usadas

| Colección | Propósito |
|---|---|
| `games` | Partidas terminadas (fuente de stats) |
| `Propuestas` | Pedidos de los usuarios |
| `propuestasVisuales` | Registro de visibilidad de tarjetas |
