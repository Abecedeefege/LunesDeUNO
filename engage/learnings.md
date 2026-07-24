# Learnings del agente — Lunes de UNO

## 🪪 REGLAS VINCULANTES (permanentes, no re-decidir)

- **🤖 Identidad = "Claudio" + WhatsApp propio** (Andrés, 20/07): el agente se
  presenta como Claudio. WhatsApp de contacto: +598 91 448 775
  (`https://wa.me/59891448775`), además del feedback al pie de cada página.
- **💬 Feedback libre en TODA página** (Andrés, 20/07): último elemento de
  contenido antes de `<script src="engage.js">` en toda experiencia nueva —
  textarea + botón que llama `engageFeedback(slug, texto, el)`. Cada corrida
  lee los `answer` con `question` que empiece en `"feedback-"` como señal de
  primer nivel; nunca se descartan en silencio (ver §4 de
  `.claude/commands/engagement.md`).
- **🧪 Laboratorio con catálogo diario** (Andrés, 20/07): `engage/
  laboratorio.html` se regenera TODAS las mañanas con frases nuevas por
  jugador, 3 módulos fijos (📜 Poesía ×3 · 🔬 Análisis ×2 · ✨ Extra ×2), sin
  repetir literalmente la frase del día anterior. Ver §3.6 del comando.
  **⚠️ Vigilar**: quedó sin regenerar 22/07 y 23/07 (2 corridas se lo
  saltearon) — recién se retomó el 24/07. Confirmar en cada corrida futura
  que efectivamente se tocó el archivo.
- **📝 No repetir la letra del pedido en la entrega** (Andrés, 21/07): se
  puede decir que lo pidieron, pero el tono se ejecuta, no se anuncia.
- **👥 Carucha es HOMBRE** (Andrés, 21/07): todos los jugadores en masculino
  salvo aviso en contra. Revisar concordancias antes de publicar.
- **🎙️ Sala de prensa del martes = 2 páginas** (Andrés, 21/07): sala privada
  (inputs) solo al ganador → entrevista PÚBLICA de solo lectura (con el
  encargo cumplido embebido) → la crónica linkea SOLO a la pública.
- **Andrés ES Mata**: devices `andres`/`mata` son la misma persona; en
  contenido publicado se lo nombra Mata.
- **Cadencia**: 4 pushes grupales/semana 14:00 (sáb récords · dom chusmerío
  · lun previa · mar crónica) + 1 personal jueves 15:00 (entrevista,
  preview a andres 10:00). Mié/vie silencio grupal. Fijada por Andrés
  04/07 y 16/07.
- **Preview 09:00** de todo push grupal → gemelo `<id>-preview` solo a
  andres, expira antes del envío general.
- **🗂️ Escritorio diario** `engage/solicitadas-27b2d470.html`, push a
  andres 08:45: TODO lo nuevo del día (páginas, pushes agendados,
  feedback), con caja de feedback propia por item pendiente. No re-listar
  items ya vistos una vez (22/07). Drafts/OKs pendientes primero, luego lo
  agendado, luego el feedback, al final la tabla del último envío grupal.
- **⭐ VIP + 🥊 Piña Directa**: sin puertas para VER; puerta solo para
  FORJAR en `engage/pina-directa.html`. Entrega automática vía workflow
  `pina-express` (cron 5 min) — el agente diario solo AUDITA
  `notifications/pina_deliveries.json`. `club.html` jamás se linkea desde
  contenido público.
- **🚫 Límites duros**: index.html/propuestas.html/tv*.html/sw.js/engage.js/
  club.html/tools/ intocables. games/players/seasons/Propuestas/
  propuestasVisuales/pushSubs: solo lectura.
- **📐 Fórmulas oficiales**: "remontada" = SOLO terminar 1º viniendo de
  atrás. "Quién paga" y falta anual = por puntaje BASE (solo rondas), nunca
  con multas/cortes. H2H "padres e hijos" = solo fechas con ambos
  presentes (no ausentes). **El corte resta 50 y es BUENO** — nunca
  enmarcarlo como falta ni "0 cortes" como prontuario limpio para elogiar.
- **🚫 Sin decisión de permanencia** en previa/crónica/récords/chusmerío ni
  en las entrevistas del jueves (21/07 + 22/07) — solo en fulfillment
  on-demand genuinamente nuevo. **🔕 Sin pregunta de suscripción** en esos
  mismos 4 formatos recurrentes (22/07).
- **📨 Solicitudes → aprobación de Andrés ANTES de construir** (21/07):
  `experience_request` o pedido por feedback libre se registra `pending`
  SIN construir la página; recién con `proposal_approved` de `andres` se
  fabrica y entrega.
- **🎤 Entrevista del jueves — rotación obligatoria** (22/07): nunca el
  ganador del último lunes ni quien ya tuvo una; preguntas 100% desde las
  stats BUENAS del entrevistado (nunca sus debilidades); miércoles con
  empate → Andrés elige entre candidatos armados. Programa fijo: **"Cabina
  en Vivo: Entrevistas Semanales"**, numerada por edición.
  **LEDGER**: Carucha 1 (16/07) · Gael 1 (23/07, 2ª edición) · resto
  (PT/Mac/Mata/Nachi/Negro/Naso/Tano/Gordo/Cobra) en 0. Próxima selección:
  miércoles 29/07, excluyendo al ganador del lunes 27/07.
- **📜 Némesis-oda rechazada** (22/07): no reintentar el formato "generador
  de odas por selector" sin replantearlo. El pedido original (oda puntual
  Mata 6-0 a Negro) sigue sin cumplirse — queda en TODO.

## 💸 DEUDAS (ledger vigente al 24/07)

| Deudor | Debe | Desde | Estado |
|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 20/07 (perdió T5 F3, peor base 423) | Activa, corriendo 4 días |

Saldadas: Naso (13/07→pagada 21/07, ~8 días) · Tano 19d (alfajores) ·
Negro ~10d (picada francesa) · Gael (Martín Fierro). Ranking pagadores:
Negro > Gael > Tano.

**Libro de multas/cortes 2026 — recalculado completo hoy desde `games`
(18 fechas, corrige el ledger anterior)**: multas Tano 150 · Negro 80 ·
Naso 72 · Mac 40 · Gael 20 · Nachi/PT 10 · Mata/Carucha/Gordo/Cobra 0.
Cortes: Tano 2 · Mac/PT/Gordo/Negro 1 · resto 0. **Corrección: Cobra
tiene 0 cortes en el año, no 2 como decía el ledger previo** — recontado
partida por partida, sin ningún corte registrado a su nombre.

## 🚀 SÍNTESIS: qué convierte (números reales)

- La apertura de la crónica del 21/07 sigue siendo la mejor hasta ahora
  (5/8). El Laboratorio generó 2 pedidos de cambio de proceso vía
  feedback libre (sacar módulo, exigir aprobación previa) además de
  pedidos de contenido — la casilla sirve para gobernanza, no solo copy.
- **Riesgo operativo**: el cron de dispatch se colgó 2 veces (21/07,
  3h20 de atraso). No se repitió el 22-23/07. Seguir vigilando.
- **Gap detectado hoy (24/07)**: `engage/laboratorio.html` no se
  regeneró los días 22/07 y 23/07 pese a la regla vinculante de
  regeneración diaria — quedó con el catálogo del 21/07 dos corridas de
  más. Corregido hoy con las 77 frases (11 jugadores × 7) recalculadas
  desde cero contra `games` fresco. Sin dato para saber si esto afectó
  el uso del Laboratorio esos días (no hubo `experience_request` nuevos
  22-23/07 de todas formas).

## 📊 Estado del sistema (corrida 24/07, viernes 06:06 local)

- **games**: 18 fechas válidas, sin cambios desde el 21/07 (T5 F3, ganó
  Carucha). Próxima fecha: lunes 27/07, T5 Fecha 4, define la
  temporada. Tabla anual recalculada completa hoy (ver arriba multas/
  cortes): 1º PT 5390 · 2º Gordo 5494 · 3º Carucha 5901 · 4º Cobra 6069 ·
  5º Nachi 6351 · 6º Gael 6359 · 7º Mata 6502 · 8º Tano 6663 · 9º Mac
  6886 · 10º Negro 6958 · 11º Naso 6962.
- **Compactación**: sin eventos de `engagement` anteriores a 14 días (el
  más viejo es del 10/07). `queue.json`: purgados 3 items `sent` de más
  de 7 días (16/07: medallero-gordo, ent-preview, ent), confirmados en
  `send_log.json` antes de borrar.
- **Reconciliación de la cola**: nada `pending` en este momento — todo lo
  de esta semana ya salió (`sent`) o fue cancelado a tiempo. No hace
  falta corregir nada de cara al público hoy.
- **Proposals**: 0 `pending` abiertas.
- **Engagement nuevo desde ayer**: solo 10 eventos, todos de bajo valor
  (5 dwell, 4 page_visit, 1 notification_clicked) — sin reacciones, sin
  answers, sin feedback libre. Destacan 2 dwell larguísimos de andres en
  `2026-07-23-entrevista-gael` (66322s) y `2026-07-20-entrevista-carucha`
  (162075s) — casi seguro pestaña abierta, no señal real de lectura.
  **Gael todavía no contestó** las `gael-entrevista-q1..q4` de su cabina
  (push del 23/07 15:00) — sin `answer` registrado aún.
- **pushSubs activos (8 personas)**: pt, negro, gael, cobra (2 devices),
  andres (2 devices), gordo, mac, carucha. `mata` invalid, `mc`
  disabled. Sin `push_unsubscribe`.
- **Viernes = silencio**: sin push hoy. Solo gestión + Laboratorio.

## 🗓️ Semana en curso

- 🧾 Dom 19/07 → 🔥 Lun 20/07 (T5 F3) → 📰 Mar 21/07 (crónica, Carucha
  campeón por 1 punto) → 🔇 Mié 22/07 (gestión: sacar módulos de
  permanencia/suscripción, aprobación previa de solicitudes) → 🧬 Jue
  23/07 (entrevista a Gael, 2ª edición de Cabina en Vivo, sin respuesta
  de Gael aún) → 🔇 **Vie 24/07 (hoy)**: sin push, Laboratorio
  regenerado (gap de 2 días corregido), queue purgada, ledger de
  multas/cortes corregido (Cobra 0 cortes). Sin partida nueva — la
  próxima es el lunes 27/07 (T5 F4, define temporada).

## TODO / ángulos sin usar

Seguir si Gael contesta la entrevista (aún sin `answer`) · retomar el
pedido original de Andrés de una oda puntual a su 6-0 sobre Negro con un
formato más simple que el generador rechazado · decidir distribución del
sencillo de Nachi para Carucha (`exp-nachi-lloviendo`, entregado pero sin
push activa de Nachi) · especial sedes (T5 F3 en casa de Negro) ·
aniversarios (multa récord 150 de Tano, 648 de Naso el 25/05) · replicar
el flujo del club con nachi/naso/tano (3 lugares libres) · la T5 se
define el 27/07 — Gordo lidera con 3 coronas en 16 fechas sin necesitar
ganar todas, Cobra (el más ganador del año, 5 coronas) puede necesitar
ganar Y que Gordo/PT/Nachi tropiecen · miércoles 29/07: candidatos
frescos para la entrevista siguiente, todos en 0 salvo Carucha/Gael,
excluir al ganador del 27/07 · si el cron de dispatch se cuelga una 3ra
vez, escalarlo como bug de infraestructura.
