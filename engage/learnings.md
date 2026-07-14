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
y SOLO a él, a las **09:00 locales** del mismo día. Implementación: item
gemelo `<id>-preview`, copia idéntica, `devices:["andres"]`, `send_at` 09:00,
`expires_at` ~13:30. El envío general de las 14:00 NO cambia: va a todos los
activos, Andrés incluido (RATIFICADO 12/07, nunca excluirlo del general).
Aplica también al martes de sala de prensa (preview a andres 09:00 aunque el
push real vaya solo al device del ganador) — si no hay sala de prensa esa
semana (ganador sin push activa), no aplica.

**🎤 REGLA FIJA DEL MARTES (Andrés, 2026-07-07, vinculante — RATIFICADA
2026-07-10):** entrevista "Sala de prensa" (5 preguntas) al ganador del
lunes, a su device, ~10:00. **Si el ganador no tiene push activa, no se
envía nada** — pasó por primera vez hoy (14/07): ganó Gordo y no está en
`pushSubs`. Sin entrevista ni preview de entrevista. La crónica lo menciona
con humor ("che, activá las notis") en vez de fingir contenido que no existe.

## 💸 DEUDAS (ledger vigente al 2026-07-14)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | IMPAGA. **8 días** al 14/07. Confirmada vigente por answer `sigue` (andres, 12/07 19:23 UY). | `deuda-negro-postre-2026-07-06` |
| Naso | 🍮/🧀 postre o picada | 13/07 (Carucha, quedó último con 414) | NUEVA hoy, sin preguntar aún. | `deuda-naso-postre-2026-07-13` |

Saldadas / archivadas:
- **Tano** — postre/picada desde 23/06. **PAGADA**: answer `pagada` de
  device andres el 12/07 19:23:41 UY. Duración final: **19 días**, récord de
  demora del año. ⚠️ `index.html` **todavía muestra el div** de esta deuda —
  diverge del ledger (que manda para contenido). Sin novedad hoy.
- **Mac** — sus dos deudas (postre 30/06, cena T4) desaparecieron de
  index.html en commits directos de otra sesión (07-08/07). Sin `answer` de
  pago registrado — no se recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, ~6
días):** `index.html` sigue con "Gael debe postre por perder T4" (commit
`cca7dde`, 08/07). Chequeado contra `seasons/4`: `winnerPlayerId: cobra`,
**`loserPlayerId: mac`** — el perdedor de la T4 es Mac, no Gael, y perder
temporada paga **cena**, no postre. No se incorpora al ledger ni a contenido
hasta que Andrés lo confirme/corrija. Sin novedad hoy.

## 🚀 SÍNTESIS: qué convierte (números reales)

- **La Previa (13/07) promovida con el dwell más alto registrado hasta
  ahora**: andres 271s + 285s en dos visitas separadas, reacción 😍(love),
  answer suscripción `si`, approve a las 19:21:42 UY. También abierta por
  **pt** (dwell 285s, scroll 100%) y **cara** (dwell 288s, scroll 91%, tras
  un primer intento de 8s/0% — volvió a entrar y esta vez se quedó). El
  interrogante que dejó abierto ("¿Cobra falta como dijo?") se confirmó esa
  misma noche: faltó a la fecha 2. Cerrar la previa con una pregunta real
  sin afirmar el hecho funcionó — y le dio gancho automático a la crónica
  del día siguiente.
- **Nuevo suscriptor: Gael** apareció en `pushSubs` como `active` (no estaba
  el 13/07). Sin eventos de página todavía a su nombre — primera vez que
  crece el canal sin que sea Andrés/otro forzando un reenvío. Sube a 8
  personas / 9 dispositivos activos.
- **negro y cara siguen abriendo con dwell irregular** — cara esta vez sí se
  quedó (288s) tras un primer intento fallido de 8s, distinto al patrón de
  "abre y no deja dwell" de semanas previas. A seguir.
- **Nueva fecha jugada anoche (13/07, en Carucha)**: ganó **Gordo con 127**,
  robándosela en la última mano (-10). Último **Naso con 414** (nuevo
  moroso), de punta a punta desde la ronda 3 (naso sumó 148 en una sola
  mano). **Cobra ausente** — primera vez que falta, confirmando lo que dijo
  en su propia entrevista del 08/07. Cae del 1º al 7º lugar de la T5 (se
  lleva el peor puntaje de la noche, 414, a la tabla). Sin multas ni cortes.
- **Corrección de dato**: el H2H Cobra–Gordo que la corrida del 13/07 citó
  como "8–7" (post-Chorolo) no cuadra: recalculado desde cero sobre los 14
  partidos que jugaron juntos hasta el Chorolo inclusive, da **7–7** (7+7=14,
  consistente). Se usa el valor recalculado de ahora en más; no se volvió a
  citar el "8–7" en ningún push.

## 📊 Estado del sistema (2026-07-14)

- Subs push activas: **8 personas** (9 docs, Cobra 2 dispositivos): andres,
  pt, mata, negro, cobra, mac, cara, **gael (nuevo)**. `mc` disabled. Gordo
  sigue sin suscripción — por eso no hay sala de prensa esta semana.
- Datos: **19 docs en `games`** (antes 18), 17 válidos (`finished` +
  `winnerPlayerId`). Nueva: Carucha (13/07 = fecha 2 de la T5), ganó Gordo
  127, último Naso 414, ausente Cobra.
- Tabla anual recalculada al 14/07 (17 fechas): PT 5073(1) · Gordo 5224(3)
  · Cobra 5546(5) · Carucha 5711(2) · Nachi 5985(2) · Gael 6040(1) ·
  Mata 6079(0) · Tano 6240(1) · Mac 6575(0) · Naso 6680(1) · Negro 6706(1).
  Nachi le pasó a Gael (único cambio de orden desde el 03/07). La distancia
  Gordo–Cobra pasó de 35 a 322 puntos en una fecha (el costo de faltar).
- Temporada 5 (2 de 4 fechas jugadas), suma de las dos fechas por jugador:
  Gordo 385(1) · Mata 413 · Tano 429 · PT 436 · Nachi 453 · Gael 579 ·
  Cobra 637(1, pero ausente hoy) · Negro 656 · Carucha 668 · Mac 713 ·
  Naso 759. Cobra lideraba después del Chorolo; hoy cayó a 7º.
- Eventos `engagement`: **171 totales** (subieron de 152 el 13/07). Nada
  para compactar (el más viejo es del 03/07, cutoff de 14 días recién
  ~17/07).
- Queue: purgados **2026-07-06-a** y **2026-07-06-reenvio** (`sent`, >7
  días). Encolados hoy: `2026-07-14-a` (14:00) + `2026-07-14-a-preview`
  (09:00, solo andres). Sin sala de prensa (Gordo sin push). Sin otros
  ítems `pending`/`draft` para reconciliar.
- Proposals: **2026-07-13-la-previa promovida** esta corrida (aprobación de
  andres 13/07 19:21:42 UY). Nueva: **2026-07-13-cronica** pendiente de
  decisión (vence 21/07). Resto sin cambios (records, la-previa original,
  chusmerio 05/07, entrevista-cobra, cronica 06/07 y cobra-sin-editar
  promovidas; el-feed dropped).
- Home (`index.html`): deuda de Tano sigue en el div pese a estar pagada
  en el ledger; Gael/T4 sin verificar sigue ahí. Sin cambios hoy.

## 🗓️ Semana en curso

- ✅ Sábado 11/07 cerrado: récords con sub-formato horóscopo, promovido,
  dwell alto (178s).
- ✅ Domingo 12/07 cerrado: chusmerío con sub-formato confesiones del mazo,
  promovido, resolvió las 2 deudas pendientes en la misma visita.
- ✅ Lunes 13/07 cerrado: La Previa 2ª edición, promovida con el dwell más
  alto de la semana (271-288s en tres visitas distintas), interrogante de
  Cobra confirmado esa misma noche.
- 🎴 **Martes 14/07 (hoy): La Crónica, 2ª edición**
  (`engage/2026-07-13-cronica.html`, fecha del lunes editorial). Contenido:
  Gordo se roba la fecha 2 en la última mano (-10, pasó de 137 a 127), Naso
  se hunde en la ronda 3 (148 en una mano) y no sale más del fondo, Cobra
  confirma su ausencia anunciada y cae al 7º en la T5, tabla anual con el
  cambio Nachi-Gael, nota liviana sobre la sala de prensa que no salió
  (Gordo sin notis). Push `2026-07-14-a` encolado 14:00 + preview
  `2026-07-14-a-preview` a andres 09:00, ambos `pending`.
- Próximo: miércoles a viernes, silencio (solo gestión/memoria). Sábado
  19/07 vuelve el slot de récords — evaluar sub-formato nuevo (no repetir
  horóscopo, ya usado el 11/07); ángulo fuerte disponible: la caída de
  Cobra en la T5 puede alimentar un "récords que se pueden romper" sobre
  rachas de ausencia o remontadas.

## TODO / ángulos sin usar

Especial "remontadas" · especial sedes · aniversarios (648 de Naso, multa
150 de Tano) · copy dirigido con nombre para reactivar a negro si sigue sin
dwell propio · investigar el device `sin-nombre` (dwell bajísimo, patrón
repetido el 06/07 y el 12/07) · confirmar con Andrés la deuda de Gael/T4
antes de usarla en cualquier experiencia · preguntar a Negro/Naso el estado
de sus deudas en la próxima previa/chusmerío con `engageAnswer` · avisar a
Gordo (fuera del sistema, es humano) que active las notificaciones para no
perderse otra sala de prensa · posible especial "el regreso de Cobra" para
cuando vuelva a aparecer, si se confirman las 2 semanas de ausencia ·
H2H sin publicar todavía: Carucha 8–4 Cobra (sin cambios, Carucha no jugó
con Cobra desde el 07/07).
