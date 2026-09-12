import { MasonryWorkItem } from '../types';

export const MASONRY_WORK_ITEMS: MasonryWorkItem[] = [
  // 1. Serie Mesadas de Hormigón Armado
  {
    id: 'mesada-encofrado-hierro',
    filename: 'IMG-20260908-WA0010.jpg',
    title: 'Encofrado de Madera y Armado de Malla para Mesada',
    section: 'Mesadas y Mobiliario de Hormigón Armado',
    category: 'Mesadas & Cocina',
    location: 'Río Cuarto, Córdoba',
    score: 6.8,
    scoreDetails: {
      nivelacion: 6.9,
      armadura: 6.8,
      prolijidad: 6.7
    },
    evaluationSummary: 'Estructura rígida de madera fenólica con malla electrosoldada y cajón de reserva para bacha de acero inoxidable.',
    retouchStatus: 'Balance de blancos calibrado, reducción de sombras duras y mayor nitidez en mallas de hierro.',
    retouchFilterCss: 'contrast(1.08) brightness(1.04) saturate(1.05)',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Etapa 1 • Encofrado & Armadura',
    technicalPoints: [
      'Molde en madera fenólica reforzada con puntales de apoyo',
      'Malla de hierro de refuerzo con recubrimiento inferior garantizado',
      'Cajón a escuadra para vano de bacha bajo mesada'
    ]
  },
  {
    id: 'mesada-colado-hormigon',
    filename: 'IMG-20260908-WA0011.jpg',
    title: 'Colado y Llenado de Mezcla de Hormigón',
    section: 'Mesadas y Mobiliario de Hormigón Armado',
    category: 'Mesadas & Cocina',
    location: 'Río Cuarto, Córdoba',
    score: 6.3,
    scoreDetails: {
      nivelacion: 6.4,
      armadura: 6.3,
      prolijidad: 6.2
    },
    evaluationSummary: 'Hormigonado directo en encofrado con dosificación cementicia de alta resistencia y vibrado manual.',
    retouchStatus: 'Ajuste de exposición y contraste en textura de la mezcla húmeda para resaltar consistencia.',
    retouchFilterCss: 'contrast(1.1) brightness(1.02) saturate(1.02)',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Etapa 2 • Colado & Llenado',
    technicalPoints: [
      'Dosificación 1:2:3 con aditivo fluidificante para compactación',
      'Vibrado perimetral para evitar coqueras en los bordes',
      'Control de espesor uniforme en toda la longitud de mesada'
    ]
  },
  {
    id: 'mesada-alisado-fresco',
    filename: 'IMG-20260908-WA0012.jpg',
    title: 'Regleado y Alisado de Superficie Fresca',
    section: 'Mesadas y Mobiliario de Hormigón Armado',
    category: 'Mesadas & Cocina',
    location: 'Río Cuarto, Córdoba',
    score: 7.0,
    scoreDetails: {
      nivelacion: 7.1,
      armadura: 6.9,
      prolijidad: 7.0
    },
    evaluationSummary: 'Nivelación a regla y llana metálica para lograr superficie plana continua y bordes definidos.',
    retouchStatus: 'Realce de reflejos rasantes y nivelación de sombras para apreciar la planeidad.',
    retouchFilterCss: 'contrast(1.12) brightness(1.03) saturate(1.03)',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Etapa 3 • Alisado & Regleado',
    technicalPoints: [
      'Regleado de aluminio sobre guías maestras de borde',
      'Fratachado y llaneado para sellar la pasta superficial',
      'Curado húmedo progresivo para evitar fisuras de retracción'
    ]
  },
  {
    id: 'mesada-desencofrada-frente',
    filename: 'IMG-20260908-WA0013.jpg',
    title: 'Mesada Desencofrada con Tabiques y Vano de Bacha',
    section: 'Mesadas y Mobiliario de Hormigón Armado',
    category: 'Mesadas & Cocina',
    location: 'Río Cuarto, Córdoba',
    score: 7.2,
    scoreDetails: {
      nivelacion: 7.3,
      armadura: 7.1,
      prolijidad: 7.2
    },
    evaluationSummary: 'Estructura fraguada y desencofrada con aristas vivas, patas de hormigón macizas y vano para bacha.',
    retouchStatus: 'Corrección de balance cromático del cemento, eliminación de reflejos difusos y textura uniforme.',
    retouchFilterCss: 'contrast(1.14) brightness(1.05) saturate(1.06)',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Etapa 4 • Desencofrado & Estructura',
    technicalPoints: [
      'Aristas definidas sin desprendimientos de masa',
      'Tabiques portantes de hormigón con acabado tipo industrial',
      'Apta para hidrolaqueado poliuretánico y sellador antimancha'
    ]
  },
  {
    id: 'mesada-desencofrada-lateral',
    filename: 'IMG-20260908-WA0014.jpg',
    title: 'Vista Lateral Monolítica de Mesada de Hormigón',
    section: 'Mesadas y Mobiliario de Hormigón Armado',
    category: 'Mesadas & Cocina',
    location: 'Río Cuarto, Córdoba',
    score: 7.1,
    scoreDetails: {
      nivelacion: 7.2,
      armadura: 7.0,
      prolijidad: 7.1
    },
    evaluationSummary: 'Perspectiva angular que demuestra el aplomo del lateral, espesor uniforme y robustez general.',
    retouchStatus: 'Realce de texturas de hormigón visto y corrección de perspectiva geométrica.',
    retouchFilterCss: 'contrast(1.1) brightness(1.04) saturate(1.04)',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Etapa 5 • Acabado & Solidez',
    technicalPoints: [
      'Continuidad visual entre tapa superior y pata de soporte',
      'Planitud apta para griferías monocomando y anclaje de bacha',
      'Material eterno que no se deteriora por humedad ni calor'
    ]
  },

  // 2. Serie Plateas y Contrapisos (Incluye el collage oficial de 4 pasos de 2Hermanos)
  {
    id: 'cochera-proceso-4-pasos-2hermanos',
    filename: 'IMG-20260902-WA0024.jpg',
    title: 'Proceso Integral de Contrapiso para Cochera (Oficial 2Hermanos)',
    section: 'Plateas, Contrapisos y Cocheras',
    category: 'Plateas & Cocheras',
    location: 'Río Cuarto, Córdoba',
    score: 7.4,
    scoreDetails: {
      nivelacion: 7.5,
      armadura: 7.4,
      prolijidad: 7.3
    },
    evaluationSummary: 'Secuencia completa en 4 etapas: terreno nivelado, tendido de malla electrosoldada, colado con regla y alisado final.',
    retouchStatus: 'Optimización de contraste por cuadrantes, encuadre balanceado y realce del logotipo 2Hermanos.',
    retouchFilterCss: 'contrast(1.15) brightness(1.04) saturate(1.05)',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Paso a Paso Completo • 4 Fases',
    technicalPoints: [
      '1. Preparación de base y compactación de terreno natural',
      '2. Colocación de encofrado perimetral y malla electrosoldada Q131',
      '3. Cuadrilla en colado simultáneo con vibrado y regleado',
      '4. Contrapiso vehicular terminado con pendiente de escurrimiento'
    ]
  },
  {
    id: 'platea-tinglado-terreno',
    filename: 'IMG-20260831-WA0141.jpg',
    title: 'Platea de Hormigón para Galpón con Tinglado Metálico',
    section: 'Plateas, Contrapisos y Cocheras',
    category: 'Plateas & Cocheras',
    location: 'Zonas Aledañas y Córdoba',
    score: 6.9,
    scoreDetails: {
      nivelacion: 7.0,
      armadura: 6.9,
      prolijidad: 6.8
    },
    evaluationSummary: 'Losa de piso de gran porte sobre suelo rural, coordinada con estructura metálica de tinglado reticulado.',
    retouchStatus: 'Compensación de luz solar directa, mejora de tonos celestes de cielo y nitidez de hormigón.',
    retouchFilterCss: 'contrast(1.08) brightness(1.02) saturate(1.1)',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Fundación & Estructura • Naves',
    technicalPoints: [
      'Superficie de hormigón armado con juntas de dilatación programadas',
      'Conexión directa con anclajes de columnas metálicas',
      'Resistencia apta para maquinaria y tránsito pesado'
    ]
  },
  {
    id: 'platea-fosa-tecnica',
    filename: 'IMG-20260831-WA0139.jpg',
    title: 'Platea Nivelada con Fosa Técnica y Retén Perimetral',
    section: 'Plateas, Contrapisos y Cocheras',
    category: 'Plateas & Cocheras',
    location: 'Córdoba Interior',
    score: 6.5,
    scoreDetails: {
      nivelacion: 6.6,
      armadura: 6.5,
      prolijidad: 6.4
    },
    evaluationSummary: 'Plataforma de hormigón con rebaje rectangular previsto para equipos o instalaciones hidráulicas.',
    retouchStatus: 'Realce de contornos de la fosa y nivelación lumínica en días nublados.',
    retouchFilterCss: 'contrast(1.1) brightness(1.05) saturate(1.02)',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Obra Civil • Rebajes Técnicos',
    technicalPoints: [
      'Encofrado interno para vano de instalación con escuadras exactas',
      'Muro bajo de contención con bloques asentados a nivel',
      'Terminación fratachada semi-rústica antideslizante'
    ]
  },

  // 3. Serie Hormigón Visto y Obras de Arquitectura
  {
    id: 'arquitectura-hormigon-visto',
    filename: 'IMG-20260831-WA0142.jpg',
    title: 'Vivienda Moderna con Tabiques y Losa en Hormigón Visto',
    section: 'Hormigón Visto y Obras de Gran Escala',
    category: 'Hormigón Visto',
    location: 'Ciudad de Córdoba',
    score: 7.3,
    scoreDetails: {
      nivelacion: 7.4,
      armadura: 7.3,
      prolijidad: 7.2
    },
    evaluationSummary: 'Estructura de arquitectura de vanguardia con muros y cielorrasos encofrados en tablas de madera a la vista.',
    retouchStatus: 'Gradación de sombras interiores, realce de la veta del hormigón y corrección de perspectiva.',
    retouchFilterCss: 'contrast(1.12) brightness(1.04) saturate(1.04)',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Alta Gama • Hormigón Tabla',
    technicalPoints: [
      'Textura de entablonado prolija con juntas herméticas entre tablas',
      'Pases de cañerías eléctricas y luminarias embutidas en losa',
      'Supervisión y mano de obra especializada en hormigón visto'
    ]
  },

  // 4. Serie Albañilería Tradicional, Mampostería y Bloques
  {
    id: 'mamposteria-ladrillo-visto',
    filename: 'depositphotos_118621020-stock-photo-professional-construction-worker-laying-bricks.jpg',
    title: 'Colocación Artesanal de Ladrillos Comunes a la Vista',
    section: 'Albañilería Tradicional y Mampostería',
    category: 'Mampostería Tradicional',
    location: 'Río Cuarto y Córdoba',
    score: 7.1,
    scoreDetails: {
      nivelacion: 7.2,
      armadura: 7.0,
      prolijidad: 7.1
    },
    evaluationSummary: 'Asiento milimétrico de hiladas con mortero tradicional de cemento, cal y arena gruesa zarandeada.',
    retouchStatus: 'Enfoque selectivo en manos del albañil, calidez en tonos terracota y nitidez de junta.',
    retouchFilterCss: 'contrast(1.1) brightness(1.02) saturate(1.08)',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Oficio Tradicional • Ladrillo',
    technicalPoints: [
      'Ladrillos seleccionados de cocción pareja para vista',
      'Juntas de mortero calibradas a 1.5 cm con tomada prolija',
      'Trabas de 1/2 ladrillo para máxima resistencia estructural'
    ]
  },
  {
    id: 'control-plomo-bloques',
    filename: 'images (1).jpg',
    title: 'Control de Aplomado y Escuadra en Muros de Bloques',
    section: 'Albañilería Tradicional y Mampostería',
    category: 'Mampostería Tradicional',
    location: 'Ciudad de Córdoba',
    score: 6.9,
    scoreDetails: {
      nivelacion: 7.1,
      armadura: 6.8,
      prolijidad: 6.8
    },
    evaluationSummary: 'Supervisión de verticalidad con nivel tubular de gota de precisión y amarre con hierros de encadenado.',
    retouchStatus: 'Alineación de verticales, contraste neutro y claridad en los puntos de apoyo de nivel.',
    retouchFilterCss: 'contrast(1.09) brightness(1.03) saturate(1.02)',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Supervisión Técnica • Plomo',
    technicalPoints: [
      'Verificación continua de plomo en ambas caras del muro',
      'Columnas de encadenado vertical coladas en alvéolos de bloque',
      'Seguridad en obra con uso de EPP reglamentario'
    ]
  },
  {
    id: 'traba-esquina-mamposteria',
    filename: 'images.jpg',
    title: 'Ejecución de Traba de Esquina y Nivelación en Mampostería',
    section: 'Albañilería Tradicional y Mampostería',
    category: 'Mampostería Tradicional',
    location: 'Río Cuarto, Córdoba',
    score: 6.8,
    scoreDetails: {
      nivelacion: 6.9,
      armadura: 6.8,
      prolijidad: 6.7
    },
    evaluationSummary: 'Construcción de esquina a 90 grados exactos con colocación de armadura de viga de encadenado.',
    retouchStatus: 'Aumento de nitidez en esquinas y texturas del mortero de agarre.',
    retouchFilterCss: 'contrast(1.1) brightness(1.02) saturate(1.03)',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    stageBadge: 'Detalle Constructivo • Escuadra',
    technicalPoints: [
      'Escuadra 3-4-5 verificada en cada cambio de ángulo',
      'Empalmes reforzados de armaduras en vértices sísmicos',
      'Asiento uniforme sin huecos de mortero en llagas'
    ]
  }
];

export const RETOUCH_PRESETS = [
  {
    id: 'retocado',
    name: 'Retoque Digital Profesional',
    desc: 'Contraste arquitectónico, nitidez de aristas y corrección de sombras',
    css: 'contrast(1.14) brightness(1.04) saturate(1.05)'
  },
  {
    id: 'original',
    name: 'Original / Obra Cruda',
    desc: 'Visualización directa sin post-procesamiento',
    css: 'none'
  },
  {
    id: 'nitidez',
    name: 'Nitidez Estructural',
    desc: 'Énfasis en mallas de hierro, armaduras y textura del mortero',
    css: 'contrast(1.22) brightness(1.02) saturate(0.95)'
  },
  {
    id: 'calido',
    name: 'Luz Cálida Natural',
    desc: 'Realce de ladrillo visto, madera de encofrados y calidez de obra',
    css: 'contrast(1.08) brightness(1.05) saturate(1.18)'
  }
];
