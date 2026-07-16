# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes grupales/semana a las 14:00 + 1 personal los jueves 15:00

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** (Grupales, fijadas por Andrés
2026-07-04.) Miércoles a viernes: SILENCIO de difusión grupal (solo gestión
y memoria) — con UNA excepción fija: la entrevista personal del jueves a las
15:00 (ver REGLA DEL JUEVES abajo), que va a un solo device. **RATIFICADO por Andrés por chat el 14/07: pushes SOLO
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

**🧬 REGLA FIJA DEL JUEVES (Andrés, 2026-07-16, por chat, vinculante):** UNA
push personal semanal de entrevista, los JUEVES, a alguien que NO haya sido
el ganador del último lunes (ni Andrés). Formato: **máx 4 preguntas — 2 de
texto libre + 2 de opción múltiple** — enfocadas en una stat/métrica
destacable (verificada de `games`) para que el grupo se ría en el próximo
push grupal; las preguntas SIEMPRE orientadas a que el entrevistado tenga
lugar a burlarse del resto o ser gracioso. Horarios fijos: **preview a
andres a las 10:00 para aprobación** (ventana de veto hasta el envío) y
**push al entrevistado a las 15:00** del mismo jueves. La página debe
informar al entrevistado que se están buscando maneras de juntar más
información del grupo para que las notificaciones sean más divertidas y
enganchen más. Esta push NO rompe el silencio de mié/jue/vie para difusión
grupal: es personal, a un solo device. Sus respuestas alimentan el push
grupal siguiente (sábado). No repetir entrevistado semana a semana si hay
alternativas con sub activa.

## 💸 DEUDAS (ledger vigente al 2026-07-16)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Naso | 🍮/🧀 postre o picada | 13/07 (Carucha, quedó último con 414) | IMPAGA. **3 días** al 16/07, sin preguntar aún. La ÚNICA deuda viva. | `deuda-naso-postre-2026-07-13` |

Saldadas / archivadas (Andrés confirmó por chat el 16/07 y se limpiaron los
divs de index.html — home y ledger vuelven a estar en sync):
- **Tano** — postre/picada desde 23/06. **PAGADA** (answer `pagada` de andres
  12/07, confirmada por chat 16/07). Duración final: **19 días**. Pagó con
  alfajores triple Portezuelo de Punta Ballena — gasto mínimo y al público no
  le gustaron. Material de chusmerío: pagó, pero pagó MAL.
- **Negro** — postre/picada desde 06/07 (Chorolo, último con 417). **PAGADA**
  (Andrés por chat 16/07). Duración final: **~10 días**. Pagó con una
  excelente picada: quesos franceses, de cabra, provolone y galletas. El
  contraste con los alfajores de Tano es un ángulo servido.
- **Gael** — postre por perder la T4. **PAGADA** (Andrés por chat 16/07):
  llevó un Martín Fierro, gasto mínimo pero gustó. 🚩 CASO CERRADO por
  decisión del dueño: `seasons/4` dice `loserPlayerId: mac`, pero Andrés
  confirmó la deuda de Gael como real y pagada — la palabra de Andrés manda
  sobre el dato crudo. No volver a cuestionarla en contenido.
- **Mac** — sus dos deudas (postre 30/06, cena T4) desaparecieron de
  index.html en commits directos de otra sesión. Sin `answer` de pago — no se
  recontarán salvo que reaparezcan en el home.

📊 **Ranking de pagadores (para contenido futuro):** Negro pagó de lujo
(picada francesa) > Gael cumplió digno (Martín Fierro, barato pero rico) >
Tano pagó de mala gana (alfajores que no gustaron). Todo confirmado por
Andrés, publicable.

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
- **Deudas: día de liquidación (16/07, por chat de Andrés):** Tano, Negro y
  Gael figuran PAGADAS y salieron del home. Queda solo Naso (3 días). Los
  detalles de qué llevó cada uno (ver ledger) son material de primera para
  el chusmerío del domingo — el conteo de deudas como running gag muta a
  "quién pagó mejor".
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
- Home (`index.html`): **limpiado hoy a pedido directo de Andrés por chat**
  (única excepción válida a la regla "no tocar"): se quitaron los tres divs
  de deuda (Tano, Negro, Gael) porque las tres están pagadas. Queda solo el
  div vacío `data-i18n` que la app maneja sola. Home y ledger en sync por
  primera vez desde el 08/07. Ojo: la deuda de Naso (13/07) nunca tuvo div
  en el home — el conteo vive solo en el ledger y las experiencias.

## 🗓️ Semana en curso

- ✅ Sábado 11/07: récords, sub-formato horóscopo, promovido.
- ✅ Domingo 12/07: chusmerío, sub-formato confesiones del mazo, promovido.
- ✅ Lunes 13/07: La Previa 2ª edición, promovida.
- ✅ Martes 14/07: La Crónica 2ª edición, promovida (approve tardío llegado el
  15/07). Sala de prensa de Gordo linkeada desde la crónica, sin push
  independiente (regla nueva del 14/07).
- 🔇 Miércoles 15/07: silencio. Proposal de la crónica promovida, cola
  purgada.
- 🧬 **Jueves 16/07 (hoy): estreno del slot personal del jueves.** En la
  corrida de la mañana: purga de `2026-07-09-a` y refresco del ledger. Más
  tarde, Andrés liquidó por chat las deudas de Tano, Negro y Gael (pagadas,
  con detalle de qué llevó cada uno) y pidió limpiar el home — hecho. Después
  fijó la REGLA DEL JUEVES y salió la 1ª entrevista personal: **Carucha**
  (elegida por: no ganó el lunes —ganó Gordo—, sub reactivada el 14/07 con
  aperturas espontáneas, y el H2H inédito más jugoso: **padre de Cobra 8-4**).
  Página con estética de laboratorio de ADN, 2 preguntas de texto + 2 de
  opción múltiple. Preview a andres 10:00 (`2026-07-16-ent-preview`), envío a
  carucha 15:00 (`2026-07-16-ent`). Sus respuestas alimentan el push grupal
  del sábado 18/07.
- Próximo: viernes 17/07 también silencio. **Sábado 18/07** vuelve el slot de
  récords (corregido: NO es el 19/07 como decía la corrida anterior — el
  19/07 es domingo) — evaluar sub-formato nuevo (ya usados: clásico 04/07,
  horóscopo 11/07; NO repetir ninguno de los dos). Ángulo fuerte disponible:
  la caída de Cobra en la T5 (1º→7º por faltar) puede alimentar un especial
  de rachas/ausencias, o ir directo a "especial remontadas" (pendiente hace
  semanas en el TODO). **Domingo 19/07** chusmerío — el ángulo servido es
  "día de liquidación": tres deudas pagadas en una semana, ranking de
  pagadores (picada francesa de Negro vs alfajores fallidos de Tano), y Naso
  como último moroso en pie.

## TODO / ángulos sin usar

**Citar las respuestas de Carucha en el push grupal del sábado 18/07** (la
regla del jueves existe para eso — si no contesta, el ángulo 8-4 sobre Cobra
sirve igual) · Especial "remontadas" (fuerte candidato para el sábado 18/07)
· "día de liquidación" con ranking de pagadores (candidato fuerte para el
chusmerío del 19/07 — Negro de lujo, Gael digno, Tano de mala gana, Naso el
único moroso) · especial sedes · aniversarios (648 de Naso, multa 150 de Tano) ·
copy dirigido con nombre para reactivar a negro si sigue sin dwell propio ·
preguntar a Naso el estado de su deuda en la próxima previa/chusmerío con
`engageAnswer` · replicar el flujo del club con
nachi/naso/tano (los 3 que faltan) — el caso Gordo demostró que funciona en
horas · posible especial "el regreso de Cobra" para cuando vuelva a aparecer
· H2H sin publicar todavía: Carucha 8–4 Cobra (sin cambios, no jugaron juntos
desde el 07/07) · sin señal de si Andrés ya reenvió la entrevista de Gordo
por WhatsApp — no hay evento para confirmarlo, solo se sabrá por su decisión
de aprobar/rechazar la proposal o por chat.
