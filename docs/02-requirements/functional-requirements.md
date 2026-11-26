# Requerimientos Funcionales y No Funcionales — Ballet-Luxor

**Estado:** REVIEW
**Versión:** 1.2
**Fecha:** 2026-11-22
**Autor:** Product Analyst
**Proyecto:** Ballet-Luxor Landing Page
**Documentos relacionados:** `docs/01-discovery/business-context.md`

---

## Requerimientos y Mejoras Solicitadas (v1.2)

### REQ-F-001 — Hero Section Inmersiva (Luxor Temple Night)
- **Descripción:** Pantalla de bienvenida a pantalla completa con imagen del Templo de Luxor iluminado de noche, overlay semitransparente oscuro/dorado, tipografía elegante serif, subtítulo con propuesta de valor y CTA principal.
- **Acción:** Botón "Cotizar Show por WhatsApp" con scroll suave o activación de chat directo.
- **Prioridad:** Alta.

### REQ-F-002 — Elenco y Trayectoria ("Sobre Ballet-Luxor")
- **Descripción:** Presentación del grupo destacando el talento de sus bailarinas profesionales. Mención de los géneros (Raks Sharki, folclore árabe, fusiones modernas, alas de isis, velos, derbake en vivo).
- **Prioridad:** Alta.

### REQ-F-003 — Espectáculos y Servicios para Eventos
- **Descripción:** Tarjetas interactivas detallando las propuestas para:
  1. *Bodas & Recepciones* (Entrada nupcial con candelabro/alas, show festivo).
  2. *Quinces & Cumpleaños* (Show dinámico, coreografías temáticas y animación participativa).
  3. *Eventos Corporativos & Galas* (Apertura de alto impacto visual y elegancia escénica).
- **Prioridad:** Alta.

### REQ-F-004 — Galería Visual (fotos y videos)
- **Descripción:**
  - Sección de videos y fotos en collage, con posibilidad de reproducirlos y verlos en pantalla completa.
- **Prioridad:** Alta.

### REQ-F-005 — Propuesta Económica & Inversión Transparente
- **Descripción:** Muestra clara del valor de inversión inicial:
  - "Shows desde **USD 300**".
  - Desglose orientativo de qué incluye la propuesta base (elenco, vestuario, repertorio musical, duración estimada).
  - Botón "Consultar disponibilidad y presupuesto personalizado".
- **Prioridad:** Alta.

### REQ-F-006 — Testimonios & Social Proof
- **Descripción:** Reseñas destacadas de parejas de novios y productores de eventos certificando la puntualidad, carisma y calidad del espectáculo.
- **Prioridad:** Media.

### REQ-F-007 — Canal de Contacto & Botón Flotante de WhatsApp Protegido
- **Descripción:**
  - Botón flotante siempre accesible en el ángulo inferior derecho con efecto de pulso suave.
  - Enlaces de WhatsApp construidos dinámicamente con mensaje precargado codificado en URL:
    *"¡Hola Ballet Luxor! Quisiera consultar disponibilidad y cotización para un evento."*
  - Formulario de contacto interactivo en la sección de cierre que redirige los datos completados (fecha, tipo de evento, cantidad de invitados) directamente a WhatsApp con el mensaje estructurado.
- **Prioridad:** Alta.

### REQ-F-008 — Redes Sociales y Footer Institucional
- **Descripción:** Enlace al perfil de Instagram (`https://www.instagram.com/balletluxor`), información de zona de cobertura (Buenos Aires y alrededores) y créditos.
- **Prioridad:** Media.


### REQ-F-009 — Integración de Logotipo Oficial
- Incorporar el logotipo oficial (`assets/images/Logo Ballet Luxor.jpg.jpeg`):
  1. En el **Header / Navbar** como emblema de marca visible junto al título.
  2. En el **Hero Section**, ubicado de manera jerárquica encima del título.

### REQ-F-010 — Tarjetas de Bailarinas con Fotos Rectangulares y Enlace a Instagram personales
- Presentar a cada una de las bailarinas del elenco con:
  - Fotografía rectangular real (`assets/integrantes/Cande1.jpeg`, `Evelyn1.jpeg`, `Belu1.jpeg`, `Magali1.jpeg`).
  - Nombre, rol (Magalí Directora & Bailarina, las demás Bailarinas) y breve descripción.
  - Enlace al perfil de Instagram de cada bailarina debajo del párrafo descriptivo.
    - Instagram: `https://www.instagram.com/magali_bellydance?hvrq=M2w4emVrdHp3Z2pn`, `https://www.instagram.com/roldaneve?knvt=MTY4aXBndmNhMGRjYQ== `, `https://www.instagram.com/cande.lescano_?lqvp=NzA1aHd6cW1wbnV5`, `https://www.instagram.com/bel.radinja?cnvx=MWJ4a3R0end0c2o1Mg== `.
  - Efecto interactivo al hacer click: apertura de modal/drawer expandible ("Ver más información") con biografía artística y galería de fotos adicionales individuales de la bailarina.


### REQ-F-011 — Sección de Elementos Tradicionales de la Danza Árabe
- Sección visual e informativa destacando los 9 elementos clave de su puesta en escena:
  1. *Alas de Isis*
  2. *Velos*
  3. *Bastón*
  4. *Alas LED* (espectáculo luminoso moderno)
  5. *Abanicos*
  6. *Sable (Raks Al Sayf - danza de equilibrio)*
  7. *Chinchines / Crótalos (Saggat)*
  8. *Pandereta (Riq)*
  9. *Boleadoras de tela (Poi Veils)*

### REQ-F-012 — Servicio para Restaurantes y Espacios Gastronómicos
- Incorporar como servicio específico en la sección de Espectáculos:
  - Shows para restaurantes, teterías y eventos temáticos con tandas de corta/mediana duración, ambientación y contacto cercano con los comensales.

### REQ-F-013 — Validación de Campo Fecha en Formulario (Restricción Dinámica)
- El campo de fecha del formulario de cotización debe ser de tipo `date` con restricciones dinámicas:
  - `min`: Fecha posterior a la fecha actual de la consulta (`hoy + 1 día`).
  - `max`: Hasta 10 años posteriores a la fecha actual (`hoy + 10 años`).
- Prevención de ingreso de fechas pasadas o fuera de rango.

---

## Requerimientos No Funcionales

### REQ-NF-001 — Responsive Design Fluido
- Compatible y optimizado para pantallas móviles (320px+), tablets (768px - 1024px) y pantallas de escritorio/notebooks (1200px+).

### REQ-NF-002 — Atmósfera Temática Luxor
- Fondo visual del Templo de Luxor integrado con técnicas CSS (gradientes superpuestos, sombras oscuras, detalles dorados y contraste garantizado para legibilidad WCAG AA).

### REQ-NF-003 — Protección Anti-Scraping de Datos Sensibles
- Teléfono y datos de contacto estructurados para no ser recolectados fácilmente por bots automáticos en texto plano mediante ofuscación básica en script de configuración.

### REQ-NF-004 — Arquitectura Ligera (Vanilla Web)
- HTML5 semántico, CSS3 modular con variables CSS (`custom properties`), y JavaScript nativo ES6 sin dependencias externas pesadas para carga ultrarrápida.
