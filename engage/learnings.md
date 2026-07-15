# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes/semana a las 14:00 (fijada por Andrés, 2026-07-04)

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** Miércoles a viernes: SILENCIO (solo
gestión y memoria). **RATIFICADO por Andrés por chat el 14/07: pushes SOLO
sáb/dom/lun/mar — se terminan las exclusivas de viernes a la noche (como el
tape del 10/07); el material de entrevista vive LINKEADO desde la crónica,
nunca como push independiente a todos.** Nunca dos pushes de DIFUSIÓN el
mismo día. Los slots sáb/dom rotan sub-formatos si se queman (horóscopo,
feed —quemado—, confesiones, archivo). Lunes/martes NO rotan sub-formato: son
el mismo formato evergreen (La Previa / La Crónica), refrescado con datos
nuevos cada semana en un archivo nuevo con la fecha del día — pero cada
edición semanal se registra en `proposals.json` y necesita su propio approve
para quedar.

**📬 REGLA FIJA DE PREVIEW (Andrés, 2026-07-12, vinculante):** todo push del
día se le manda ANTES a Andrés, y SOLO a él, a las **09:00 locales** del
mismo día (item gemelo `<id>-preview`, `devices:["andres"]`, expira ~13:30).
El envío general de las 14:00 va a todos los activos, Andrés incluido.
Aplica también al martes de sala de prensa.

**🎤 REGLA FIJA DEL MARTES (Andrés, 2026-07-07, RATIFICADA 2026-07-10,
AMPLIADA 2026-07-14):** entrevista "Sala de prensa" (5 preguntas) al ganador
del lunes, a su device SOLO, ~10:00 (con preview a andres 09:00). La
entrevista queda LINKEADA desde la crónica del día — nunca push independiente
de entrevista a todos. Si el ganador no tiene push activa: se le manda a
ANDRÉS por push inmediato para reenviar por WhatsApp + link del club por chat
privado (JAMÁS en página ni push).

## 💸 DEUDAS (ledger vigente al 2026-07-15)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | IMPAGA. **9 días** al 15/07. | `deuda-negro-postre-2026-07-06` |
| Naso | 🍮/🧀 postre o picada | 13/07 (Carucha, quedó último con 414) | IMPAGA. **2 días** al 15/07, sin preguntar aún. | `deuda-naso-postre-2026-07-13` |

Saldadas / archivadas:
- **Tano** — postre/picada desde 23/06. **PAGADA** (answer `pagada` de andres,
  12/07 19:23:41 UY). Duración final: **19 días**. ⚠️ `index.html` todavía
  muestra el div — diverge del ledger (que manda para contenido). Sin cambio.
- **Mac** — sus dos deudas (postre 30/06, cena T4) desaparecieron de
  index.html en commits directos de otra sesión. Sin `answer` de pago — no se
  recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, ~7
días):** `index.html` sigue con "Gael debe postre por perder T4" (commit
`cca7dde`, 08/07). Contra `seasons/4`: `winnerPlayerId: cobra`,
**`loserPlayerId: mac`** — el perdedor de la T4 es Mac, no Gael, y paga
**cena**, no postre. No se incorpora al ledger ni a contenido hasta que
Andrés lo confirme/corrija. Sin novedad hoy — ya lleva una semana sin que
Andrés lo resuelva; si sigue así, preguntarlo directo con `engageAnswer` en
la próxima experiencia en vez de esperar más.

## 🚀 SÍNTESIS: qué convierte (números reales)

- **La Crónica (14/07) PROMOVIDA**: approve de andres 17:09:21 UY + reacción
  love + answer suscripción `si`. Señal secundaria: mac también reaccionó
  love + answer `si` + click en el botón de approve (no decide, pero refuerza
  la hipótesis). Abierta además por gordo, cobra, gael, pt y carucha (dwell
  16–147s). Carucha reactivó su sub el 14/07 y ya volvió a abrir la crónica
  hoy de madrugada (16s) — señal débil pero primera apertura espontánea suya.
- **Gordo convirtió la entrevista en 10 minutos** (push 10:35 → click 10:41 →
  2 respuestas a las 10:45, las 5 completas a las 13:45) — el flujo
  "sub nueva → entrevista dirigida el mismo día" sigue funcionando rápido.
- **Mata leyó la crónica con dwell extremo** (1321s + 729s en dos visitas) —
  posible pestaña abierta de fondo más que lectura real; no descartarlo pero
  no sobre-interpretarlo como éxito de formato.
- Sin novedades de deudas hoy: cero answers nuevos sobre Negro o Naso.

## 📊 Estado del sistema (2026-07-15, miércoles — corrida de silencio)

- Repo: la corrida anterior (14/07) SÍ pusheó a `main` (confirmado con
  `list_branches` de GitHub: `main` en `6224c15`, igual al último commit
  local). Sin gaps reales de publicación — lo que parecía "una semana sin
  commits" al arrancar hoy fue una ref remota desactualizada en el checkout
  local, corregida con un fetch limpio antes de tocar nada.
- Subs push activas: **9 personas / 10 dispositivos** (cobra tiene 2):
  andres, pt, mata, negro, cobra, mac, gael, gordo, carucha. `mc` disabled.
  Solo faltan nachi, naso y tano.
- Datos: **19 docs en `games`**, sin partidas nuevas desde el 13/07
  (Carucha, fecha 2 de la T5, ganó Gordo). Próxima fecha esperada: lunes
  20/07. Tabla anual y T5 sin cambios desde el 14/07.
- Eventos `engagement`: **232 totales** (61 más que el 14/07, casi todos ya
  reflejados en los pushes/commits de esa tarde). Solo 5 genuinamente nuevos
  desde el último commit (`6224c15`, dispatch 18:08 del 14/07): clicks y
  dwell bajo de andres/carucha en la crónica, y el approve de la crónica.
  Nada para compactar todavía (el evento más viejo es del 03/07, cutoff de
  14 días recién ~17/07).
- Queue: purgados **2026-07-07-a**, **2026-07-07-b**, **2026-07-07-c** y
  **2026-07-07-test-andres** (`sent`, >7 días). `2026-07-09-a` (`cancelled`)
  queda un día más — cumple 7 días el 16/07. Sin ítems `pending`/`draft` para
  reconciliar hoy.
- Proposals: **2026-07-13-cronica promovida** esta corrida (approve de
  andres). **2026-07-13-entrevista-gordo** sigue `pending` (creada 14/07,
  vence 21/07 si no hay decisión). Resto sin cambios.
- Home (`index.html`): deuda de Tano sigue en el div pese a estar pagada;
  Gael/T4 sin verificar sigue ahí. Sin cambios hoy — index.html no se toca.

## 🗓️ Semana en curso

- ✅ Sábado 11/07: récords, sub-formato horóscopo, promovido.
- ✅ Domingo 12/07: chusmerío, sub-formato confesiones del mazo, promovido.
- ✅ Lunes 13/07: La Previa 2ª edición, promovida.
- ✅ Martes 14/07: La Crónica 2ª edición, promovida hoy (approve tardío,
  llegó después del cierre de la corrida del 14/07). Sala de prensa de Gordo
  linkeada desde la crónica, sin push independiente (regla nueva del 14/07).
- 🔇 **Miércoles 15/07 (hoy): silencio.** Sin push. Gestión: proposal de la
  crónica promovida, cola purgada, sin partidas nuevas que procesar.
- Próximo: jueves y viernes también silencio (solo gestión/memoria). Sábado
  19/07 vuelve el slot de récords — evaluar sub-formato nuevo (ya usados:
  clásico 04/07, horóscopo 11/07; NO repetir ninguno de los dos). Ángulo
  fuerte disponible: la caída de Cobra en la T5 (1º→7º por faltar) puede
  alimentar un especial de rachas/ausencias, o ir directo a "especial
  remontadas" (pendiente hace semanas en el TODO).

## TODO / ángulos sin usar

Especial "remontadas" (fuerte candidato para el sábado 19/07) · especial
sedes · aniversarios (648 de Naso, multa 150 de Tano) · copy dirigido con
nombre para reactivar a negro si sigue sin dwell propio · confirmar con
Andrés la deuda de Gael/T4 antes de usarla en cualquier experiencia — si
sigue sin resolverse, preguntarlo directo con botones en vez de esperar más
· preguntar a Negro/Naso el estado de sus deudas en la próxima
previa/chusmerío con `engageAnswer` · replicar el flujo del club con
nachi/naso/tano (los 3 que faltan) — el caso Gordo demostró que funciona en
horas · posible especial "el regreso de Cobra" para cuando vuelva a aparecer
· H2H sin publicar todavía: Carucha 8–4 Cobra (sin cambios, no jugaron juntos
desde el 07/07).
