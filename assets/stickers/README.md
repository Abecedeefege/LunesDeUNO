# Stickers para `/tv90s`

Esta carpeta contiene los PNGs que se renderizan como stickers pegados al
bezel de la TV en `tv90s.html`. La página los descubre por el array
`STICKERS` declarado al final del `<script type="module">` de `tv90s.html`.

## Cómo agregar un sticker

1. Dropear un PNG en esta carpeta. Convención sugerida: `01.png`, `02.png`,
   ... hasta `12.png` (hay 12 slots de posición disponibles).
2. Editar el array `STICKERS` en `tv90s.html` y descomentar / agregar la
   entrada correspondiente:
   ```js
   const STICKERS = [
     { src: 'assets/stickers/01.png', alt: '' },
     { src: 'assets/stickers/02.png', alt: '' },
     // ...
   ];
   ```
3. El orden importa: el INDEX (0..11) define el slot en el cabinet
   (`.tv90-st-1` ... `.tv90-st-12`). Los slots tienen rotaciones y
   posiciones predefinidas (esquinas, laterales y borde inferior) para que
   el conjunto se vea desordenado y orgánico.

Si un archivo no existe (404), el slot se elimina solo — no rompe el
layout.

## Especificación del PNG

- **Formato**: `.png` (con o sin transparencia; transparente queda mejor
  porque el wrapper le agrega un canto blanco que simula el papel del
  sticker físico).
- **Tamaño recomendado**: ~512 × 512 px. El CSS escala el wrapper a
  `clamp(60px, 8vw, 120px)`, por lo que un PNG más grande sólo aumenta el
  peso sin mejorar la calidad visible.
- **Aspect ratio**: cuadrado o casi cuadrado. Los slots se ajustan al
  ancho y dejan el alto auto.
- **Contenido**: el sitio es de uso privado del grupo. La elección y la
  preparación de los archivos es responsabilidad de quien los sube. No
  hay imágenes con copyright incluidas en este repo.

## Look & feel

El wrapper CSS `.tv90-sticker` agrega automáticamente:
- Canto blanco de 5 px alrededor del PNG (papel).
- Esquinas levemente irregulares (`border-radius: 14px 6px 18px 8px`).
- Sombra fuerte abajo (efecto de despegue del bezel).
- Mini esquina doblada en la esquina inferior derecha (peel curl).
- Rotación distinta por slot (entre -12° y +11°) para que se vea
  orgánico, no alineado.

## Mobile

En viewports ≤ 700 px ocultamos 4 slots (los del medio superior e
inferior) para no saturar la pantalla chica. Los 8 slots restantes
quedan visibles.
