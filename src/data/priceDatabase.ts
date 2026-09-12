export interface PriceItem {
  id: string;
  rubro: string;
  subrubro: string;
  service: string;
  unit: string;
  costMaterial?: number;
  costLabor?: number;
  costTotal: number;
  minPrice?: number;
  maxPrice?: number;
  source: string;
  updateDate: string;
  budgetPrice: number;
  keywords: string[];
}

export const PRICE_DATABASE: PriceItem[] = [
  // 1. Trabajos Preliminares
  {
    id: 'TP-01',
    rubro: 'Trabajos Preliminares',
    subrubro: 'General',
    service: 'Limpieza de terreno y preparación',
    unit: 'm2',
    costMaterial: 120,
    costLabor: 450,
    costTotal: 570,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 627,
    keywords: ['limpieza', 'terreno', 'preparacion', 'desmalezado']
  },
  {
    id: 'TP-02',
    rubro: 'Trabajos Preliminares',
    subrubro: 'General',
    service: 'Cerco perimetral de obra y cartel',
    unit: 'gl',
    costMaterial: 45000,
    costLabor: 35000,
    costTotal: 80000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 88000,
    keywords: ['cerco', 'perimetral', 'cartel', 'seguridad']
  },
  {
    id: 'TP-03',
    rubro: 'Trabajos Preliminares',
    subrubro: 'General',
    service: 'Replanteo y escuadra de obra',
    unit: 'm2',
    costMaterial: 350,
    costLabor: 1100,
    costTotal: 1450,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 1595,
    keywords: ['replanteo', 'escuadra', 'nivelacion', 'ejes']
  },
  {
    id: 'CSV-078',
    rubro: 'Trabajos Preliminares',
    subrubro: 'Obrador',
    service: 'Preliminar obrador, depósito y sanitarios',
    unit: 'm2',
    costMaterial: 160888.76,
    costLabor: 32377.64,
    costTotal: 193266.4,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 212593,
    keywords: ['obrador', 'deposito', 'baño de obra', 'sanitarios']
  },

  // 2. Movimiento de Suelos & Excavaciones
  {
    id: 'MS-01',
    rubro: 'Movimiento de Suelos',
    subrubro: 'General',
    service: 'Excavación para cimientos y zanjas',
    unit: 'm3',
    costMaterial: 0,
    costLabor: 8500,
    costTotal: 8500,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 9350,
    keywords: ['excavacion', 'cimientos', 'zanjas', 'pozo', 'tierra']
  },
  {
    id: 'CSV-027',
    rubro: 'Movimiento de Suelos',
    subrubro: 'Transporte',
    service: 'Acarreos carga y retiro de tierra',
    unit: 'm3',
    costMaterial: 3750.51,
    costLabor: 7743.40,
    costTotal: 11493.91,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 12643,
    keywords: ['acarreo', 'retiro de tierra', 'carga de tierra']
  },
  {
    id: 'CSV-028',
    rubro: 'Movimiento de Suelos',
    subrubro: 'Nivelación',
    service: 'Desmonte del terreno (hasta 20/30 cm de profundidad)',
    unit: 'm3',
    costMaterial: 3170.39,
    costLabor: 7976.64,
    costTotal: 11147.03,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 12262,
    keywords: ['desmonte', 'nivelacion de terreno', 'rasante']
  },
  {
    id: 'CSV-029',
    rubro: 'Movimiento de Suelos',
    subrubro: 'Excavación',
    service: 'Excavación de cimientos',
    unit: 'm3',
    costMaterial: 0,
    costLabor: 38036.49,
    costTotal: 38036.49,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 41840,
    keywords: ['excavacion cimientos manual', 'zanja cimiento']
  },
  {
    id: 'CSV-030',
    rubro: 'Movimiento de Suelos',
    subrubro: 'Excavación',
    service: 'Excavación de bases',
    unit: 'm3',
    costMaterial: 0,
    costLabor: 51621.06,
    costTotal: 51621.06,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 56783,
    keywords: ['excavacion de bases', 'pozo para bases']
  },

  // 3. Estructura, Fundaciones & Hormigón Armado
  {
    id: 'ES-01',
    rubro: 'Estructura y Fundaciones',
    subrubro: 'General',
    service: 'Hormigón para cimientos / zapatas',
    unit: 'm3',
    costMaterial: 85000,
    costLabor: 32000,
    costTotal: 117000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 128700,
    keywords: ['hormigon cimientos', 'zapatas', 'hormigon corrido', 'llenado zapata']
  },
  {
    id: 'ES-02',
    rubro: 'Estructura y Fundaciones',
    subrubro: 'General',
    service: 'Estructura Hormigón Armado (columnas/vigas/losas)',
    unit: 'm3',
    costMaterial: 210000,
    costLabor: 125000,
    costTotal: 335000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 368500,
    keywords: ['estructura hormigon armado', 'columnas', 'vigas', 'losas hormigon']
  },
  {
    id: 'ES-03',
    rubro: 'Estructura y Fundaciones',
    subrubro: 'General',
    service: 'Losa de viguetas pretensadas e tergopor (isopor)',
    unit: 'm2',
    costMaterial: 24500,
    costLabor: 11500,
    costTotal: 36000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 39600,
    keywords: ['losa viguetas', 'viguetas pretensadas', 'losa tergopor', 'techo losa vigueta', 'loza']
  },
  {
    id: 'CSV-071',
    rubro: 'Estructura y Fundaciones',
    subrubro: 'Plateas',
    service: 'Platea de HA 10 cm con Fe del 8 cada 15 cm',
    unit: 'm3',
    costMaterial: 268671.43,
    costLabor: 188259.02,
    costTotal: 456930.44,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 502623,
    keywords: ['platea', 'platea hormigon armado', 'platea cochera', 'platea casa', 'platea galpon']
  },
  {
    id: 'CSV-068',
    rubro: 'Estructura y Fundaciones',
    subrubro: 'Encadenados',
    service: 'Encadenado 15 x 15 c/ 4 Fe del 8 de hormigón',
    unit: 'ml',
    costMaterial: 11214.50,
    costLabor: 6419.52,
    costTotal: 17634.02,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 19397,
    keywords: ['encadenado 15x15', 'viga encadenado', 'dintel']
  },
  {
    id: 'CSV-069',
    rubro: 'Estructura y Fundaciones',
    subrubro: 'Encadenados',
    service: 'Encadenado 20 x 20 c/ 4 Fe del 8 de hormigón',
    unit: 'ml',
    costMaterial: 13995.53,
    costLabor: 9853.16,
    costTotal: 23848.69,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 26234,
    keywords: ['encadenado 20x20', 'viga 20x20']
  },
  {
    id: 'CSV-084',
    rubro: 'Estructura y Fundaciones',
    subrubro: 'Losas',
    service: 'Losas vistas encofrado fenólico hormigón B170',
    unit: 'm2',
    costMaterial: 45982.39,
    costLabor: 19388.21,
    costTotal: 65370.60,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 71908,
    keywords: ['losa vista', 'hormigon visto', 'fenolico', 'cielorraso hormigon']
  },

  // 4. Albañilería & Mampostería
  {
    id: 'AL-01',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'General',
    service: 'Mampostería de ladrillo cerámico hueco 18x19x33 cm',
    unit: 'm2',
    costMaterial: 14500,
    costLabor: 11200,
    costTotal: 25700,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 28270,
    keywords: ['ladrillo hueco 18', 'muro cerámico 18', 'pared ladrillo hueco 18', 'mamposteria 18']
  },
  {
    id: 'AL-02',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'General',
    service: 'Mampostería de ladrillo cerámico hueco 12x19x33 cm',
    unit: 'm2',
    costMaterial: 10800,
    costLabor: 8900,
    costTotal: 19700,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 21670,
    keywords: ['ladrillo hueco 12', 'pared de 12', 'tabique cerámico 12', 'mamposteria 12']
  },
  {
    id: 'AL-03',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'General',
    service: 'Mampostería de ladrillo común 15 cm',
    unit: 'm2',
    costMaterial: 16200,
    costLabor: 13800,
    costTotal: 30000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 33000,
    keywords: ['ladrillo comun', 'pared ladrillo comun', 'mamposteria comun 15']
  },
  {
    id: 'CSV-008',
    rubro: 'Albañilería',
    subrubro: 'Paredes y revoques',
    service: 'Pared de ladrillo hueco (Mano de obra)',
    unit: 'ml',
    costLabor: 10250,
    costTotal: 10250,
    minPrice: 8500,
    maxPrice: 12000,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 11275,
    keywords: ['mano de obra pared', 'pared hueco metro lineal']
  },
  {
    id: 'CSV-094',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'Mampostería',
    service: 'Mampostería bloques de hormigón 20x20x40 cm',
    unit: 'm2',
    costMaterial: 25646.53,
    costLabor: 22654.56,
    costTotal: 48301.09,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 53131,
    keywords: ['bloque de hormigon', 'muro bloques', 'bloques 20x20x40']
  },
  {
    id: 'CSV-092',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'Mampostería',
    service: 'Mampostería ladrillo cerámico portante 12x19x33 cm',
    unit: 'm2',
    costMaterial: 18606.98,
    costLabor: 21964.63,
    costTotal: 40571.61,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 44629,
    keywords: ['ladrillo portante 12', 'muro portante 12']
  },
  {
    id: 'CSV-093',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'Mampostería',
    service: 'Mampostería ladrillo cerámico portante 18x19x33 cm',
    unit: 'm2',
    costMaterial: 24780.27,
    costLabor: 22271.32,
    costTotal: 47051.59,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 51757,
    keywords: ['ladrillo portante 18', 'muro portante 18']
  },

  // 5. Revoques & Aislaciones
  {
    id: 'RV-01',
    rubro: 'Revoques y Aislaciones',
    subrubro: 'General',
    service: 'Revoque azotado impermeable (cajón hidrófugo)',
    unit: 'm2',
    costMaterial: 3200,
    costLabor: 4800,
    costTotal: 8000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 8800,
    keywords: ['azotado impermeable', 'cajon hidrofugo', 'hidrofugo', 'aislacion humedad']
  },
  {
    id: 'RV-02',
    rubro: 'Revoques y Aislaciones',
    subrubro: 'General',
    service: 'Revoque grueso exterior / interior',
    unit: 'm2',
    costMaterial: 3800,
    costLabor: 7200,
    costTotal: 11000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 12100,
    keywords: ['revoque grueso', 'grueso peinado', 'revoque interior', 'revoque exterior']
  },
  {
    id: 'RV-03',
    rubro: 'Revoques y Aislaciones',
    subrubro: 'General',
    service: 'Revoque fino al fieltro / enduido exterior',
    unit: 'm2',
    costMaterial: 2100,
    costLabor: 5600,
    costTotal: 7700,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 8470,
    keywords: ['revoque fino', 'fino al fieltro', 'fieltrado']
  },
  {
    id: 'RV-04',
    rubro: 'Revoques y Aislaciones',
    subrubro: 'General',
    service: 'Revoque completo exterior (Impermeable + Grueso + Fino)',
    unit: 'm2',
    costMaterial: 9100,
    costLabor: 17600,
    costTotal: 26700,
    source: 'Clickie / UTN 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 29370,
    keywords: ['revoque completo', 'revoque exterior completo', '3 capas', 'revoque total']
  },
  {
    id: 'CSV-006',
    rubro: 'Albañilería',
    subrubro: 'Paredes y revoques',
    service: 'Revoque completo (Mano de obra)',
    unit: 'm2',
    costLabor: 15000,
    costTotal: 15000,
    minPrice: 10000,
    maxPrice: 20000,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 16500,
    keywords: ['mano de obra revoque', 'colocacion revoque']
  },
  {
    id: 'CSV-007',
    rubro: 'Albañilería',
    subrubro: 'Paredes y revoques',
    service: 'Revoque Tarquini / revestimiento plástico / fino',
    unit: 'm2',
    costLabor: 23700,
    costTotal: 23700,
    minPrice: 7400,
    maxPrice: 40000,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 26070,
    keywords: ['tarquini', 'revestimiento plastico', 'revear', 'texturado']
  },
  {
    id: 'CSV-065',
    rubro: 'Revoques y Aislaciones',
    subrubro: 'Aislaciones',
    service: 'Aislación capa aisladora horizontal doble',
    unit: 'm2',
    costMaterial: 4466.38,
    costLabor: 9019.57,
    costTotal: 13485.95,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 14835,
    keywords: ['capa aisladora', 'aislacion horizontal', 'corte humedad de cimientos']
  },

  // 6. Contrapisos, Carpetas & Pisos
  {
    id: 'RE-01',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'General',
    service: 'Contrapiso de hormigón de cascote 8-10 cm',
    unit: 'm2',
    costMaterial: 6800,
    costLabor: 6200,
    costTotal: 13000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 14300,
    keywords: ['contrapiso cascote', 'contrapiso 10 cm', 'contrapiso 8 cm', 'contrapiso']
  },
  {
    id: 'CSV-100',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'Contrapisos',
    service: 'Contrapiso de cascote sobre terreno natural 10 cm',
    unit: 'm2',
    costMaterial: 8718.80,
    costLabor: 12719.24,
    costTotal: 21438.04,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 23582,
    keywords: ['contrapiso sobre tierra', 'contrapiso terreno']
  },
  {
    id: 'CSV-101',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'Contrapisos',
    service: 'Contrapiso de hormigón pobre armado s/terreno 15 cm (Cocheras)',
    unit: 'm2',
    costMaterial: 27186.62,
    costLabor: 16297.46,
    costTotal: 43484.08,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 47832,
    keywords: ['contrapiso armado', 'contrapiso cochera', 'contrapiso 15 cm']
  },
  {
    id: 'RE-02',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'General',
    service: 'Carpeta de nivelación de cemento 3 cm',
    unit: 'm2',
    costMaterial: 3400,
    costLabor: 4800,
    costTotal: 8200,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 9020,
    keywords: ['carpeta', 'carpeta nivelacion', 'carpeta cemento', 'carpeta 3 cm']
  },
  {
    id: 'CSV-001',
    rubro: 'Albañilería',
    subrubro: 'Pisos y revestimientos',
    service: 'Colocación de cerámica (Mano de obra)',
    unit: 'm2',
    costLabor: 12750,
    costTotal: 12750,
    minPrice: 9000,
    maxPrice: 16500,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 14025,
    keywords: ['colocacion ceramica mano de obra', 'pegar ceramica', 'piso ceramico']
  },
  {
    id: 'RE-03',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'General',
    service: 'Colocación de piso cerámico / gres completo (material adhesivo + MO)',
    unit: 'm2',
    costMaterial: 11200,
    costLabor: 12500,
    costTotal: 23700,
    source: 'Clickie / UTN 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 26070,
    keywords: ['piso ceramico completo', 'ceramica pegamento', 'colocacion ceramica']
  },
  {
    id: 'CSV-002',
    rubro: 'Albañilería',
    subrubro: 'Pisos y revestimientos',
    service: 'Colocación de porcellanato (Mano de obra especializada)',
    unit: 'm2',
    costLabor: 24500,
    costTotal: 24500,
    minPrice: 21000,
    maxPrice: 28000,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 26950,
    keywords: ['porcelanato mano de obra', 'colocacion porcelanato', 'pegar porcelanato', 'porcellanato']
  },
  {
    id: 'RE-04',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'General',
    service: 'Colocación de porcellanato (Mano de obra + Pegamento impermeable)',
    unit: 'm2',
    costMaterial: 16800,
    costLabor: 24500,
    costTotal: 41300,
    source: 'Clickie Ago 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 45430,
    keywords: ['porcelanato completo', 'porcellanato pegamento', 'colocar porcelanato']
  },
  {
    id: 'CSV-004',
    rubro: 'Albañilería',
    subrubro: 'Pisos y revestimientos',
    service: 'Microcemento alisado',
    unit: 'm2',
    costLabor: 15750,
    costTotal: 15750,
    minPrice: 10500,
    maxPrice: 21000,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 17325,
    keywords: ['microcemento', 'cemento alisado', 'piso microcemento']
  },
  {
    id: 'CSV-112',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'Zócalos',
    service: 'Zócalo cerámico',
    unit: 'ml',
    costMaterial: 9343.54,
    costLabor: 6726.15,
    costTotal: 16069.69,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 17677,
    keywords: ['zocalo ceramico', 'colocacion zocalo']
  },
  {
    id: 'CSV-113',
    rubro: 'Contrapisos y Revestimientos',
    subrubro: 'Zócalos',
    service: 'Zócalo porcelanato',
    unit: 'ml',
    costMaterial: 56304.95,
    costLabor: 6726.15,
    costTotal: 63031.10,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 69334,
    keywords: ['zocalo porcelanato', 'zocalo porcellanato']
  },

  // 7. Cielorrasos & Durlock (Tabiquería en seco)
  {
    id: 'CI-01',
    rubro: 'Cielorrasos y Tabiquería',
    subrubro: 'General',
    service: 'Cielorraso de yeso aplicado sobre losa',
    unit: 'm2',
    costMaterial: 4200,
    costLabor: 8500,
    costTotal: 12700,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 13970,
    keywords: ['yeso aplicado', 'cielorraso yeso', 'enlucido yeso']
  },
  {
    id: 'CI-02',
    rubro: 'Cielorrasos y Tabiquería',
    subrubro: 'General',
    service: 'Cielorraso suspendido de placas de yeso (Durlock)',
    unit: 'm2',
    costMaterial: 12800,
    costLabor: 9800,
    costTotal: 22600,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 24860,
    keywords: ['durlock', 'cielorraso durlock', 'placas de yeso', 'cielorraso suspendido']
  },
  {
    id: 'CI-03',
    rubro: 'Cielorrasos y Tabiquería',
    subrubro: 'General',
    service: 'Tabique divisor placas de yeso Durlock (doble placa)',
    unit: 'm2',
    costMaterial: 18500,
    costLabor: 12200,
    costTotal: 30700,
    source: 'Clickie / UTN 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 33770,
    keywords: ['tabique durlock', 'pared durlock', 'divisor durlock']
  },
  {
    id: 'CSV-149',
    rubro: 'Cielorrasos y Tabiquería',
    subrubro: 'Tabiquería',
    service: 'Tabique simple placa 12.5 mm + Lana de vidrio aislante',
    unit: 'm2',
    costMaterial: 18254.43,
    costLabor: 13809.97,
    costTotal: 32064.40,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 35271,
    keywords: ['tabique acustico', 'durlock lana de vidrio', 'pared durlock termica']
  },

  // 8. Cubiertas, Techos & Impermeabilizaciones
  {
    id: 'CU-01',
    rubro: 'Cubiertas e Aislaciones',
    subrubro: 'General',
    service: 'Cubierta de chapa ondulada / trapezoidal c/estructura metálica',
    unit: 'm2',
    costMaterial: 28500,
    costLabor: 14200,
    costTotal: 42700,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 46970,
    keywords: ['techo de chapa', 'chapa trapezoidal', 'chapa ondulada', 'tinglado', 'cubierta chapa']
  },
  {
    id: 'CU-02',
    rubro: 'Cubiertas e Aislaciones',
    subrubro: 'General',
    service: 'Impermeabilización de azotea con membrana asfáltica 4mm con aluminio',
    unit: 'm2',
    costMaterial: 9500,
    costLabor: 8200,
    costTotal: 17700,
    source: 'Clickie / UTN 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 19470,
    keywords: ['membrana', 'membrana asfaltica', 'impermeabilizacion azotea', 'filtracion techo']
  },
  {
    id: 'CSV-009',
    rubro: 'Impermeabilización',
    subrubro: 'Techos',
    service: 'Impermeabilización de azotea integral (incluye membrana premium y sellado)',
    unit: 'm2',
    costLabor: 43500,
    costTotal: 43500,
    minPrice: 25000,
    maxPrice: 62000,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 47850,
    keywords: ['impermeabilizacion integral', 'membrana colocada', 'sellado azotea']
  },
  {
    id: 'CSV-097',
    rubro: 'Cubiertas e Aislaciones',
    subrubro: 'Cubiertas',
    service: 'Cubierta de teja colonial sobre madera',
    unit: 'm2',
    costMaterial: 29956.08,
    costLabor: 51866.57,
    costTotal: 81822.65,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 90005,
    keywords: ['techo tejas', 'teja colonial']
  },

  // 9. Marmolería & Mesadas
  {
    id: 'CSV-133',
    rubro: 'Marmolería',
    subrubro: 'Mesadas',
    service: 'Mármol para mesada gris mara con frentín pulido',
    unit: 'm2',
    costMaterial: 200029.84,
    costLabor: 0,
    costTotal: 200029.84,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 220033,
    keywords: ['mesada marmol', 'marmol gris mara', 'mesada cocina', 'mesada granito']
  },

  // 10. Pintura & Terminaciones
  {
    id: 'PI-01',
    rubro: 'Pintura y Terminaciones',
    subrubro: 'General',
    service: 'Pintura al látex en muros interiores (2 manos)',
    unit: 'm2',
    costMaterial: 2800,
    costLabor: 4500,
    costTotal: 7300,
    source: 'Clickie Ago 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 8030,
    keywords: ['pintura interior', 'pintar pieza', 'pintura latex interior', 'paredes interiores']
  },
  {
    id: 'PI-02',
    rubro: 'Pintura y Terminaciones',
    subrubro: 'General',
    service: 'Pintura látex exterior / revestimiento plástico (Tarquini)',
    unit: 'm2',
    costMaterial: 6500,
    costLabor: 7800,
    costTotal: 14300,
    source: 'Clickie Ago 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 15730,
    keywords: ['pintura exterior', 'frente', 'pintar fachada', 'pintura frente']
  },
  {
    id: 'PI-03',
    rubro: 'Pintura y Terminaciones',
    subrubro: 'General',
    service: 'Pintura de cielorrasos al látex para cielorraso',
    unit: 'm2',
    costMaterial: 2400,
    costLabor: 4200,
    costTotal: 6600,
    source: 'Clickie Ago 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 7260,
    keywords: ['pintura cielorraso', 'pintar techo', 'latex cielorraso']
  },
  {
    id: 'CSV-012',
    rubro: 'Pintura',
    subrubro: 'Muros',
    service: 'Enduido plástico + pintura látex',
    unit: 'm2',
    costLabor: 12250,
    costTotal: 12250,
    minPrice: 7500,
    maxPrice: 17000,
    source: 'Clickie',
    updateDate: 'Agosto 2026',
    budgetPrice: 13475,
    keywords: ['enduido y pintura', 'enduido paredes']
  },

  // 11. Instalaciones Sanitarias, Gas & Electricidad
  {
    id: 'IN-01',
    rubro: 'Instalación Sanitaria y Agua',
    subrubro: 'General',
    service: 'Instalación de agua fría y caliente (puntos/pico)',
    unit: 'gl',
    costMaterial: 320000,
    costLabor: 280000,
    costTotal: 60000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 660000,
    keywords: ['instalacion agua', 'plomeria', 'termofusion', 'agua caliente']
  },
  {
    id: 'IN-02',
    rubro: 'Instalación Sanitaria y Agua',
    subrubro: 'General',
    service: 'Instalación de desagües cloacales y pluviales',
    unit: 'gl',
    costMaterial: 290000,
    costLabor: 240000,
    costTotal: 530000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 583000,
    keywords: ['cloacas', 'desagües', 'pluvial', 'caños cloacales']
  },
  {
    id: 'CSV-136',
    rubro: 'Instalación Sanitaria y Agua',
    subrubro: 'Integral',
    service: 'Instalación sanitaria completa (baño, cocina, lavadero)',
    unit: 'gl',
    costMaterial: 5814464.56,
    costLabor: 2477187.70,
    costTotal: 8291652.26,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 9120817,
    keywords: ['baño completo instalacion', 'sanitarios completo', 'plomeria integral']
  },
  {
    id: 'IN-03',
    rubro: 'Instalación Eléctrica',
    subrubro: 'General',
    service: 'Instalación eléctrica completa (cañería, cableado y bocas)',
    unit: 'boca',
    costMaterial: 8500,
    costLabor: 12500,
    costTotal: 21000,
    source: 'Clickie / UTN 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 23100,
    keywords: ['boca de luz', 'instalacion electrica', 'cableado', 'bocas electricas']
  },
  {
    id: 'CSV-138',
    rubro: 'Instalación Eléctrica',
    subrubro: 'Integral',
    service: 'Instalación eléctrica completa (tablero, pilar, timbre, tv, tel)',
    unit: 'gl',
    costMaterial: 1460461.38,
    costLabor: 2648039.69,
    costTotal: 4108501.07,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 4519351,
    keywords: ['electricidad integral', 'pilar de luz', 'tablero electrico']
  },
  {
    id: 'IN-04',
    rubro: 'Instalación de Gas',
    subrubro: 'General',
    service: 'Instalación de gas termo-fusión (puntos de consumo)',
    unit: 'boca',
    costMaterial: 24000,
    costLabor: 32000,
    costTotal: 56000,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 61600,
    keywords: ['boca de gas', 'gasista', 'sigas', 'termofusion gas']
  },
  {
    id: 'CSV-137',
    rubro: 'Instalación de Gas',
    subrubro: 'Integral',
    service: 'Instalación de gas completa c/artefactos (cocina, termotanque, 3 calefactores)',
    unit: 'gl',
    costMaterial: 4466001.11,
    costLabor: 1443845.01,
    costTotal: 5909846.12,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 6500831,
    keywords: ['gas integral', 'gasista matriculado', 'gas completo']
  },

  // 12. Demoliciones
  {
    id: 'CSV-020',
    rubro: 'Demoliciones',
    subrubro: 'Revoques',
    service: 'Demolición de revoques picado hasta ladrillo',
    unit: 'm2',
    costMaterial: 4208.91,
    costLabor: 7294.12,
    costTotal: 11503.03,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 12653,
    keywords: ['picar revoque', 'demolicion revoque', 'tirar revoque']
  },
  {
    id: 'CSV-023',
    rubro: 'Demoliciones',
    subrubro: 'Pisos',
    service: 'Demolición de pisos con retiro de escombros',
    unit: 'm2',
    costMaterial: 2864.97,
    costLabor: 8621.10,
    costTotal: 11486.08,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 12635,
    keywords: ['levantar piso', 'demoler piso', 'sacar ceramicos']
  },
  {
    id: 'CSV-025',
    rubro: 'Demoliciones',
    subrubro: 'Mampostería',
    service: 'Demolición de mamposterías / paredes',
    unit: 'm3',
    costMaterial: 26357.76,
    costLabor: 52761.45,
    costTotal: 79119.21,
    source: 'UTN FRVT Ene 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 87031,
    keywords: ['tirar pared', 'demoler pared', 'demolicion mamposteria']
  },

  // 13. Zinguería, Canaletas, Cañerías & Zanjas (Metros Lineales - ml)
  {
    id: 'ZN-01',
    rubro: 'Zinguería y Techos',
    subrubro: 'Canaletas',
    service: 'Colocación de canaletas y zinguería de chapa galvanizada',
    unit: 'ml',
    costMaterial: 14500,
    costLabor: 7800,
    costTotal: 22300,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 24530,
    keywords: ['canaletas', 'zingueria', 'desagüe techo', 'chapa galvanizada', 'babetas']
  },
  {
    id: 'ZN-02',
    rubro: 'Zinguería y Techos',
    subrubro: 'Babetas',
    service: 'Babetas y cumbreras de chapa para techos',
    unit: 'ml',
    costMaterial: 9200,
    costLabor: 5900,
    costTotal: 15100,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 16610,
    keywords: ['babeta', 'cumbrera', 'sellado de chapa', 'chapa']
  },
  {
    id: 'AL-ML-01',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'Dinteles y Vigas',
    service: 'Viga dintel de hormigón armado para aberturas',
    unit: 'ml',
    costMaterial: 12500,
    costLabor: 8500,
    costTotal: 21000,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 23100,
    keywords: ['viga dintel', 'dintel', 'viga sobre ventana', 'viga sobre puerta']
  },
  {
    id: 'AL-ML-02',
    rubro: 'Albañilería y Mampostería',
    subrubro: 'Molduras',
    service: 'Molduras perimetrales y cornisas de cemento / yeso',
    unit: 'ml',
    costMaterial: 5400,
    costLabor: 6200,
    costTotal: 11600,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 12760,
    keywords: ['molduras', 'cornisas', 'moldura exterior', 'moldura techo']
  },
  {
    id: 'MS-ML-01',
    rubro: 'Movimiento de Suelos',
    subrubro: 'Zanjas',
    service: 'Apertura de zanja manual p/cimientos o cañerías (hasta 80 cm prof.)',
    unit: 'ml',
    costMaterial: 0,
    costLabor: 4800,
    costTotal: 4800,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 5280,
    keywords: ['zanja', 'apertura zanja', 'zanja canos', 'zanja cimientos']
  },
  {
    id: 'IN-ML-01',
    rubro: 'Instalación Sanitaria y Agua',
    subrubro: 'Cañerías',
    service: 'Tendido de cañería cloacal / pluvial subterránea (PVC 110mm)',
    unit: 'ml',
    costMaterial: 8900,
    costLabor: 6500,
    costTotal: 15400,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 16940,
    keywords: ['cañeria cloacal', 'cano pvc', 'desague cloacal metro', 'cano pluvial']
  },
  {
    id: 'IN-ML-02',
    rubro: 'Instalación Sanitaria y Agua',
    subrubro: 'Cañerías',
    service: 'Tendido de cañería de agua por termofusión (muro o contrapiso)',
    unit: 'ml',
    costMaterial: 7400,
    costLabor: 6800,
    costTotal: 14200,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 15620,
    keywords: ['caneria agua', 'termofusion por metro', 'instalacion agua lineal']
  },

  // 14. Artefactos, Tableros y Módulos Puntuales (Unidades - un)
  {
    id: 'IN-UN-01',
    rubro: 'Instalación Sanitaria y Agua',
    subrubro: 'Artefactos',
    service: 'Instalación y conexión de artefacto sanitario (inodoro, bidet o lavatorio)',
    unit: 'un',
    costMaterial: 5500,
    costLabor: 18500,
    costTotal: 24000,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 26400,
    keywords: ['colocar inodoro', 'colocar bidet', 'instalar lavatorio', 'sanitarios artefacto']
  },
  {
    id: 'IN-UN-02',
    rubro: 'Instalación Sanitaria y Agua',
    subrubro: 'Artefactos',
    service: 'Instalación de tanque de agua con flotante y colector de bajada',
    unit: 'un',
    costMaterial: 35000,
    costLabor: 48000,
    costTotal: 83000,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 91300,
    keywords: ['tanque de agua', 'instalar tanque', 'colector de agua', 'flotante tanque']
  },
  {
    id: 'IN-UN-03',
    rubro: 'Instalación Eléctrica',
    subrubro: 'Tableros',
    service: 'Armado e instalación de tablero eléctrico seccional (disyuntor + térmicas)',
    unit: 'un',
    costMaterial: 28000,
    costLabor: 36000,
    costTotal: 64000,
    source: 'Oficial 2Hermanos 2026',
    updateDate: 'Enero 2026',
    budgetPrice: 70400,
    keywords: ['tablero electrico', 'colocar disyuntor', 'termicas', 'caja termicas']
  }
];

export interface UnitDefinition {
  key: 'm2' | 'ml' | 'un' | 'm3';
  symbol: string;
  name: string;
  inputLabel: string;
  badge: string;
  placeholder: string;
  defaultStep: number;
  min: number;
  max: number;
  description: string;
}

export function getUnitDefinition(unitRaw: string): UnitDefinition {
  const u = (unitRaw || '').toLowerCase().trim();

  if (u === 'm2' || u === 'm²' || u.includes('cuadrado') || u.includes('mts2')) {
    return {
      key: 'm2',
      symbol: 'm²',
      name: 'Metros Cuadrados (m²)',
      inputLabel: 'Superficie en Metros Cuadrados (m²)',
      badge: 'm²',
      placeholder: 'Ej. 45',
      defaultStep: 1,
      min: 1,
      max: 5000,
      description: 'Pisos, revestimientos, techados, impermeabilizaciones, pinturas y revoques'
    };
  }

  if (u === 'ml' || u === 'm.l.' || u === 'm' || u.includes('lineal')) {
    return {
      key: 'ml',
      symbol: 'm.l.',
      name: 'Metros Lineales (m.l.)',
      inputLabel: 'Longitud en Metros Lineales (m.l.)',
      badge: 'm.l.',
      placeholder: 'Ej. 25',
      defaultStep: 1,
      min: 1,
      max: 2000,
      description: 'Zócalos, molduras, vigas, encadenados, canaletas, zinguería, zanjas y cañerías'
    };
  }

  if (u === 'un' || u === 'boca' || u === 'punto' || u === 'gl' || u.includes('unidad')) {
    return {
      key: 'un',
      symbol: 'un',
      name: 'Unidades / Puntos (un)',
      inputLabel: 'Cantidad de Unidades / Puntos / Bocas',
      badge: 'unidades',
      placeholder: 'Ej. 8',
      defaultStep: 1,
      min: 1,
      max: 500,
      description: 'Artefactos, tableros eléctricos, puntos de agua/gas y bocas de luz'
    };
  }

  if (u === 'm3' || u === 'm³' || u.includes('cubico')) {
    return {
      key: 'm3',
      symbol: 'm³',
      name: 'Metros Cúbicos (m³)',
      inputLabel: 'Volumen en Metros Cúbicos (m³)',
      badge: 'm³',
      placeholder: 'Ej. 12',
      defaultStep: 0.5,
      min: 0.5,
      max: 1000,
      description: 'Excavaciones de cimientos, zapatas, hormigón y plateas estructurales'
    };
  }

  return {
    key: 'm2',
    symbol: unitRaw || 'm²',
    name: `Unidad (${unitRaw})`,
    inputLabel: `Cantidad en ${unitRaw}`,
    badge: unitRaw,
    placeholder: 'Ej. 20',
    defaultStep: 1,
    min: 1,
    max: 2000,
    description: 'Medida del trabajo solicitado'
  };
}

export function getLaborUnitPrice(item: PriceItem): number {
  if (typeof item.costLabor === 'number' && item.costLabor > 0) {
    return Math.round(item.costLabor);
  }
  return Math.round(item.budgetPrice);
}

export function getMaterialUnitPrice(item: PriceItem): number {
  if (typeof item.costMaterial === 'number' && item.costMaterial > 0) {
    return Math.round(item.costMaterial);
  }
  return 0;
}

export interface BudgetItem {
  id: string; // unique item id
  priceItemId: string;
  service: string;
  rubro: string;
  unit: string;
  unitSymbol: string;
  quantity: number;
  laborUnitPrice: number;
  laborSubtotal: number;
  materialUnitPrice: number;
  materialSubtotal: number;
  totalSubtotal: number;
}

export const CONTRACT_CLAUSES = {
  positive: [
    'Provisión de mano de obra calificada, técnica y certificada para la correcta ejecución del trabajo según reglas del arte de la construcción.',
    'Uso de herramientas profesionales, maquinaria especializada y equipamiento de seguridad propio de la empresa.',
    'Supervisión y dirección técnica de obra durante todo el proceso de ejecución.',
    'Orden y limpieza básica del área de trabajo al finalizar cada jornada laboral y al momento de la entrega.',
    'Garantía escrita sobre la ejecución de los trabajos (según el rubro contratado).'
  ],
  negative: [
    'Materiales de construcción, áridos, griferías, cerámicos o insumos (salvo que se contrate explícitamente la modalidad "llave en mano").',
    'Reparaciones estructurales no previstas, remediación de vicios ocultos, humedad preexistente en mamposterías o fallas edilicias previas no declaradas.',
    'Gestión, pago de tasas, planos, permisos municipales, derechos de edificación o matriculaciones ante entes reguladores.',
    'Alquiler de volquetes para retiro masivo de escombros o fletes fuera de la zona habitual de cobertura, salvo pactado por escrito.',
    'Uniones, empalmes o adecuaciones de instalaciones antiguas fuera de norma que requieran reemplazo total.'
  ],
  validity: [
    'Los montos arrojados por esta plataforma son de carácter preliminar y estimativo.',
    'La cotización definitiva quedará sujeta a la rectificación de medidas y diagnóstico técnico durante la visita presencial "In Situ" (sin cargo).',
    'Validez de la oferta estimativa: 15 días corridos a partir de la fecha de emisión.'
  ]
};

export function formatARS(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(amount);
}

export function searchPriceItems(query: string): PriceItem[] {
  const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  if (!q) return [];

  const words = q.split(/\s+/).filter((w) => w.length > 2);

  return PRICE_DATABASE.filter((item) => {
    const fullText = `${item.service} ${item.rubro} ${item.subrubro} ${item.keywords.join(' ')}`
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    // Match exact phrase
    if (fullText.includes(q)) return true;

    // Or match multiple keywords
    const matches = words.filter((word) => fullText.includes(word));
    return matches.length >= Math.min(words.length, 2);
  }).slice(0, 5);
}

export function extractQuantityFromQuery(query: string): number | null {
  // Matches patterns like "50 m2", "50m2", "30 metros", "12 mts", "20 m3", "15 bocas", "40 m"
  const match = query.match(/(\d+(?:[.,]\d+)?)\s*(?:m2|m²|mts2|metros\s*cuadrados|m3|m³|ml|metros|bocas|unidades|gl)?/i);
  if (match && match[1]) {
    const num = parseFloat(match[1].replace(',', '.'));
    if (!isNaN(num) && num > 0 && num < 10000) {
      return num;
    }
  }
  return null;
}

export interface QuoteEstimateResult {
  item: PriceItem;
  quantity: number;
  unitPrice: number;
  totalEstimate: number;
  materialTotal?: number;
  laborTotal?: number;
  summaryText: string;
}

export function calculateBotQuote(userInput: string): QuoteEstimateResult | null {
  const query = userInput.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Extract explicit quantity or default to 1 unit if asking for unit price
  const rawQuantity = extractQuantityFromQuery(query);
  const quantity = rawQuantity !== null && rawQuantity > 0 ? rawQuantity : 1;
  const isExplicitQuantity = rawQuantity !== null && rawQuantity > 1;

  // Search best matching price item
  const matches = searchPriceItems(query);
  if (matches.length === 0) {
    return null;
  }

  const bestItem = matches[0];
  const unitPrice = bestItem.budgetPrice;
  const totalEstimate = Math.round(unitPrice * quantity);

  const materialTotal = bestItem.costMaterial ? Math.round(bestItem.costMaterial * quantity) : undefined;
  const laborTotal = bestItem.costLabor ? Math.round(bestItem.costLabor * quantity) : undefined;

  let summary = `📋 **Presupuesto Estimado Oficial (Valores 2026):**\n\n`;
  summary += `• **Tarea:** ${bestItem.service}\n`;
  summary += `• **Rubro:** ${bestItem.rubro} (${bestItem.source})\n`;
  
  if (isExplicitQuantity) {
    summary += `• **Cantidad calculada:** ${quantity} ${bestItem.unit}\n`;
    summary += `• **Precio Unitario Oficial:** ${formatARS(unitPrice)} / ${bestItem.unit}\n`;
    if (materialTotal && laborTotal) {
      summary += `  └ *Materiales est.:* ${formatARS(materialTotal)}\n`;
      summary += `  └ *Mano de obra est.:* ${formatARS(laborTotal)}\n`;
    }
    summary += `\n💰 **TOTAL ESTIMADO PRESUPUESTO:** **${formatARS(totalEstimate)}**\n`;
  } else {
    summary += `• **Precio Oficial Presupuesto:** **${formatARS(unitPrice)} / ${bestItem.unit}**\n`;
    if (bestItem.costLabor) {
      summary += `• *Mano de Obra unitaria:* ${formatARS(bestItem.costLabor)} / ${bestItem.unit}\n`;
    }
    if (bestItem.costMaterial) {
      summary += `• *Materiales unitarios estimados:* ${formatARS(bestItem.costMaterial)} / ${bestItem.unit}\n`;
    }
    summary += `\n💡 *Tip:* Si me decís los metros cuadrados o cantidad (ej: *"cotizar 40 m2 de porcelanato"*), te calculo el total exacto al instante.`;
  }

  return {
    item: bestItem,
    quantity,
    unitPrice,
    totalEstimate,
    materialTotal,
    laborTotal,
    summaryText: summary
  };
}

export const POPULAR_PRICE_SHORTCUTS = [
  { label: '💎 Porcelanato / m²', query: 'cuanto sale colocar porcelanato' },
  { label: '🧱 Ladrillo Hueco 18 / m²', query: 'precio pared ladrillo hueco 18' },
  { label: '🚗 Contrapiso Cochera / m²', query: 'precio contrapiso armado' },
  { label: '🏗️ Losa Viguetas / m²', query: 'cuanto sale losa viguetas' },
  { label: '🛡️ Membrana Techo / m²', query: 'precio membrana impermeabilizacion azotea' },
  { label: '🏠 Revoque Completo / m²', query: 'cuanto cuesta revoque completo exterior' },
  { label: '⚡ Boca de Luz / punto', query: 'cuanto sale instalacion electrica boca' },
  { label: '🎨 Pintura Látex / m²', query: 'precio pintura interior latex' }
];
