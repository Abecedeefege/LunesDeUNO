# Routine del agente /engagement

## ✅ ESTADO: ACTIVA — trigger v2 desde el 2026-07-06

- Trigger: `trig_01L9huoaXgfZkNbPGxef2XzS` ("LunesDeUNO — engagement diario
  06:00 UY (v2)"), con notificación push al dueño al terminar cada corrida.
- Cron: `0 9 * * *` **UTC** = 06:00 America/Montevideo (la plataforma suma
  unos minutos de jitter).
- Sesión nueva por corrida. Prompt: texto plano robusto (NO el slash `/engagement`
  pelado): clona el repo si el workspace arranca vacío y, si el slash command
  no está registrado, lee `.claude/commands/engagement.md` y lo sigue directo.

### ⚠️ Historia: por qué v2 (2026-07-06)

El trigger original (`trig_01UmgygfzHFXbiFqP1Kg8kF5`, creado 03/07, borrado
06/07) tenía prompt `/engagement` a secas y sus sesiones nuevas arrancaban
SIN el repo clonado (sin `sources` en el job): workspace vacío → el slash
command no existe → "Unknown command: /engagement" → corrida muerta. Fallaron
así las corridas del 04, 05 y 06/07 (el contenido salió igual porque estaba
pre-armado y el dispatcher de Actions es independiente). Si una corrida v2
falla, mirar: (a) ¿clonó el repo?, (b) ¿pudo pushear a main (credenciales)?
- Se administra desde claude.ai/code → Routines (pausar/editar/borrar), o
  pidiéndoselo a Claude en una sesión del entorno (tools `list_triggers` /
  `update_trigger` / `delete_trigger`). NO crear una segunda: revisar
  `list_triggers` antes.

Lo que sigue es la referencia de cómo se creó y por qué así.

---

El agente corre **todos los días**: cada mañana lee qué día es y encola el
push de las 14:00 que toca según la semana editorial; además gestiona
proposals, compacta datos y reescribe su memoria.

## Opción A — pedírselo a Claude (recomendada)

En una sesión de Claude Code de ESTE entorno (el que tiene LunesDeUNO como
source), pegá:

> Creá una routine diaria que corra a las 06:00 hora de Montevideo
> (America/Montevideo, UTC-3 fijo), con sesión nueva en cada corrida, cuyo
> prompt sea exactamente: /engagement

Claude usa su tool `create_trigger` con:
- **cron:** `0 9 * * *` (09:00 UTC = 06:00 Montevideo — verificá si tu
  configuración interpreta el cron en UTC; si interpreta hora local UY, es
  `0 6 * * *`)
- **sesión nueva por corrida** (fresh session): cada día arranca limpio; toda
  la memoria que importa está en `engage/learnings.md`, no en el chat.
- **prompt:** literalmente `/engagement`

## Opción B — UI de claude.ai/code

1. Abrí [claude.ai/code](https://claude.ai/code) → tu entorno con LunesDeUNO.
2. Routines → New routine.
3. Schedule: diaria, 06:00 America/Montevideo (o el cron de arriba).
4. Session: **new session per run**.
5. Prompt: `/engagement`.

## Por qué 06:00 y por qué diaria

- 06:00 deja 8 h de margen antes del push diario de las 14:00: tiempo de leer
  el feedback de anoche, construir la página, pushear a main y que GitHub
  Pages deploye ANTES de que el dispatcher mande el push que la linkea.
- La cadencia vigente (1 push/día a las 14:00) vive en `learnings.md`: se
  cambia editándola ahí o diciéndoselo al agente, sin tocar la Routine.
  Además del push, cada corrida juzga proposals (aprobadas/rechazadas/
  vencidas), borra efímeras, compacta eventos y reconcilia la cola.

## Checklist previo (una sola vez, antes de la primera corrida)

1. Secret `VAPID_PRIVATE_KEY` cargado en GitHub (repo → Settings → Secrets
   and variables → Actions → New repository secret). La clave te la pasó
   Claude por chat al armar el sistema — jamás va en un archivo.
2. Suscripción activa: abrir la página secreta
   `https://abecedeefege.github.io/LunesDeUNO/club.html` en tu teléfono →
   código de invitación (te lo pasó Claude por chat; no está escrito en
   ningún archivo del repo… salvo en el propio club.html, validación
   client-side de bajo riesgo) → apodo `andres` → "Activar los avisos".
   OJO: tu apodo debe ser exactamente `andres` — es el device cuyas
   aprobaciones/rechazos deciden sobre las proposals. Hay tope de 8
   dispositivos activos; la página no está linkeada desde ningún lado y
   lleva noindex.
3. Push de prueba de punta a punta: encolar en `notifications/queue.json` un
   item con `send_at` en el pasado y `expires_at` esta noche, commitear a
   main (el `on: push` del workflow dispara solo) y verificar que llega con
   la app cerrada. Revisar `send_log.json` (201 = aceptada).

## Control semanal

La primera semana, mirá las sesiones que deja la Routine: el reporte final del
agente (feedback de ayer, decisiones, pushes de hoy, SHA) es tu ventana de
control sin intervenir. Para frenar todo: pausá la Routine, o respondé el
control "🔕 esto es mucho, pausen" al pie de cualquier experiencia y el agente
baja el volumen solo.
