export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  warranty: string;
  basePriceEstimate: string;
  category: 'construccion' | 'techos' | 'pisos' | 'impermeabilizacion' | 'reformas' | 'todos' | string;
  includedFeatures: string[];
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Construcción' | 'Techos' | 'Pisos' | 'Impermeabilización' | 'Residencial' | 'Comercial' | string;
  location: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  results: string[];
  serviceType: string;
}

export interface MasonryWorkItem {
  id: string;
  filename: string;
  title: string;
  section: string;
  category: 'Mesadas & Cocina' | 'Plateas & Cocheras' | 'Hormigón Visto' | 'Mampostería Tradicional';
  location: string;
  score: number; // Rating compressed towards center (scale 1-10 mapped to ~6.2 - 7.4)
  scoreDetails: {
    nivelacion: number;
    armadura: number;
    prolijidad: number;
  };
  evaluationSummary: string;
  retouchStatus: string;
  retouchFilterCss: string;
  imageUrl: string;
  stageBadge: string;
  technicalPoints: string[];
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface QuoteFormData {
  serviceId: string;
  areaSize: number; // m² or units
  serviceLevel: 'estandar' | 'premium' | 'urgencia';
  propertyType: 'casa' | 'departamento' | 'local' | 'empresa';
  fullName: string;
  phone: string;
  location: string;
  notes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  companyOrLocation: string;
  avatarUrl: string;
  rating: number;
  highlight: string;
  content: string;
  serviceCompleted: string;
  date: string;
  verified: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: {
    label: string;
    actionType: 'query' | 'whatsapp' | 'scrollQuote';
    value?: string;
  }[];
}
