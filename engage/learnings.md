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

## 💸 DEUDAS (ledger vigente al 2026-07-08)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA. 15 días al 08/07. Cero answers pese a 4 experiencias con el botón. | `deuda-tano-postre-2026-06-23` |
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | pendiente. 2 días al 08/07. | `deuda-negro-postre-2026-07-06` |

Saldadas / archivadas: **Mac** — sus dos deudas (postre 30/06, cena T4)
desaparecieron de los divs `naso-disclaimer` de index.html en commits
directos de otra sesión (`62dff76` 07/07 12:47Z quitó la cena T4;
`db3a453` 08/07 01:05Z quitó el postre 30/06). Sin `answer` de pago
registrado en `engagement` — se asume resuelto administrativamente fuera del
sistema de botones. No se recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME:** commit `cca7dde`
(08/07 01:16Z) agregó "Gael debe postre por perder T4". Chequeado contra
`seasons` (doc `4`): `winnerPlayerId: cobra`, **`loserPlayerId: mac`** — el
perdedor de la T4 es Mac, no Gael (Gael perdió la T3, doc `seasons/3`).
Además el tipo de deuda no cierra: perder una TEMPORADA paga **cena**, no
postre (así estaba etiquetada la vieja deuda de Mac: "cena por perder
temporada 4"). No se incorpora esta deuda al ledger ni a ningún contenido
hasta que Andrés lo confirme o corrija — publicar un dato así de no verificado
rompe la regla dura #1 (canal sagrado). **Reportado en el chat de esta
corrida para que Andrés lo revise.**

## 🚀 SÍNTESIS: qué convierte (números reales)

- **andres clickea todo**: reacción 😍 + answer "sí, obvio" en las 4
  experiencias que tuvo enfrente (récords, chusmerío, previa, crónica — esta
  última la reaccionó `mata`, no andres, ver nota abajo).
- **pt activo desde 06/07**: sub activa, dwell 127–170s en la previa.
- **mata SÍ interactuó con la crónica** (07/07 18:08 UY): reacción 😍, answer
  "sí" a la suscripción, y clickeó "✅ Que quede" — pero esa aprobación NO
  cuenta como decisión de permanencia (solo decide `device:"andres"`; queda
  como señal secundaria). La crónica sigue `pending` en proposals.json.
- **cobra respondió la entrevista** — pero tarde: madrugada del 08/07 (~01:09
  UY), muchas horas después de que la crónica de las 14:00 del 07/07 ya
  hubiese salido sin citas (OK condicional de Andrés). Dwell 696s en la
  página de la entrevista, 100% scroll — la leyó a fondo antes de contestar.
  Se agregó una sección "Sala de prensa" a la crónica (08/07, gestión, sin
  push nuevo) con sus 5 citas, ya que la página sigue viva y pending.
- **negro y cara** interactuaron con el push de la crónica (notification_click
  + dwell) el 07/07 tarde. **mac** recién clickeó la crónica el 08/07 01:23 UY
  (push abierto muy tarde, no mismo día).
- Anomalía `sin-nombre`/`cara`: sigue sin resolverse, sin nuevos datos hoy.

## 📊 Estado del sistema (2026-07-08)

- Subs push activas: **7** — andres (decide), pt, mata, negro, cobra, mac,
  cara. `mc` disabled. Sin cambios desde 07/07.
- Datos: 18 docs en `games` (17 finalizados con winner + 1 partida en curso
  sin terminar, `game_1783469788259`, no cuenta todavía). 16 fechas válidas
  para tabla anual, cutoff sigue siendo Chorolo (06/07, ganó Cobra 223).
  Temporada 4 cerrada (Cobra ganó, Mac perdió — confirmado en `seasons`). T5
  en curso, fecha 1 jugada.
- Eventos `engagement`: 91 (8 nuevos desde la corrida del 07/07: respuestas de
  Cobra q1–q5, su dwell, un `notification_clicked` de mac en la crónica y el
  `page_visit` de cobra a su propia entrevista). Nada para compactar (el más
  viejo es del 03/07, cutoff de 14 días recién en ~17/07).
- Queue: todo `sent`/`cancelled`, nada `pending`/`draft` para reconciliar.
  Nada para limpiar todavía (cutoff de 7 días en ~10/07).
- Miércoles 08/07: día de silencio, sin push. Solo gestión.

## 🗓️ Semana en curso (editorial del lunes 06/07 — martes 07/07)

- ✅ Sáb 04/07 récords, ✅ Dom 05/07 chusmerío, ✅ Lun 06/07 previa: promovidos.
- ✅ Mar 07/07: entrevista a Cobra enviada (~10:17 UY) y crónica enviada
  (~15:08 UY, sin citas, según protocolo). Ambas siguen `pending` en
  proposals.json — sin decisión de `andres` todavía (mata aprobó la crónica
  pero eso no cuenta). Ninguna vence hasta el 14/07 (regla de 7 días).
- 🔧 Mié 08/07 (hoy): sin push. Se agregó la sala de prensa de Cobra a la
  crónica (contenido, no push nuevo). Se detectó y reportó la posible
  inconsistencia de la deuda de Gael/T4 en el home (ver DEUDAS). Se reconcilió
  el ledger de deudas con los cambios directos en index.html (Mac limpio).
- Jue 09 y vie 10/07: sin pushes. Gestión y memoria únicamente.
- Próximo push: sábado 11/07, récords — pendiente decidir sub-formato (el
  clásico ya se usó el 04/07; considerar remontadas/horóscopo/archivo para no
  repetir).

## 🔭 Corrida de HOY (2026-07-08, miércoles, 06:05 UY)

Repo limpio y actualizado sin fricción. Leídos 8 eventos nuevos: Cobra
finalmente contestó la entrevista (tarde, después de la ventana de la
crónica) y visitas/clicks tardíos de mac/cara/negro sobre la crónica. Sin
proposals que aprobar/rechazar/expirar hoy (las 2 pendientes tienen 1 día).
Nada para compactar ni limpiar en queue/engagement todavía. Reconciliado el
ledger de deudas contra cambios directos en index.html: Mac queda sin deudas
(sin answer que lo confirme, se asume resuelto fuera de banda); se detectó
que la nueva deuda de Gael ("postre por perder T4") contradice `seasons/4`
(loser=mac, no gael) y el tipo de deuda (temporada = cena, no postre) — no se
incorpora al ledger, queda reportada para que Andrés la revise o corrija en
el home. Se enriqueció `2026-07-06-cronica.html` con una sección "Sala de
prensa" citando las 5 respuestas de Cobra (gestión de contenido existente,
sin push nuevo, sin tocar proposals.json). Sin push hoy (miércoles = silencio).

## TODO / ángulos sin usar

🔮 Horóscopo unístico · 📱 Feed 1ª persona · 🎤 Confesiones del mazo ·
especial "remontadas" · especial sedes · aniversarios (648 de Naso, multa 150
de Tano) · copy dirigido con nombre para reactivar a negro/cara si siguen sin
eventos propios · investigar el device `sin-nombre`/`cara` · confirmar con
Andrés la deuda de Gael/T4 antes de usarla en cualquier experiencia · decidir
sub-formato del sábado 11/07 para no repetir récords clásico.
