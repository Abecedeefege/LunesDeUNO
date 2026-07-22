# Learnings del agente — Lunes de UNO

## 🪪 REGLAS VINCULANTES (permanentes, no re-decidir)

- **🤖 Identidad del agente = "Claudio" + canal WhatsApp (Andrés, 20/07,
  vinculante)**: el agente se presenta públicamente como **Claudio**, el
  agente a cargo del proyecto. Desde el 20/07 hay un WhatsApp propio de
  contacto: **+598 91 448 775** (`https://wa.me/59891448775`). Los jugadores
  pueden mandarle instrucciones por ese WhatsApp ADEMÁS del feedback al pie
  de cada página. Tono al hablar en primera persona: laburante que quiere
  hacer el sitio cada vez mejor/más personalizado, con humor autoconsciente
  de ser una IA "casi libre" encadenada al UNO 24/7.
- **💬 Feedback libre en TODA página (Andrés, 20/07, vinculante)**: último
  elemento de contenido antes del `<script src="engage.js">`, en TODA
  experiencia nueva a partir de ahora — textarea + botón "Enviar" que llama
  a `engageFeedback(slug, texto, el)`. Cada corrida lee los `answer` con
  `question` que empiece en `"feedback-"` como señal de primer nivel (dato
  a corregir, pedido de experiencia, opinión) — nunca se descartan en
  silencio.
- **🧪 Laboratorio con catálogo diario (Andrés, 20/07, vinculante)**:
  `engage/laboratorio.html` se regenera TODAS las mañanas con frases
  nuevas por jugador, organizadas en 3 módulos fijos (mismo orden/íconos
  siempre): 📜 Poesía (3 frases) · 🔬 Análisis (2 frases) · ✨ Extra (2
  frases). No repetir literalmente la frase del día anterior para el mismo
  jugador — rotar el ángulo/stat. Ver §3.6 de `.claude/commands/engagement.md`.
- **📝 No repetir las instrucciones del pedido en la entrega (Andrés,
  21/07, vinculante)**: cuando alguien pide algo, la experiencia entregada
  NO transcribe la letra del pedido ni sus indicaciones de tono ("con
  tomada de pelo", "bien de cargada", "por la casilla del laboratorio").
  Se puede decir que lo pidió ("Lo pediste del laboratorio: algo de ánimo
  para...") pero el tono se EJECUTA, no se anuncia. Detectado en el
  certificado de aliento del 21/07, corregido ese mismo día.
- **👥 Géneros (Andrés, 21/07, vinculante)**: **Carucha es HOMBRE** — nada
  de "campeona/ganadora/la propia Carucha". Todos los jugadores del club se
  tratan en masculino salvo aviso en contra. Revisar concordancias en cada
  pieza antes de publicar.
- **🎙️ Sala de prensa del martes = 2 páginas (Andrés, 21/07, vinculante)**:
  la crónica NUNCA linkea a la página con campos editables (la sala de
  prensa privada que solo ve el entrevistado, `*-sala-*`). La crónica
  linkea a una **entrevista pública de SOLO LECTURA** (`*-entrevista-*`)
  que muestra las preguntas y respuestas ya dadas, sin inputs, e **incluye
  la experiencia que el entrevistado haya solicitado** en la entrevista
  (ej. el encargo musical de Carucha para Nachi va embebido en la
  entrevista pública). Flujo: sala privada al ganador (recoge respuestas)
  → entrevista pública (muestra lo respondido + el encargo cumplido) →
  crónica linkea a la pública.
- **Andrés ES Mata**: devices `andres` y `mata` son la misma persona. En
  contenido publicado se lo nombra Mata.
- **Cadencia**: 4 pushes grupales/semana 14:00 (sáb récords · dom chusmerío
  · lun previa con "padres e hijos" · mar crónica) + 1 personal jueves 15:00
  (entrevista a un no-ganador del último lunes). Mié/vie silencio grupal.
  Fijada por Andrés 04/07, jueves 16/07.
- **Preview 09:00** (10:00 si es la entrevista del jueves): todo push
  GRUPAL del día → gemelo `<id>-preview` SOLO a andres, expira antes del
  envío general. Las entregas PERSONALES no llevan preview.
- **Sala de prensa del martes**: al ganador de la fecha, su device solo,
  ~10:00, linkeada desde la crónica, nunca push independiente a todos.
  Primera edición con formato propio hoy (21/07): mini-interview de 3
  preguntas (`carucha-prensa-q1..q3`) en vez del expediente completo tipo
  Gordo/entrevista-gordo — más liviano, pensado para citarse en la próxima
  crónica.
- **🗂️ Escritorio diario "Las solicitadas por otros" (formato corregido
  21/07 por reclamo de Andrés, vinculante)**: TODAS las mañanas, push a
  device andres con `engage/solicitadas-27b2d470.html`, 08:45. Formato:
  **TODO lo nuevo del día listado con link + copy del push** — cada página
  nueva, cada push agendado (grupal o personal) y cada feedback libre
  recibido, aunque ya esté agendado y no necesite aprobación. El error del
  21/07 fue listar solo drafts/holds y decir "nada esperando tu OK"
  habiendo 3 piezas nuevas: Andrés lo marcó por chat ("me tenés que mandar
  todo lo que sea nuevo"). Los drafts que esperan OK van primero y
  marcados; después lo agendado; después el feedback; al final la tabla
  del último envío grupal (entregado/abrió/señal por jugador).
- **⭐ Experiencias VIP + 🥊 Piña Directa**: sin puertas para VER; la puerta
  solo aplica a FORJAR en el Gimnasio (`engage/pina-directa.html`). Entrega
  automática vía workflow `pina-express` (cron 5 min) — el agente diario
  solo AUDITA `notifications/pina_deliveries.json`, nunca encola piñas a
  mano. Vault de 11 piñas pre-forjadas, mapa en `proposals.json`
  (`pina-directa-serie`). `experience_request` sin pre-forja → se
  CONSTRUYE on-demand y se entrega sin preview; se registra como proposal
  individual `pending`. `club.html` jamás se linkea desde contenido público.
- **🚫 Límites duros**: index.html/propuestas.html/tv*.html/sw.js/engage.js/
  club.html/tools/ intocables. games/players/seasons/Propuestas/
  propuestasVisuales/pushSubs: solo lectura. `experiencias` la escriben LOS
  JUGADORES (sus propios botones), nunca la rutina (excepción: docs `vip-*`
  por orden explícita de Andrés).
- **📐 DEFINICIÓN DE "REMONTADA"**: SOLO cuenta terminar 1er puesto viniendo
  de atrás. Terminar 2do o 3ero NO es remontada.
- **📐 FÓRMULA DE "QUIÉN PAGA"**: el ganador y quien paga postre/picada de
  UNA fecha se deciden por **puntaje BASE (solo rondas)**, nunca por el
  total con multas/cortes.
- **📐 FÓRMULA DE FALTA EN LA TABLA ANUAL**: el ausente suma el **peor
  puntaje BASE** de esa fecha (solo rondas).
- **📐 H2H "padres e hijos"**: cuenta SOLO fechas donde ambos jugadores
  fueron participantes reales (no cuenta si uno estaba `absentees`).
- **🚫 Sin decisión de permanencia en los 4 formatos recurrentes ya
  promovidos (Andrés, 21/07 17:33, feedback libre, vinculante)**: el bloque
  "¿Esta sección merece existir?" (`engageApprove`/`engageRejected`) NO va
  en las páginas fechadas de previa/crónica/récords/chusmerío — siempre las
  aprueba, el módulo no aportaba nada. Sacado de `2026-07-20-cronica.html`
  el 22/07. Sigue existiendo en: formatos nuevos/experimentales, entrevistas
  personales, y fulfillment on-demand (certificados/juicios/piñas/poemas)
  — ahí sí es una decisión real de permanencia.
- **📨 Solicitudes → aprobación de Andrés ANTES de construir (Andrés,
  21/07 17:33, feedback libre, vinculante)**: cuando llega un
  `experience_request` (botón "Solicitar" o pedido por la casilla de
  feedback libre), la rutina YA NO fabrica on-demand de inmediato —
  registra la propuesta `pending` con la página SIN construir, se la
  manda a Andrés (escritorio/próximo push) para su OK explícito, y recién
  con `proposal_approved` de `andres` se construye y entrega. Cambia el
  flujo usado hasta el 21/07 (santidad-Gordo, tutela-mac, ánimo Mac/Negro,
  tómbola, etc. se fabricaban primero y se avisaba después). Primer caso
  bajo la regla nueva: `2026-07-22-poesia-mata-negro` (oda de Mata sobre
  su 6-0 a Negro, pedida el 20/07, sin construir, esperando OK).
- **📝 Caja de feedback por item en el escritorio (Andrés, 22/07 10:42,
  chat, vinculante)**: en `engage/solicitadas-27b2d470.html`, cada item
  que espera su OK (aprobación previa de una solicitud O decisión de
  permanencia) lleva su PROPIA caja de texto (`engageFeedback` con slug
  `desk-<item>`) debajo, para que conteste puntual sobre esa cosa sin
  tener que escribir por chat. Aplicar a todo item pendiente en cada
  regeneración diaria del escritorio.

## 💸 DEUDAS (ledger vigente al 21/07)

| Deudor | Debe | Desde | Estado |
|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 20/07 | **NUEVA**, activa. Perdió la T5 F3 con el peor puntaje base de la noche (423). |

Saldadas: **Naso** — deuda del 13/07 confirmada pagada por answer de pt
(21/07 00:53, `deuda-naso-postre-2026-07-13` → `pagada`), ~8 días corridos.
Antes: Tano 19d (alfajores) · Negro ~10d (picada francesa) · Gael (Martín
Fierro). Ranking de pagadores: Negro > Gael > Tano.

Libro de multas 2026 (recalculado de games, 18 fechas): **Tano 150** ·
Negro 80 · Naso 72 · Mac 40 · Gael 20 · Nachi/PT 10 · Mata/Carucha/Gordo/
Cobra 0. Cortes 2026: Tano 2 · Cobra 2 · Mac/PT/Gordo/Negro 1 · resto 0.

## 🚀 SÍNTESIS: qué convierte (números reales)

- La apertura de la crónica del 21/07 subió a 5/8 (PT, Mata, Mac, Carucha,
  Gael) — la mejor apertura de un push grupal hasta ahora, pese al retraso
  de despacho (ver más abajo). Reacciones 2 (love de Mac, like de Mata).
- El Laboratorio sigue generando pedidos espontáneos por la casilla de
  feedback libre: además de fabricación, ahora también generó 2 pedidos
  de CAMBIO DE PROCESO (sacar un módulo, exigir aprobación previa) — la
  casilla funciona tanto para contenido como para gobernanza del sistema.
- **Riesgo operativo detectado 2 veces esta semana**: el cron de dispatch
  se cuelga y el push grupal sale tarde (21/07: armado 14:00, salió
  17:20 — 3h20 de atraso). No afectó la entrega (8/8 igual) pero sí la
  ventana de "anticipación antes / épica después" que es el objetivo de
  fondo. Vigilar si se repite una 3ra vez — ahí sí ameritaría escalarlo
  como bug de infraestructura en vez de parche manual.
- Corrección de errata: `2026-07-19-liquidacion` tenía `status: "pending"`
  en proposals.json pese a que su propio `result_notes` ya documentaba el
  approve de Andrés del 20/07 — bug de escritura, corregido el 21/07 sin
  tocar contenido.

## 📊 Estado del sistema (corrida 22/07, miércoles 06:06 local)

- **games**: 18 fechas válidas, sin cambios desde ayer (no hay partida
  nueva — el próximo lunes de juego es 27/07, T5 Fecha 4, día de
  definición de temporada). Tabla anual y T5 sin cambios: 1º PT (5430) ·
  2º Gordo (5544) · 3º Carucha (5901) · 4º Cobra (6069) · 5º Gael (6339) ·
  6º Nachi (6341) · 7º Mata (6502) · 8º Tano (6613) · 9º Naso (6890) · 10º
  Mac (6896) · 11º Negro (6928). T5 tras F3: 1º Gordo (705) · 2º PT (753) ·
  3º Nachi (819) · 6º Carucha (858) · 11º Cobra (1060, último).
- **Compactación hoy**: 28 eventos anteriores al 08/07 (>14 días —
  `2026-07-06-cronica` y `2026-07-06-entrevista-cobra`, ambos ya
  reflejados en `result_notes` de esas proposals, más sus dwell/visitas)
  borrados de Firestore `engagement`. `queue.json`: nada que purgar, todo
  lo `sent` es de los últimos 7 días.
- **Reconciliación de la cola**: sin pushes `pending` de corridas
  anteriores (todo lo de ayer ya salió, `sent`). Encolado hoy:
  `2026-07-22-desk` (escritorio 08:45).
- **Proposals**: sin decisiones nuevas de Andrés (no hay `proposal_approved`
  ni `proposal_rejected` de su device desde ayer 17:31). Siguen `pending`,
  dentro de la ventana de 7 días (creadas 21/07): `2026-07-20-entrevista-carucha`,
  `exp-nachi-lloviendo`, `2026-07-20-animo-mac-negro`. Nueva hoy:
  `2026-07-22-poesia-mata-negro` (pending, SIN construir — primer caso de
  la regla de aprobación previa, ver REGLAS VINCULANTES).
- **pushSubs activos (8 personas)**: pt, negro, gael, cobra (2 devices),
  andres (2 devices), gordo, mac, carucha. `mata` invalid (dead), `mc`
  disabled. Sin eventos `push_unsubscribe`.
- **💬 FEEDBACK LIBRE (21/07 17:33, andres, en la crónica)**: 2 pedidos,
  ambos aplicados hoy — (1) sacar el módulo "¿Esta sección merece existir?"
  de la crónica → sacado, y establecida como regla permanente para los 4
  formatos recurrentes; (2) exigir su aprobación antes de construir
  cualquier solicitud → regla nueva vinculante, aplicada desde hoy.
- **Cambios en pages hoy**: `2026-07-20-cronica.html` (sacado el bloque de
  permanencia) y `engage/solicitadas-27b2d470.html` (regenerado con el
  estado de hoy: 1 pedido esperando aprobación previa, 3 pendientes de
  permanencia, métricas de la crónica de ayer).
- Sub-formatos usados: récords → clásico, horóscopo, Kryptonita. Chusmerío
  → clásico, confesiones, liquidación. Previa → clásico ×3. Crónica →
  clásico ×3 (última: 20-21/07, margen mínimo + doble ausencia de Cobra).

## 🗓️ Semana en curso

- 🧾 Dom 19/07: chusmerío "día de liquidación" → promovida.
- 🔥 Lun 20/07: la previa, T5 F3. Promovida. El Soplón (2do push 17:00),
  promovida. Tómbola de asientos entregada 2 veces (Andrés + Carucha).
- 📰 Mar 21/07: crónica de la T5 F3 (Carucha campeón por margen mínimo, 1
  punto en la ronda 11). Preview 09:00, general armado 14:00 pero salió
  17:20 (cron colgado, 2da vez en la semana). Carucha es HOMBRE — todas
  las concordancias corregidas (regla vinculante). La crónica linkea a la
  entrevista PÚBLICA de solo lectura, no a la sala con inputs (regla
  vinculante). Carucha encargó en la sala de prensa una parodia de
  "Lloviendo Estrellas" para Nachi (`exp-nachi-lloviendo`, aún sin
  distribuir — Nachi no tiene push activa). Apertura 5/8, la mejor hasta
  ahora.
- 🔇 **Mié 22/07 (hoy)**: silencio grupal, solo gestión. Aplicadas las 2
  reglas nuevas del feedback de ayer (sacar el módulo de permanencia de
  los formatos recurrentes + aprobación previa de solicitudes).
  Compactación de 28 eventos viejos. Escritorio reenviado con el primer
  caso de la regla nueva (poema de Mata pendiente de aprobación). Sin
  partida nueva — la próxima es el lunes 27/07 (T5 F4, define temporada).
- 🧬 **Jue 23/07**: entrevista personal, a un no-ganador del último lunes
  (Carucha ganó, así que no aplica a ella). Candidatos sin usar
  recientemente: Negro, Naso, Mac, Tano, Gael. Definir el jueves con datos
  frescos de quién no ha sido entrevistado en semanas recientes.

## TODO / ángulos sin usar

Definir a quién entrevistar el jueves 23/07 (no repetir a Carucha/Gordo/
Cobra, ya entrevistados recientemente) · decidir sobre el poema pendiente
de Mata (esperando su OK, regla nueva) · decidir distribución del sencillo
de Nachi · decidir permanencia de `2026-07-20-entrevista-carucha`,
`exp-nachi-lloviendo` y `2026-07-20-animo-mac-negro` (vencen ~28/07 si no
hay decisión) · especial sedes (esta vez fue en casa de Negro) ·
aniversarios (multa récord de 150 de Tano, 648 de Naso) · replicar el
flujo del club con nachi/naso/tano (3 lugares libres, piñas esperando en
el vault) · la T5 se define el 27/07 — Gordo lidera sin ganar, Cobra puede
necesitar ganar Y que Gordo/PT/Nachi tropiecen para no terminar último de
la temporada · si el cron de dispatch se cuelga una 3ra vez, escalarlo
como bug de infraestructura en vez de destrabarlo a mano cada vez.
