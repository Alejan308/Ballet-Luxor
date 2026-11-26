/**
 * Ballet-Luxor - Interacciones de Usuario (v1.2)
 * Incluye modal interactivo de bailarinas, lightbox, elementos y validación de fechas (hoy+1 a hoy+10 años).
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Manejo del Scroll en Navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Conectar Enlaces de Instagram
  const igLinks = document.querySelectorAll('.instagram-link');
  igLinks.forEach(link => {
    link.href = LUXOR_CONFIG.social.instagramUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  // 3. Conectar Botón Flotante de WhatsApp
  const waFloat = document.getElementById('whatsapp-float-btn');
  if (waFloat) {
    waFloat.addEventListener('click', function (e) {
      e.preventDefault();
      LUXOR_CONFIG.openWhatsApp('¡Hola Ballet Luxor! Quisiera consultar disponibilidad para un show.');
    });
  }

  // 4. Conectar CTAs directos a WhatsApp
  const waCTAs = document.querySelectorAll('.cta-whatsapp');
  waCTAs.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const customTopic = this.getAttribute('data-topic') || 'información general';
      const msg = `¡Hola Ballet Luxor! Quisiera consultar disponibilidad y cotización sobre: ${customTopic}.`;
      LUXOR_CONFIG.openWhatsApp(msg);
    });
  });

  // 5. Configurar Restricción de Fecha en Formulario (Día siguiente hasta 10 años en el futuro)
  const eventDateInput = document.getElementById('event-date');
  if (eventDateInput) {
    const today = new Date();

    // Fecha mínima: Mañana (hoy + 1 día)
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDateStr = tomorrow.toISOString().split('T')[0];
    eventDateInput.min = minDateStr;

    // Fecha máxima: Hoy + 10 años
    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() + 10);
    const maxDateStr = maxDate.toISOString().split('T')[0];
    eventDateInput.max = maxDateStr;

    // Valor predeterminado de sugerencia (ej: sábado próximo o fecha mínima)
    eventDateInput.value = minDateStr;
  }

  // 6. Manejo del Formulario de Cotización
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('client-name').value.trim() || 'un cliente';
      const eventType = document.getElementById('event-type').value || 'Evento';
      const eventDate = document.getElementById('event-date').value || 'A definir';
      const guests = document.getElementById('event-guests').value || 'A definir';
      const comments = document.getElementById('event-comments').value.trim();

      // Validación estricta de fecha
      if (eventDateInput && (eventDateInput.value < eventDateInput.min || eventDateInput.value > eventDateInput.max)) {
        alert(`Por favor ingresa una fecha posterior a hoy (hasta ${eventDateInput.max}).`);
        return;
      }

      let structuredMsg = `¡Hola Ballet Luxor! Mi nombre es ${name}.\n` +
        `Me gustaría cotizar un show para:\n` +
        `• Tipo de evento: ${eventType}\n` +
        `• Fecha estimada: ${eventDate}\n` +
        `• Invitados aprox: ${guests}`;

      if (comments) {
        structuredMsg += `\n• Detalles: ${comments}`;
      }

      LUXOR_CONFIG.openWhatsApp(structuredMsg);
    });
  }

  // 7. Modal / Detalle de Bailarina al hacer click en tarjeta
  const dancerCards = document.querySelectorAll('.dancer-card');
  const dancerModalOverlay = document.getElementById('dancer-modal-overlay');
  const dancerModalClose = document.getElementById('dancer-modal-close');
  const modalAvatar = document.getElementById('modal-dancer-avatar');
  const modalName = document.getElementById('modal-dancer-name');
  const modalRole = document.getElementById('modal-dancer-role');
  const modalBio = document.getElementById('modal-dancer-bio');
  const modalPhotosGrid = document.getElementById('modal-photos-grid');

  function openDancerModal(dancerId) {
    const dancer = LUXOR_CONFIG.dancers.find(d => d.id === dancerId);
    if (!dancer) return;

    modalAvatar.src = dancer.coverImage;
    modalAvatar.alt = dancer.name;
    modalName.textContent = dancer.name;
    modalRole.textContent = dancer.role;
    modalBio.textContent = dancer.fullBio;

    // Renderizar fotos adicionales
    modalPhotosGrid.innerHTML = '';
    dancer.gallery.forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = `${dancer.name} en show`;
      img.className = 'modal-photo-thumb';
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(imgSrc);
      });
      modalPhotosGrid.appendChild(img);
    });

    dancerModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDancerModal() {
    dancerModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  dancerCards.forEach(card => {
    card.addEventListener('click', function (e) {
      // Si hizo click en el link de IG, no abrir modal
      if (e.target.closest('.dancer-ig-link')) return;
      const dancerId = this.getAttribute('data-dancer-id');
      openDancerModal(dancerId);
    });
  });

  if (dancerModalClose) {
    dancerModalClose.addEventListener('click', closeDancerModal);
  }

  if (dancerModalOverlay) {
    dancerModalOverlay.addEventListener('click', function (e) {
      if (e.target === dancerModalOverlay) {
        closeDancerModal();
      }
    });
  }

  // 8. Lightbox para Fotos y Videos Generales
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  let lightboxVideo = null;

  window.openLightbox = function (src) {
    if (!lightboxModal || !lightboxImg) return;

    // Limpia cualquier video previo si existiera
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.remove();
      lightboxVideo = null;
    }

    const isVideo = /\.(mp4|webm|ogg)$/i.test(src);

    if (isVideo) {
      lightboxImg.style.display = 'none';

      lightboxVideo = document.createElement('video');
      lightboxVideo.src = src;
      lightboxVideo.controls = true;
      lightboxVideo.autoplay = true;
      lightboxVideo.playsInline = true;
      // Copia las clases y estilos de tamaño de tu imagen para mantener el diseño
      lightboxVideo.className = lightboxImg.className;
      lightboxVideo.style.maxWidth = '90vw';
      lightboxVideo.style.maxHeight = '85vh';

      // Evita que hacer clic en pausa/volumen cierre el modal
      lightboxVideo.addEventListener('click', (e) => e.stopPropagation());

      lightboxImg.parentNode.insertBefore(lightboxVideo, lightboxImg.nextSibling);
    } else {
      lightboxImg.style.display = 'block';
      lightboxImg.src = src;
    }

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');

    // Detiene el video y corta el audio al cerrar
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.remove();
      lightboxVideo = null;
    }

    if (!dancerModalOverlay.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', closeLightbox);
  }

  // Escape key para cerrar modales
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (lightboxModal && lightboxModal.classList.contains('active')) {
        closeLightbox();
      } else if (dancerModalOverlay && dancerModalOverlay.classList.contains('active')) {
        closeDancerModal();
      }
    }
  });
});
