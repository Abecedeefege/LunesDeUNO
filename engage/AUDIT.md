# AUDIT — Inventario de assets de LunesDeUNO (Fase 1 del sistema de engagement)

Fecha de corte: **2026-07-03**. Generado leyendo Firestore (colecciones `games`,
`seasons`, `players`) y el repo. Este documento es la referencia estable del
modelo de datos y de las stats derivadas; el estado vivo semana a semana va en
`engage/learnings.md`.

---

## 1. Dónde viven los datos (respuesta a "¿hace falta sync?")

**No hace falta ningún sync engine.** El estado NO vive en localStorage: la app
escribe cada partida en **Firestore** (proyecto `lunesdeuno`), con reglas
abiertas por diseño (ver `firestore.rules`). Todo es legible por REST con la
API key pública que ya está en `CLAUDE.md`:

```
https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents/{coleccion}?key=AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM
```

| Colección | Contenido | Uso editorial |
|---|---|---|
| `games` | Partidas terminadas: `rounds`/`fines`/`cortes` por slot, `participants`, `absentees`, `winnerPlayerId`, `venue`, `finishedAt`, `seasonId`, `maxPoints` | La fuente de TODO |
| `seasons` | Temporadas cerradas (1–3): ganador, perdedor, `perPlayerScores`, fechas, `gameIds` | Palmarés |
| `players` | 11 jugadores: `slug`, `displayName`, `color`, `face` | Nombres/caras/colores |
| `Propuestas` / `propuestasVisuales` | Sistema de tarjetas meme de propuestas.html (otro agente) | NO tocar |

Detalles de formato: los arrays 2D (`rounds`, `fines`, `cortes`) vienen como
`[{v:[...]}]` — desempaquetar `.v`. `finishedAt` es UTC; la **noche editorial**
es hora local (UTC−3) **menos 12 h** → una partida terminada el martes 00:30
local pertenece al lunes. OJO: el campo `lastEdit` de cada game trae telemetría
del dispositivo (postal, pantalla, timezone) — **jamás publicar nada de ahí**.

### Fórmulas oficiales (espejo de index.html / propuestas.html)

- **Puntaje de partida** por jugador = suma de `rounds` (base) + suma de
  `fines` + `cortes` × (−50). Menos puntos = mejor. Gana la fecha
  `winnerPlayerId`; **paga postre/picada el de MÁS puntos**.
- **Penalización por falta**: cada ausente (`absentees`) suma el peor puntaje
  base de esa fecha (el `loserBase`).
- **Tabla anual** = suma de todo lo anterior en el año.
- **Temporada** = bloque de 4 fechas. El de menos puntos la gana; el de más
  puntos paga **cena**.
- Partidas válidas: `finished == true` y `winnerPlayerId` presente (hay un doc
  vacío del 11/5 que se descarta por esto).

---

## 2. Jugadores (apodos públicos — los únicos nombres permitidos)

`pt` (PT), `mac` (Mac), `mata` (Mata), `gael` (Gael), `nachi` (Nachi),
`carucha` (Carucha), `negro` (Negro), `naso` (Naso), `tano` (Tano),
`gordo` (Gordo), `cobra` (Cobra). Caras en `assets/faces/{slug}.png`,
color propio por jugador en `players`.

Invitados esporádicos (isGuest, sin slug): **Agapito** (18/5), **Sandman**
(29/6). Existen solo dentro de su partida.

---

## 3. Historial 2026 (15 fechas válidas, todas lunes a la noche)

| Fecha (lunes) | Sede | Ganó | Último (paga 🍮/🧀) | Notas |
|---|---|---|---|---|
| 02/03 | — | Gordo | Mac (422) | arranca T1 |
| 09/03 | — | Gordo | Naso (449) | Gordo racha ×2 |
| 16/03 | — | Negro | Cobra (407) | |
| 23/03 | — | Cobra | Naso (610) | cierra T1: 🏆 Gordo, 🥄 Tano |
| 06/04 | — | Carucha | Cobra (367) | arranca T2 |
| 13/04 | — | Carucha | Mac (403) | Carucha racha ×2 |
| 20/04 | Carucha | Cobra | Naso (442) | |
| 27/04 | Gordo | Gael | Cobra (601) | cierra T2: 🏆 PT, 🥄 Mac |
| 04/05 | Carucha | Naso | Gael (401) | multa histórica: Tano +150 |
| 11/05 | Negrofshi | — | — | **fecha fantasma**: doc sin rondas ni ganador |
| 18/05 | Negro | Nachi | Negro (422) | invitado Agapito; Nachi remonta de 9º |
| 25/05 | Cara | Nachi | Naso (648) | Nachi racha ×2; 648 = peor score del año |
| 01/06 | — | Tano | Mac (433) | cierra T3 (docs): 🏆 Carucha, 🥄 Gael |
| 08/06 | MATABA | Cobra | Tano (442) | |
| 15/06 | — | — | — | **lunes sin partida** (sin registro) |
| 22/06 | Cobra | Cobra | Tano (425) | Cobra racha ×2 |
| 29/06 | Africa | PT | Mac (608) | invitado Sandman; cierra T4: 🏆 Cobra, 🥄 Mac |

(El app fecha las deudas por el día calendario del cierre — ej. "23 de Junio"
para la fecha del lunes 22/6 terminada a las 00:30.)

## 4. Tabla anual al 03/07 (menos = mejor)

| # | Jugador | Puntos | Fechas | W | Faltas | Últimos | Cortes | Multas |
|---|---|---|---|---|---|---|---|---|
| 1 | PT | 4637 | 12 | 1 | 3 | 0 | 1 | 10 |
| 2 | Gordo | 4839 | 13 | 2 | 2 | 0 | 0 | 0 |
| 3 | Cobra | 4909 | 15 | **4** | **0** | 3 | 2 | 0 |
| 4 | Carucha | 5043 | 12 | 2 | 3 | 0 | 0 | 0 |
| 5 | Gael | 5461 | 11 | 1 | 4 | 1 | 0 | 20 |
| 6 | Nachi | 5532 | 9 | 2 | 6 | 0 | 0 | 10 |
| 7 | Mata | 5666 | 8 | 0 | **7** | 0 | 0 | 0 |
| 8 | Tano | 5811 | 10 | 1 | 5 | 2 | 2 | **150** |
| 9 | Mac | 5862 | 12 | 0 | 3 | **5** | 1 | 40 |
| 10 | Naso | 5921 | 12 | 1 | 3 | 4 | 0 | 22 |
| 11 | Negro | 6050 | 8 | 1 | 7 | 0 | 1 | 70 |

Temporada 4 (junio, cerrada el 29/6): **Cobra 1155 campeón por 8 puntos sobre
Nachi (1163)** — la definición más finita del año. Mac último (1895) → cena.

## 5. Stats derivadas que hoy NADIE ve (combustible editorial)

- **Sequías** (fechas jugadas sin ganar, al 3/7): **Mac 12 de 12 — nunca ganó
  en el año**. Mata 8 de 8. Gordo no gana desde el 09/03 (11 fechas). Negro
  desde el 16/03 (7). Carucha desde el 13/04 (7).
- **Rachas de fechas ganadas seguidas** (récord compartido, ×2): Gordo
  (02–09/03), Carucha (06–13/04), Nachi (18–25/05), Cobra (08/06–22/06).
  Nadie ganó 3 seguidas todavía — récord en juego cada lunes.
- **Verdugos H2H** (terminar por arriba del otro, año): Gordo domina a Mac
  **9–1**. PT a Naso **8–2**. Carucha a Mac 8–2. **Mata a Tano 5–0** (jamás
  terminó abajo). PT a Tano 6–1. PT a Mata 6–1.
- **Remontadas** (partidas con historial por mano): Naso 04/05 y Nachi 18/05
  ganaron habiendo estado **últimos (9º/9) en la mano 1**. PT 29/06 estuvo 5º/9
  en la mano 2 y ganó.
- **Superlativos**: peor partida del año = Naso 648 (25/05). Multa más grande =
  Tano 150 (04/05). Más presencias = Cobra 15/15 (cero faltas). Más faltas =
  Mata y Negro (7). Más últimos puestos = Mac (5). Ganador más "eficiente" =
  PT: lidera la anual con UNA victoria.
- **La fecha fantasma** (11/05, "Negrofshi"): existe el registro, no existen
  los puntos. Nadie cargó nada. Material de chisme verificable.

## 6. Deudas (castigos) — dónde viven y estado al 03/07

Las deudas están **hardcodeadas como divs `class="naso-disclaimer"` en
index.html** (home). Ese HTML es la fuente canónica pero es **NO TOCAR** para
cualquier agente: se lee, no se escribe. Estado actual:

| Deudor | Debe | Origen | Estado |
|---|---|---|---|
| Tano | 🍮 postre / 🧀 picada | perdió el 23/06 | **IMPAGA — no la trajo el 30/06 a Africa** (13 días al lunes 06/07) |
| Mac | 🍮 postre / 🧀 picada | perdió el 30/06 | pendiente (6 días al 06/07) |
| Mac | 🍽️ CENA | perdió la Temporada 4 | pendiente |

Regla del juego (del propio index): el último de cada fecha paga postre o
picada; el último de la temporada paga cena. "La picada es ley."

El **ledger operativo** de deudas para el contenido vive en
`engage/learnings.md` (sección DEUDAS), seedeado desde index.html y actualizado
con las respuestas de botones (engageAnswer) de las experiencias — nunca
editando index.html.

## 7. Fotos y assets visuales

- Caras: `assets/faces/{slug}.png` (11). Logo: `assets/tophat-logo.png`.
  Iconos PWA: `assets/icon-192.png`, `assets/icon-512.png`.
- Cartas UNO: `assets/uno-plus4.png`; stickers en `assets/stickers/`.
- Foto de partida: solo una (`assets/games/game_s2g2.png`). Las "fotos de la
  noche" NO están sistematizadas — si algún día se cargan a `assets/games/`
  con fecha en el nombre, entran al contenido.
- Paleta de la app: fondo `#0d0d12`, rojo UNO `#ED1C24`, amarillo `#FFDE00`,
  verde `#00A651`, azul `#0072BC` + color propio por jugador.

## 8. Dimensión temporal

El ritual es semanal y sagrado: **se juega lunes a la noche** (las 15 fechas
son lunes). Sedes rotativas con nombres propios (Carucha, Gordo, Negro, Cara,
MATABA, Cobra, Africa). Temporadas de 4 fechas → cada 4ª fecha es "final de
temporada" (se juega una cena). Próxima fecha esperada: **lunes 06/07**
(arrancaría la Temporada 5).

## 9. Preguntas que solo la mesa puede responder (CTAs engageAnswer)

- "¿Tano trajo por fin el postre/la picada?" — Sí / Todavía no
- "¿Mac pagó la cena de la T4?" — Sí / Todavía no
- "¿Anoche se jugó?" (martes sin datos) — deep link a cargar resultado
- "¿Quién es la sede del próximo lunes?" — texto libre no, botones con sedes
- "¿La fecha fantasma del 11/5 se jugó de verdad?" — Sí, no se cargó / No se jugó

Cada respuesta es un dato nuevo que la tabla no tiene.
