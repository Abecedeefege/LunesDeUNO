# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 4 pushes/semana a las 14:00 (fijada por Andrés, 2026-07-04)

**Sábado récords · Domingo chusmerío · Lunes la previa (con "padres e hijos"
H2H en juego) · Martes la crónica.** Miércoles a viernes: SILENCIO (solo
gestión y memoria). Nunca dos pushes el mismo día. Los slots sáb/dom rotan
sub-formatos si se queman (horóscopo, feed, confesiones, archivo).

## 💸 DEUDAS (ledger vigente al 2026-07-06)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA — falló la entrega del 30/06 en Africa. Cumple 13 días esta noche | `deuda-tano-postre-2026-06-23` |
| Mac | 🍮/🧀 postre o picada | 30/06 | pendiente. Cumple 6 días esta noche | `deuda-mac-postre-2026-06-30` |
| Mac | 🍽️ cena (perdió T4) | 30/06 | pendiente, sin fecha | `deuda-mac-cena-t4` |

Saldadas: (ninguna todavía). **Cero answers de deuda hasta hoy** — los botones
pagada/sigue de previa y chusmerío no recibieron ni un click. Si esta noche se
juega y Tano trae la picada, esperar el answer o la crónica lo confirma.

## 🚀 SÍNTESIS: qué convierte (primeros números reales, semana 1)

- **andres clickea todo**: nclick de récords a las 4h del envío, de chusmerío
  a las 2h40. Reacción 😍 y answer "si, obvio" en las TRES experiencias.
  Las 3 aprobadas con botón → formato validado: récords, chusmerío y previa
  quedan como columnas permanentes.
- **negro y cobra: 0 eventos** tras 2 pushes editoriales entregados (201).
  O no abren o abren sin click (el push se puede descartar sin abrir). Señal
  a vigilar esta semana; si sigue en cero el sábado, probar copy dirigido
  (nombre propio en el título) antes de concluir fatiga.
- Dwell fuerte en previa (72–127s) y récords (73–136s) en devices de Andrés.
- Prior heredado (chisme > identidad > orgullo) aún sin refutar; el chusmerío
  tuvo el click más rápido post-envío de la semana.

## 📊 Estado del sistema (2026-07-06)

- Subs push activas: **4** — andres (decide), mata (= compu de Andrés, ojo
  colisión si el Mata real se suscribe), negro, cobra. mc desuscripto.
- Datos: 16 docs en `games`, 15 fechas válidas (cutoff 29/06; la del 12/05
  sin winner es la "fecha fantasma"). Sin partidas nuevas desde el 29/06.
  Temporadas cerradas: 4 (T1 Gordo, T2 PT, T3 Carucha, T4 Cobra). **La T5
  arranca esta noche.**
- Eventos `engagement`: 51, todos del 03–05/07 (nada para compactar hasta
  ~17/07). Queue: nada para limpiar hasta el 10/07 (sent del 03/07).
- ⚠️→✅ **ROUTINE REPARADA el 06/07.** Las corridas programadas del 04, 05 y
  06/07 fallaron TODAS con "Unknown command: /engagement": el trigger viejo
  (`trig_01UmgygfzHFXbiFqP1Kg8kF5`, borrado) disparaba sesiones nuevas SIN el
  repo clonado (workspace vacío → el comando no existe). La hipótesis previa
  (allowlist) era incorrecta. Trigger nuevo:
  `trig_01L9huoaXgfZkNbPGxef2XzS` — mismo cron 0 9 * * * UTC (06:00 UY),
  sesión nueva, notificación push al terminar, y prompt en texto plano que
  clona el repo si falta y lee `.claude/commands/engagement.md` directo si el
  slash command no está registrado. Detalle en engage/ROUTINE.md. Riesgo
  residual: si la sesión fresca no tiene credenciales de git, el push a main
  falla — el prompt exige reportarlo explícitamente; mirar la corrida del
  07/07.
- El contenido del finde salió igual porque estaba pre-armado del 03–04/07 y
  el dispatcher (GitHub Actions) es independiente de la routine.

## 🗓️ Semana en curso (editorial del lunes 06/07)

- ✅ Sáb 04/07 récords: enviado 14:05 a 4 devices (201). ✅ Dom 05/07
  chusmerío: enviado 14:03 a 4 devices (201).
- 🔜 HOY lun 06/07: previa `2026-07-06-a` `pending` 14:00, verificada con
  datos frescos (Tano 13 días ✓, Gordo 9-1 Mac ✓, Cobra campeón T4 defiende ✓,
  arranca T5 ✓). Página día-consciente, conteos anclados a la noche del lunes.
- 🛑 PROTOCOLO DEL MARTES 07/07 (pedido de Andrés): la crónica se revisa
  ANTES de enviarse. La corrida del martes: (1) si hay partida nueva del
  lunes en `games`, crear la crónica con datos reales y actualizar el item
  `2026-07-07-a` (título/cuerpo/url) pero DEJARLO `status:"draft"`;
  (2) commitear para que Andrés la vea en Pages/proximos.html; (3) reportar.
  Sin OK de Andrés antes de las 14:00 → no sale nada. Si no se jugó, ídem con
  el recordatorio en draft.
- Las 3 experiencias de la semana están `promoted` (aprobación con botón de
  andres). proximos.html refleja los estados solo.
- Mié 08 a vie 10/07: sin pushes. Solo gestión, compactación y memoria.

## 🔭 Corrida de HOY (2026-07-06, lunes — recuperada a mano ~10:00)

La corrida de las 06:07 murió en "Unknown command" (ver arriba); Andrés avisó
y esta sesión interactiva ejecutó la rutina completa: feedback leído (18
eventos nuevos del 04–05/07), previa y chusmerío promovidas, cola reconciliada
(la previa de hoy sale sola a las 14:00), trigger reparado y test de la
routine nueva disparado a demanda. Mañana 06:02 UY corre sola: verificar que
haya commit de la corrida del martes; si no lo hay, revisar la sesión de la
routine en claude.ai/code (¿push con credenciales?).

- 📱 **Prototipo pedido por Andrés (06/07): `engage/prototipo-previa-ig.html`**
  — versión "instagram-like" de la previa (feed + stories + carrusel). NO es
  editorial: no registrarlo en proposals, no encolarle pushes, no borrarlo por
  efímero, no linkearlo desde experiencias. Es material de referencia de
  diseño; solo Andrés decide su futuro. Si gusta, el formato "Lunesgram" puede
  ser un sub-formato rotativo del domingo (feed 1ª persona ya estaba en TODO).

## TODO / ángulos sin usar

🔮 Horóscopo unístico · 📱 Feed 1ª persona · 🎤 Confesiones del mazo ·
crónicas con "mano a mano" ronda por ronda · especial "remontadas" · especial
sedes · aniversarios (648 de Naso, multa 150 de Tano) · copy dirigido con
nombre para reactivar a negro/cobra si siguen en 0 eventos el sábado.
