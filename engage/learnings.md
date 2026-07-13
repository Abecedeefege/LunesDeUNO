# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes/semana a las 14:00 (fijada por Andrés, 2026-07-04)

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** Miércoles a viernes: SILENCIO (solo
gestión y memoria). Nunca dos pushes de DIFUSIÓN el mismo día. Los slots
sáb/dom rotan sub-formatos si se queman (horóscopo, feed —quemado—,
confesiones, archivo). Lunes/martes NO rotan sub-formato: son el mismo
formato evergreen (La Previa / La Crónica), refrescado con datos nuevos cada
semana en un archivo nuevo con la fecha del día — pero sigue estando sujeto a
la regla de efímera-por-default (§ reglas duras), así que cada edición semanal
se registra en `proposals.json` y necesita su propio approve para quedar.

**📬 REGLA FIJA DE PREVIEW (Andrés, 2026-07-12 por chat, vinculante, aplica
a TODOS los pushes futuros):** todo push del día se le manda ANTES a Andrés,
y SOLO a él, a las **09:00 locales** del mismo día, para que pueda corregir
algo antes del envío general. Implementación: por cada push que encoles,
encolá un item gemelo con id `<id>-preview`, **copia idéntica** (mismo
title/body/url — es lo que él revisa), `devices: ["andres"]`,
`send_at` 09:00 del día del push, `expires_at` ~13:30 (para que un
dispatcher atrasado nunca lo entregue después del envío general). El envío
general de las 14:00 (o el horario que tenga) NO cambia: va a todos los
activos, **Andrés incluido — RATIFICADO por él por chat el 12/07: quiere
recibir SIEMPRE también la de las 14:00, nunca excluirlo del envío
general**. Si la corrida crea el push DESPUÉS de las 09:00, el preview sale
lo antes posible en vez de a las 09:00. Excepción única: pushes que Andrés
pide por chat con envío inmediato (no tiene sentido preview de lo que él
mismo dictó). Si Andrés corrige algo entre el preview y las 14:00 (por chat
o answer), se edita o cancela el push general ANTES de que salga. Aplica
también al push del martes de sala de prensa (10:00 al ganador → preview a
andres a las 09:00) — **RATIFICADO por Andrés por chat el 12/07**: el
preview de la entrevista le llega a él aunque el push real vaya solo al
device del ganador.

**🎤 REGLA FIJA DEL MARTES (Andrés, 2026-07-07, vinculante — RATIFICADA
2026-07-10 con answer `sala-de-prensa-fija=si` desde device andres):**
entrevista "Sala de prensa" (5 preguntas) al ganador del lunes, a su device,
~10:00. Si el ganador no tiene push activa, no se envía nada. La crónica de
las 14:00 cita sus respuestas si llegan a tiempo; si no, sale igual y las
citas se agregan como addendum si llegan después.

## 💸 DEUDAS (ledger vigente al 2026-07-13)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | IMPAGA. **7 días** al 13/07. Confirmada vigente por answer `sigue` (andres, 12/07 19:23 UY). | `deuda-negro-postre-2026-07-06` |

Saldadas / archivadas:
- **Tano** — postre/picada desde 23/06. **PAGADA**: answer `pagada` de
  device andres el 12/07 19:23:41 UY. Duración final: **19 días** (23/06 →
  12/07), el récord de demora del año. Celebrado en la previa del 13/07.
  ⚠️ `index.html` **todavía muestra el div "Tano debe postre/picada por
  perder el 23 de Junio"** — diverge del ledger (que manda para contenido
  por regla del playbook). Recomendado: que Andrés borre ese div del home
  cuando pueda.
- **Mac** — sus dos deudas (postre 30/06, cena T4) desaparecieron de
  index.html en commits directos de otra sesión (07-08/07). Sin `answer` de
  pago registrado — se asume resuelto fuera del sistema de botones. No se
  recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, ~5
días):** `index.html` sigue con "Gael debe postre por perder T4" (commit
`cca7dde`, 08/07). Chequeado contra `seasons/4`: `winnerPlayerId: cobra`,
**`loserPlayerId: mac`** — el perdedor de la T4 es Mac, no Gael. Además
perder una TEMPORADA paga **cena**, no postre. No se incorpora al ledger ni
a contenido hasta que Andrés lo confirme/corrija. Sin novedad hoy.

## 🚀 SÍNTESIS: qué convierte (números reales)

- **Confesiones del mazo (domingo 12/07) promovida**: aprobada por andres
  (`proposal_approved` 12/07 19:24 UY) con reacción 🙂(like) + answer
  suscripción `si` + dwell 34s. También abierta por **pt** (dwell 63s,
  scroll 100%, a las 21:32 UY). Dwell más bajo que el horóscopo (178s) pero
  aprobación igual de rápida (misma sesión que abrió el push). En la MISMA
  visita Andrés resolvió las dos deudas pendientes (Tano pagada, Negro
  sigue) — la experiencia funcionó también como panel de gestión, no solo
  contenido.
- **El horóscopo (sábado 11/07) sigue siendo el techo de dwell** (178s/
  100% scroll de andres, 161s/100% de pt). Confirma que los sub-formatos
  con "una carta/dato por persona" sostienen dwell alto mejor que el
  narrador único (confesiones).
- **negro y cara siguen abriendo sin dejar dwell propio** en varios pushes
  (solo `notification_clicked`/`page_visit`). Señal débil y repetida — no
  accionable todavía, pero ya son 3 semanas seguidas del mismo patrón.
- **El feed sigue sin repetirse** (dropped 10/07, sin intentos nuevos).
- **Nueva fecha jugada**: 07/07 (Chorolo), ganó **Cobra 223** sobre
  **Gordo 258** (la más ajustada del año, 35 pts), **Negro último con 417**
  y ausente **Carucha**. Arrancó a computar la Fecha 2 de la T5 para hoy
  13/07.
- **Sin respuesta aún** a `cobra-ausente-2-semanas` / `regla-barro`
  (preguntas de archivo del 10/07). Usado igual como gancho en la previa de
  hoy citando la propia entrevista de Cobra ("dijo que se iba 2 semanas,
  nadie lo confirmó") sin afirmarlo como hecho.

## 📊 Estado del sistema (2026-07-13)

- Subs push activas: **7 personas** (8 docs, Cobra tiene 2 dispositivos):
  andres, pt, mata, negro, cobra, mac, cara. `mc` disabled. Sin cambios.
- Datos: **18 docs en `games`** (antes 17), 16 válidos (`finished` +
  `winnerPlayerId`). Nueva: Chorolo (07/07, editorial 06/07), ganó Cobra
  223. Temporada 5: 1 fecha jugada, hoy se juega la 2ª.
- Tabla anual recalculada al 13/07 (16 fechas): PT 4906(1) · Gordo 5097(2)
  · Cobra 5132(5) · Carucha 5460(2) · Gael 5721(1) · Nachi 5776(2) ·
  Mata 5934(0) · Tano 6107(1) · Mac 6186(0) · Naso 6266(1) · Negro 6467(1).
  Orden sin cambios respecto al 03/07. Multas: Naso +50 (fine en el
  Chorolo) → 72 total. Cortes: sin cambios. Últimos puestos: Negro +1.
- H2H nuevos calculados con el Chorolo (no usados antes en ningún push):
  Cobra 8–7 Gordo (se estrechó, antes 7–7 antes del Chorolo), Tano 7–2
  Negro, PT 6–2 Mata (casi se le escapa: 269 a 268). Reservados para
  próximas fechas si no se usan hoy: Gordo 10–1 Mac (ya usado el 06/07 como
  9–1), Carucha 8–4 Cobra (ya usado el 06/07).
- Eventos `engagement`: **152 totales** (subieron de 136 el 12/07). Nada
  para compactar (el más viejo es del 03/07, cutoff de 14 días recién
  ~17/07).
- Queue: purgado **2026-07-05-a** (`sent`, >7 días). Encolados hoy:
  `2026-07-13-a` (14:00) + `2026-07-13-a-preview` (09:00, solo andres).
  Sin otros ítems `pending`/`draft` para reconciliar.
- Proposals: **2026-07-12-confesiones** promovida esta corrida (aprobación
  de andres 12/07 19:24 UY). Nueva: **2026-07-13-la-previa** pendiente de
  decisión (vence 20/07) — 2ª edición del formato ya promovido el 06/07,
  con datos frescos. Resto sin cambios (records, la-previa original,
  chusmerio 05/07, entrevista-cobra, cronica y cobra-sin-editar promovidas;
  el-feed dropped).
- Home (`index.html`): deuda de Tano sigue en el div pese a estar pagada
  en el ledger (ver sección DEUDAS); Gael/T4 sin verificar sigue ahí.

## 🗓️ Semana en curso

- ✅ Sábado 11/07 cerrado: récords con sub-formato horóscopo unístico,
  promovido, dwell alto.
- ✅ Domingo 12/07 cerrado: chusmerío con sub-formato confesiones del mazo,
  promovido, dwell 34s + aprobación misma sesión + resolvió las 2 deudas
  pendientes.
- 🎴 **Lunes 13/07 (hoy): La Previa, 2ª edición** (`engage/2026-07-13-la-
  previa.html`). Contenido: tabla anual con el Chorolo incorporado (16
  fechas), conteo de deuda de Negro (7 días) + celebración del pago de
  Tano (19 días, récord de demora), 3 pares padres-e-hijos nuevos (Cobra-
  Gordo 8-7, Tano-Negro 7-2, PT-Mata 6-2, ninguno repetido de la previa
  anterior ni de confesiones), racha en juego (nadie con racha activa
  hoy), y el interrogante abierto de la ausencia de Cobra (citando su
  propia entrevista, sin afirmarlo). Push `2026-07-13-a` encolado 14:00 +
  preview `2026-07-13-a-preview` a andres 09:00, ambos `pending`.
- Próximo: martes 14/07 la crónica — SI hay partida nueva anoche (13/07)
  en `games`, escribir la crónica real (ojo si Cobra jugó o no, dato clave
  para el gancho). Si NO hay partida nueva, push de "cargá el resultado" y
  anotar semana de descanso. También corresponde la entrevista "Sala de
  prensa" (~10:00) al ganador de hoy si tiene push activa, con preview a
  andres a las 09:00 igual que el resto.

## TODO / ángulos sin usar

Especial "remontadas" · especial sedes · aniversarios (648 de Naso, multa
150 de Tano) · copy dirigido con nombre para reactivar a negro/cara si
siguen sin dwell propio (van 3 semanas abriendo sin quedarse) · investigar
el device `sin-nombre` (dwell bajísimo, patrón repetido el 06/07 y el
12/07) · confirmar con Andrés la deuda de Gael/T4 antes de usarla en
cualquier experiencia · seguir la respuesta a `cobra-ausente-2-semanas`/
`regla-barro` — si Cobra falta hoy, es EL ángulo de la crónica del martes
(o de un push de emergencia) · H2H sin publicar todavía: Gordo 10–1 Mac
(actualizado, ya usado como 9-1 el 06/07 pero puede reforzarse si hay
novedad), Carucha 8–4 Cobra (ya usado el 06/07, sin cambios porque Carucha
faltó el 07/07).
