# Learnings del agente — Lunes de UNO

## 🪪 REGLAS VINCULANTES (permanentes, no re-decidir)

- **💬 Feedback libre en TODA página (Andrés, 20/07, vinculante)**: último
  elemento de contenido antes del `<script src="engage.js">`, en TODA
  experiencia nueva a partir de ahora — textarea + botón "Enviar" que llama
  a `engageFeedback(slug, texto, el)` (función nueva en `engage.js`, ver
  §4 de `.claude/commands/engagement.md` para el bloque HTML exacto a
  copiar). Cada corrida lee los `answer` con `question` que empiece en
  `"feedback-"` como señal de primer nivel (dato a corregir, pedido de
  experiencia, opinión) — nunca se descartan en silencio.
- **🧪 Laboratorio con catálogo diario (Andrés, 20/07, vinculante)**:
  `engage/laboratorio.html` se regenera TODAS las mañanas con frases
  nuevas por jugador, organizadas en 3 módulos fijos (mismo orden/íconos
  siempre): 📜 Poesía (3 frases: poemas cortos, roast de dominancia H2H o
  brag de una stat propia) · 🔬 Análisis (2 frases: informe extenso y
  exagerado, propio o comparativo) · ✨ Extra (2 frases libres, apuntando a
  lo que más enganche). Ver detalle completo y prefijos de `idea`
  (`poesia-*`/`analisis-*`/`extra-*`) en §3.6 de
  `.claude/commands/engagement.md`. No repetir literalmente la frase del
  día anterior para el mismo jugador.
- **Andrés ES Mata**: devices `andres` y `mata` son la misma persona/mismo
  lugar del club. En contenido publicado se lo nombra Mata. Cupo del club se
  cuenta por PERSONAS (8/11 hoy: mata×2, pt, negro, cobra×2, mac, gael,
  gordo, carucha; faltan nachi, naso, tano). `mc`/`pepe` disabled.
- **Cadencia**: 4 pushes grupales/semana 14:00 (sáb récords · dom chusmerío
  · lun previa con "padres e hijos" · mar crónica) + 1 personal jueves 15:00
  (entrevista a un no-ganador del último lunes). Mié/vie silencio grupal.
  Nunca dos pushes de difusión el mismo día; nunca el mismo link 2 días
  seguidos. Fijada por Andrés 04/07, jueves 16/07.
- **Preview 09:00** (o 10:00 si es la entrevista del jueves): todo push
  GRUPAL del día → gemelo `<id>-preview` SOLO a andres, expira antes del
  envío general. Regla fija de Andrés 12/07. Las entregas PERSONALES
  (piña-express, fulfillment de experience_request) NO llevan preview — se
  mandan directo, mismo criterio que pina-express.
- **Sala de prensa del martes**: al ganador, su device solo, ~10:00, linkeada
  desde la crónica, nunca push independiente a todos.
- **🗂️ Escritorio diario "Las solicitadas por otros" (Andrés, 19/07 +
  refinado 20/07 por chat, vinculante)**: TODAS las mañanas, push a device
  andres con la landing `engage/solicitadas-27b2d470.html` (URL secreta +
  gate device andres/mata, SOLO visible por él, jamás linkeada desde
  contenido público). Timing: send_at 08:45. **FORMATO NUEVO (20/07,
  reemplaza al anterior)**: mostrar SOLO lo que necesita su atención —
  concretamente los push que él tiene que revisar/aprobar ANTES de que yo los
  mande (drafts/holds, con copy + link). Si algo ya está aprobado o no
  requiere su atención, NO va (nada de FYI de entregas, "sin acción", ni
  decisiones ya resueltas). Si no hay nada pendiente de su OK, estado vacío
  honesto. Y al final SIEMPRE: una tabla breve por jugador del último envío
  grupal con métricas reales (entregado 201/410, si lo abrió, reacción/dwell/
  answer), recomputadas de send_log + engagement.
- **⭐ Experiencias VIP + 🥊 Piña Directa**: sin puertas/login para VER (VIP es
  marca); la puerta solo aplica a FORJAR/reclamar una piña en el Gimnasio
  (`engage/pina-directa.html`, valida device contra pushSubs active).
  Entrega automática vía workflow `pina-express` (cron 5 min, horno
  obligatorio ≥5 min) — el agente diario solo AUDITA
  `notifications/pina_deliveries.json`, nunca encola piñas a mano. Vault de
  11 piñas pre-forjadas (URLs secretas, no expiran, jamás linkeadas desde
  páginas/pushes grupales) — mapa jugador→URL en `proposals.json` (id
  `pina-directa-serie`). `experience_request` con idea YA pre-forjada
  (serie `experiencias-solicitables-serie`) → push personal al solicitante
  11:00 del día siguiente. `experience_request` sin pre-forja → se
  CONSTRUYE on-demand con un molde visual análogo, recalculando todo de
  `games`, y se entrega igual sin preview; se registra como proposal
  individual `pending`. `club.html` (invitación) jamás se linkea desde
  contenido público.
- **🚫 Límites duros**: index.html/propuestas.html/tv*.html/sw.js/engage.js/
  club.html/tools/ intocables SIN excepciones futuras. games/players/
  seasons/Propuestas/propuestasVisuales/pushSubs: solo lectura.
  `experiencias` la escriben LOS JUGADORES (sus propios botones), nunca la
  rutina (excepción puntual: docs `vip-*` por orden explícita de Andrés).
- **📐 DEFINICIÓN DE "REMONTADA" (Andrés, 18/07, vinculante):** una
  remontada es SOLO cuando alguien viene de atrás/de abajo y termina en
  1er puesto (gana). Terminar 2do o 3ero NO es remontada.
- **📐 FÓRMULA DE "QUIÉN PAGA" (verificado 19/07):** el ganador y el que
  paga postre/picada de UNA fecha se deciden por **puntaje BASE (solo
  rondas)**, nunca por el total con multas/cortes. `rounds`/`fines`/`cortes`
  son arrays **por RONDA** (`rounds[i].v[slot]`), hay que sumar sobre todas
  las rondas para cada slot.
- **📐 FÓRMULA DE FALTA EN LA TABLA ANUAL (verificado 20/07 recalculando de
  cero contra el número publicado del 19/07 — coincide exacto):** el
  ausente suma el **peor puntaje BASE** de esa fecha (solo rondas, SIN sumar
  fines/cortes de nadie) — no el peor total. Usar total en vez de base para
  la falta desvía la tabla ~100-150 pts por jugador.
- **📐 H2H "padres e hijos" (verificado 20/07 contra 3 certificados ya
  publicados — coincide exacto):** cuenta SOLO fechas donde ambos jugadores
  fueron participantes reales de esa partida (no cuenta si uno de los dos
  estaba de `absentees`). Recalculado así: Gordo-Mac 11-1/12 ✓, Gordo-Naso
  9-3/12 ✓, Gordo-Gael 9-3/12 ✓, Gordo-Negro 7-2/9 ✓, Mata-Negro 6-0/6 ✓ —
  los 5 coinciden exacto con los certificados ya publicados, confirma el
  método.

## 💸 DEUDAS (ledger vigente al 20/07)

| Deudor | Debe | Desde | Estado |
|---|---|---|---|
| Naso | 🍮/🧀 postre o picada | 13/07 | IMPAGA, única viva. 7 días a la noche del lunes 20/07. Dictamen de Carucha: «que pague doble». Confirmada "sigue" por answer de pt (19/07, señal secundaria, no decide pero no contradice el ledger). |

Saldadas: Tano 19d (pagó mal, alfajores) · Negro ~10d (pagó de lujo, picada
francesa) · Gael (Martín Fierro). Ranking de pagadores: Negro > Gael > Tano.

Libro de multas 2026 (total en fichas, recalculado de games): Tano 150 ·
Naso 72 · Negro 70 · Mac 40 · Gael 20 · Nachi 10 · PT 10 · Mata/Gordo/
Carucha/Cobra 0.

## 🚀 SÍNTESIS: qué convierte (números reales)

- La entrevista del jueves sigue siendo la fórmula más fuerte: Carucha
  respondió las 4 preguntas en minutos, dwell 299s, approve propio.
- El Kryptonita (piña VIP de Cobra) y la Serie Piña Directa siguen moviendo
  dwell + pina_share + pedidos en cadena (Cobra, PT, Gordo abrieron y
  compartieron su propia piña el mismo día que la recibieron).
- El Laboratorio (`laboratorio.html`) y el Gimnasio (`pina-directa.html`)
  ya reciben tráfico espontáneo sin empuje: pt volvió solo a laboratorio
  21:34 del 19/07 (reacción love), fuera de cualquier push.
- Construir experiencias on-demand sin pre-forja (santidad-gordo,
  tutela-mac) funciona igual de bien que las pre-forjadas: santidad-gordo
  ya PROMOVIDA (approve + love de andres en minutos); tutela-mac abierta
  pero sin decisión aún — no es señal negativa, es la única de las 3 nuevas
  de esta semana que Andrés no llegó a resolver todavía.
- **Corrección de precisión (20/07):** el certificado de santidad de Gordo
  (ya promovido, no se toca) afirma que ganar hoy sería su "primera racha
  de 3 seguidas" — recalculado, es incorrecto (sería su 2da consecutiva, no
  la 3ra). Se evitó repetir el error en la previa de hoy, que usa el dato
  correcto. Ninguna corrección retroactiva a la página ya promovida — fuera
  de alcance de esta corrida, queda anotado para si Andrés quiere ajustarla.

## 📊 Estado del sistema (corrida 20/07, lunes 06:06 local)

- **games**: 17 fechas válidas, sin cambios desde el 13/07 (T5 fecha 3 se
  juega esta noche). Tabla anual recalculada de cero por segunda vez
  consecutiva (metodología ahora verificada con detalle, ver reglas
  arriba): 1º PT (5073) · 2º Gordo (5224) · 3º Cobra (5546) · 4º Carucha
  (5711) · 5º Nachi (5985) · 6º Gael (6040) · 7º Mata (6079) · 8º Tano
  (6240) · 9º Mac (6575) · 10º Naso (6680) · 11º Negro (6706). Victorias
  2026: Cobra 5 · Gordo 3 · Carucha 2 · Nachi 2 · PT/Gael/Naso/Tano/Negro 1
  · Mac/Mata 0. T5: F1 Cobra (07/07), F2 Gordo (07/14) — 1 a 1, se define
  hoy o el 27/07.
- **H2H recalculado completo hoy** (ver regla de metodología arriba):
  Cobra-Gordo pasó a estar **7-7** (empatados, antes reportado 8-7 Cobra
  con una metodología distinta — el número de hoy es el verificado).
  Nachi domina a Gael **7-1** (el learnings anterior tenía esto AL REVÉS:
  decía "Gael domina Nachi 7-1" — error corregido hoy). Nachi domina a
  Tano 7-3, a Naso 6-2, a Negro 6-2, a Carucha 6-2 (estos 4 ya estaban bien
  en el learnings anterior, confirmados).
- **Compactación hoy**: 6 eventos del 05/07 (>14 días) borrados de
  Firestore `engagement` — ya reflejados en el result_notes de la proposal
  `2026-07-05-chusmerio`, sin pérdida de señal. En `queue.json`: purgados
  `2026-07-12-a-preview` y `2026-07-12-a` (sent, >7 días).
- **Gap encontrado y corregido**: la proposal `2026-07-19-liquidacion`
  (chusmerío de ayer) nunca se había registrado en `proposals.json` pese a
  haber salido con preview+general. Registrada hoy como `pending` con el
  historial real (approve secundario de pt, sin decisión de andres); no
  afecta el push ya despachado, solo la trazabilidad.
- **Proposals**: `2026-07-19-exp-gordo-santidad` → PROMOVIDA (approve de
  andres 19/07 13:06 + love). `2026-07-19-exp-gordo-tutela-mac` → sigue
  pending, sin decisión, vence 26/07. `2026-07-13-entrevista-gordo` →
  **CERRADA por chat de Andrés (20/07)**: "ya se hizo, contestó algunas,
  quedó en el pasado, olvidemos ese tema" — marcada `promoted` (la página
  queda, sigue linkeada desde la sala de prensa de la crónica del 13/07),
  sin más seguimiento. `2026-07-19-liquidacion` → sigue pending (recién
  registrada ayer), vence 26/07, todavía sin decisión de andres.
  `2026-07-20-la-previa` → **PROMOVIDA el mismo día**: Andrés la abrió y
  aprobó por botón a las 08:32 local, antes incluso del preview de las
  09:00 (reacción love + answer suscripción=sí).
- **pushSubs activos (8 personas)**: pt, negro, gael, cobra (2 devices),
  andres (2 devices), gordo, mac, carucha. `mata` invalid (dead), `mc`
  disabled. Sin eventos `push_unsubscribe`.
- Sub-formatos usados: récords → clásico (04/07), horóscopo (11/07),
  Kryptonita/investigación (18/07, reemplazo especial). Chusmerío →
  clásico (05/07), confesiones (12/07), liquidación (19/07). Previa →
  clásico (06/07, 13/07); edición de hoy (20/07) mantiene el formato con
  headline nuevo (empate H2H en vez de dominio).
- **🕵️ El Soplón (Andrés, 20/07, 2º push del día)**: experiencia detective
  personal (`engage/2026-07-20-el-soplon.html`, gate por device, andres→mata)
  que acompaña la previa: un 2º push a TODOS los suscriptos a las 17:00 con
  tono "pss, che, datos para hoy de noche". Da ayudas de asiento 100% de
  datos: a quién EVITAR sentarse al lado (peor H2H), a quién BUSCAR (mejor
  H2H), el "blanco" (Naso 3/5 y Negro 4/6 van al fondo en mesas de ~10), el
  corte de -50 (repartir 7 exactas; 6 jugadores nunca lo lograron), y la
  multa personal. Para Negro/Mac —que casi no le ganan a nadie— se dice con
  honestidad en vez de inventar ventaja. **Verificado adversarialmente antes
  de salir**: 5 agentes independientes (workflow) recomputaron H2H/fondo/
  cortes/multas desde Firestore; la página pasó 40/40 chips H2H + prosa. (El
  auditor marcó 6 "mismatches" que resultaron ser errores de transcripción en
  mi checklist de verificación, NO en la página — lección: verificar la
  PÁGINA directamente, no un archivo de claims re-tipeado a mano.)
- **Corrida extra del 20/07 (mañana, pedido de Andrés por chat, DOS
  cambios estructurales)**: (1) agregado `engageFeedback` a `engage.js`
  (función nueva, no se tocó ninguna existente) + bloque de feedback libre
  añadido a la previa de hoy y documentado como obligatorio en TODA página
  futura (ver regla vinculante arriba); se re-encoló un push a andres
  avisando el cambio. (2) `laboratorio.html` reescrito de catálogo plano
  (3 botones fijos por jugador) a 3 módulos con íconos (📜🔬✨), 7 líneas
  por jugador (11 jugadores × 7 = 78 botones), todas con datos
  recalculados hoy de `games`; regla vinculante nueva exige regenerarlo
  cada mañana con frases no repetidas.

## 🗓️ Semana en curso

- 🧾 Dom 19/07: chusmerío "día de liquidación" — deuda de Naso (7 días
  hoy) + libro de multas + ranking de pagadores + H2H PT-Naso. Además 3
  entregas personales (paternidad-negro, santidad-gordo, tutela-mac) y el
  primer envío del escritorio "solicitadas".
- 🔥 **Lun 20/07 (hoy)**: la previa, T5 fecha 3. Preview 09:00 + general
  14:00. Escritorio "solicitadas" 08:45 (regenerado, sin pedidos nuevos).
  Headline: Cobra-Gordo 1-1 en la T5 y empatados 7-7 en el historial;
  Naso paga 7 días; Nachi-Gael y Nachi-Tano como pares frescos.
- 📰 **Mar 21/07**: crónica si hay partida nueva de anoche. Vence la
  proposal `2026-07-13-entrevista-gordo` si Andrés no decide antes —
  probablemente expira sola (7 días desde el 14/07 sin señal).

## TODO / ángulos sin usar

Confirmar mañana quién ganó la F3 (Cobra retoma la ventaja / Gordo empata
la racha) y si el H2H Cobra-Gordo se rompió · resultado del certificado de
tutela-mac (falta la decisión de Andrés) · especial sedes · aniversarios
(648 de Naso, multa 150 de Tano) · replicar flujo del club con
nachi/naso/tano (3 lugares libres, piñas esperando en el vault) · si la F3
define la T5 hoy o se estira a la F4 del 27/07, hay material inmediato
para la crónica del martes · considerar avisarle a Andrés (fuera de esta
corrida, es su decisión) si quiere que se corrija el dato de "racha de 3"
en el certificado de santidad ya promovido de Gordo.
