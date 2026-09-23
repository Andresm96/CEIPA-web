# Brief técnico-visual: Hero Slider con Card Carousel lateral
**Referencia:** https://template.makedreamwebsite.com/advanced-slider-with-card-carousel/
**Uso de este documento:** entregarlo tal cual a una IA (Claude, GPT, v0, Cursor, Lovable…) como especificación para reconstruir el componente. Contiene contenido, distribución responsive con medidas reales, y cada animación con sus valores exactos.

---

## 0. Instrucción para la IA

> Construye un componente "hero slider" de pantalla completa compuesto por cuatro capas sincronizadas: **fondo fotográfico**, **bloque de texto con transición vertical**, **carrusel horizontal de tarjetas** y **barra de puntos numerados**. Los cuatro elementos responden a un único índice activo. No hay autoplay: el slider solo avanza por interacción del usuario. Respeta al pie de la letra las medidas, duraciones y curvas descritas abajo. El original está hecho en WordPress + Elementor con Swiper 8 y jQuery; si lo reconstruyes en otro stack (React, Vue, HTML/CSS/JS puro), replica el **comportamiento**, no la estructura de Elementor.

---

## 1. Qué es, en una frase

Un hero a pantalla completa donde la mitad izquierda muestra el nombre de un destino turístico, un párrafo y un botón, y la mitad derecha muestra una fila de tarjetas-fotografía que se desborda fuera de la pantalla hacia la derecha. La tarjeta situada más a la izquierda es la "activa": es más alta que las demás y define qué texto y qué fotografía de fondo se ven. Al avanzar, las tarjetas se desplazan a la izquierda, la nueva tarjeta activa crece, el fondo hace crossfade con un zoom sutil y los textos rotan verticalmente como un rodillo.

---

## 2. Contenido (5 slides)

| # | Título (H2) | Subtítulo de tarjeta | Imagen de fondo (full-screen) | Imagen de la tarjeta |
|---|---|---|---|---|
| 1 | Komodo | Indonesia | christian-joudrey-DuD5D3lWC3c | photo-1505144808419 |
| 2 | Kerala | India | andrew-coelho-aL7SA1ASVdQ | qingbao-meng-01_igFr7hd4 |
| 3 | Matterhorn | Switzerland | samuel-ferrara-uOi3lg8fGl4 | benjamin-voros-phIFdC6lA4E |
| 4 | Cappadocia | Turkey | daniel-de-lima-ofPW5f2WmHc | freddie-addery-73IJOcPbbwM |
| 5 | Malgovik | Sweden | eberhard-grossgasteiger-y2azHvupCVo | v2osk-iVjKHVVmzec |

- **Importante:** la foto de fondo y la foto de la tarjeta del mismo slide son **fotografías distintas** del mismo destino. Todas son horizontales, de paisaje, con zonas oscuras que permiten texto blanco encima.
- **Párrafo** (idéntico en los 5 slides en la demo): *"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. consectetur adipiscing elit, sed do elit tellus."*
- **Botón:** "Explore" (un CTA por slide, cada uno puede apuntar a una URL distinta).
- Cada slide es un bloque independiente: título + párrafo + botón + foto de fondo + foto de tarjeta + subtítulo.

---

## 3. Arquitectura de capas (z-index)

De atrás hacia adelante, dentro de una sección con `position: relative; overflow: hidden`:

1. **Capa 0 — Fondo:** contenedor `.slider-background` en `position:absolute; inset:0`, con las 5 `<img>` apiladas (`position:absolute; inset:0; width:100%; height:100%; object-fit:cover`). Se inyectan por JS a partir de una galería.
2. **Capa 2 — Overlay de degradado:** pseudo-elemento `::before` a pantalla completa con `background-image: linear-gradient(150deg, #000000 0%, rgba(179,179,179,0.25) 100%)` y `opacity: .5`. Oscurece la esquina superior izquierda para que el texto blanco sea legible sobre cualquier foto.
3. **Capa 3 — Contenido:** las dos columnas (texto + carrusel), la barra de puntos y las flechas.

```
┌─ SECCIÓN 100vh, overflow hidden ───────────────────────────────┐
│ [img][img][img][img][img]  ← 5 fondos apilados, opacity 0/1     │
│ ░░ overlay degradado 150deg, opacity .5 ░░                      │
│ ┌ COLUMNA IZQ 50% ─────────┐ ┌ COLUMNA DER 50% ───────────────┐ │
│ │ ▌ barra   TÍTULO H2      │ │  [card activa][card][card][card│→ se desborda
│ │ ▌ de      párrafo        │ │   410px alto ][320 ][320 ][320 │ │  fuera de
│ │ ▌ puntos  [ Explore ]    │ │                                │ │  la pantalla
│ │ ▌ vertical               │ │  (◀)(▶)                        │ │
│ └──────────────────────────┘ └────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Distribución DESKTOP (≥ 1025 px)

Medidas reales tomadas a **1440 × 900**:

**Sección**
- `display:flex; flex-direction:row; align-items:center; min-height:100vh; overflow:hidden`.
- Padding lateral: **10 %** por lado en ≥ 1381 px (144 px a 1440) · **4 %** entre 768–1380 px. Padding vertical 0.

**Columna izquierda — 50 % del ancho (576 px a 1440)**
- Es un `flex-direction: row` que contiene: la barra de puntos + el bloque de texto.
- **Barra de puntos vertical:** ancho fijo **30 px**, altura **600 px** (`min-height`, máx. 80vh), anclada `position:absolute; left:0; bottom:0`. Los 5 puntos se distribuyen con `justify-content: space-between`.
  - Línea guía: pseudo-elemento de **1 px de ancho**, alto `calc(100% - 20px)`, centrado horizontalmente, color `#B0B7D04D` (blanco azulado al 30 %).
  - Punto inactivo: círculo de 23 px escalado a `scale(.3)` → se ve de **7 px**, color `#B0B7D0`, número oculto (`opacity:0`).
  - Punto activo: `scale(1)` → **23 px**, con su número (1–5) visible en blanco, DM Sans/bold 13 px.
- **Bloque de texto:** ocupa el resto de la columna. `justify-content:center; align-items:flex-start`. Padding lateral variable: 15 % en > 1750 px · 8 % izq / 12 % der entre 1381–1750 px · 0.5 % izq / 5.5 % der entre 768–1380 px.
  - **H2:** DM Sans 600, **64 px**, `line-height:1.15em`, blanco.
  - **Párrafo:** DM Sans 400, **16 px**, blanco, `text-shadow: 0 0 10px rgba(0,0,0,.3)`, ancho ~ 530 px (≈ 3 líneas).
  - **Botón:** DM Sans 500, fondo `#1D5595`, padding `15px 30px`, sin border-radius. El contenedor lleva `margin-top:-15px`.
  - Los tres bloques (título, párrafo, botón) viven cada uno dentro de un contenedor con `overflow:hidden` — es la máscara que recorta la animación vertical (ver §7).

**Columna derecha — 50 % del ancho (576 px a 1440)**
- Contiene el carrusel y, debajo, la fila de flechas.
- **Truco clave de la distribución:** el track del carrusel tiene un **ancho fijo de 1400 px** (1360 px cuando hay flechas), mucho mayor que su columna de 576 px. Como la sección tiene `overflow:hidden`, las tarjetas **se desbordan hacia la derecha y se cortan en el borde de la pantalla**. A 1440 px solo se ven ~2.8 tarjetas. Esto produce la sensación de "fila infinita que continúa fuera del viewport".
- **Swiper:** `slidesPerView: 5`, `spaceBetween: 20px`, `slidesPerGroup: 1`, `loop: true`, `speed: 500ms`, `grabCursor: true`, **sin autoplay**.
  - Ancho de cada tarjeta a 1440: **256 px** — resultado de `(1360 − 20×4) / 5`.
  - El `swiper-wrapper` tiene `height: 410px` y `align-items:center`, así las tarjetas pequeñas quedan **centradas verticalmente** respecto a la activa.
- **Tarjetas:**
  - Altura normal **320 px**, altura activa **410 px**. Ancho 256 px. `border-radius: 8px`. `box-shadow: 0 0 50px rgba(0,0,0,.15)`.
  - La imagen llena la tarjeta (`position:absolute; inset:0; width/height:100%`).
  - Overlay de la tarjeta: `::before` con `linear-gradient(20deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,0) 100%)` — oscurece la esquina inferior izquierda.
  - Texto al pie (`align-items:flex-end`, padding `20px 20px 25px`): **nombre** DM Sans 500 / 19 px / blanco, y debajo **país** Poppins 500 / 14 px / `#B7B7B7B8`.
  - La tarjeta activa es siempre **la primera visible por la izquierda**, alineada con el borde izquierdo de la columna derecha.
- **Flechas:** dos botones circulares debajo del carrusel, pegados a la izquierda, separados **17 px**. Círculo `border-radius:100px`, fondo `#BDBDBD9C` (gris translúcido), icono/flecha `#2C2B2B`, padding `12px 14px`, ~41 × 40 px.
- La paginación nativa de Swiper y sus flechas nativas están **ocultas** (`display:none`): son solo el motor. Los puntos y flechas visibles son elementos propios que disparan clics sobre los nativos.

**Tablet (768 – 1024 px)** — variante intermedia, misma lógica:
- Columnas **65 % / 35 %**. Padding de sección 4 %.
- H2 a **50 px**. Barra de puntos: 30 px × 500 px de alto.
- Track del carrusel: ancho fijo **620 px** (580 con flechas), `slidesPerView: 3`, gap 20 px → tarjetas de **180 px**.
- Alturas de tarjeta: **180 px** normal / **250 px** activa.
- Sigue desbordándose hacia la derecha.

---

## 5. Distribución MOBILE (≤ 767 px)

Medidas reales tomadas a **375 × 812**. Cambia de dos columnas a **una sola columna apilada**:

- **Sección:** `min-height: 0` (deja de ser 100vh; a 375 px mide ~631 px de alto). Padding `60px 30px 90px`. El fondo sigue cubriendo toda la sección.
- **Orden vertical:** Título → Párrafo → Botón → Carrusel de tarjetas (con flechas superpuestas) → Barra de puntos horizontal.
- **Texto:**
  - H2 a **30 px** (DM Sans 600).
  - Párrafo 16 px, ocupa todo el ancho (~315 px), ~5 líneas.
  - Botón con `margin-top:-20px`; el bloque de texto lleva `padding-bottom: 50px`.
- **Carrusel:**
  - El widget se limita a **300 px de ancho máximo y se centra** (`margin: 0 auto`). Ya **no se desborda**: se ve completo.
  - Track real 260 px (`100% − 40px` por las flechas), `slidesPerView: 3`, gap 20 px → tarjetas de **73 px** de ancho.
  - Alturas: **80 px** normal / **105 px** activa.
  - **Los textos de las tarjetas se ocultan** (`opacity: 0`): a ese tamaño solo funcionan como miniaturas.
- **Flechas:** salen de su fila y se **superponen a los extremos de la fila de tarjetas**, centradas verticalmente sobre ellas: `left: calc(50% − 150px)` y `right: calc(50% − 150px)`, desplazadas `top: -105px`. Quedan medio encima de la primera y de la última miniatura (ver captura: dos círculos grises translúcidos).
- **Barra de puntos:** pasa de vertical a **horizontal**. Ancho **200 px**, alto 30 px, centrada (`left:50%; transform:translateX(-50%)`), colocada **debajo del carrusel** (`bottom: -175px`), `flex-wrap: nowrap`. La línea guía gira: pasa a `width: calc(100% − 20px); height: 1px`. Mismos tamaños de punto (7 px inactivo / 23 px activo con número).
- **Gesto principal:** swipe horizontal sobre las tarjetas (Swiper con touch activo). Flechas y puntos siguen funcionando.

---

## 6. Animación del fondo (crossfade + zoom)

Estado base de cada `<img>` de fondo: `opacity: 0; transform: scale(1.1); transition: all 1s ease-in-out`.

Al cambiar de slide:
1. La imagen **saliente** recibe la clase `prev`: mantiene `opacity: 1` pero su transform vuelve de `scale(1)` a **`scale(1.1)`** con transición de **1 s ease-in-out** → se aleja lentamente mientras sigue visible por debajo.
2. La imagen **entrante** recibe `currentForward` (o `currentBackward`): pasa a `z-index: 1`, se coloca encima y ejecuta un keyframe de **0.5 s linear**:

```css
@keyframes bgNext {
  0%   { opacity: 0; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1);   }
}
```
Queda fijada en `opacity:1; transform:scale(1)` con `transition: all 1s ease-in-out`.

**Resultado percibido:** un fundido cruzado de medio segundo en el que la foto nueva entra ligeramente ampliada (110 %) y se asienta a su tamaño real, mientras la anterior se va agrandando por detrás. Nunca hay negro entre fotos. El efecto es idéntico hacia adelante y hacia atrás (ambas clases usan el mismo keyframe); la dirección solo afecta al texto.

---

## 7. Animación del texto (rodillo vertical direccional)

Es la animación más característica. Los cinco títulos (y los cinco párrafos, y los cinco botones) existen **simultáneamente en el DOM**, apilados dentro de un contenedor-máscara.

**Montaje**
- Contenedor `.changing-widget`: `overflow: hidden`, `height: var(--h)`, `transition: all .3s ease-in-out`.
  - `--h` = altura del texto actualmente visible, medida por JS en cada cambio. Por eso, si el nuevo título ocupa dos líneas, **la máscara crece o encoge suavemente en 0.3 s** y el párrafo de abajo se reacomoda.
  - `--gap: 40px` y `--height: calc(var(--h) + var(--gap))` = distancia de recorrido de la animación (altura del texto + 40 px de aire, para que nunca se cruce visualmente con el siguiente).
- Cada bloque hijo: `position:absolute; top:50%; transform:translateY(-50%)`.
- El contenido interno de cada bloque está **aparcado fuera de la vista** en `translateY(calc(-10 * var(--height)))`. Solo los bloques con clase entran en escena.

**Keyframes**

```css
@keyframes prev       { 0% { transform: translateY(0); }                        100% { transform: translateY(calc(-1 * var(--height))); } }
@keyframes next       { 0% { transform: translateY(0); }                        100% { transform: translateY(var(--height)); } }
@keyframes currentUp  { 0% { transform: translateY(var(--height)); }            100% { transform: translateY(0); } }
@keyframes currentDown{ 0% { transform: translateY(calc(-1 * var(--height))); } 100% { transform: translateY(0); } }
```

**Lógica direccional**
- **Avanzar (siguiente slide):** el texto saliente recibe `prev` → **sube y desaparece por arriba**. El texto entrante recibe `currentUp` → **sube desde abajo** hasta su sitio.
- **Retroceder (slide anterior):** el saliente recibe `next` → **baja y desaparece por abajo**. El entrante recibe `currentDown` → **baja desde arriba**.
- El bloque entrante lleva `z-index: 1` para pasar por delante del saliente durante el cruce.

**Duraciones escalonadas (crea el efecto de profundidad)**
| Elemento | `--speed` | Curva |
|---|---|---|
| Título H2 | **0.8 s** | `ease-in-out` |
| Párrafo | **0.5 s** | `ease-in-out` |
| Botón | **0.5 s** | `ease-in-out` |

Los tres arrancan a la vez, pero el título tarda casi el doble: se lee como un desplazamiento en capas, no como un bloque rígido.

---

## 8. Animación de las tarjetas

- Movimiento horizontal gestionado por Swiper: `speed: 500ms` (curva por defecto de Swiper, `ease`), `slidesPerGroup: 1`, `loop: true` (clona slides para el bucle infinito, sin salto al pasar del 5 al 1).
- **Cambio de altura:** al cambiar la slide activa, la nueva crece de 320 → 410 px y la anterior encoge de 410 → 320 px con `transition: all .3s ease-in-out **.2s**`.
  - Ese **retardo de 0.2 s es intencional**: primero se ve el deslizamiento lateral y, ya casi terminado, la tarjeta "se estira". Sin el delay el efecto se siente atropellado.
- Como el wrapper tiene `align-items: center`, el crecimiento ocurre **hacia arriba y hacia abajo a la vez** desde el centro.
- El cursor es `grab` / `grabbing`: se puede arrastrar la fila con el ratón además de usar flechas y puntos.

---

## 9. Sincronización: cómo se enlazan las cuatro capas

El original usa un patrón sencillo y muy replicable:

1. Un `setInterval` de **500 ms** lee cuál es la slide activa del carrusel (`data-swiper-slide-index` de `.swiper-slide-active`).
2. Si el índice cambió respecto al anterior, calcula la **dirección**:
   - `anterior < actual` → hacia adelante.
   - `anterior > actual` → hacia atrás.
   - Casos de bucle: de `último → 0` cuenta como adelante; de `0 → último` cuenta como atrás.
3. Con esa dirección aplica las clases: `prev`/`currentUp` (adelante) o `next`/`currentDown` (atrás) a los textos, `prev`/`currentForward`/`currentBackward` a los fondos, y mueve la clase `active` al punto correspondiente.
4. También recalcula `--h` con la altura del nuevo texto.

> **Nota para quien lo reconstruya:** el sondeo cada 500 ms es un parche de la versión Elementor. En un stack moderno, sustitúyelo por el evento `slideChange` de Swiper (o por el estado del componente en React) y deriva la dirección del signo de `realIndex − previousIndex`. El resultado visual debe ser idéntico, pero sin el desfase de hasta medio segundo entre el movimiento de las tarjetas y el cambio de texto/fondo. Si quieres reproducir el original tal cual, conserva ese pequeño retardo: hace que las tarjetas parezcan "mandar" y el resto "obedecer".

---

## 10. Animación de entrada (al cargar la página)

1. A los **500 ms** de `document.ready`, la sección recibe la clase `loaded`:
   - **Barra de puntos y flechas** pasan de `opacity: 0` a `1` en **0.8 s ease-in-out**.
2. En cuanto Swiper termina de inicializarse (se comprueba con un `setInterval` de 50 ms), el carrusel recibe `loaded`:
   - Pasa de `opacity: 0; transform: translateX(100px)` a `opacity: 1; translateX(0)` en **0.8 s ease-in-out** → **las tarjetas entran deslizándose desde la derecha**.
3. Antes de `loaded`, `.swiper-wrapper` lleva `transition-duration: 0s !important` para que el posicionamiento inicial del bucle no se vea como un salto.
4. El primer bloque de texto arranca con `currentUp` → el título también entra subiendo desde abajo.
5. El primer fondo arranca con `currentForward` → hace su fundido con zoom de 0.5 s.

**Secuencia percibida al cargar:** foto de fondo aparece con zoom-out suave → título/párrafo/botón suben a su sitio → las tarjetas entran desde el borde derecho → puntos y flechas aparecen en fundido.

---

## 11. Interacciones disponibles

| Acción | Efecto |
|---|---|
| Clic en flecha ▶ / ◀ | Avanza/retrocede una posición (dispara internamente el botón nativo de Swiper) |
| Clic en un punto numerado | Salta a esa posición (dispara el bullet nativo oculto) |
| Arrastrar / hacer swipe sobre las tarjetas | Desplaza el carrusel |
| Hover sobre una tarjeta | Sin efecto propio |
| Autoplay | **No hay.** El slider está quieto hasta que el usuario interactúa |
| Bucle | Infinito en ambos sentidos, sin salto visible |

---

## 12. Tokens de diseño

```
COLOR
  Botón CTA .............. #1D5595
  Texto principal ........ #FFFFFF
  Sombra de texto ........ 0 0 10px rgba(0,0,0,.3)
  Overlay de sección ..... linear-gradient(150deg, #000000 0%, rgba(179,179,179,.25) 100%) @ opacity .5
  Overlay de tarjeta ..... linear-gradient(20deg, rgba(0,0,0,.75) 0%, transparent 100%)
  Punto / línea .......... #B0B7D0  ·  línea #B0B7D04D
  Flechas ................ fondo #BDBDBD9C · icono #2C2B2B
  Nombre en tarjeta ...... #FFFFFF
  País en tarjeta ........ #B7B7B7B8

TIPOGRAFÍA
  H2 ............ DM Sans 600 · 64 / 50 / 30 px (desktop / tablet / mobile) · line-height 1.15em
  Párrafo ....... DM Sans 400 · 16 px
  Botón ......... DM Sans 500
  Nombre card ... DM Sans 500 · 19 px
  País card ..... Poppins 500 · 14 px
  Nº de punto ... 13 px · bold

FORMA
  Radio de tarjeta ....... 8 px
  Sombra de tarjeta ...... 0 0 50px rgba(0,0,0,.15)
  Flechas ................ círculo (radius 100px), padding 12px 14px
  Punto .................. círculo de 23 px (scale .3 → 7 px cuando está inactivo)

MOVIMIENTO
  Título ................. 0.8 s ease-in-out
  Párrafo / botón ........ 0.5 s ease-in-out
  Fondo (fundido) ........ 0.5 s linear + transición 1 s ease-in-out sobre la escala
  Tarjetas (deslizar) .... 0.5 s
  Tarjetas (alto) ........ 0.3 s ease-in-out con retardo 0.2 s
  Puntos ................. 0.3 s ease-in-out
  Entrada de UI .......... 0.8 s ease-in-out
  Alto de la máscara ..... 0.3 s ease-in-out
  Recorrido vertical ..... altura del texto + 40 px de separación
```

---

## 13. Checklist de aceptación

- [ ] La tarjeta activa es siempre la **primera por la izquierda**, no la del centro.
- [ ] La fila de tarjetas **se corta en el borde derecho** de la pantalla en desktop y tablet; en mobile cabe entera y va centrada.
- [ ] El título entra **desde abajo** al avanzar y **desde arriba** al retroceder (y el saliente sale por el lado contrario).
- [ ] El título tarda más que el párrafo y el botón (0.8 s vs 0.5 s).
- [ ] La máscara de texto **se recorta**: ningún texto se ve fuera de su caja durante el movimiento.
- [ ] Si el texto nuevo tiene distinta altura, la caja se ajusta con una transición de 0.3 s, sin saltos.
- [ ] El fondo nunca queda en blanco/negro entre dos fotos: siempre hay solape.
- [ ] La tarjeta activa crece **0.2 s después** de empezar el desplazamiento.
- [ ] El punto activo se agranda a 23 px y revela su número; los demás quedan en 7 px sin número.
- [ ] La barra de puntos es **vertical en desktop/tablet** y **horizontal debajo del carrusel en mobile**.
- [ ] En mobile los textos de las tarjetas están ocultos y las flechas se superponen a los extremos de la fila.
- [ ] El bucle es infinito en ambas direcciones y no hay salto al pasar del último al primero.
- [ ] No hay autoplay.

---

## 14. Mejoras recomendadas sobre el original

Si la IA va a reconstruirlo (y no solo clonarlo), conviene corregir estas deudas de la demo:

- **Sustituir el sondeo de 500 ms** por el evento `slideChange` de Swiper o por el estado del componente.
- **Accesibilidad:** los puntos y flechas deben ser `<button>` con `aria-label` ("Ir al slide 3 de 5", "Siguiente destino"), el contenedor un `role="region"` con `aria-roledescription="carousel"`, y navegación con teclado (←/→). El texto no activo debería quedar `aria-hidden` o fuera del árbol de accesibilidad.
- **`prefers-reduced-motion`:** desactivar el zoom del fondo y el rodillo vertical, dejando solo un fundido de opacidad.
- **Rendimiento:** `loading="lazy"` y `decoding="async"` en las fotos que no son la primera; servir `srcset` con varios anchos; precargar únicamente el fondo del slide 1.
- **Contraste:** el degradado de la sección sirve para el texto de la izquierda; verificar el contraste del nombre/país sobre fotos claras (el degradado de 20° de la tarjeta puede no bastar).
- **Altura en mobile:** el original deja de ser `100vh`; si se quiere pantalla completa usar `100dvh` para evitar el salto de la barra del navegador.
