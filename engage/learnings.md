# Learnings del agente — Lunes de UNO

## ⏱️ CADENCIA VIGENTE: semana editorial (fijada por Andrés, 2026-07-03)

- **Domingo 20:00** — teaser → apunta a La Previa del lunes (se crea el domingo).
- **Lunes 10:00** — push de La Previa (misma página, otro nid).
- **Martes 09:00** — crónica de anoche (o recordatorio de carga si no hay datos; expira 14:00).
- **Jueves 19:30** — ángulo rotativo (chusmerío / récords / horóscopo / feed / confesiones).
- Miércoles, viernes y sábado: **silencio** (solo gestión y memoria). Máximo 1 push/día.

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
  `VAPID_PRIVATE_KEY` y suscribirse en notificaciones.html — ver engage/ROUTINE.md).
- Routine: NO activa todavía. Hasta que corra, la cola encolada del 5–9/7 sale
  sola vía dispatcher, pero nadie reconcilia ni genera la crónica del martes.
- Datos: 15 fechas válidas en `games` (cutoff 29/06). Temporadas cerradas: 4
  (T1 Gordo, T2 PT, T3 Carucha, T4 Cobra — T4 sin doc en `seasons`, calculada).
- Eventos `engagement`: 0. Compactaciones: ninguna.
- Inventario completo de assets y fórmulas: `engage/AUDIT.md`.

## 🗓️ Semana en curso (editorial del lunes 06/07)

- Encolado: teaser dom 05/07 20:00 (`2026-07-05-a`), previa lun 06/07 10:00
  (`2026-07-06-a`), recordatorio martes 07/07 09:00 (`2026-07-07-a`, genérico
  y honesto en ambos escenarios), chusmerío jue 09/07 19:30 (`2026-07-09-a`).
- Páginas vivas: `2026-07-06-la-previa.html`, `2026-07-09-chusmerio.html`
  (ambas `pending` en proposals; contadores de deuda calculados en vivo con JS).
- ⚠️ Para la corrida del MARTES 07/07: si hay partida nueva del lunes en
  `games`, crear la crónica y REEMPLAZAR el push `2026-07-07-a` (título/cuerpo/url)
  antes de las 09:00. Si el lunes no se jugó, dejarlo como está y registrar
  "semana congelada" acá.
- ⚠️ Para la corrida del JUEVES 09/07: reconciliar el chusmerío si alguna
  deuda cambió (answers) o si la crónica del lunes aporta material más fresco.

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
