# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes/semana a las 14:00 (fijada por Andrés, 2026-07-04)

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** Miércoles a viernes: SILENCIO (solo
gestión y memoria). Nunca dos pushes de DIFUSIÓN el mismo día. Los slots
sáb/dom rotan sub-formatos si se queman (horóscopo, feed, confesiones, archivo).

**🎤 REGLA FIJA DEL MARTES (Andrés, 2026-07-07, vinculante):** entrevista
"Sala de prensa" (5 preguntas) al ganador del lunes, a su device, ~10:00. Si
el ganador no tiene push activa, no se envía nada. La crónica de las 14:00
cita sus respuestas si llegan a tiempo; si no, sale igual (protocolo de OK
condicional de Andrés) y las citas se agregan como addendum si llegan después.

## 💸 DEUDAS (ledger vigente al 2026-07-10)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA. 17 días al 10/07. Cero answers pese a 4+ experiencias con el botón. | `deuda-tano-postre-2026-06-23` |
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | pendiente. 4 días al 10/07. | `deuda-negro-postre-2026-07-06` |

Saldadas / archivadas: **Mac** — sus dos deudas (postre 30/06, cena T4)
desaparecieron de los divs `naso-disclaimer` de index.html en commits
directos de otra sesión (`62dff76` 07/07 12:47Z quitó la cena T4;
`db3a453` 08/07 01:05Z quitó el postre 30/06). Sin `answer` de pago
registrado en `engagement` — se asume resuelto administrativamente fuera del
sistema de botones. No se recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, 3 días):**
commit `cca7dde` (08/07 01:16Z) agregó "Gael debe postre por perder T4" y
sigue en index.html hoy 10/07. Chequeado contra `seasons` (doc `4`):
`winnerPlayerId: cobra`, **`loserPlayerId: mac`** — el perdedor de la T4 es
Mac, no Gael (Gael perdió la T3, doc `seasons/3`). Además el tipo de deuda no
cierra: perder una TEMPORADA paga **cena**, no postre. No se incorpora esta
deuda al ledger ni a ningún contenido hasta que Andrés lo confirme o corrija.
**Reportado de nuevo en el chat de esta corrida.**

## 🚀 SÍNTESIS: qué convierte (números reales)

- **andres clickea todo**: reacción 😍 + answer "sí, obvio" en las 4
  experiencias que tuvo enfrente (récords, chusmerío, previa, crónica — esta
  última la reaccionó `mata`, no andres).
- **pt activo desde 06/07**: sub activa, dwell 127–170s en la previa.
- **mata SÍ interactuó con la crónica** (07/07 18:08 UY): reacción 😍, answer
  "sí" a la suscripción, y clickeó "✅ Que quede" — pero esa aprobación NO
  cuenta como decisión de permanencia (solo decide `device:"andres"`; queda
  como señal secundaria). La crónica sigue `pending` en proposals.json (2 días,
  vence 14/07 si no hay decisión de andres).
- **cobra respondió la entrevista** el 08/07 (~01:09–04:08 UY) y la leyó a
  fondo (dwell 31842s de background-tab/idle, 100% scroll — número inflado por
  la pestaña abierta, no dwell activo real). Sección "Sala de prensa" ya
  integrada a la crónica (gestión del 08/07, sin push nuevo). La entrevista
  también sigue `pending` en proposals.json (2 días).
- **negro, cara y mac** interactuaron tarde con la crónica (07/07 tarde y
  08/07 madrugada) — ya contabilizado, sin eventos nuevos desde entonces.
- Sin eventos nuevos en `engagement` desde el 08/07 12:48 UY (0 nuevos hoy).
- Anomalía `sin-nombre`/`cara`: sigue sin resolverse, sin nuevos datos hoy.

## 📊 Estado del sistema (2026-07-10)

- Subs push activas: **7** — andres (decide), pt, mata, negro, cobra, mac,
  cara. `mc` disabled. Sin cambios desde 07/07.
- Datos: **17 docs en `games`** (bajó de 18) — la partida en curso sin
  cerrar `game_1783469788259` (creada 08/07 00:16Z, ~07/07 21:16 UY) **ya no
  existe** en la colección; se asume abandonada/borrada por otra sesión, no
  se cuenta como fecha jugada. Las 17 restantes son todas `finished:true` con
  winner. 16 fechas válidas para tabla anual (una sin `winnerPlayerId`, la de
  12/05), cutoff sigue siendo Chorolo (06/07, ganó Cobra 223). Temporada 4
  cerrada (Cobra ganó, Mac perdió). T5 en curso, fecha 1 jugada. No hay
  partida nueva que crónica todavía — el próximo martes de crónica (14/07)
  depende de que se juegue el lunes 13/07.
- Eventos `engagement`: 91 totales, 0 nuevos hoy (el último sigue siendo
  08/07 12:48 UY). Nada para compactar (el más viejo es del 03/07, cutoff de
  14 días recién en ~17/07).
- Queue: todo `sent`/`cancelled`, nada `pending`/`draft` para reconciliar.
  Nada purgado hoy — medí la antigüedad exacta de los ítems del 03/07 contra
  ahora (10/07 ~09:06 UTC): el más viejo tiene 6d15h, ninguno pasa aún de 7
  días. Purga real recién mañana (11/07).
- Proposals `pending` sin decisión de andres: `2026-07-06-entrevista-cobra`
  y `2026-07-06-cronica`, ambas creadas 07/07 → vencen 14/07 si nadie decide.
  Sin novedad hoy (sin `proposal_approved`/`proposal_rejected` de `andres`
  para ninguna de las dos).
- Viernes 10/07: día de silencio, sin push. Solo gestión (sin cambios que
  hacer más allá de actualizar contadores de deuda y notar la desaparición
  de la partida sin cerrar — repo ya estaba al día).

## 🗓️ Semana en curso (editorial del lunes 06/07 — martes 07/07)

- ✅ Sáb 04/07 récords, ✅ Dom 05/07 chusmerío, ✅ Lun 06/07 previa: promovidos.
- ✅ Mar 07/07: entrevista a Cobra enviada (~10:17 UY) y crónica enviada
  (~15:08 UY, sin citas, según protocolo). Ambas siguen `pending` en
  proposals.json, vencen 14/07.
- 🔧 Mié 08/07: sin push. Se agregó la sala de prensa de Cobra a la crónica.
  Se detectó y reportó la inconsistencia de la deuda de Gael/T4 en el home.
- 🔧 Jue 09/07: sin push, sin eventos nuevos, sin proposals para
  decidir, sin nada para compactar/reconciliar. Solo se actualizaron los
  contadores de deuda (Tano 16 días, Negro 3 días) y se reafirmó el flag de
  Gael/T4.
- 🔧 Vie 10/07 (hoy): sin push editorial. Gestión y memoria. La partida sin
  cerrar que venía arrastrándose desde el 07/07 desapareció de `games`
  (asumida abandonada). Purga de queue.json todavía no toca (los `sent` del
  03/07 recién pasan de 7 días mañana 11/07).
- 📬 Vie 10/07 ~20:00-20:35 (corrida extra, pedidos de Andrés por chat): DOS
  exclusivas al device andres: `2026-07-10-cobra-sin-editar.html` (tape
  completo de la entrevista) y `2026-07-10-el-feed.html` (newsfeed
  interactivo: stories con visor, likes con señal `feed_like`/`feed_story`,
  contadores de deuda en vivo, encuesta `pronostico-2026-07-13`). Pushes
  `2026-07-10-a` y `2026-07-10-b` con envío inmediato (~20:35, pedido
  explícito "que llegue ahora"; páginas verificadas 200 en Pages antes de
  soltar). No cuentan contra la regla del push editorial diario: dirigidos y
  pedidos por el dueño del canal.
- 🔧 CORRECCIÓN FACTUAL en la crónica: decía que PT "ni jugó anoche" — FALSO,
  PT jugó el Chorolo y quedó 6º con 269 (recalculado de games). Corregido en
  la crónica y evitado en el feed. Lección: no heredar frases de páginas
  anteriores sin re-verificar contra games.
- 🔧 ENCUADRE DEFINITIVO de la entrevista (Andrés se corrigió a sí mismo por
  chat, 10/07 — esta versión MANDA): la entrevista fue por la **victoria en
  el Chorolo (última fecha, 06/07): le ganó a Nachi por 21**. El título de la
  T4 por 8 sobre el mismo Nachi (seasons/4: 1155 vs 1163; Mac último 1453) es
  CONTEXTO verificado, no la ocasión. Tape remasterizado con este encuadre
  (diseño casete: reels animados, contador de cinta, 5 pistas). El ángulo
  "dos heridas de Nachi en 15 días (8 en la T4, 21 el lunes)" sigue siendo
  oro editorial y quedó en tape + feed.
- 📵 INCIDENTE DE ENTREGA: push `2026-07-10-b` (feed) aceptado con 201 al
  device andres pero NO se mostró; el `-a` (enviado 100ms antes) sí llegó.
  sw.js OK (tags distintos por nid), dispatcher OK (TTL 4h, urgency high,
  sin Topic). Hipótesis: dos pushes casi simultáneos al mismo device → el
  sistema mostró solo el primero. REGLA NUEVA: espaciar pushes al mismo
  device ≥2 min (o mandar de a uno). Reintento como `2026-07-10-c` (solo).
- Próximo push: **sábado 11/07, récords** — pendiente decidir sub-formato (el
  clásico ya se usó el 04/07; considerar remontadas/horóscopo/archivo para no
  repetir). Si no hay partida nueva el lunes 13/07, la crónica del martes
  14/07 no se inventa (ver regla de "semana de descanso").

🚨 **SEÑAL SIN CONFIRMAR — AUSENCIA DE COBRA:** en la entrevista (08/07)
Cobra dijo DOS veces que se va «dos semanas» → se perdería los lunes 13/07 y
20/07 (la corona sin defensa, fechas 2 y 3 de la T5). Pregunta de archivo
`cobra-ausente-2-semanas` (confirmado/ni-idea/falso) embebida en la exclusiva
del 10/07 para que Andrés confirme. Si se confirma, es EL ángulo del sábado
récords y de la previa del lunes. También mencionó una «regla nueva con
barro» que el sistema no registra — pregunta `regla-barro` embebida ídem.

## 🔭 Corrida de HOY (2026-07-10, viernes, 06:06 UY + corrida extra ~20:00 UY)

Repo limpio y actualizado (`git pull` sin commits nuevos desde ayer).
Revisados: engagement (0 eventos nuevos, sigue en 91 totales / último
08/07 12:48 UY), pushSubs (sin cambios, 7 activas), games (bajó de 18 a 17
docs — la partida en curso sin cerrar `game_1783469788259` ya no está;
ninguna partida nueva finalizada), queue.json (nada `pending`/`draft`;
medí antigüedad exacta de los ítems del 03/07 y ninguno pasa aún de 7 días,
purga real mañana), proposals.json (2 `pending` de 07/07, ninguna con
decisión de `andres`, vencen 14/07), index.html (deudas sin cambios: Tano,
Negro, y el Gael/T4 sin verificar sigue ahí). Cambios reales: actualicé los
contadores de días de deuda en el ledger y registré la desaparición de la
partida sin cerrar. Sin push editorial (viernes = silencio).

**Corridas extra (20:00-20:35 UY, pedidos de Andrés):** (1) exclusiva
`2026-07-10-cobra-sin-editar` (tape completo: 5 Q&A textuales, números
re-verificados, escritorio de decisiones con las 2 proposals que vencen
14/07, preguntas `cobra-ausente-2-semanas`/`regla-barro`/
`sala-de-prensa-fija`); (2) exclusiva `2026-07-10-el-feed` (newsfeed
interactivo pedido "moderno, expert UX": stories, likes, deuda en vivo,
encuesta `pronostico-2026-07-13`, pregunta `feed-en-rotacion` — si el answer
es "si", el formato entra a la rotación de sub-formatos de sáb/dom). Ambos
pushes (`2026-07-10-a`, `2026-07-10-b`) SOLO a andres, envío inmediato
~20:35. Tabla anual re-verificada completa; victoria nº5 de Cobra y 4
liderazgos de Gael confirmados ronda a ronda. Mirar mañana: TODOS los
answers/decisiones de andres desde estas dos páginas + eventos
`feed_like`/`feed_story` — condicionan el ángulo y formato del sábado.

## TODO / ángulos sin usar

🔮 Horóscopo unístico · 📱 Feed 1ª persona · 🎤 Confesiones del mazo ·
especial "remontadas" · especial sedes · aniversarios (648 de Naso, multa 150
de Tano) · copy dirigido con nombre para reactivar a negro/cara si siguen sin
eventos propios · investigar el device `sin-nombre`/`cara` · confirmar con
Andrés la deuda de Gael/T4 antes de usarla en cualquier experiencia · decidir
sub-formato del sábado 11/07 para no repetir récords clásico.
