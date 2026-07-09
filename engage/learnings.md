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

## 💸 DEUDAS (ledger vigente al 2026-07-09)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA. 16 días al 09/07. Cero answers pese a 4+ experiencias con el botón. | `deuda-tano-postre-2026-06-23` |
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | pendiente. 3 días al 09/07. | `deuda-negro-postre-2026-07-06` |

Saldadas / archivadas: **Mac** — sus dos deudas (postre 30/06, cena T4)
desaparecieron de los divs `naso-disclaimer` de index.html en commits
directos de otra sesión (`62dff76` 07/07 12:47Z quitó la cena T4;
`db3a453` 08/07 01:05Z quitó el postre 30/06). Sin `answer` de pago
registrado en `engagement` — se asume resuelto administrativamente fuera del
sistema de botones. No se recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, 2 días):**
commit `cca7dde` (08/07 01:16Z) agregó "Gael debe postre por perder T4" y
sigue en index.html hoy 09/07. Chequeado contra `seasons` (doc `4`):
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

## 📊 Estado del sistema (2026-07-09)

- Subs push activas: **7** — andres (decide), pt, mata, negro, cobra, mac,
  cara. `mc` disabled. Sin cambios desde 07/07.
- Datos: 18 docs en `games`, sin cambios desde el 08/07 (17 finalizados con
  winner + 1 partida en curso sin terminar, `game_1783469788259`, sigue sin
  cerrar). 16 fechas válidas para tabla anual, cutoff sigue siendo Chorolo
  (06/07, ganó Cobra 223). Temporada 4 cerrada (Cobra ganó, Mac perdió). T5
  en curso, fecha 1 jugada. No hay partida nueva que crónica todavía — el
  próximo martes de crónica (14/07) depende de que se juegue el lunes 13/07.
- Eventos `engagement`: 91 totales, 0 nuevos hoy. Nada para compactar (el más
  viejo es del 03/07, cutoff de 14 días recién en ~17/07).
- Queue: todo `sent`/`cancelled`, nada `pending`/`draft` para reconciliar.
  Nada purgado hoy — el cutoff de 7 días para limpiar `sent`/`cancelled`
  recién cae mañana (~10/07); los ítems más viejos son del 03/07.
- Proposals `pending` sin decisión de andres: `2026-06-06-entrevista-cobra`
  y `2026-07-06-cronica`, ambas creadas 07/07 → vencen 14/07 si nadie decide.
  Sin novedad hoy.
- Jueves 09/07: día de silencio, sin push. Solo gestión (sin cambios que
  hacer — repo ya estaba al día).

## 🗓️ Semana en curso (editorial del lunes 06/07 — martes 07/07)

- ✅ Sáb 04/07 récords, ✅ Dom 05/07 chusmerío, ✅ Lun 06/07 previa: promovidos.
- ✅ Mar 07/07: entrevista a Cobra enviada (~10:17 UY) y crónica enviada
  (~15:08 UY, sin citas, según protocolo). Ambas siguen `pending` en
  proposals.json, vencen 14/07.
- 🔧 Mié 08/07: sin push. Se agregó la sala de prensa de Cobra a la crónica.
  Se detectó y reportó la inconsistencia de la deuda de Gael/T4 en el home.
- 🔧 Jue 09/07 (hoy): sin push, sin eventos nuevos, sin proposals para
  decidir, sin nada para compactar/reconciliar. Solo se actualizaron los
  contadores de deuda (Tano 16 días, Negro 3 días) y se reafirmó el flag de
  Gael/T4.
- Vie 10/07: sin push. Gestión y memoria únicamente — probablemente primer
  día con purga real de queue.json (ítems `sent` del 03/07 cumplen 7 días).
- Próximo push: **sábado 11/07, récords** — pendiente decidir sub-formato (el
  clásico ya se usó el 04/07; considerar remontadas/horóscopo/archivo para no
  repetir). Si no hay partida nueva el lunes 13/07, la crónica del martes
  14/07 no se inventa (ver regla de "semana de descanso").

## 🔭 Corrida de HOY (2026-07-09, jueves, 06:06 UY)

Repo limpio y actualizado (`git pull` trajo 1 commit de otra sesión: sala de
prensa de Cobra + reconciliación de deudas del 08/07, ya reflejado acá).
Revisados: engagement (0 eventos nuevos desde 08/07 12:48 UY), pushSubs (sin
cambios, 7 activas), games (sin partidas nuevas, sigue 1 en curso sin
cerrar), queue.json (nada `pending`/`draft`, nada para purgar todavía),
proposals.json (2 `pending` de 07/07, ninguna con decisión de `andres`, no
vencen hasta 14/07), index.html (deudas sin cambios: Tano, Negro, y el Gael/T4
sin verificar sigue ahí). Único cambio real: actualicé los contadores de días
de deuda en el ledger. Sin push (jueves = silencio).

## TODO / ángulos sin usar

🔮 Horóscopo unístico · 📱 Feed 1ª persona · 🎤 Confesiones del mazo ·
especial "remontadas" · especial sedes · aniversarios (648 de Naso, multa 150
de Tano) · copy dirigido con nombre para reactivar a negro/cara si siguen sin
eventos propios · investigar el device `sin-nombre`/`cara` · confirmar con
Andrés la deuda de Gael/T4 antes de usarla en cualquier experiencia · decidir
sub-formato del sábado 11/07 para no repetir récords clásico.
