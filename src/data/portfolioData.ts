import { PortfolioProject, TrustPoint } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'albanileria-mamposteria-obra-cordoba',
    title: 'Construcción Tradicional y Albañilería de Mampostería',
    category: 'Construcción',
    location: 'Ciudad de Córdoba',
    duration: '25 días hábiles',
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    description: 'Levantamiento de muros de mampostería con ladrillos cerámicos portantes, vigas y columnas de encadenado de hormigón armado, dintelados prolijos, revoque impermeable hidrófugo y revoque grueso peinado listo para terminaciones.',
    results: [
      'Alineación y plomo milimétrico en muros de mampostería portante',
      'Encadenados sísmicos reforzados y aislación hidrófuga de cimientos',
      'Obra limpia, segura y entregada en los plazos estipulados'
    ],
    serviceType: 'Albañilería & Construcción Tradicional'
  },
  {
    id: 'loza-hormigon-viguetas-riocuarto',
    title: 'Estructura de Loza de Hormigón & Cubierta de Viguetas',
    category: 'Techos',
    location: 'Río Cuarto, Córdoba',
    duration: '12 días hábiles',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Encofrado, armado de hierros y colado de loza de hormigón maciza combinada con sector de viguetas pretensadas y ladrillos huecos. Máxima aislación térmica y terminaciones prolijas listas para cielorraso.',
    results: [
      'Capacidad de carga estructural certificada y pendientes pluviales perfectas',
      'Aislación térmica y acústica superior para confort en cualquier época del año',
      'Entrega en tiempo pactado con mano de obra especializada'
    ],
    serviceType: 'Techos & Estructuras Resistentes'
  },
  {
    id: 'metalurgica-montaje-carteleria-comercial',
    title: 'Estructura Metálica, Montaje y Cartelería Comercial',
    category: 'Metalúrgica',
    location: 'Río Cuarto y Zonas aledañas',
    duration: '10 días hábiles',
    beforeImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Fabricación en taller y montaje en obra de estructura metálica pesada para marquesina comercial, tinglado de alero, soportes estructurales de cartelería corpórea y refuerzos con pintura epoxi anticorrosiva.',
    results: [
      'Soldaduras de alta resistencia certificadas y anclajes mecánicos de precisión',
      'Montaje ágil en altura bajo estrictas normas de seguridad',
      'Atención directa con Asesor Técnico especializado (3584120343)'
    ],
    serviceType: 'Metalúrgica, Montaje y Cartelería'
  },
  {
    id: 'pisos-porcelanato-spc-cordoba',
    title: 'Colocación de Porcelanatos y Pisos Vinílicos SPC',
    category: 'Pisos',
    location: 'Zonas Aledañas y Río Cuarto',
    duration: '7 días de trabajo',
    beforeImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    description: 'Renovación completa de 140 m² de pisos: nivelación milimétrica de contrapiso, colocación de porcelanato símil madera en áreas sociales y vinílico SPC 100% resistente al agua en sectores húmedos.',
    results: [
      'Superficie 100% impermeable, atérmica y de fácil mantenimiento',
      'Alineación láser con juntas mínimas de 1 mm y zócalos combinados',
      'Excelente resistencia al alto tránsito residencial y comercial'
    ],
    serviceType: 'Colocación y Acabados de Pisos'
  },
  {
    id: 'impermeabilizacion-membrana-techo',
    title: 'Impermeabilización con Membrana y Restauración de Techo',
    category: 'Impermeabilización',
    location: 'Río Cuarto, Córdoba',
    duration: '5 días de trabajo',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Retiro de membrana degradada, sellado de fisuras en losa y aplicación de membrana asfáltica de 4 mm con aluminio gofrado termo-fundida a soplete, complementada con pintura impermeabilizante poliuretánica.',
    results: [
      'Eliminación del 100% de filtraciones y goteras en cubiertas',
      'Protección térmica reflectiva contra radiación solar',
      'Garantía escrita de estanqueidad de larga duración'
    ],
    serviceType: 'Pintura & Impermeabilizaciones'
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    id: 'mano-obra',
    title: 'Mano de Obra Calificada',
    description: 'Personal capacitado con amplia trayectoria en albañilería tradicional, encofrados, techos, metalúrgica y colocación de pisos.',
    badge: 'Experiencia & Oficio',
    iconName: 'Award'
  },
  {
    id: 'materiales-calidad',
    title: 'Materiales de Calidad',
    description: 'Trabajamos con primeras marcas del mercado para garantizar solidez estructural y durabilidad insuperable.',
    badge: 'Primeras Marcas',
    iconName: 'ShieldCheck'
  },
  {
    id: 'cumplimiento-tiempos',
    title: 'Cumplimiento en Tiempos',
    description: 'Establecemos cronogramas serios y cumplimos con los plazos acordados para que tu obra avance con tranquilidad.',
    badge: 'Puntualidad y Compromiso',
    iconName: 'CalendarCheck'
  },
  {
    id: 'garantia-trabajos',
    title: 'Garantía en Nuestros Trabajos',
    description: 'Respaldamos cada proyecto con garantía por escrito. Tu tranquilidad y satisfacción son nuestra máxima prioridad.',
    badge: 'Garantía Escrita',
    iconName: 'CheckCircle'
  }
];

export const COMPANY_INFO = {
  name: '2Hermanos Constructora',
  fullName: '2Hermanos - Soluciones Integrales',
  brandShort: '2Hermanos',
  tagline: 'Construimos con experiencia, calidad y compromiso',
  slogan2: 'Construimos tus proyectos con calidad y confianza',
  // Contacto de la Empresa
  phoneCompanyDisplay: '+54 9 358 510-2643',
  phoneCompanyRaw: '5493585102643',
  phoneCompanyNumber: '3585102643',
  // Asesor Técnico - Atención al cliente
  phoneAdvisorDisplay: '+54 9 358 412-0343',
  phoneAdvisorRaw: '5493584120343',
  phoneAdvisorNumber: '3584120343',
  // Default general
  phoneDisplay: '+54 9 358 510-2643',
  phoneRaw: '5493585102643',
  phones: [
    { 
      label: 'Empresa (Contacto Directo)', 
      display: '+54 9 358 510-2643', 
      raw: '5493585102643',
      number: '3585102643',
      role: 'Empresa'
    },
    { 
      label: 'Asesor Técnico (Atención al Cliente)', 
      display: '+54 9 358 412-0343', 
      raw: '5493584120343',
      number: '3584120343',
      role: 'Asesor Técnico'
    },
    { 
      label: 'Metalúrgica, Montaje y Cartelería', 
      display: '+54 9 358 412-0343', 
      raw: '5493584120343',
      number: '3584120343',
      role: 'Asesor Técnico Especializado'
    }
  ],
  whatsappMessage: '¡Hola 2Hermanos Constructora! Deseo solicitar un presupuesto sin cargo para un proyecto.',
  whatsappAdvisorMessage: '¡Hola! Me comunico para consultar con el Asesor Técnico por un proyecto / servicio de Metalúrgica, Montaje o Cartelería.',
  email: 'cooperativaaguasdeltoledo2023@gmail.com',
  address: 'Río Cuarto, Ciudad de Córdoba y Zonas aledañas',
  coverageAreas: [
    'Río Cuarto y Gran Río Cuarto',
    'Ciudad de Córdoba Capital',
    'Zonas aledañas y corredor provincial'
  ],
  schedule: {
    weekdays: 'Lunes a Viernes: 07:30 a 19:00 hs',
    saturdays: 'Sábados: 08:00 a 14:00 hs',
    emergencies: 'Atención telefónica directa y consultas de obra'
  }
};
