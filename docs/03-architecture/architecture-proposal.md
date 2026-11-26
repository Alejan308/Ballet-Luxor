# Arquitectura Técnica — Ballet-Luxor Landing Page

**Estado:** REVIEW
**Versión:** 1.0
**Fecha:** 2026-11-22
**Autor:** Software Architect
**Proyecto:** Ballet-Luxor

---

## 1. Visión General de la Solución

Landing page estática modular orientada a conversión de alta gama, desarrollada con tecnologías web estándar (HTML5 + CSS3 + Vanilla JavaScript ES6). No requiere servidor backend ni bases de datos para su funcionamiento.

---

## 2. Estructura de Directorios

```text
Ballet-Luxor/
│
├── index.html                 # Punto de entrada HTML5 semántico
│
├── css/
│   ├── variables.css          # Paleta Luxor (dorados, rojos, morados, tipografías)
│   ├── layout.css             # Grid, flexbox, contenedor responsivo y media queries
│   └── components.css         # Hero, cards, botones, modal lightbox, testimonios, CTA
│
├── js/
│   ├── config.js              # Configuración y datos ofuscados (WhatsApp, IG, pricing)
│   ├── whatsapp.js            # Generador dinámico de enlaces y formulario interactivo
│   └── main.js                # Lógica de UI (lightbox, scroll suave, animaciones)
│
├── assets/
│   ├── images/
│   │   ├── luxor-temple.jpg   # Fondo temático oficial del Templo de Luxor
│   │   └── gallery/           # Fotos e ilustraciones temáticas del show
│   └── icons/                 # Iconografía SVG (WhatsApp, Instagram, Estrellas, etc.)
│
└── docs/                      # Documentación del ciclo de ingeniería (Discovery, Reqs, Arch, Audit)
```

---

## 3. Estrategia de Protección de Datos Sensibles (Anti-Scraping)

Para dar cumplimiento a la directiva de **"proteger los datos de forma adecuada"**:
1. **Ofuscación de número telefónico:**
   El número telefónico `+54 9 11 3849-6030` no se inyecta como texto plano estático en el HTML (para evitar que bots cosechadores de enlaces `tel:` o `href="https://wa.me/..."` lo capturen). Se almacena codificado en Base64 o array de caracteres en `config.js` y se reconstruye en tiempo de ejecución solo ante interacción del usuario o carga del script cliente.
2. **Generación dinámica de URL:**
   La función `buildWhatsAppUrl(customMessage)` arma la URL segura (`https://api.whatsapp.com/send?phone=...&text=...`) en el momento en que el usuario hace click o envía el formulario de consulta.

---

## 4. Diseño Visual & Performance (Luxor Night Atmosphere)

- **Fondos:** Uso de `background-attachment: fixed` en desktop (paralaje sutil) con overlays degradados de gradiente radial y lineal (`rgba(13, 11, 18, 0.85)` a `rgba(74, 14, 23, 0.6)`) para asegurar que el contraste del texto supere el ratio 4.5:1 requerido por WCAG AA.
- **Tipografía:** Uso de Google Fonts (`Cinzel` o `Playfair Display` para títulos dorados imperiales; `Montserrat` o `Plus Jakarta Sans` para lectura ágil y moderna).
- **Video:** Iframe responsivo de YouTube con `loading="lazy"` para no retrasar el First Contentful Paint (FCP).
