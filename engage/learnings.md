# Learnings del agente — Lunes de UNO

## 🪪 IDENTIDAD CLAVE (Andrés, 17/07 por chat, vinculante)

**Andrés ES Mata** — misma persona: el device `andres` (admin/decisiones) y el
device `mata` son suyos y ocupan UN solo lugar del club. Su piña es la de mata.
En contenido publicado se lo nombra Mata (jugador); "andres" es solo nombre de
device. **Regla de seguridad (17/07):** el club y el Gimnasio solo aceptan
apodos de los 11 jugadores (alias `andres`→`mata`); el cupo se cuenta por
PERSONAS (8/11 hoy), no por devices. El registro de prueba "pepe" (device
`689137cb…`, era Andrés testeando) fue desactivado en Firestore el 17/07 con
`invalid_reason` explícito — única escritura a pushSubs, autorizada por el
contexto del pedido.

## ⏱️ CADENCIA VIGENTE: 4 pushes grupales/semana a las 14:00 + 1 personal los jueves 15:00

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos") ·
Martes la crónica.** (Grupales, Andrés 2026-07-04.) Mié–vie: SILENCIO grupal,
con DOS excepciones ya usadas: la entrevista personal del jueves 15:00 (regla
fija) y **el push del viernes 17/07 11:00, orden puntual de Andrés por chat del
16/07** (crónica de la entrevista de Carucha — excepción única, NO es cadencia
nueva; si Andrés no lo vuelve a pedir, los viernes siguen mudos). Nunca dos
pushes de difusión el mismo día. Lunes/martes formato evergreen; sáb/dom rotan
sub-formato (feed quemado; horóscopo y confesiones usados la semana pasada).

**📬 REGLA FIJA DE PREVIEW (Andrés, 12/07):** todo push del día → gemelo
`<id>-preview` SOLO a andres a las 09:00, expira antes del envío general.

**🎤 REGLA DEL MARTES (07/07):** sala de prensa al ganador, su device solo,
~10:00; queda linkeada desde la crónica, nunca push independiente a todos.

**🧬 REGLA DEL JUEVES (16/07):** entrevista personal a un no-ganador del último
lunes (máx 4 preguntas: 2 texto + 2 opción), preview andres 10:00, envío 15:00.
Estreno 16/07 con Carucha: FUNCIONÓ ENTERO (ver semana en curso).

**⭐ EXPERIENCIAS VIP + 🥊 PIÑA DIRECTA (Andrés, 16/07 por chat, vinculante):**
- **SIN puertas/login**: las experiencias VIP se VEN abiertas (VIP es marca,
  no barrera). La activación de push se exige ÚNICAMENTE para forjar/reclamar
  una Piña Directa, y el mensaje de requisito aparece SOLO al solicitar.
- **🏷️ REGLA FIJA "BY <ENTREVISTADO>":** toda experiencia desprendida de una
  entrevista lleva SIEMPRE el nombre del entrevistado en el chip superior.
- **Piña Directa** = la estadística real que mejor deja parado a UN jugador,
  exagerada al infinito, en formato póster de boxeo. La #001 (Kryptonita) pega
  A Cobra (pedido de Andrés, derivada de la entrevista de Carucha) — página
  construida, aún sin push propio (linkeada solo desde la crónica del 17/07).
- **El Gimnasio** (`engage/pina-directa.html`, vault): valida
  `lunesdeuno_device_name` contra `pushSubs` (active). OK → `pina_request`;
  sin nombre/push → `pina_request_blocked` + mensaje con link a `club.html`
  (única excepción de linkeo autorizada por Andrés).
- **⚡ ENTREGA EXPRESS AUTOMÁTICA (Andrés, 17/07 por chat — reemplaza el
  protocolo manual):** workflow `pina-express` (cron cada 5 min) + script
  `tools/pina_express.js`: detectan `pina_request`, encolan y despachan solos.
  **Horno de 5 min obligatorio** (pedido explícito: "que no sea inmediato,
  para que parezca que trabaja") — la solicitud se entrega recién con ≥5 min
  de antigüedad, llega entre el minuto 5 y el 10. SIN preview a andres (la
  orden "lo antes posible" la reemplaza). Ledger:
  `notifications/pina_deliveries.json` — una piña por jugador; lo escribe el
  workflow, el agente diario solo lo AUDITA (verificar entregas/fallos cada
  corrida; no encolar piñas a mano nunca más).
- **VAULT:** 11 piñas pre-forjadas, URLs secretas (sufijo hex), NO expiran a
  los 7 días, JAMÁS linkeadas desde páginas/pushes grupales:
  pt→`pina-pt-fd4cb05e` · mac→`pina-mac-19ac3eb2` · mata→`pina-mata-32b16d4d` ·
  gael→`pina-gael-239245bf` · nachi→`pina-nachi-eb23fea7` ·
  carucha→`pina-carucha-a0bdc735` · gordo→`pina-gordo-5cec1f1c` ·
  cobra→`pina-cobra-307c49eb` · naso→`pina-naso-e6513433` ·
  negro→`pina-negro-e5f44ee5` · tano→`pina-tano-9a332eeb`.
  **Entregadas: mata (17/07 12:30, push `2026-07-17-pina-mata` a devices
  andres+mata — resolvió `pina-req-andres` y `pina-req-pepe`, ambos eran
  Andrés=Mata).** Los 2 `pina_request_blocked` de `sin-nombre` del 16/07
  ocurrieron durante la exploración nocturna de Andrés — presumiblemente sus
  tests; sin acción posible ni pendiente. El Gimnasio ahora emite
  `pina-req-<jugador canónico>` (alias resuelto) y bloquea apodos que no son
  de la mesa.
- **Cada piña trae (pedido de Andrés 16/07 noche):** (a) «📲 Compartir la
  piña»: renderiza el póster a imagen con canvas propio (sin librerías) y usa
  Web Share (fallback: descarga el PNG) — evento `pina_share`; (b) «⭐ Agregar
  la piña como experiencia»: upsertea `experiencias/pina-<slug>` (title/by/
  slug/url/ts) y la tarjeta «By <Nombre>: Piña Directa» aparece sola en
  Estadísticas → Experiencias — evento `pina_experiencia`. Ojo: al agregarla,
  SU url deja de ser secreta (decisión del jugador dueño, by design).
  ⚠️ Los eventos `pina_experiencia` de carucha y mac del 17/07 fueron CLICKS
  ACCIDENTALES de Andrés: pidió borrarlas y los docs `experiencias/pina-carucha`
  y `pina-mac` se eliminaron ese mismo día. Regla: la tarjeta solo vale si la
  agrega EL JUGADOR dueño de la piña; si aparece una que el dueño no agregó,
  consultar a Andrés antes de tocar nada.

**🎯 MISIÓN DEL PROYECTO (Andrés, 17/07 por chat, vinculante):** que los
jugadores INTERACTÚEN más con la app: que entren, generen experiencias y las
compartan. La rutina tiene libertad para crear LOOPS: cada experiencia debe
invitar a agendar la siguiente y/o compartir al grupo. Herramientas del loop:
(a) botón «📲 Compartir» en toda experiencia; (b) bloque «🧪 El laboratorio te
ofrece» con HASTA 3 botones «Solicitar…» SIEMPRE que haya stats extremas o una
experiencia que valga la pena — cada botón con key propia, texto basado en
datos reales, click → evento `experience_request` {pina, idea, desc, device} +
mensaje «Me pongo a trabajar y la mando en el próximo push».

**📮 ATENCIÓN DE `experience_request` (regla fija):** en cada corrida, leer los
eventos nuevos. Si la idea tiene página PRE-FORJADA en el vault → encolar push
personal al device solicitante para las **11:00** del día siguiente (o del
mismo día si la corrida es antes de las 10:00). Si NO tiene página → la rutina
la CONSTRUYE en esa corrida (misma calidad, datos recalculados, con sus propios
loops) y la encola igual a las 11:00. Preview a andres 09:00 como siempre.
MAPA idea→página pre-forjada (vault, URLs secretas):
`fobia-carucha`→exp-nachi-fobia-2d2a0ace · `semidios`→exp-nachi-semidios-08513375 ·
`adulterio`→exp-nachi-adulterio-402acf6a · `paternidad-negro`→exp-mata-paternidad-b0e9c73c ·
`santidad`→exp-mata-santidad-7bed2675 · `casi-casi`→exp-mata-casicasi-868fed14
(todas en `engage/`). El resto de las keys ofrecidas (una lista por jugador en
sus piñas + kryptonita: abandono, promedio, expediente-naso, gigantismo,
hijo-negro, mano-perfecta, masacre, paternidad-doble, proxima-paliza,
profecia-lunes, censo-familiar, milagro-lunes, pension-negro, censo,
patente-kryptonita, santidad-carucha, robo-1407, tutela-mac, santidad-gordo,
todo-o-nada, tricampeonato, paliza-2306, parricidio, presencia,
venganza-postre, 120-dias, paliza-1603, picada-gloriosa, var-2104, balistica,
record-1407, expediente-inverso, reencuentro) se construyen on-demand.

**✅ CORRECCIONES DE DATOS (17/07, orden de Andrés — regla reforzada: NUNCA
inventar; exagerar siempre lo REAL):** la piña de Nachi decía «7 mano a mano
dominados: récord absoluto» — FALSO: con criterio amplio (todas las duplas con
ventaja) PT domina 9, Nachi 7, Gordo/Mata 7. Corregida a «7 dominados y solo 2
perdidos: más hijos que padres» (lo dominan solo PT 5-3 y Mata 5-3). La piña de
PT se subió a «padre de 9 rivales — nadie domina más duplas» (verificado, es el
máximo). Todo superlativo exige verificación exhaustiva con criterio explícito.

**🚫 LÍMITES DUROS DE LA RUTINA (Andrés, 16/07 noche, vinculante y permanente):**
- La rutina diaria tiene libertad TOTAL para crear experiencias increíbles,
  pero **JAMÁS edita código ni el funcionamiento del anotador/la app**:
  index.html, propuestas.html, tv*.html, sw.js, engage.js, club.html, tools/
  quedan intocables SIN EXCEPCIONES futuras (las excepciones anteriores fueron
  órdenes directas de Andrés en sesiones de chat, no de la rutina).
- **Datos de Firestore de la app: solo lectura.** games/players/seasons/
  Propuestas/propuestasVisuales/pushSubs no se escriben nunca. `engagement` se
  lee y compacta como siempre. La colección **`experiencias` la escriben LOS
  JUGADORES** (botón de sus piñas) — la rutina no la escribe ni la borra.
- **Los pushes llevan SIEMPRE a páginas nuevas, no accesibles desde el sitio.**
  El ÚNICO lugar del sitio donde una experiencia puede aparecer es
  Estadísticas → Experiencias, y solo vía la colección `experiencias`
  (mecanismo de lectura instalado en index.html el 16/07 por orden directa de
  Andrés — cambio único e irrepetible; agregar experiencias = escribir un dato,
  nunca tocar código). Nota: `tools/pina_express.js` y su workflow existen por
  orden directa de Andrés por chat (17/07) — la rutina diaria tampoco los
  edita, solo audita su ledger.

## 💸 DEUDAS (ledger vigente al 2026-07-17, sin cambios desde el 16/07)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Naso | 🍮/🧀 postre o picada | 13/07 (Carucha, último con 414) | IMPAGA, única viva. 4 días al viernes 17/07. Dictamen de Carucha: «que pague doble». | `deuda-naso-postre-2026-07-13` |

Saldadas (confirmadas por Andrés 16/07, home limpio y en sync): **Tano** 19
días, pagó MAL (alfajores que no gustaron) · **Negro** ~10 días, pagó DE LUJO
(picada francesa) · **Gael** digno (Martín Fierro; caso `seasons/4` cerrado por
palabra de Andrés). Mac: sus 2 deudas salieron del home por otra sesión, no se
recontarán. Ranking de pagadores publicable: Negro > Gael > Tano.

## 🚀 SÍNTESIS: qué convierte (números reales)

- **La entrevista personal del jueves convirtió PERFECTO en su estreno**:
  Carucha click del push a los 12 min, dwell 299s scroll 100%, las 4 preguntas
  respondidas (2 textos largos y citables), reaction love y approve propio.
  Fórmula validada: stat destacable + lugar para burlarse del resto.
- La Crónica del martes sostiene dwell días después (821s/501s de Andrés el
  15/07). El formato tabloide + datos es el caballo del sistema.
- Deudas como running gag mutó a "quién pagó mejor" — material del domingo.
- Sin partidas nuevas desde el 13/07 (games: 18 docs, 17 fechas válidas +
  1 sin winnerPlayerId descartada); próxima fecha esperada lunes 20/07.

## 📊 Estado del sistema (2026-07-17, viernes, actualizado 08:55 local en chat)

- **Socios: 8 PERSONAS / 11 lugares** (conteo nuevo por persona, andres=mata):
  mata(×2 devices: andres+mata), pt, negro, cobra(×2), mac, gael, gordo,
  carucha. Faltan nachi, naso, tano (3 lugares libres). `mc` y `pepe`
  disabled. Sin eventos `push_unsubscribe`.
- `games`: 18 docs (17 fechas válidas + 1 finished sin winner, descartada).
  Cutoff de todo lo afirmado hoy: recálculo del 17/07, sin partidas nuevas.
- Eventos nuevos desde la corrida anterior (16/07 ~19:02 en adelante):
  confirmación de las 4 respuestas de Carucha (ya en síntesis previa) +
  approve de andres a `2026-07-17-cronica-entrevista-carucha` (21:23:42Z) +
  approve de andres a `pina-directa-serie` (ya vault, solo confirmatorio) +
  ~20 `vip_unlock`/`page_visit`/`dwell` de andres explorando el Gimnasio y las
  piñas anoche + 2 `pina_request_blocked` + 1 `pina_request` de andres (ver
  arriba, pendiente de su decisión). Nada por debajo del cutoff de 14 días
  (más viejo = 03/07) — sin compactación necesaria hoy.
- Queue: 2 pendientes (`2026-07-17-cronica-ent-preview` 09:00 y
  `2026-07-17-cronica-ent` 11:00) — reconciliados: datos de Naso/Kryptonita
  siguen vigentes (sin partidas nuevas, sin answer de deuda), se mantienen sin
  cambios. Resto de la cola `sent` <7 días, nada para purgar aún (cutoff 7
  días = 10/07, todo lo `sent` es posterior).
- Proposals: `2026-07-17-cronica-entrevista-carucha` PROMOVIDA hoy (approve de
  andres del 16/07 detectado en esta corrida). `2026-07-17-kryptonita-cobra`
  sigue pending (sin decisión, creada 16/07, no vence hasta 23/07).
  `2026-07-13-entrevista-gordo` sigue pending (vence 21/07). Vault sin cambios
  de estado (gimnasio + serie de piñas).

## 🗓️ Semana en curso

- ✅ Sáb 11/07 horóscopo · ✅ Dom 12/07 confesiones · ✅ Lun 13/07 previa ·
  ✅ Mar 14/07 crónica (todas promovidas) · 🔇 Mié 15/07 silencio.
- ✅ **Jue 16/07:** entrevista a Carucha — aprobada, respondida entera,
  promovida. Derivó en la tanda especial de la noche: crónica de la entrevista
  (viernes 11:00, ya aprobada por Andrés), Kryptonita de Cobra #001, el
  Gimnasio y las 11 piñas del vault — todo construido y encolado.
- 📰 **Vie 17/07 (hoy):** preview a andres 09:00 y push general
  `2026-07-17-cronica-ent` 11:00 (en cola, vigentes). A las ~08:40 Andrés
  entró por chat: reveló andres=mata, pidió el cupo por personas con tablero
  de 11 en club.html, la regla de apodos válidos (implementada en club.html y
  el Gimnasio; pepe desactivado), y su piña — entregada hoy 12:30
  (`2026-07-17-pina-mata`, personal, no rompe el silencio grupal). Además la
  corrida de las 06:06 promovió la proposal de la crónica y confirmó que no
  hacía falta compactar ni purgar.
- 🏆 **Sáb 18/07 (récords):** ¡OJO! la crónica del viernes YA quema las citas
  de Carucha — NO repetirlas como gancho. Ángulo recomendado: especial
  remontadas (pendiente del TODO) o la caída de Cobra 1º→7º. Sub-formatos ya
  usados: clásico (04/07), horóscopo (11/07).
- 🍿 **Dom 19/07 (chusmerío):** ángulo servido "día de liquidación": ranking de
  pagadores + Naso único moroso (6 días al domingo) + dictamen "doble" de
  Carucha. Sub-formatos usados: clásico (05/07), confesiones (12/07).

## TODO / ángulos sin usar

Mañana: verificar que `2026-07-17-pina-mata` salió y evaluar señales de la
primera piña entregada (reaction/dwell de mata) · especial remontadas
(candidato sáb 18/07) · día de liquidación (candidato dom 19/07) · especial
sedes · aniversarios (648 de Naso, multa 150 de Tano) · replicar flujo del
club con nachi/naso/tano (3 lugares libres; sus piñas esperan en el vault) ·
H2H inéditos sin publicar: Gordo 11-1 Mac (citado solo en piña secreta), Nachi
padre de Carucha 6-2 ("el abuelo") · señal pendiente: decisión de Andrés sobre
entrevista-gordo (vence 21/07) y kryptonita-cobra (vence 23/07) · si el lunes
20/07 vienen Carucha Y Cobra, la previa tiene el ángulo del año servido (el
reencuentro padre-hijo tras el expediente kryptonita).
