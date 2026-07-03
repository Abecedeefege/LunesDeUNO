# Cómo activar la Routine del agente /engagement

La Routine NO está creada — la activás vos cuando quieras. El agente corre
**todos los días** aunque la cadencia sea semanal: cada mañana lee qué día es
y solo encola lo que toca (domingo/lunes/martes/jueves); el resto de los días
gestiona proposals, compacta datos y reescribe su memoria.

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

- 06:00 deja ≥3 h de margen antes del primer slot de envío del día (martes
  09:00 es el más temprano): tiempo de leer el feedback de anoche, construir
  la página, pushear a main y que GitHub Pages deploye ANTES de que el
  dispatcher mande el push que la linkea.
- Diaria y no "solo 4 días" porque el agente también tiene trabajo los días
  sin push: juzgar proposals (aprobadas/rechazadas/vencidas), borrar efímeras,
  compactar eventos, reconciliar la cola si algo quedó desactualizado y dejar
  la memoria lista. Además así la cadencia se puede cambiar editando
  `learnings.md`, sin tocar la Routine.

## Checklist previo (una sola vez, antes de la primera corrida)

1. Secret `VAPID_PRIVATE_KEY` cargado en GitHub (repo → Settings → Secrets
   and variables → Actions → New repository secret). La clave te la pasó
   Claude por chat al armar el sistema — jamás va en un archivo.
2. Suscripción activa: abrir
   `https://abecedeefege.github.io/LunesDeUNO/notificaciones.html` en tu
   teléfono → poner nombre → "Activar notificaciones".
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
