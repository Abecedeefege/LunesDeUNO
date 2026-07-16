# Learnings del agente — Lunes de UNO

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

**⭐ EXPERIENCIAS VIP + 🥊 PIÑA DIRECTA (Andrés, 16/07 por chat, vinculante;
REVISADO por Andrés el 16/07 a la noche):**
- **SIN puertas/login**: las experiencias VIP se VEN abiertas (VIP es marca,
  no barrera). La activación de push se exige ÚNICAMENTE para forjar/reclamar
  una Piña Directa, y el mensaje de requisito aparece SOLO al solicitar.
- **🏷️ REGLA FIJA "BY <ENTREVISTADO>" (Andrés, 16/07 noche):** toda
  experiencia desprendida de una entrevista lleva SIEMPRE, automáticamente, el
  nombre del entrevistado en el chip superior ("⭐ Experiencia VIP · By
  Carucha"). Aplica a todas las entrevistas futuras sin que Andrés lo pida.
- **Piña Directa** = la estadística real que mejor deja parado a UN jugador,
  exagerada al infinito, en formato póster de boxeo. La #001 (Kryptonita) es la
  excepción fundacional: pega A Cobra (pedido de Andrés, derivada de la
  entrevista de Carucha).
- **El Gimnasio** (`engage/pina-directa.html`, sin fecha, vault): página
  abierta; al tocar "solicitar" valida `lunesdeuno_device_name` contra
  `pushSubs` (active) vía runQuery. OK → evento `pina_request` (id
  `pina-req-<device>`); sin nombre o sin push → mensaje "asociá tu nombre de
  jugador a un device con push activas" + evento `pina_request_blocked`.
- **PROTOCOLO DE SOLICITUD (cada corrida):** buscar eventos `pina_request`
  nuevos → si el device tiene sub activa y su piña está en el vault → encolar
  push personal a ESE device con su URL secreta (preview a andres 09:00 del
  mismo día salvo orden distinta). Marcar en learnings quién ya la recibió.
- **VAULT (status en proposals.json):** pedido explícito del dueño, NO expira a
  los 7 días. Las 11 piñas pre-forjadas (URLs secretas, sufijo hex, JAMÁS
  linkearlas desde páginas/pushes grupales — mismo régimen que club.html):
  pt→`pina-pt-fd4cb05e` · mac→`pina-mac-19ac3eb2` · mata→`pina-mata-32b16d4d` ·
  gael→`pina-gael-239245bf` · nachi→`pina-nachi-eb23fea7` ·
  carucha→`pina-carucha-a0bdc735` · gordo→`pina-gordo-5cec1f1c` ·
  cobra→`pina-cobra-307c49eb` · naso→`pina-naso-e6513433` ·
  negro→`pina-negro-e5f44ee5` · tano→`pina-tano-9a332eeb` (todas en `engage/`).
  Entregadas hasta hoy: ninguna.

## 💸 DEUDAS (ledger vigente al 2026-07-16)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Naso | 🍮/🧀 postre o picada | 13/07 (Carucha, último con 414) | IMPAGA, única viva. 4 días al viernes 17/07. Dictamen de Carucha en la entrevista: «que pague doble». | `deuda-naso-postre-2026-07-13` |

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
- Sin partidas nuevas desde el 13/07; próxima fecha esperada lunes 20/07.

## 📊 Estado del sistema (2026-07-16, jueves — 2ª sesión del día, pedido directo)

- Subs activas: 9 personas / 10 devices (cobra ×2): andres, pt, mata, negro,
  cobra, mac, gael, gordo, carucha. `mc` disabled. Faltan nachi, naso, tano.
- `games`: 19 docs (17 fechas válidas + no terminadas). Cutoff de todo lo
  afirmado hoy: recálculo completo del 16/07 (17 fechas).
- Eventos: la tanda nueva del 16/07 es la entrevista de Carucha completa (ver
  síntesis) + el flujo de Andrés (preview 11:58, love, approve 11:59 local).
  Próxima compactación de viejos ~17-18/07 (cutoff 14 días).
- Queue: 2 pendientes nuevos (preview 09:00 + crónica 11:00 del 17/07). Resto
  `sent` <7 días. Proposals: entrevista-carucha PROMOVIDA (approve de andres
  por botón); entrevista-gordo sigue pending (vence 21/07); nuevos: crónica
  17/07 (pending), kryptonita (pending), gimnasio + serie piñas (vault).
- Stat verificada estrella (pedida por Andrés): **Cobra gana 2/12 (17%) con
  Carucha presente y 3/4 (75%) sin él**; sus últimas 3 coronas = las últimas 3
  ausencias de Carucha; márgenes con papá 16 y 1, sin papá 70/107/21; 2 últimos
  puestos con Carucha en mesa. Todo recalculado de games el 16/07.

## 🗓️ Semana en curso

- ✅ Sáb 11/07 horóscopo · ✅ Dom 12/07 confesiones · ✅ Lun 13/07 previa ·
  ✅ Mar 14/07 crónica (todas promovidas) · 🔇 Mié 15/07 silencio.
- 🧬 **Jue 16/07:** estreno del slot del jueves con Carucha — aprobado,
  respondido entero, promovido. A la tarde Andrés pidió por chat (esta sesión):
  (1) crónica de la entrevista con push VIERNES 11:00, (2) experiencia VIP
  "Kryptonita de Cobra" desprendida de la crónica (piña directa #001, con la
  stat 17%/75%), (3) el Gimnasio de solicitudes, (4) las 11 piñas del vault.
  TODO construido y encolado en esta sesión.
- 📰 **Vie 17/07:** preview a andres 09:00 (pending). El push general
  `2026-07-17-cronica-ent` (11:00) quedó **EN DRAFT por orden de Andrés
  (16/07 noche): NO sale hasta que él lo apruebe por chat** — solo Andrés lo
  convierte draft→pending; si el día pasa sin OK, no sale y se limpia. Fuera
  de eso, silencio; la corrida del viernes solo gestiona (`pina_request`
  nuevos, decisiones, reconciliación).
- 🏆 **Sáb 18/07 (récords):** ¡OJO! la crónica del viernes YA quema las citas
  de Carucha — NO repetirlas como gancho. Ángulo recomendado: especial
  remontadas (pendiente del TODO) o la caída de Cobra 1º→7º. Sub-formatos ya
  usados: clásico (04/07), horóscopo (11/07).
- 🍿 **Dom 19/07 (chusmerío):** ángulo servido "día de liquidación": ranking de
  pagadores + Naso único moroso (6 días al domingo) + dictamen "doble" de
  Carucha. Sub-formatos usados: clásico (05/07), confesiones (12/07).

## TODO / ángulos sin usar

Vigilar `pina_request` desde el viernes (protocolo arriba) · especial
remontadas (candidato sáb 18/07) · día de liquidación (candidato dom 19/07) ·
especial sedes · aniversarios (648 de Naso, multa 150 de Tano) · replicar flujo
del club con nachi/naso/tano (sin sub, sus piñas esperan en el vault — entrega
vía Andrés/WhatsApp si las piden) · H2H inéditos sin publicar: Gordo 11-1 Mac
(citado solo en piña secreta), Nachi padre de Carucha 6-2 ("el abuelo") · señal
pendiente: decisión de Andrés sobre entrevista-gordo (vence 21/07) · si el
lunes 20/07 vienen Carucha Y Cobra, la previa tiene el ángulo del año servido
(el reencuentro padre-hijo tras el expediente kryptonita).
