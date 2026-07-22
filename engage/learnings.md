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
- **📐 EL CORTE ES BUENO (Andrés, 22/07, vinculante — error detectado en
  la 1ª entrevista a Gael)**: un corte resta **50 puntos** al que lo hace
  (menos puntos = mejor) — es una jugada BUENA, no una falta ni algo
  vergonzoso. Nunca enmarcar "tiene cortes" como algo malo ni "0 cortes"
  como un prontuario limpio para elogiar — es al revés: más cortes es
  mejor para quien los hace. No confundir con las MULTAS (esas sí suman
  puntos, esas sí son malas).
- **🚫 Sin decisión de permanencia en NINGUNA experiencia recurrente
  (Andrés, 21/07 17:33 + ampliada 22/07, vinculante)**: el bloque "¿Esta
  sección/formato merece existir?" (`engageApprove`/`engageRejected`) NO
  va en previa/crónica/récords/chusmerío (regla del 21/07) NI en las
  entrevistas personales del jueves (ampliación del 22/07: "quita eso de
  las entrevistas") — siempre las aprueba, el módulo no aporta nada.
  Sacado de `2026-07-20-cronica.html` (22/07) y de `2026-07-23-entrevista-
  gael.html` (22/07). Sigue existiendo solo en fulfillment on-demand
  genuinamente nuevo/experimental (certificados, juicios, generadores
  como `nemesis-oda.html`) donde la permanencia SÍ es una decisión real.
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
- **🗑️ El escritorio NO re-lista items ya enviados (Andrés, 22/07 13:56,
  feedback libre, vinculante)**: "una vez enviados no deberían aparecer
  más acá". Un item (permanencia pendiente o lo que sea) se muestra en
  `solicitadas-27b2d470.html` SOLO mientras es nuevo/no revisado. En
  cuanto Andrés lo vio una vez (dwell registrado, o ya fue linkeado desde
  un push que salió), NO se lo vuelve a listar al día siguiente esperando
  una decisión — si no contesta nada, el proposal sigue su curso normal
  (7 días → `dropped` si no hay aprobación) pero SIN aparecer cada mañana
  en el escritorio. El escritorio es para lo nuevo de HOY, no un backlog
  acumulativo de pendientes viejos.
- **🔕 Sin pregunta de suscripción en los formatos recurrentes ya fijos
  (Andrés, 22/07 13:56, feedback libre, vinculante)**: en previa/crónica/
  récords/chusmerío (los 4 formatos ya aprobados), tampoco va la pregunta
  "¿Querés X todos los [día]? Sí, obvio / No hace falta" — el usuario ya
  está suscripto por default al recibir push (sáb-mar). Sacada de
  `2026-07-20-cronica.html` el 22/07. Se suma a la regla del 21/07 que ya
  sacó el bloque "¿esta sección merece existir?" de estos mismos 4
  formatos: en las ediciones nuevas de previa/crónica/récords/chusmerío
  solo van reacción (love/like/meh/no) + feedback libre, nada de
  preguntas de permanencia ni de suscripción.
- **🎤 Entrevista personal del jueves — ROTACIÓN OBLIGATORIA (Andrés,
  22/07, chat, vinculante — refuerza y precisa la regla del 16/07)**:
  cada semana, la entrevista personal del jueves va a alguien que NO sea
  (a) el ganador del último lunes, NI (b) alguien que ya haya tenido una
  entrevista personal de jueves. Cuando TODOS los 11 jugadores ya tuvieron
  la suya, se reinicia el ciclo empezando por los que tengan MENOS
  entrevistas acumuladas (si hay empate, priorizar a quien hace más
  tiempo no la tiene). Llevar el conteo en el LEDGER de abajo y
  actualizarlo cada jueves — nunca se salta una semana sin registrarlo.
  Las entrevistas SIEMPRE dan lugar a la broma/humor/tomada de pelo hacia
  el resto, especialmente hacia quienes vienen últimos o tienen las peores
  stats en algún departamento — nunca una entrevista "seria" sin ángulo
  de cargada.
  **📐 Dirección del ángulo (Andrés, 22/07, vinculante — corrige el error
  de la 1ª entrevista a Gael)**: las preguntas se arman 100% desde las
  stats BUENAS del entrevistado — con qué puede alardear — nunca desde
  sus propias debilidades o sequías. El entrevistado se burla de OTROS
  usando sus propios números fuertes como plataforma; no se lo expone a
  quedar mal parado con su propio historial. Si el entrevistado tiene
  pocas stats positivas, buscar el ángulo que sí tenga (posición en la
  tabla, prontuario limpio, una noche récord, un H2H que domine) en vez
  de forzar una debilidad. Preguntas CORTAS.

  **🎙️ Marca del formato (Andrés, 22/07, vinculante)**: la entrevista
  personal del jueves se llama **"Cabina en Vivo: Entrevistas Semanales"**
  — nombre fijo a reutilizar en cada edición (mismo lugar que "La Previa"
  o "La Crónica" tienen su nombre fijo), numerada por edición ("2ª
  edición", "3ª edición"...). El estilo visual puede variar por
  entrevistado, pero el nombre del programa NO cambia.

  **LEDGER DE ENTREVISTAS DEL JUEVES** (conteo de entrevistas personales
  recibidas — actualizar cada jueves, nunca borrar):
  | Jugador | Entrevistas | Última | Edición de "Cabina en Vivo" |
  |---|---|---|---|
  | Carucha | 1 | 16/07 | 1ª (previa a la marca, "Laboratorio de Paternidad Unística") |
  | Gael | 1 (pendiente 23/07) | 23/07 | 2ª |
  | PT, Mac, Mata, Nachi, Negro, Naso, Tano, Gordo, Cobra | 0 | — | — |

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
- **Proposals**: resueltas hoy por chat/feedback directo de Andrés (13:54-
  13:59) → `promoted`, cerradas sin más seguimiento: `2026-07-20-entrevista-
  carucha` ("ya se envió"), `exp-nachi-lloviendo` ("ya no requiere atención"),
  `2026-07-20-animo-mac-negro` ("descartá esto, ya lo vi"). El poema
  `2026-07-22-poesia-mata-negro` se amplió a una experiencia nueva:
  `2026-07-22-nemesis-oda` (pending, generador de odas al némesis para
  los 11 jugadores, ver Estado del sistema abajo).
- **pushSubs activos (8 personas)**: pt, negro, gael, cobra (2 devices),
  andres (2 devices), gordo, mac, carucha. `mata` invalid (dead), `mc`
  disabled. Sin eventos `push_unsubscribe`.
- **💬 FEEDBACK LIBRE (21/07 17:33, andres, en la crónica)**: 2 pedidos,
  ambos aplicados hoy — (1) sacar el módulo "¿Esta sección merece existir?"
  de la crónica → sacado, y establecida como regla permanente para los 4
  formatos recurrentes; (2) exigir su aprobación antes de construir
  cualquier solicitud → regla nueva vinculante, aplicada desde hoy.
- **💬 FEEDBACK LIBRE ronda 2 (22/07 13:54-13:59, andres, en el escritorio)**:
  4 items — (1) ampliar el poema pendiente a una experiencia generadora
  de odas al némesis para todos → construida (`nemesis-oda.html`); (2)
  no re-listar en el escritorio items ya enviados → regla vinculante nueva;
  (3) sacar la pregunta de suscripción de los formatos recurrentes fijos →
  regla vinculante nueva, aplicada a la crónica; (4) descartar el
  certificado de ánimo Mac/Negro → cerrado, `promoted`.
- **🎙️ Entrevista del jueves**: Andrés pidió por chat (22/07) usar a Gael
  esta semana — no ganó el 20/07 (ganó Carucha) y nunca tuvo una entrevista
  personal. Construida un día antes de lo habitual (`2026-07-23-entrevista-
  gael.html`) a pedido directo, y corregida 2 veces el mismo día: (1) 1ª
  versión mal enfocada (ángulo en sus debilidades: sequía, verdugo, quien
  lo domina) → reescrita 100% desde sus stats BUENAS, preguntas acortadas,
  bloque de permanencia sacado; (2) esa reescritura usó "0 cortes" como
  prontuario limpio — error: el corte resta 50 puntos y es BUENO, no una
  falta (regla nueva "el corte es bueno") → reemplazado por su única
  victoria del año (más que las 0 de Mac), el stat que Andrés pidió usar
  para burlarse de quien nunca ganó. Final: némesis Naso (8-4), 5º en la
  tabla arriba de 6, 1 victoria vs Mac (0), su mejor noche (155 pts).
  Enviada a Andrés para preview; push a Gael programado para mañana 23/07
  15:00 salvo veto. Ledger de entrevistas actualizado (ver REGLAS
  VINCULANTES).
- **Cambios en pages hoy**: `2026-07-20-cronica.html` (sacados los bloques
  de permanencia Y de suscripción), `engage/solicitadas-27b2d470.html`
  (cajas de feedback por item + ya no re-lista lo resuelto),
  `engage/nemesis-oda.html` (nueva, generador de odas), `engage/2026-07-23-
  entrevista-gael.html` (nueva, entrevista del jueves adelantada).
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
- 🔇 **Mié 22/07 (hoy)**: silencio grupal, solo gestión. Sesión de la
  mañana: aplicadas las 2 reglas del feedback del 21/07 (sacar el módulo
  de permanencia de los formatos recurrentes + aprobación previa de
  solicitudes), compactación de 28 eventos viejos, escritorio con cajas de
  feedback por item (pedido de Andrés 10:42). Sesión de la tarde: Andrés
  contestó las cajas — cerró 3 proposals viejas (`promoted`, ya no
  aparecen más en el escritorio, regla nueva), amplió el poema pendiente a
  `nemesis-oda.html` (generador para los 11 jugadores), sacó la pregunta
  de suscripción de la crónica, y pidió adelantar la entrevista del jueves
  a Gael. Sin partida nueva — la próxima es el lunes 27/07 (T5 F4, define
  temporada).
- 🧬 **Jue 23/07**: entrevista personal a **Gael** (pedido directo de
  Andrés el 22/07) — construida y enviada un día antes. Push al
  entrevistado 15:00 salvo veto de Andrés en el preview.

## TODO / ángulos sin usar

Seguir la entrevista de Gael el 23/07 (reacciones + respuestas + resultado
para citar el próximo push) · decidir distribución del sencillo de Nachi
· especial sedes (esta vez fue en casa de Negro) · aniversarios (multa
récord de 150 de Tano, 648 de Naso) · replicar el flujo del club con
nachi/naso/tano (3 lugares libres, piñas esperando en el vault) · la T5 se
define el 27/07 — Gordo lidera sin ganar, Cobra puede necesitar ganar Y
que Gordo/PT/Nachi tropiecen para no terminar último de la temporada · si
el cron de dispatch se cuelga una 3ra vez, escalarlo como bug de
infraestructura en vez de destrabarlo a mano cada vez · decidir permanencia
de `2026-07-22-nemesis-oda` (generador nuevo, pendiente de approve) ·
próxima semana: candidatos para la entrevista del jueves siguiente (ya sin
Carucha ni Gael): PT, Mac, Mata, Nachi, Negro, Naso, Tano, Gordo, Cobra —
todos en 0, elegir según quién gane/pierda el 27/07.
