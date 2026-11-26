/**
 * Ballet-Luxor - Configuración General y Protección de Datos
 */

const LUXOR_CONFIG = (function () {
  const _encPhone = 'KzU0OTExMzg0OTYwMzA='; // +5491138496030

  function getRawPhone() {
    try {
      return atob(_encPhone);
    } catch (e) {
      return '+5491138496030';
    }
  }

  return {
    pricing: {
      currency: 'USD',
      basePrice: 300,
      displayText: 'Desde USD 300'
    },
    social: {
      instagramUrl: 'https://www.instagram.com/balletluxor/',
      youtubeVideoId: 'aj4uOa8uDsk'
    },
    dancers: [
      {
        id: 'cande',
        name: 'Candela L.',
        role: 'Bailarina Solista & Coreógrafa',
        shortBio: 'Especialista en danza oriental clásica y fusiones modernas. Directora coreográfica de Ballet Luxor.',
        fullBio: 'Candela cuenta con una destacada trayectoria en certámenes y escenarios de danza árabe en Argentina. Se especializa en estilo egipcio clásico (Raks Sharki), coreografías con elementos y fusiones de alto impacto escénico.',
        coverImage: 'assets/images/Cande1.jpeg',
        instagramHandle: '@balletluxor',
        gallery: [
          'assets/images/Cande1.jpeg',
          'assets/images/Cande2.jpeg',
          'assets/images/Cande3.jpeg',
          'assets/images/Cande4.jpeg',
          'assets/images/Cande5.jpeg',
          'assets/images/Cande6.jpeg',
          'assets/images/Cande7.jpeg',
          'assets/images/Cande8.jpeg',
          'assets/images/CandeAlas1.jpeg'
        ]
      },
      {
        id: 'eve',
        name: 'Eve R.',
        role: 'Bailarina & Coordinación General',
        shortBio: 'Dominio de velos y puesta escénica. Encargada de la producción y montaje de cada presentación.',
        fullBio: 'Eve destaca por su gracia, musicalidad y versatilidad técnica. Combina la danza oriental con destreza escénica en la coordinación de entradas nupciales, tandas temáticas y gestión integral del espectáculo.',
        coverImage: 'assets/images/Evelyn1.jpeg',
        instagramHandle: '@balletluxor',
        gallery: [
          'assets/images/Evelyn1.jpeg',
          'assets/images/Eve2.jpeg',
          'assets/images/Eve3.jpeg',
          'assets/images/Eve-Cande-Velo.jpeg',
          'assets/images/Eve-Cande1.jpeg'
        ]
      },
      {
        id: 'belu',
        name: 'Belén',
        role: 'Bailarina & Ritmos Orientales',
        shortBio: 'Fuerza interpretativa y precisión en solos de derbake y folclore árabe tradicional.',
        fullBio: 'Belén aporta ritmo, carisma y alegría desbordante. Destaca en la interpretación de percusión árabe en vivo, técnica de caderas y animación interactiva para contagiar a los invitados en la pista.',
        coverImage: 'assets/images/Belu1.jpeg',
        instagramHandle: '@balletluxor',
        gallery: [
          'assets/images/Belu1.jpeg',
          'assets/images/Eve-Belu1.jpeg',
          'assets/images/Cande-Eve-Belu1.jpeg',
          'assets/images/Cande-Eve-Belu3.jpeg'
        ]
      },
      {
        id: 'magali',
        name: 'Magalí C.',
        role: 'Bailarina & Puesta en Escena',
        shortBio: 'Elegancia y brillo en la danza con elementos luminosos y vestuarios de alta costura.',
        fullBio: 'Magalí resalta por su técnica depurada y presencia magnética. Experta en coreografías grupales, manejo de alas luminosas y danza lírica con velos para recepciones y galas de distinción.',
        coverImage: 'assets/images/Magali1.jpeg',
        instagramHandle: '@balletluxor',
        gallery: [
          'assets/images/Magali1.jpeg',
          'assets/images/Magali2.jpeg',
          'assets/images/CairoQueens2025.jpeg'
        ]
      }
    ],
    elements: [
      {
        name: 'Alas de Isis',
        origin: 'Tradición Egipcia',
        desc: 'Símbolo de protección divina y majestuosidad. Crea aperturas visuales espectaculares con destellos dorados.',
        icon: '🪽'
      },
      {
        name: 'Velos de Seda',
        origin: 'Misterio & Fluidez',
        desc: 'Danza etérea y envolvente que dibuja olas en el aire, ideal para momentos líricos y entradas mágicas.',
        icon: '✨'
      },
      {
        name: 'Bastón (Raks Al Assaya)',
        origin: 'Folclore Saidi',
        desc: 'Ritmo alegre y festivo del Alto Egipto con giros de destreza y energía tradicional sumamente contagiosa.',
        icon: '🪄'
      },
      {
        name: 'Alas LED Luminosas',
        origin: 'Vanguardia Escénica',
        desc: 'Tecnología lumínica moderna combinada con danza oriental para un impacto visual cinematográfico en la oscuridad.',
        icon: '💡'
      },
      {
        name: 'Abanicos de Seda',
        origin: 'Fusión Oriental',
        desc: 'Caudales de seda multicolor que flotan creando estelas de fuego, agua o brillo según la música del show.',
        icon: '🪭'
      },
      {
        name: 'Sable (Raks Al Sayf)',
        origin: 'Danza de Equilibrio',
        desc: 'Momento de máxima concentración y virtuosismo: equilibrio del sable sobre la cabeza y caderas en movimiento.',
        icon: '⚔️'
      },
      {
        name: 'Chinchines (Saggat)',
        origin: 'Percusión en Manos',
        desc: 'Crótalos metálicos tocados en vivo por las propias bailarinas, marcando el compás de la música con destreza rítmica.',
        icon: '🪙'
      },
      {
        name: 'Pandereta (Riq)',
        origin: 'Folclore & Celebración',
        desc: 'Elemento percusivo de fiesta tradicional para animar a los novios y comensales en rondas participativas.',
        icon: '🥁'
      }
    ],
    getWhatsAppLink: function (customMessage) {
      const phone = getRawPhone().replace(/\D/g, '');
      const defaultMsg = '¡Hola Ballet Luxor! Quisiera consultar disponibilidad y cotización para un evento.';
      const msg = encodeURIComponent(customMessage || defaultMsg);
      return `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`;
    },
    openWhatsApp: function (customMessage) {
      window.open(this.getWhatsAppLink(customMessage), '_blank', 'noopener,noreferrer');
    }
  };
})();
