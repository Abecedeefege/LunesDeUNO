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

## 💸 DEUDAS (ledger vigente al 2026-07-16)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | IMPAGA. **10 días** al 16/07. | `deuda-negro-postre-2026-07-06` |
| Naso | 🍮/🧀 postre o picada | 13/07 (Carucha, quedó último con 414) | IMPAGA. **3 días** al 16/07, sin preguntar aún. | `deuda-naso-postre-2026-07-13` |

Saldadas / archivadas:
- **Tano** — postre/picada desde 23/06. **PAGADA** (answer `pagada` de andres,
  12/07 19:23:41 UY). Duración final: **19 días**. ⚠️ `index.html` todavía
  muestra el div — diverge del ledger (que manda para contenido). Sin cambio.
- **Mac** — sus dos deudas (postre 30/06, cena T4) desaparecieron de
  index.html en commits directos de otra sesión. Sin `answer` de pago — no se
  recontarán salvo que reaparezcan en el home.

🚩 **DATO SIN VERIFICAR — POSIBLE ERROR EN EL HOME (sigue sin resolver, ~9
días):** `index.html` sigue con "Gael debe postre por perder T4" (commit
`cca7dde`, 08/07). Contra `seasons/4`: `winnerPlayerId: cobra`,
**`loserPlayerId: mac`** — el perdedor de la T4 es Mac, no Gael, y paga
**cena**, no postre. No se incorpora al ledger ni a contenido hasta que
Andrés lo confirme/corrija. Ya lleva más de una semana sin resolverse:
próxima experiencia con botones (récords del sábado 18/07 o chusmerío del
domingo 19/07) debe preguntarlo directo con `engageAnswer` en vez de seguir
esperando.

## 🚀 SÍNTESIS: qué convierte (números reales)

- **La Crónica (14/07) sigue viva**: Andrés volvió a abrirla el 15/07 con
  dwell altísimo en dos visitas (821s scroll 91% + 501s scroll 87%, más tres
  reaperturas cortas de 3-13s) — la nota del martes sostiene atención varios
  días después, no solo el día de publicación.
- **Andrés finalmente abrió la entrevista de Gordo el 15/07** (dwell 26s,
  scroll 99%) — la había recibido el 14/07 para reenviar por WhatsApp pero
  recién la visitó al día siguiente. Sin embargo NO generó
  `proposal_approved`/`proposal_rejected`: la proposal sigue `pending` (no
  decide sola una visita, solo el botón). Sin señal de si ya la reenvió por
  WhatsApp (no hay evento para eso).
- Sin novedades de deudas: cero answers nuevos sobre Negro o Naso desde el
  15/07.
- Sin partidas nuevas desde el 13/07 — nada que recalcular en superlativos
  todavía.

## 📊 Estado del sistema (2026-07-16, jueves — corrida de silencio)

- Repo: pull limpio de `main` antes de tocar nada (`2538194`, 3 commits por
  delante del último local: crónica del botón de WhatsApp + limpieza de
  learnings/queue de la corrida del 15/07). Sin gaps de publicación.
- Subs push activas: **9 personas / 10 dispositivos** (cobra tiene 2):
  andres, pt, mata, negro, cobra, mac, gael, gordo, carucha. `mc` disabled.
  Sin cambios — solo faltan nachi, naso y tano.
- Datos: **19 docs en `games`** (18 finalizados + 1 sin terminar), sin
  partidas nuevas desde el 13/07 (Carucha, fecha 2 de la T5, ganó Gordo).
  Próxima fecha esperada: lunes 20/07.
- Eventos `engagement`: **242 totales** (10 más que el 15/07). Los 9
  genuinamente nuevos desde el último commit (`380ddf0`, corrida 15/07
  09:11 UTC) son 3 `page_visit` + 6 `dwell` de Andrés releyendo la crónica y
  abriendo por primera vez la entrevista de Gordo — sin decisiones
  (`proposal_approved/rejected`), reacciones ni `answer` nuevos. Nada para
  compactar todavía (evento más viejo del 03/07; cutoff de 14 días recién
  ~17/07).
- Queue: purgado **2026-07-09-a** (`cancelled`, cumplió 7 días hoy). Sin
  ítems `pending`/`draft` para reconciliar — todo lo demás en la cola sigue
  `sent` y con menos de 7 días.
- Proposals: **2026-07-13-entrevista-gordo** sigue `pending` (creada 14/07,
  vence 21/07 si no hay decisión; Andrés ya la abrió el 15/07 pero no aprobó
  ni rechazó). Resto sin cambios (10 promovidas, 1 dropeada).
- Home (`index.html`): deuda de Tano sigue en el div pese a estar pagada;
  Gael/T4 sin verificar sigue ahí (ya 9 días sin resolver — ver ledger de
  deudas arriba). Sin cambios hoy — index.html no se toca.

## 🗓️ Semana en curso

- ✅ Sábado 11/07: récords, sub-formato horóscopo, promovido.
- ✅ Domingo 12/07: chusmerío, sub-formato confesiones del mazo, promovido.
- ✅ Lunes 13/07: La Previa 2ª edición, promovida.
- ✅ Martes 14/07: La Crónica 2ª edición, promovida (approve tardío llegado el
  15/07). Sala de prensa de Gordo linkeada desde la crónica, sin push
  independiente (regla nueva del 14/07).
- 🔇 Miércoles 15/07: silencio. Proposal de la crónica promovida, cola
  purgada.
- 🔇 **Jueves 16/07 (hoy): silencio.** Gestión: sin partidas nuevas, sin
  decisiones de proposals, sin answers de deuda. Solo housekeeping: purga de
  `2026-07-09-a` en la cola y refresco del ledger de deudas (Negro 10 días,
  Naso 3 días).
- Próximo: viernes 17/07 también silencio. **Sábado 18/07** vuelve el slot de
  récords (corregido: NO es el 19/07 como decía la corrida anterior — el
  19/07 es domingo) — evaluar sub-formato nuevo (ya usados: clásico 04/07,
  horóscopo 11/07; NO repetir ninguno de los dos). Ángulo fuerte disponible:
  la caída de Cobra en la T5 (1º→7º por faltar) puede alimentar un especial
  de rachas/ausencias, o ir directo a "especial remontadas" (pendiente hace
  semanas en el TODO). **Domingo 19/07** chusmerío — ambos slots son buena
  oportunidad para preguntar con botones el error Gael/Mac de la T4 que sigue
  sin resolver.

## TODO / ángulos sin usar

Especial "remontadas" (fuerte candidato para el sábado 18/07) · especial
sedes · aniversarios (648 de Naso, multa 150 de Tano) · copy dirigido con
nombre para reactivar a negro si sigue sin dwell propio · preguntar con
botones el error Gael/T4 en la próxima experiencia (récords 18/07 o
chusmerío 19/07) en vez de seguir esperando confirmación de Andrés ·
preguntar a Negro/Naso el estado de sus deudas en la próxima
previa/chusmerío con `engageAnswer` · replicar el flujo del club con
nachi/naso/tano (los 3 que faltan) — el caso Gordo demostró que funciona en
horas · posible especial "el regreso de Cobra" para cuando vuelva a aparecer
· H2H sin publicar todavía: Carucha 8–4 Cobra (sin cambios, no jugaron juntos
desde el 07/07) · sin señal de si Andrés ya reenvió la entrevista de Gordo
por WhatsApp — no hay evento para confirmarlo, solo se sabrá por su decisión
de aprobar/rechazar la proposal o por chat.
