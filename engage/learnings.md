# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes/semana a las 14:00 (fijada por Andrés, 2026-07-04)

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** Miércoles a viernes: SILENCIO (solo
gestión y memoria). Nunca dos pushes de DIFUSIÓN el mismo día. Los slots
sáb/dom rotan sub-formatos si se queman (horóscopo, feed —quemado—,
confesiones, archivo).

**📬 REGLA FIJA DE PREVIEW (Andrés, 2026-07-12 por chat, vinculante, aplica
a TODOS los pushes futuros):** todo push del día se le manda ANTES a Andrés,
y SOLO a él, a las **09:00 locales** del mismo día, para que pueda corregir
algo antes del envío general. Implementación: por cada push que encoles,
encolá un item gemelo con id `<id>-preview`, **copia idéntica** (mismo
title/body/url — es lo que él revisa), `devices: ["andres"]`,
`send_at` 09:00 del día del push, `expires_at` ~13:30 (para que un
dispatcher atrasado nunca lo entregue después del envío general). El envío
general de las 14:00 (o el horario que tenga) NO cambia: va a todos los
activos, Andrés incluido. Si la corrida crea el push DESPUÉS de las 09:00,
el preview sale lo antes posible en vez de a las 09:00. Excepción única:
pushes que Andrés pide por chat con envío inmediato (no tiene sentido
preview de lo que él mismo dictó). Si Andrés corrige algo entre el preview
y las 14:00 (por chat o answer), se edita o cancela el push general ANTES
de que salga. Aplica también al push del martes de sala de prensa (10:00
al ganador → preview a andres a las 09:00).

**🎤 REGLA FIJA DEL MARTES (Andrés, 2026-07-07, vinculante — RATIFICADA
2026-07-10 con answer `sala-de-prensa-fija=si` desde device andres):**
entrevista "Sala de prensa" (5 preguntas) al ganador del lunes, a su device,
~10:00. Si el ganador no tiene push activa, no se envía nada. La crónica de
las 14:00 cita sus respuestas si llegan a tiempo; si no, sale igual y las
citas se agregan como addendum si llegan después.

## 💸 DEUDAS (ledger vigente al 2026-07-12)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA. **19 días** al 12/07. Cero answers pese a 6+ experiencias con el botón. | `deuda-tano-postre-2026-06-23` |
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | pendiente. **6 días** al 12/07. | `deuda-negro-postre-2026-07-06` |

Saldadas / archivadas: **Mac** — sus dos deudas (postre 30/06, cena T4)
desaparecieron de index.html en commits directos de otra sesión (07-08/07).
Sin `answer` de pago registrado — se asume resuelto fuera del sistema de
botones. No se recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, ~4
días):** `index.html` sigue con "Gael debe postre por perder T4" (commit
`cca7dde`, 08/07). Chequeado contra `seasons/4`: `winnerPlayerId: cobra`,
**`loserPlayerId: mac`** — el perdedor de la T4 es Mac, no Gael. Además
perder una TEMPORADA paga **cena**, no postre. No se incorpora al ledger ni
a contenido hasta que Andrés lo confirme/corrija. Sin novedad hoy.

## 🚀 SÍNTESIS: qué convierte (números reales)

- **El horóscopo (sábado 11/07) convirtió fuerte**: aprobado por andres
  (`proposal_approved` 11/07 17:57 UY) con reacción 😍 + answer suscripción
  `si` + dwell **178s, scroll 100%** — el dwell más alto de un push regular
  hasta ahora. También abierto por **mac** (dwell 62s, scroll 61%) y **pt**
  (dwell 161s, scroll 100%, click tardío a las 18:20 UY). Promovido esta
  corrida. Confirma que los sub-formatos con "una carta/dato por persona"
  (igual que records clásico) sostienen dwell alto.
- **negro y cobra clickearon el push del horóscopo pero sin eventos de
  dwell registrados** (solo `notification_clicked`/`page_visit` de negro,
  cara y cobra sin dwell posterior) — abren, no siempre se quedan. Señal
  débil, no accionable todavía.
- **El feed (`2026-07-10-el-feed`) sigue sin repetirse**: formato
  descartado (ver corrida anterior). No se intentó de nuevo hoy — el slot
  del domingo se cubrió con un formato nuevo (confesiones del mazo, ver
  abajo) en vez de volver al clásico chusmerío (ya promovido/permanente
  desde el 05/07) o al feed quemado.
- **Sin respuesta aún** a `cobra-ausente-2-semanas`, `regla-barro`
  (preguntas de archivo embebidas en el tape del 10/07). Sigue sin
  confirmarse si Cobra falta las próximas 2 semanas — dato clave para la
  previa del 13/07 si llega a tiempo.
- 0 partidas nuevas en `games` desde el Chorolo (07/07, ganó Cobra). Próxima
  fecha: lunes 13/07.

## 📊 Estado del sistema (2026-07-12)

- Subs push activas: **7 personas** (8 docs, Cobra tiene 2 dispositivos):
  andres, pt, mata, negro, cobra, mac, cara. `mc` disabled. Sin cambios.
- Datos: **17 docs en `games`**, 16 válidos (`finished` + `winnerPlayerId`).
  Sin partida nueva desde el Chorolo. Temporada 5 en curso, 1 fecha jugada.
- Eventos `engagement`: **136 totales** (subieron de 121 el 11/07 por las
  aperturas del horóscopo). Nada para compactar (el más viejo es del 03/07,
  cutoff de 14 días recién ~17/07).
- Queue: purgado **2026-07-04-a** (`sent`, 8 días — pasó el umbral de 7).
  `2026-07-05-a` (7 días exactos) se deja para la próxima corrida. Sin
  ítems `pending`/`draft` para reconciliar además del nuevo de hoy.
- Proposals: **2026-07-11-horoscopo** promovida esta corrida (aprobación de
  andres 11/07 17:57 UY). Nueva: **2026-07-12-confesiones** pendiente de
  decisión (vence 19/07). Resto sin cambios (records, la-previa, chusmerío
  05/07, entrevista-cobra, cronica y cobra-sin-editar promovidas; el-feed
  dropped).
- Home (`index.html`): deudas sin cambios (Tano, Negro, Gael/T4 sin
  verificar sigue ahí).

## 🗓️ Semana en curso

- ✅ Sábado 11/07 cerrado: récords con sub-formato horóscopo unístico,
  promovido, dwell alto (ver síntesis).
- 🎴 **Domingo 12/07 (hoy): chusmerío con sub-formato CONFESIONES DEL MAZO**
  (nunca usado antes — no repite el clásico del 05/07, ya promovido, ni el
  feed, rechazado el 10/07). `engage/2026-07-12-confesiones.html`: el mazo
  narra en 1ª persona 3 head-to-head inéditos recalculados de `games` — PT
  le gana a Cobra mano a mano 7-6 pese a 1 sola victoria en el año, Mata
  nunca perdió con Negro (5-0 en 5 fechas compartidas), y Gordo+Carucha como
  los únicos sin multas/cortes/últimos puestos en 26 fechas combinadas —
  más el estado de las deudas de Tano (19 días) y Negro (6 días). Cierre
  "mañana se juega". Push `2026-07-12-a` encolado para las 14:00, `pending`.
  A las 10:49 Andrés fijó por chat la regla de preview (ver CADENCIA):
  `2026-07-12-a-preview` encolado solo para su device, ASAP (11:00, las
  09:00 ya habían pasado). Desde mañana el preview va SIEMPRE a las 09:00.
- Próximo: lunes 13/07 la previa (actualizar deudas: Tano 20 días, Negro 7
  días si nadie paga antes; sección padres e hijos recalculada — candidatos
  fuertes: PT vs Cobra 7-6 o Mata vs Negro 5-0, ya usados hoy en confesiones,
  así que buscar un tercer par para no repetir la misma revelación dos días
  seguidos; ojo si Cobra confirma ausencia vía `cobra-ausente-2-semanas`).
  Martes 14/07: crónica SI hay partida nueva el lunes; si no, push de
  "cargá el resultado" y semana de descanso.

## TODO / ángulos sin usar

🎤 Confesiones del mazo (ESTRENADO hoy 12/07 — ver resultado próxima
corrida) · especial "remontadas" · especial sedes · aniversarios (648 de
Naso, multa 150 de Tano) · copy dirigido con nombre para reactivar a
negro/cara si siguen sin dwell propio (abren pero no se quedan) · investigar
el device `sin-nombre`/`cara` (dwell bajísimo, 5s, en el tape del 10/07) ·
confirmar con Andrés la deuda de Gael/T4 antes de usarla en cualquier
experiencia · seguir la respuesta a `cobra-ausente-2-semanas`/`regla-barro`
— si se confirma la ausencia, es EL ángulo de la previa del 13/07 · otros
H2H sin publicar todavía: Tano domina a Negro 6-2 en 8 fechas, Cobra-Gordo
7-7 empatado (ya insinuado en el horóscopo vía puntaje anual, no como H2H
directo) — reservar para la previa o un futuro chusmerío.
