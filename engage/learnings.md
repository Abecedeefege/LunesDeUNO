# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes/semana a las 14:00 (fijada por Andrés, 2026-07-04)

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** Miércoles a viernes: SILENCIO (solo
gestión y memoria). Nunca dos pushes de DIFUSIÓN el mismo día. Los slots
sáb/dom rotan sub-formatos si se queman (horóscopo, feed, confesiones, archivo).

**🎤 REGLA FIJA DEL MARTES (Andrés, 2026-07-07, vinculante — RATIFICADA
2026-07-10 con answer `sala-de-prensa-fija=si` desde device andres):**
entrevista "Sala de prensa" (5 preguntas) al ganador del lunes, a su device,
~10:00. Si el ganador no tiene push activa, no se envía nada. La crónica de
las 14:00 cita sus respuestas si llegan a tiempo; si no, sale igual y las
citas se agregan como addendum si llegan después.

## 💸 DEUDAS (ledger vigente al 2026-07-11)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA. **18 días** al 11/07. Cero answers pese a 5+ experiencias con el botón. | `deuda-tano-postre-2026-06-23` |
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | pendiente. **5 días** al 11/07. | `deuda-negro-postre-2026-07-06` |

Saldadas / archivadas: **Mac** — sus dos deudas (postre 30/06, cena T4)
desaparecieron de index.html en commits directos de otra sesión (07-08/07).
Sin `answer` de pago registrado — se asume resuelto fuera del sistema de
botones. No se recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, 4
días):** `index.html` sigue con "Gael debe postre por perder T4" (commit
`cca7dde`, 08/07). Chequeado contra `seasons/4`: `winnerPlayerId: cobra`,
**`loserPlayerId: mac`** — el perdedor de la T4 es Mac, no Gael. Además
perder una TEMPORADA paga **cena**, no postre. No se incorpora al ledger ni
a contenido hasta que Andrés lo confirme/corrija. Sin novedad hoy.

## 🔧 CORRECCIÓN DE DATOS (esta corrida, 11/07)

Al recalcular TODO desde `games` para el horóscopo del sábado, encontré que
el cálculo de "quién gana/pierde la fecha" usa el **puntaje BASE (solo
rondas)** — verificado en el código fuente de `index.html` (`getTotals()` vs
`getFinalTotals()`, comentarios explícitos "el ranking del partido se decide
por puntaje base; multas/cortes NO cuentan para el partido, solo para la
tabla anual"). Esto NO coincide literalmente con la fórmula abreviada del
playbook (que suma fines+cortes al puntaje de la fecha), pero SÍ coincide
100% con cada fila de `AUDIT.md` sección 3 (historial verificado) al
recalcularla — así que el error estaba en mi lectura previa, no en los datos.

Con la fórmula correcta (base-only para ganador/último, tabla anual =
base+multas+cortes+faltas), encontré que **"Más últimos puestos: Mac, 5"**
(en `engage/2026-07-04-records.html`, página PROMOVIDA/permanente) está mal:
recalculado de las 16 fechas, Mac tiene **4** últimos puestos (02/03, 13/04,
02/06, 30/06), exactamente igual que **Naso** (4: 09/03, 23/03, 21/04,
25/05) — es un EMPATE, no una marca única de Mac. Corregí el texto de esa
página (nota visible del cambio) porque es una página mía (`engage/*.html`),
no `index.html`. `AUDIT.md` (sección 4, tabla agregada) tiene el mismo error
pero es "referencia estable" de otro corte de fecha — no la toco, solo lo
dejo anotado acá para que no se repita el dato viejo en contenido futuro.

Tabla anual recalculada completa al 07/07 (Chorolo), 16 fechas válidas:
PT 4906 · Gordo 5097 · Cobra 5132 · Carucha 5460 · Gael 5721 · Nachi 5776 ·
Mata 5934 · Tano 6107 · Mac 6186 · Naso 6266 · Negro 6467. **Cobra está a
solo 35 puntos de sacarle el 2º puesto a Gordo** — ángulo fuerte para la
previa del lunes si se mantiene cerca.

## 🚀 SÍNTESIS: qué convierte (números reales)

- **andres clickea todo**: abrió los 3 pushes del tape/feed de la noche del
  10/07, con reacción 😍 en el tape (love, dwell 21-256s según la versión) y
  RECHAZÓ el feed (`proposal_rejected` 10/07 20:47 UY, dwell 33s scroll 100%
  — lo vio completo y no le convenció). Aprobó **2026-07-06-cronica** y
  **2026-07-06-entrevista-cobra** el 10/07 21:24 UY (vía el escritorio de
  decisiones embebido en el tape) — quedaron promovidas esta corrida (ver
  abajo, estaban sin procesar de una corrida anterior).
- **cara y pt** abrieron el tape remasterizado (push `-e`, "se filtró")
  horas después de mandado (00:45 y 01:11 UY del 11/07) — aperturas tardías
  nocturnas, consistente con el patrón de "revisan antes de dormir".
- **El feed (`2026-07-10-el-feed`) NO convirtió**: rechazado por andres pese
  al pedido explícito de armarlo "moderno, expert UX". Sin eventos
  `feed_like`/`feed_story` de nadie, sin answer a `feed-en-rotacion`. git rm
  hecho, proposal `dropped`. Hipótesis: dos exclusivas el mismo día fue
  demasiado volumen, o el formato stories/likes no calzó con el tono
  editorial (tabloide/cartelera) del resto del sistema. **No repetir sin
  replantear el formato.**
- **Sin respuesta aún** a `cobra-ausente-2-semanas`, `regla-barro` (preguntas
  de archivo embebidas en el tape) — Cobra mencionó en la entrevista que se
  va "dos semanas", sin confirmar. Sigue sin confirmarse.
- 0 eventos nuevos en `engagement` desde las 01:31 UY del 11/07 hasta la hora
  de esta corrida (06:06 UY).

## 📊 Estado del sistema (2026-07-11)

- Subs push activas: **7 personas** (8 docs, Cobra tiene 2 dispositivos):
  andres, pt, mata, negro, cobra, mac, cara. `mc` disabled. Sin cambios.
- Datos: **17 docs en `games`**, 16 válidos (`finished` + `winnerPlayerId`).
  Sin partida nueva desde el Chorolo (07/07, ganó Cobra). Próxima fecha:
  lunes 13/07. Temporada 5 en curso, 1 fecha jugada (Chorolo).
- Eventos `engagement`: **121 totales** (subieron de 91 el 10/07 por la
  sesión extra de esa noche). Nada para compactar (el más viejo es del
  03/07, cutoff de 14 días recién ~17/07).
- Queue: **purgados los 7 ítems `sent` del 03/07** (pasaron los 7 días,
  eran pruebas de bienvenida/galera, ya redundantes con `send_log.json`
  histórico). Quedan 14 ítems + el nuevo push de hoy. Nada `pending`/`draft`
  para reconciliar además del que encolé hoy.
- Proposals: **2026-07-06-cronica** y **2026-07-06-entrevista-cobra**
  promovidas (aprobación de andres del 10/07 21:24 UY, procesada recién esta
  corrida). **2026-07-10-el-feed** dropped (rechazo de andres, página
  eliminada). **2026-07-10-cobra-sin-editar** sigue promovida (sin cambios).
  Nueva: **2026-07-11-horoscopo** pendiente de decisión (vence 18/07).
- Home (`index.html`): deudas sin cambios (Tano, Negro, Gael/T4 sin
  verificar sigue ahí).

## 🗓️ Semana en curso

- ✅ Semana del 06/07 (previa) cerrada: previa, chusmerío, récords clásico y
  crónica todos promovidos o en vías. El tape/feed del viernes 10/07 fueron
  exclusivas fuera de cadencia (pedido directo de Andrés), no cuentan contra
  la regla de 1 push/día.
- 🔮 **Sábado 11/07 (hoy): récords con sub-formato HORÓSCOPO UNÍSTICO** (no
  el clásico, ya usado el 04/07). `engage/2026-07-11-horoscopo.html`: 11
  cartas de UNO, una por jugador, cada una justificada con stats reales
  recalculadas (victorias, sequías, faltas, multas, peor score, tabla
  anual). Cierre fijo "récords que se pueden romper el lunes" con el dato
  fuerte de los 35 puntos entre Cobra y Gordo. Push `2026-07-11-a` encolado
  para las 14:00, `pending`.
- Próximo: domingo 12/07 chusmerío (rotar sub-formato: no usar feed —
  recién rechazado — considerar confesiones del mazo o archivo). Lunes
  13/07 la previa (actualizar deudas: Tano 20 días, Negro 7 días si nadie
  paga antes; sección padres e hijos recalculada; ojo si Cobra confirma
  ausencia). Martes 14/07: crónica SI hay partida nueva el lunes; si no,
  push de "cargá el resultado" y semana de descanso.

## TODO / ángulos sin usar

📱 Feed 1ª persona (RECHAZADO 10/07, no repetir sin replantear) ·
🎤 Confesiones del mazo · especial "remontadas" · especial sedes ·
aniversarios (648 de Naso, multa 150 de Tano) · copy dirigido con nombre
para reactivar a negro/cara si siguen sin eventos propios · investigar el
device `sin-nombre`/`cara` (sigue sin resolverse) · confirmar con Andrés la
deuda de Gael/T4 antes de usarla en cualquier experiencia · seguir la
respuesta a `cobra-ausente-2-semanas`/`regla-barro` — si se confirma la
ausencia, es EL ángulo de la previa del 13/07.
