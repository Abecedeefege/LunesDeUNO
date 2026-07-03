# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: 1 push/día a las 14:00 (fijada por Andrés, 2026-07-03)

Un solo push diario, siempre 14:00 -03:00, contenido anclado al lunes:
dom teaser de la previa · lun la previa · mar la crónica (o recordatorio de
carga) · mié–sáb ángulos rotativos (chusmerío / récords / horóscopo / feed /
confesiones / archivo), sin repetir ángulo dos días seguidos ni más de dos
veces por semana. Nunca dos pushes el mismo día.

## 💸 DEUDAS (ledger vigente al 2026-07-03)

| Deudor | Debe | Desde | Estado | id de pregunta |
|---|---|---|---|---|
| Tano | 🍮/🧀 postre o picada | 23/06 | IMPAGA — falló la entrega del 30/06 en Africa | `deuda-tano-postre-2026-06-23` |
| Mac | 🍮/🧀 postre o picada | 30/06 | pendiente | `deuda-mac-postre-2026-06-30` |
| Mac | 🍽️ cena (perdió T4) | 30/06 | pendiente, sin fecha | `deuda-mac-cena-t4` |

Saldadas: (ninguna registrada todavía). Al recibir `answer` con `pagada`/`fecha_puesta`,
mover acá con la duración final y celebrarlo en el contenido siguiente.

## 🚀 SÍNTESIS: qué convierte

Sin mediciones propias todavía (sistema recién nacido). Priors heredados del
playbook de origen, a validar acá: **chisme > identidad > orgullo > 1ª persona**
convierten; utilidad pura y consejo sincero miden tibio; posesivo + dato
específico gana; los juegos se queman con uso seguido. La apuesta fundacional:
en un grupo de amigos reales, el chisme con datos verificados es aún más
fuerte que en un catálogo. A validar con dwell/reacción/answers de la semana 1.

## 📊 Estado del sistema (2026-07-03, bootstrap manual)

- Suscripciones push activas: **0** (falta: Andrés debe cargar el secret
  `VAPID_PRIVATE_KEY` y suscribirse como device `andres` en la página secreta
  club.html — ver engage/ROUTINE.md). Tope: 8 dispositivos. Decisiones de
  proposals: SOLO device `andres`; el resto es señal secundaria.
- Routine: ✅ ACTIVA desde el 03/07 (diaria ~06:08 UY, sesión nueva,
  `/engagement`; trigger en engage/ROUTINE.md). Primera corrida: sáb 04/07 —
  ese día el push de récords YA está encolado (`2026-07-04-a`): no duplicar,
  solo verificar/reconciliar. Ídem dom/lun/mar/jue de esta semana (ver abajo).
  El MIÉRCOLES 08/07 y el VIERNES 10/07 sí hay que crear contenido nuevo.
- Datos: 15 fechas válidas en `games` (cutoff 29/06). Temporadas cerradas: 4
  (T1 Gordo, T2 PT, T3 Carucha, T4 Cobra — T4 sin doc en `seasons`, calculada).
- Eventos `engagement`: 0. Compactaciones: ninguna.
- Inventario completo de assets y fórmulas: `engage/AUDIT.md`.

## 🗓️ Semana en curso (editorial del lunes 06/07, todos los push 14:00)

- Encolado: bienvenida/test vie 03/07 (`2026-07-03-test`, send_at pasado —
  sale apenas haya una sub activa), récords sáb 04/07 (`2026-07-04-a`),
  teaser dom 05/07 (`2026-07-05-a`), previa lun 06/07 (`2026-07-06-a`),
  recordatorio mar 07/07 (`2026-07-07-a`, genérico y honesto en ambos
  escenarios), chusmerío jue 09/07 (`2026-07-09-a`).
- Páginas vivas: `2026-07-04-records.html`, `2026-07-06-la-previa.html`,
  `2026-07-09-chusmerio.html` (todas `pending`; contadores de deuda en vivo).
- ⚠️ MIÉRCOLES 08/07 sin push pre-encolado a propósito: su contenido necesita
  los datos de la fecha del lunes. Lo cubre la corrida del miércoles (Routine
  o /engagement a mano). Ídem viernes 10/07 en adelante. Regla: mejor
  silencio que contenido viejo.
- ⚠️ Corrida del MARTES 07/07: si hay partida nueva del lunes en `games`,
  crear la crónica y REEMPLAZAR el push `2026-07-07-a` (título/cuerpo/url)
  antes de las 14:00. Si no se jugó, dejarlo y registrar "semana congelada".
- ⚠️ Corrida del JUEVES 09/07: refrescar el chusmerío con lo del lunes
  (sequía de Mac, deudas, últimos puestos pueden haber cambiado) — la página
  está fechada "al cierre del 3/7" pero merece edición actualizada.

## 🔭 Corrida de HOY (2026-07-03, manual)

Bootstrap del sistema completo: capa push, tracking, comando, primera semana
encolada. Qué mirar en la próxima corrida: ¿llegaron los pushes del domingo y
lunes? (send_log), ¿hubo clicks/reacciones/answers? (engagement), ¿alguien
respondió las preguntas de deuda? Primer dato real de conversión esperado el
lunes a la noche.

## TODO / ángulos sin usar

🏆 Récords del grupo · 🔮 Horóscopo unístico (qué carta sos) · 📱 Feed 1ª
persona · 🎤 Confesiones del mazo · crónicas con "mano a mano" (posición del
ganador ronda por ronda) · especial "remontadas" · especial sedes (¿quién
hostea mejor?) · aniversarios de fechas históricas (648 de Naso, multa 150 de
Tano) · pitch page opcional por experiencia (caso de producto) — no usado aún.
