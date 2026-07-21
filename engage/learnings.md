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

- El Laboratorio sigue generando pedidos espontáneos por la casilla de
  feedback libre: 3 pedidos distintos el 20/07 (tómbola de asientos ×2,
  ánimo para los últimos 2), todos atendidos dentro de las 24-48h.
- Fulfillment on-demand (tómbola, certificados, juicios) sigue convirtiendo
  igual o mejor que el contenido pre-planificado — el patrón "lo pediste
  vos, lo tenés" (tono directo, sin vueltas) fue el de mejor recepción de
  la semana (Carucha volvió a pedir la tómbola después de ya haberla
  recibido Andrés, señal de que el formato generó curiosidad cruzada).
- La apertura de la previa del 20/07 subió a 4/8 (vs 2/8 la semana previa)
  — el "padres e hijos" con empate en vez de dominio (Cobra-Gordo 7-7)
  parece enganchar más que anunciar un dominio ya conocido.
- Corrección de errata: `2026-07-19-liquidacion` tenía `status: "pending"`
  en proposals.json pese a que su propio `result_notes` ya documentaba el
  approve de Andrés del 20/07 — bug de escritura de la corrida anterior,
  corregido hoy a `"promoted"` sin tocar el contenido.

## 📊 Estado del sistema (corrida 21/07, martes 06:06 local)

- **games**: 18 fechas válidas (subió de 17 a 18: se cargó anoche la T5
  Fecha 3, `game_1784597432274`, en casa de Negro — 9 jugadores, ausentes
  Mata y Cobra). Tabla anual recalculada de cero (metodología verificada,
  ver reglas arriba): 1º PT (5430) · 2º Gordo (5544) · 3º Carucha (5901) ·
  4º Cobra (6069) · 5º Gael (6339) · 6º Nachi (6341) · 7º Mata (6502) · 8º
  Tano (6613) · 9º Naso (6890) · 10º Mac (6896) · 11º Negro (6928).
  Victorias 2026: Cobra 5 · Gordo 3 · Carucha 3 · Nachi 2 · PT/Gael/Naso/
  Tano/Negro 1 · Mac/Mata 0. **Carucha pasó a Cobra por primera vez en el
  año** (5901 contra 6069) — el costo de que Cobra faltara anoche.
- **T5 tras la Fecha 3** (falta F4, 27/07): 1º Gordo (705, sin ganar más
  que 1 fecha) · 2º PT (753) · 3º Nachi (819) · ... · 6º Carucha (858, pese
  a ganar anoche) · 11º **Cobra (1060, último)** — de líder tras ganar la
  F1 a último por faltar F2 y F3.
- **La partida de anoche** (Negro, T5 F3): ganó Carucha (190 base), 1 punto
  arriba de Negro (199 vs 200) entrando a la última mano — la definió con
  un -10. Tano último (423), nueva deuda. Gordo logró un corte exacto
  (-50, ronda 2, único de los 9). Negro pagó una multa de 10 (ronda 4).
  Carucha le ganó a los 8 presentes esa noche, incluidos Nachi (que la
  domina 6-3 en el año) y PT (que ahora la domina solo 6-5, la brecha más
  chica que tuvieron).
- **H2H recalculado completo hoy** (18 fechas): tabla completa 11×11 en el
  script de la corrida — sin contradicciones con lo publicado hasta ahora.
  Cobra-Gordo sigue 7-7 (no jugaron juntos anoche, Cobra ausente).
- **Compactación hoy**: 19 eventos del 06/07 (>14 días, todos de
  `2026-07-06-la-previa`, ya reflejados en el `result_notes` de esa
  proposal) borrados de Firestore `engagement`. En `queue.json`: purgados
  11 items `sent` de más de 7 días (`2026-07-13-*` y `2026-07-14-*`).
- **Proposals**: `2026-07-19-liquidacion` → corregida a `promoted` (era un
  bug de status, ver SÍNTESIS). Nuevas hoy: `2026-07-20-cronica` (pending,
  sale hoy), `2026-07-20-sala-carucha` (pending, sale 10:00), y
  `2026-07-20-animo-mac-negro` (pending, fulfillment de feedback libre de
  Andrés — entregado solo a él, con pregunta de si redifundir).
- **pushSubs activos (8 personas)**: pt, negro, gael, cobra (2 devices),
  andres (2 devices), gordo, mac, carucha. `mata` invalid (dead), `mc`
  disabled. Sin eventos `push_unsubscribe`.
- **💬 FEEDBACK LIBRE (20/07, todos atendidos)**: (1) andres 17:55 pidió
  "ánimo con tomada de pelo para los últimos 2 de la anual" → construido
  hoy (`exp-mac-negro-animo-b7f2a9e1.html`, Mac + Negro), entregado solo a
  él. (2) pt 19:25 "quiero todo esto y más todos los días" → comentario
  positivo, sin acción, anotado como señal de que el ritmo actual gusta.
  (3) sin-nombre 19:29 y (4) carucha 20:40, ambos pidiendo el generador de
  asientos → ya resuelto el mismo día (`tombola-asientos.html`), sin
  acción nueva hoy.
- Sub-formatos usados: récords → clásico, horóscopo, Kryptonita. Chusmerío
  → clásico, confesiones, liquidación. Previa → clásico ×3. Crónica →
  clásico ×2, hoy 3ra edición (21/07) con foco en el margen mínimo y la
  doble ausencia de Cobra — headline nuevo, no repite "se la roba en la
  última mano" en el sentido literal de hace una semana (evento real
  distinto: aquella vez fue Gordo con -10 en la última mano también, pura
  coincidencia estadística, no un formato reciclado).

## 🗓️ Semana en curso

- 🧾 Dom 19/07: chusmerío "día de liquidación" → promovida.
- 🔥 Lun 20/07: la previa, T5 F3. Promovida. El Soplón (2do push 17:00),
  promovida. Tómbola de asientos entregada 2 veces (Andrés + Carucha).
- 📰 **Mar 21/07 (hoy)**: crónica de la T5 F3 (Carucha campeón por margen
  mínimo, 1 punto en la ronda 11). Preview 09:00 + general 14:00.
  Salió MUCHO trabajo de iteración por chat con Andrés durante la mañana:
  (1) escritorio reenviado corregido — regla nueva: lista TODO lo nuevo,
  no solo lo que espera OK; (2) el cron de dispatch se colgó 2 veces, se
  destrabó tocando queue.json (sin permiso de workflow_dispatch por API,
  403); (3) certificado de aliento Mac/Negro sin transcribir la letra del
  pedido (regla nueva); (4) **Carucha es HOMBRE** — corregidas todas las
  concordancias (regla vinculante); (5) la crónica linkea a una
  **entrevista PÚBLICA de solo lectura** (`2026-07-20-entrevista-carucha`),
  no a la sala de prensa con inputs (regla vinculante); (6) Carucha
  encargó en la sala de prensa una parodia de "Lloviendo Estrellas" para
  Nachi → fabricada fiel a la melodía de Cristian Castro, embebida en la
  entrevista pública y como standalone (`exp-nachi-lloviendo`). Andrés
  aprobó crónica + sala + entrevista por botón y dio el OK final por chat
  ("lo veo bien"). Pendiente: distribución del sencillo de Nachi (no tiene
  push activa; por ahora vive embebido en la entrevista pública).
- 🧬 **Jue 23/07**: entrevista personal, a un no-ganador del último lunes
  (Carucha ganó, así que no aplica a ella). Candidatos sin usar
  recientemente: Negro, Naso, Mac, Tano, Gael. Definir el jueves con datos
  frescos de quién no ha sido entrevistado en semanas recientes.

## TODO / ángulos sin usar

Definir a quién entrevistar el jueves 23/07 (no repetir a Carucha/Gordo/
Cobra, ya entrevistados recientemente) · especial sedes (esta vez fue en
casa de Negro) · aniversarios (multa récord de 150 de Tano, 648 de Naso) ·
replicar el flujo del club con nachi/naso/tano (3 lugares libres, piñas
esperando en el vault) · la T5 se define el 27/07 — Gordo lidera sin
ganar, Cobra puede necesitar ganar Y que Gordo/PT/Nachi tropiecen para no
terminar último de la temporada · seguir el resultado de la decisión de
Andrés sobre si difundir el certificado de ánimo a Mac/Negro.
