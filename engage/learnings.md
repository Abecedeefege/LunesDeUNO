# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes/semana a las 14:00 (fijada por Andrés, 2026-07-04)

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** Miércoles a viernes: SILENCIO (solo
gestión y memoria). Nunca dos pushes de DIFUSIÓN el mismo día. Los slots
sáb/dom rotan sub-formatos si se queman (horóscopo, feed, confesiones, archivo).

**🎤 REGLA FIJA DEL MARTES (Andrés, 2026-07-07, vinculante):**
1. **Martes temprano (~10:00):** se le manda la entrevista "Sala de prensa"
   (5 preguntas: alarde, sin-estrella, perdedores, sufrimiento, cierre) SOLO
   al **ganador del lunes**, a su device (`devices:["<ganador>"]`). Envío
   inmediato, no diferido. Esto NO cuenta contra la regla de un push/día
   porque va a un solo device, no es difusión.
2. **Si el ganador NO tiene push activa** (no está en `pushSubs` con
   `status:"active"`): **no se envía nada y listo** — no se fuerza, no se
   busca alternativa.
3. **La crónica del martes (push de difusión de las 14:00) DEBE salir con la
   info de la entrevista:** leer los answers `answer-<ganador>-entrevista-q1..q5`
   de `engagement` y citarlos en la crónica. La entrevista de las 10:00 le da
   ~4h al ganador para contestar antes de que salga la crónica.

## 💸 DEUDAS (ledger vigente al 2026-07-07)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA — falló la entrega del 30/06 en Africa. 14 días al 07/07 | `deuda-tano-postre-2026-06-23` |
| Mac | 🍮/🧀 postre o picada | 30/06 | pendiente. 7 días al 07/07 | `deuda-mac-postre-2026-06-30` |
| Mac | 🍽️ cena (perdió T4) | 30/06 | pendiente, sin fecha | `deuda-mac-cena-t4` |
| Negro | 🍮/🧀 postre o picada | 06/07 (Chorolo, quedó último con 417) | NUEVA — recién nace, día 1 hoy | `deuda-negro-postre-2026-07-06` |

Saldadas: (ninguna todavía). **Cero answers de deuda** sobre Tano/Mac pese a
3 experiencias con el botón (previa, chusmerío, y ahora la crónica lo
repregunta). Botón nuevo agregado hoy en la crónica para Negro.

## 🚀 SÍNTESIS: qué convierte (números reales, semana 1)

- **andres clickea todo**: reacción 😍 y answer "si, obvio" en las CUATRO
  experiencias que tuvo enfrente (récords, chusmerío, previa — la crónica
  todavía no salió). Las 3 primeras promovidas por botón → columnas
  permanentes.
- **pt se activó el 06/07**: se suscribió (sub activa), clickeó el push
  original y el reenvío de la previa, dwell 127s y 170s. Señal fuerte de un
  socio nuevo enganchado desde el primer día.
- **negro y cobra siguen en 0 eventos propios** (aunque están en `pushSubs`
  activos) tras 3 pushes editoriales entregados. Mismo diagnóstico: no abren,
  o abren sin dejar rastro. Probar copy con nombre propio si sigue así el
  sábado. (07/07: cobra SÍ abrió la entrevista dirigida — ver Semana.)
- Dwell fuerte en previa (72–170s) en varios devices. El reenvío del 06/07
  (la previa no había llegado a todos con el primer envío) sí llegó a pt y
  cobra.
- Anomalía a vigilar: un device sin apodo (`sin-nombre`) visitó la previa 3
  veces el 06/07 con dwell bajo (24s/7s) y una sesión de 414s con 0% scroll
  (probablemente pestaña abierta de fondo, no lectura real). Hay una sub
  activa `cara` sin apodo claro en el device — podría ser el mismo actor.
  Sin acción todavía, solo seguimiento.

## 📊 Estado del sistema (2026-07-07)

- Subs push activas: **7** — andres (decide), pt (nuevo, 06/07), mata, negro,
  cobra, mac, cara. `mc` disabled.
- Datos: 17 docs en `games`, 16 fechas válidas (cutoff 06/07 — Chorolo,
  ganó Cobra con 223; la del 12/05 sigue siendo la "fecha fantasma", sin
  winner). Temporada 4 cerrada (Cobra). **T5 en curso, fecha 1 jugada.**
- Eventos `engagement`: 67 (16 nuevos desde la última corrida, todos del
  06/07). Nada para compactar hasta ~17/07 (los más viejos son del 03/07).
  Queue: nada para limpiar hasta ~10/07 (sent del 03/07 y cancelled con
  send_at futuro 09/07, no aplica todavía).
- 🟢 Routine v2 (`trig_01L9huoaXgfZkNbPGxef2XzS`) OK: esta corrida (martes
  07/07, 06:03 UY) arrancó con el repo clonado y actualizado sin
  intervención manual — primer indicio de que el fix de Andrés (recrear
  desde la UI con el repo como source) funcionó. NOTA: igual no pudo pushear
  (sesión sin credencial de escritura); dejó el trabajo en un patch que esta
  sesión interactiva aterrizó a main (ver Corrida de HOY).

## 🗓️ Semana en curso (editorial del lunes 06/07 — martes 07/07)

- ✅ Sáb 04/07 récords, ✅ Dom 05/07 chusmerío, ✅ Lun 06/07 previa: los tres
  enviados y promovidos (botón de andres).
- 🔴 **HOY martes 07/07 — protocolo de revisión previa (pedido de Andrés):**
  se jugó anoche en Chorolo (T5, fecha 1). Cobra ganó con 223 robándole la
  punta a Gordo en la 9na mano (Gael lideró 4 rondas, 4ª-7ª; Gordo 1 sola
  mano, la 8ª). Negro quedó último con 417 (nueva deuda). Naso se comió una
  multa de 50 en la 3ª mano. Carucha faltó (se lleva el peor puntaje, 417,
  a la anual). Gordo extendió el dominio sobre Mac a 10–1, cumpliendo el
  pronóstico de la previa. Cobra le achicó la distancia a Gordo en la anual
  de 70 a 35 puntos; PT sigue puntero con 4906.
  - Página construida: `engage/2026-07-06-cronica.html` (estética tabloide/
    diario deportivo, box score, narrativa por rondas, sidebar de multa/
    falta/último, H2H, tabla anual).
  - Registrada en `proposals.json` como `pending` (nueva, sin botón de
    andres todavía).
  - Item de cola `2026-07-07-a` con título/cuerpo/url reales. **OK condicional
    de Andrés (07/07 ~12:10): pasado a `status:"pending"`, sale 14:00 COMO ESTÁ
    si Cobra no contesta la entrevista antes.** Si contesta antes de las 14:00,
    se actualiza la página (misma url) con la sección "Sala de prensa" y el push
    de las 14:00 ya apunta ahí. Se quitó de la crónica la pregunta-botón de la
    deuda de Negro (pedido de Andrés).
  - 🎤 **ENTREVISTA A COBRA (enviada 07/07 ~10:17, SOLO a cobra):** experiencia
    `engage/2026-07-06-entrevista-cobra.html` (sala de prensa del campeón, 5
    preguntas). Push `2026-07-07-b` **`sent`** a `devices:["cobra"]` (aprobada
    por Andrés en chat). Cobra ABRIÓ la página (page_visit + dwell como device
    `cobra`, ~10:27) pero AÚN no publicó respuestas. Cuando lo haga → docs
    `answer-cobra-entrevista-q1..q5`. **La crónica de las 14:00 se RE-ARMA con
    sus citas (sección "Sala de prensa") ANTES de pasar de `draft` a `pending`**
    (regla fija del martes, arriba). Si no contesta a tiempo, Andrés decide:
    esperar o mandar sin citas.
- Mié 08 a vie 10/07: sin pushes. Solo gestión, compactación y memoria.

## 🔭 Corrida de HOY (2026-07-07, martes, 06:03 UY)

Repo clonado y actualizado sin fricción (routine v2 funcionando). Leídos 16
eventos nuevos del 06/07 (pt se sumó y se activó fuerte). Sin proposals
pendientes de aprobar/rechazar (las 3 de la semana ya estaban promovidas).
Nada para compactar ni limpiar todavía. Partida de anoche confirmada en
`games` (game_1783387875567, Chorolo) y recalculada a mano (rounds+fines+
cortes, sin confiar en `lastEdit.totals` que no incluye multas). Crónica
construida con datos verificados, registrada como proposal `pending`, cola
dejada en `draft`. La routine NO pudo pushear (sin credencial); Andrés pasó
el patch a esta sesión interactiva, que lo aterrizó a main reconciliándolo
con el trabajo del martes ya presente (entrevista a Cobra + regla del martes).
PENDIENTE: cuando Cobra conteste, re-armar la crónica con sus citas y recién
ahí (con OK de Andrés) pasar `2026-07-07-a` a `pending`.

## TODO / ángulos sin usar

🔮 Horóscopo unístico · 📱 Feed 1ª persona · 🎤 Confesiones del mazo ·
crónicas con "mano a mano" ronda por ronda (ya usado parcialmente hoy) ·
especial "remontadas" · especial sedes · aniversarios (648 de Naso, multa
150 de Tano) · copy dirigido con nombre para reactivar a negro/cobra si
siguen en 0 eventos el sábado · investigar el device `sin-nombre`/`cara`
(¿nuevo socio sin apodo seteado?).
