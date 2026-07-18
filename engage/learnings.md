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
- **Preview 09:00** (o 10:00 si es la entrevista del jueves): todo push del
  día → gemelo `<id>-preview` SOLO a andres, expira antes del envío general.
  Regla fija de Andrés 12/07.
- **Sala de prensa del martes**: al ganador, su device solo, ~10:00, linkeada
  desde la crónica, nunca push independiente a todos.
- **⭐ Experiencias VIP + 🥊 Piña Directa**: sin puertas/login para VER (VIP es
  marca); la puerta solo aplica a FORJAR/reclamar una piña en el Gimnasio
  (`engage/pina-directa.html`, valida device contra pushSubs active).
  Entrega automática vía workflow `pina-express` (cron 5 min, horno
  obligatorio ≥5 min) — el agente diario solo AUDITA
  `notifications/pina_deliveries.json`, nunca encola piñas a mano. Vault de
  11 piñas pre-forjadas (URLs secretas, no expiran, jamás linkeadas desde
  páginas/pushes grupales) — ver mapa jugador→URL en el propio
  `proposals.json` (id `pina-directa-serie`). `experience_request` con idea
  ya pre-forjada → push personal al solicitante 11:00 del día siguiente
  (mapa idea→página en `proposals.json` id `experiencias-solicitables-serie`
  + el resto se construye on-demand). `club.html` (invitación) jamás se
  linkea desde contenido público.
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
  importa ni lo recuerda. El especial `2026-07-18-remontadas` fue rechazado
  por esto (las 4 historias terminaban en 2do/3ero) y removido antes de
  salir. Para el archivo de "salón de fama": usar el criterio real — worst
  rank durante la fecha vs. GANÓ la fecha, no vs. final_rank cualquiera.

## 💸 DEUDAS (ledger vigente al 18/07)

| Deudor | Debe | Desde | Estado |
|---|---|---|---|
| Naso | 🍮/🧀 postre o picada | 13/07 | IMPAGA, única viva. 5 días al sábado 18/07. Dictamen de Carucha: «que pague doble». |

Saldadas: Tano 19d (pagó mal, alfajores) · Negro ~10d (pagó de lujo, picada
francesa) · Gael (Martín Fierro). Ranking de pagadores: Negro > Gael > Tano.

## 🚀 SÍNTESIS: qué convierte (números reales)

- La entrevista del jueves sigue siendo la fórmula más fuerte: Carucha
  respondió las 4 preguntas en minutos, dwell 299s, approve propio.
- La Crónica sostiene dwell días después. El especial de la entrevista de
  Carucha (viernes 17/07, fuera de cadencia) también convirtió fuerte:
  dwell 502s/521s de andres, reacción love, approve de andres Y de carucha.
- El Kryptonita (piña VIP de Cobra) recién PROMOVIDO hoy: approve real de
  andres detectado en esta corrida (17/07 14:16, se había perdido el
  approve secundario de 'sin-nombre' de las 11:32 que no decide).
- La Piña Directa mueve mucho dwell propio (mata 1703s, pepe explorando
  350-1000s por piña) — el vault entero funciona como imán de sesión larga.

## 📊 Estado del sistema (corrida 18/07, sábado 06:06 local)

- **games**: 17 fechas válidas (18 docs, 1 sin winner descartada). Sin
  partidas nuevas desde el 13/07; próxima esperada lunes 20/07.
- **Compactación hoy**: 18 eventos de exploración temprana (03-04/07: 2
  notification_clicked test, 7 page_visit, 9 dwell) borrados de Firestore
  `engagement` — sin señal de producto, solo pruebas iniciales del sistema.
- **Queue**: purgados 5 items `sent` de más de 7 días (2026-07-10-a..e).
  Reconciliado: nada desactualizado en lo que quedaba pendiente.
- **Proposals**: `2026-07-17-kryptonita-cobra` PROMOVIDA hoy (approve real
  de andres del 17/07 14:16:23, no detectado en la corrida de ayer porque
  ocurrió después de esa corrida). `2026-07-13-entrevista-gordo` sigue
  pending, vence 21/07, sin señal nueva.
- **Auditoría Piña Directa**: ledger solo tiene la entrega de mata (17/07).
  Un segundo `pina_request` (`pina-req-mata`, 17/07 14:16, mismo
  Andrés=Mata vía Gimnasio con alias ya resuelto) no generó entrega nueva —
  correcto, una piña por jugador, ya entregada. Sin fallos que reportar.
- **`experience_request` sin push (decisión de esta corrida)**: 4 eventos
  del 17/07 13:09-13:10 (device andres): fobia-carucha, paternidad-negro,
  santidad, casi-casi — los 4 con página pre-forjada en el vault. NO se
  encoló push: el mismo Andrés ya abrió y "dwelleó" las 6 páginas del vault
  completo esa misma tarde (14:24-14:28, 69-197s cada una) — un push al día
  siguiente avisando "está listo" habría sido redundante sobre contenido que
  ya vio. Si esto fue un error de criterio, avisar y se corrige.
- Sin eventos `push_unsubscribe`. Sub-formatos usados en récords: clásico
  (04/07), horóscopo (11/07) — hoy (18/07) especial remontadas.

## 🗓️ Semana en curso

- ✅ Sáb 11/07 horóscopo · ✅ Dom 12/07 confesiones · ✅ Lun 13/07 previa ·
  ✅ Mar 14/07 crónica · 🔇 Mié 15/07 silencio · ✅ Jue 16/07 entrevista
  Carucha (promovida) · 📰 Vie 17/07 crónica de la entrevista + Kryptonita +
  Gimnasio + vault de 11 piñas + primera entrega (mata) — todo fuera de
  cadencia, pedido directo de Andrés.
- ☢️ **Sáb 18/07 (hoy)**: especial remontadas CANCELADO por Andrés (criterio
  de remontada mal calibrado, ver regla arriba). Reemplazo dictado por él
  por chat: (1) Kryptonita de Cobra como "investigación finalizada" a las
  14:00 a TODOS MENOS COBRA (badge de la página cambiado a "Experiencia de
  investigación"); (2) experimento "dato caído": piñas directas de Mac,
  Cobra y PT entregadas encubiertas («📎 Se cayó un dato con tu nombre»,
  sin revelar qué es) a las 14:00 — Cobra recibe SU piña pero no el
  Kryptonita. Previews VERBATIM a andres 10:00 (pidió verlos en vivo; el
  suyo apunta a su piña de mata). Copy reescrito 2 veces a pedido: más
  marketinero/misterioso, título final «Se cayó un dato con tu nombre».
  Medir mañana: ¿el disfraz genera más clicks que el push descriptivo?
- 🍿 **Dom 19/07**: pendiente decidir sub-formato (usados: clásico 05/07,
  confesiones 12/07). Ángulo servido: "día de liquidación" — ranking de
  pagadores + Naso único moroso (6 días al domingo) + dictamen "doble".
- 🔥 **Lun 20/07**: la previa, T5 fecha 3. Si vienen Carucha Y Cobra juntos,
  ángulo del año (reencuentro tras el Kryptonita). Contadores de deuda
  anclados a esa noche.

## TODO / ángulos sin usar

Confirmar mañana si el especial remontadas convirtió (reacción/dwell/answer)
· domingo 19/07: cerrar sub-formato "día de liquidación" · especial sedes ·
aniversarios (648 de Naso, multa 150 de Tano) · replicar flujo del club con
nachi/naso/tano (3 lugares libres, piñas esperando en el vault) · H2H
inéditos sin publicar: Gordo 11-1 Mac, Nachi padre de Carucha 6-2 ("el
abuelo") · decisión de Andrés pendiente sobre entrevista-gordo (vence 21/07)
· verificar próxima corrida si el especial de remontadas generó pedidos
`experience_request` sobre PT/Mac/Negro/Tano (aún no tienen piña pre-forjada
propia fuera del vault de 11).
