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
- 🔴 **CAUSA RAÍZ CONFIRMADA (06/07) — la routine necesita fix por UI, no por MCP.**
  Las corridas del 04, 05 y 06/07 murieron con "Unknown command: /engagement".
  Diagnóstico verificado comparando configs de triggers: **los triggers creados
  por MCP (`create_trigger`, `created_via: meta_mcp`) NO adjuntan el repo como
  `source`.** La sesión fresca arranca con el workspace VACÍO y sin credenciales
  de push a main. Los triggers que SÍ funcionan (el viejo `Claudio_LunesDeUNO`,
  Rugby, AI-radar, Gardening) son `created_via: http_api` = creados desde la UI
  de claude.ai/code, y todos tienen `sources:[git_repository]` + `outcomes` con
  branch. El trigger v2 `trig_01L9huoaXgfZkNbPGxef2XzS` (mío, MCP) le puso al
  prompt "cloná el repo vos mismo": eso arregla el clone (repo público) pero
  NO da permiso de push → el commit nunca aterriza. Test disparado a mano
  12:53Z: 0 commits tras 50 min. **FIX REAL (solo lo puede hacer Andrés): borrar
  el trigger v2 y recrear la routine desde la UI (Routines → New) con el entorno
  LunesDeUNO y el repo como source; el prompt robusto sirve igual.** Hasta que
  eso pase, la routine diaria NO va a poder commitear sola: el contenido lo
  sostiene esta sesión persistente (safety net) o una corrida manual.
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

- 🎨 **DIRECCIÓN DE DISEÑO FIJADA POR ANDRÉS (06/07, vinculante):** las
  experiencias deben ser INMERSIVAS y parecer apps nuevas/nativas — nivel del
  formato "Lunesgram" (feed IG con stories+visor, carrusel, double-tap like,
  micro-animaciones, encuestas, humor en los detalles). **La referencia es
  `engage/2026-07-06-la-previa.html`**: Andrés vio el prototipo y pidió que
  REEMPLACE a la previa clásica ("IMPRESIONANTE… así deben ser las
  experiencias"). Al construir experiencias nuevas: shell de app (top bar,
  stories, bottom nav), datos reales adentro de la UI, contrato engage.js
  integrado con estética nativa (botones pill, no forms), y una cuenta de
  humor tipo "patrocinado". No repetir Lunesgram idéntico cada día: es la
  VARA de calidad, el skin puede variar (otras apps nativas: spotify-like,
  netflix-like, whatsapp-like, tinder-like…).
- El viejo `engage/prototipo-previa-ig.html` quedó como redirect a la previa
  oficial (no borrar el archivo hasta pasada la semana: hay un chat de Andrés
  con esa URL).

## TODO / ángulos sin usar

🔮 Horóscopo unístico · 📱 Feed 1ª persona · 🎤 Confesiones del mazo ·
crónicas con "mano a mano" ronda por ronda · especial "remontadas" · especial
sedes · aniversarios (648 de Naso, multa 150 de Tano) · copy dirigido con
nombre para reactivar a negro/cobra si siguen en 0 eventos el sábado.
