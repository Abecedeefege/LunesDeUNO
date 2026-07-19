# Learnings del agente — Lunes de UNO

## 🪪 REGLAS VINCULANTES (permanentes, no re-decidir)

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
- **🗂️ Escritorio diario "Las solicitadas por otros" (Andrés, 19/07 por
  chat, vinculante)**: TODAS las mañanas, push a device andres con la landing
  `engage/solicitadas-27b2d470.html` (URL secreta + gate device andres/mata,
  SOLO visible por él, jamás linkeada desde contenido público). La corrida
  matutina la REGENERA con: (1) experiencias solicitadas por otros jugadores
  con links y estado, (2) sección "para revisar" con URLs y copys de TODO lo
  que sale ese día. Timing: send_at 08:45 — el cron de respaldo de
  push-dispatch (\*/30 11-23 UTC) deriva varios minutos; el 19/07 el preview
  de las 09:00 no salió porque el cron corrió 08:51 local y el slot
  siguiente se salteó. Con 08:45 el slot de ~08:5x lo agarra.
- **⭐ Experiencias VIP + 🥊 Piña Directa**: sin puertas/login para VER (VIP es
  marca); la puerta solo aplica a FORJAR/reclamar una piña en el Gimnasio
  (`engage/pina-directa.html`, valida device contra pushSubs active).
  Entrega automática vía workflow `pina-express` (cron 5 min, horno
  obligatorio ≥5 min) — el agente diario solo AUDITA
  `notifications/pina_deliveries.json`, nunca encola piñas a mano. Vault de
  11 piñas pre-forjadas (URLs secretas, no expiran, jamás linkeadas desde
  páginas/pushes grupales) — mapa jugador→URL en `proposals.json` (id
  `pina-directa-serie`). `experience_request` con idea YA pre-forjada
  (serie `experiencias-solicitables-serie`, hoy 6 páginas: 3 nachi + 3 mata)
  → push personal al solicitante 11:00 del día siguiente. `experience_request`
  con idea SIN pre-forja (caso nuevo, visto hoy 19/07 con Gordo pidiendo 2
  ideas propias desde su propia piña) → se CONSTRUYE on-demand con el mismo
  molde visual de una idea análoga ya existente (certificado→santidad,
  juicio→paternidad/tutela), recalculando todo de `games`, y se entrega
  igual al día siguiente sin preview; se registra como proposal individual
  `pending` (no vault) porque no es pre-forja reutilizable. `club.html`
  (invitación) jamás se linkea desde contenido público.
- **🚫 Límites duros**: index.html/propuestas.html/tv*.html/sw.js/engage.js/
  club.html/tools/ intocables SIN excepciones futuras. games/players/
  seasons/Propuestas/propuestasVisuales/pushSubs: solo lectura.
  `experiencias` la escriben LOS JUGADORES (sus propios botones), nunca la
  rutina. Los pushes llevan a páginas nuevas no accesibles desde el sitio;
  el único lugar visible es Estadísticas → Experiencias vía la colección
  `experiencias`.
- **📐 DEFINICIÓN DE "REMONTADA" (Andrés, 18/07 por chat, vinculante):** una
  remontada es SOLO cuando alguien viene de atrás/de abajo y termina en
  1er puesto (gana). Terminar 2do o 3ero NO es remontada — a nadie le
  importa ni lo recuerda.
- **📐 FÓRMULA DE "QUIÉN PAGA" (verificado 19/07 contra index.html):** el
  ganador y el que paga postre/picada de UNA fecha se deciden por **puntaje
  BASE (solo rondas)**, nunca por el total con multas/cortes — eso solo
  impacta la tabla anual. `rounds`/`fines`/`cortes` en Firestore son arrays
  **por RONDA** (`rounds[i].v[slot]`), no por slot — hay que sumar sobre
  todas las rondas para cada slot. Confirmado recalculando 18/05 (Negro 422
  de base, no 372 con corte) y 22/06 (Tano 425 de base, no 375).

## 💸 DEUDAS (ledger vigente al 19/07)

| Deudor | Debe | Desde | Estado |
|---|---|---|---|
| Naso | 🍮/🧀 postre o picada | 13/07 | IMPAGA, única viva. 6 días al domingo 19/07. Dictamen de Carucha: «que pague doble». |

Saldadas: Tano 19d (pagó mal, alfajores) · Negro ~10d (pagó de lujo, picada
francesa) · Gael (Martín Fierro). Ranking de pagadores: Negro > Gael > Tano.

Libro de multas 2026 (total en fichas, recalculado de games): Tano 150 ·
Naso 72 · Negro 70 · Mac 40 · Gael 20 · Nachi 10 · PT 10 · Mata/Gordo/
Carucha/Cobra 0.

## 🚀 SÍNTESIS: qué convierte (números reales)

- La entrevista del jueves sigue siendo la fórmula más fuerte: Carucha
  respondió las 4 preguntas en minutos, dwell 299s, approve propio.
- El Kryptonita (piña VIP de Cobra) promovido: además del approve real de
  andres (17/07 14:16), se registró un SEGUNDO approve del mismo device el
  18/07 17:57 (redundante, no cambia nada — la página ya estaba promovida).
- La Piña Directa sigue moviendo dwell propio y generando pedidos en cadena:
  esta semana Cobra (191s, share) y PT (dwell + share) abrieron y compartieron
  su propia piña el mismo día que la recibieron. Gordo hizo lo mismo (dwell
  61s) y encima pidió 2 experiencias propias nuevas — primera vez que alguien
  pide algo SIN pre-forja existente (ver regla arriba).
- El Gimnasio (`pina-directa.html`) ya recibió pedidos de gordo y pt esta
  semana — señal de que el flujo de autoservicio funciona sin empujarlo.

## 📊 Estado del sistema (corrida 19/07, domingo 06:06 local)

- **games**: 17 fechas válidas (18 docs, 1 sin winner descartada, sin
  cambios desde el 13/07). Próxima fecha esperada lunes 20/07 (T5 fecha 3).
  Tabla anual recalculada de cero hoy con la fórmula correcta (ver regla de
  "quién paga" arriba): 1º PT (5073) · 2º Gordo (5224) · 3º Cobra (5546) ·
  4º Carucha (5711) · 5º Nachi (5985) · 6º Gael (6040) · 7º Mata (6079) ·
  8º Tano (6240) · 9º Mac (6575) · 10º Naso (6680) · 11º Negro (6706).
- **Compactación hoy**: 24 eventos de exploración del 04/07 (>14 días)
  borrados de Firestore `engagement` — ya estaban reflejados en el
  result_notes de la proposal `2026-07-04-records`, sin pérdida de señal.
  En `queue.json`: purgado `2026-07-11-a` (sent, >7 días).
- **Proposals**: 2 nuevas `pending` hoy — `2026-07-19-exp-gordo-santidad` y
  `2026-07-19-exp-gordo-tutela-mac` (fulfillment de 2 experience_request de
  Gordo del 18/07 20:02, sin pre-forja, construidas on-demand). Vencen
  26/07 si Andrés no las aprueba/rechaza. `2026-07-13-entrevista-gordo`
  sigue `pending` sin señal nueva, vence 21/07.
- **Auditoría Piña Directa / experience_request**: pedido `paternidad-negro`
  (andres/mata, 18/07 13:03) ya tenía pre-forja en la serie → encolado hoy
  11:00 (`2026-07-19-paternidad-negro`). Pedidos `santidad-gordo` y
  `tutela-mac` (gordo, 18/07 20:02) SIN pre-forja → construidas hoy 2
  páginas nuevas (`exp-gordo-santidad-f574ee8e.html`,
  `exp-gordo-tutela-mac-2b601123.html`) con datos 100% recalculados de
  games, encoladas 11:00 y 11:10 respectivamente.
- **pushSubs activos (8 personas)**: pt, negro, gael, cobra (2 devices),
  andres (2 devices), gordo, mac, carucha. `mata` invalid (dead), `mc`
  disabled. Sin eventos `push_unsubscribe`.
- Sub-formatos usados: récords → clásico (04/07), horóscopo (11/07),
  remontadas (18/07, cancelado y reemplazado). Chusmerío → clásico (05/07),
  confesiones (12/07), **liquidación (19/07, nuevo hoy)**.

- **⚠️ Piña de PT — riesgo de duplicado latente**: pina-req-pt (18/07) no
  tiene entrada en `pina_deliveries.json` (ya la recibió vía «dato caído»);
  hoy el express lo saltea porque el item `2026-07-18-dato-pt` en queue.json
  contiene su URL. Cuando ese item se purgue (>7 días, ~25/07), el express
  la re-entregaría. Al purgar: conservar ese item, o pedirle a Andrés que
  el express registre a pt en el ledger. NO purgar a ciegas.
- **Corrida extra del 19/07 (mediodía, pedido de Andrés por chat)**:
  (1) recordatorio del Gimnasio a Mac y Negro 14:05 (únicos suscriptos sin
  piña forjada); (2) landing `laboratorio.html` creada — push de invitación
  a pt/carucha/andres quedó en DRAFT esperando su OK al ejemplo;
  (3) escritorio "solicitadas" creado y pusheado de inmediato con todas las
  URLs del día + el preview de las 09:00 que había quedado colgado del cron.

## 🗓️ Semana en curso

- ✅ Sáb 18/07: Kryptonita de Cobra a todos menos Cobra + piñas encubiertas
  "dato caído" a Mac/Cobra/PT (experimento de Andrés, fuera de formato
  récords estándar) + entrega de la piña de Gordo (pina-express).
- 🧾 **Dom 19/07 (hoy)**: chusmerío sub-formato "día de liquidación"
  (`2026-07-19-a`, preview 09:00, general 14:00) — deuda de Naso (6 días) +
  libro de multas + ranking de pagadores + H2H PT-Naso (10-2). Además 3
  entregas personales: paternidad-negro a andres/mata (11:00), santidad-gordo
  y tutela-mac a gordo (11:00/11:10).
- 🔥 **Lun 20/07**: la previa, T5 fecha 3. Si Gordo gana sería su primera
  racha de 3 fechas seguidas (récord histórico, nadie lo logró aún — ya
  quedó anotado en su certificado de santidad de hoy). Contadores de deuda
  anclados a esa noche.
- 📰 **Mar 21/07**: crónica si hay partida nueva. Vence la proposal
  `2026-07-13-entrevista-gordo` si Andrés no decide antes.

## TODO / ángulos sin usar

Confirmar mañana si el especial "liquidación" convirtió (reacción/dwell/
answer/approve) · resultado del certificado de santidad y el juicio de
tutela de Gordo (primera vez que se construye on-demand sin pre-forja: medir
si el approve/reacción es igual de fuerte que las piezas pre-forjadas) ·
especial sedes · aniversarios (648 de Naso, multa 150 de Tano) · replicar
flujo del club con nachi/naso/tano (3 lugares libres, piñas esperando en el
vault) · H2H inéditos sin publicar: Gael domina Nachi 7-1, Nachi domina Tano
7-3, Tano domina Negro 7-2, Nachi domina Naso/Negro/Carucha 6-2 cada uno ·
decisión de Andrés pendiente sobre entrevista-gordo (vence 21/07) · si Gordo
rompe la racha de 3 el 20/07, hay material inmediato para la crónica del
martes.
