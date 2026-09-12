import React, { useState, useMemo, useEffect } from 'react';
import {
  Calculator,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Home,
  Store,
  Briefcase,
  Plus,
  Trash2,
  Copy,
  Check,
  Printer,
  Info,
  XCircle,
  AlertCircle,
  Calendar,
  Layers,
  Wrench,
  Search,
  ArrowRight,
  RefreshCw,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';
import { 
  PRICE_DATABASE, 
  PriceItem, 
  BudgetItem, 
  getUnitDefinition, 
  getLaborUnitPrice, 
  getMaterialUnitPrice, 
  formatARS, 
  CONTRACT_CLAUSES 
} from '../data/priceDatabase';

interface QuoteCalculatorProps {
  initialServiceId?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialServiceId }) => {
  // Category filter for the service selector
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchFilter, setSearchFilter] = useState<string>('');
  
  // Active selected price item in the builder
  const [activeItemId, setActiveItemId] = useState<string>('CSV-002'); // Default: Porcelanato
  const [inputQuantity, setInputQuantity] = useState<number>(35);
  
  // Multi-item Budget Store (Presupuesto Estimado Total Sumarizado)
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([
    {
      id: 'init-item-1',
      priceItemId: 'CSV-002',
      service: 'Colocación de porcellanato (Mano de obra especializada)',
      rubro: 'Albañilería y Pisos',
      unit: 'm2',
      unitSymbol: 'm²',
      quantity: 35,
      laborUnitPrice: 24500,
      laborSubtotal: 857500,
      materialUnitPrice: 0,
      materialSubtotal: 0,
      totalSubtotal: 857500
    }
  ]);

  // General project info
  const [propertyType, setPropertyType] = useState<string>('casa');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [zone, setZone] = useState<string>('Río Cuarto y Gran Río Cuarto');
  const [notes, setNotes] = useState<string>('');
  
  // UI toggles
  const [targetContact, setTargetContact] = useState<'empresa' | 'asesor'>('empresa');
  const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'presupuestador' | 'clausulas'>('presupuestador');

  // Handle external service selection from App / ServicesSection
  useEffect(() => {
    if (!initialServiceId) return;

    const lower = initialServiceId.toLowerCase();
    let foundItem: PriceItem | undefined;

    if (lower.includes('piso') || lower.includes('porcelanato')) {
      foundItem = PRICE_DATABASE.find(i => i.id === 'CSV-002');
    } else if (lower.includes('techo') || lower.includes('tinglado') || lower.includes('chapa')) {
      foundItem = PRICE_DATABASE.find(i => i.id === 'CU-01');
    } else if (lower.includes('loza') || lower.includes('vigueta') || lower.includes('hormigon')) {
      foundItem = PRICE_DATABASE.find(i => i.id === 'ES-03');
    } else if (lower.includes('impermeabiliz') || lower.includes('membrana')) {
      foundItem = PRICE_DATABASE.find(i => i.id === 'CU-02');
    } else if (lower.includes('metalurgic') || lower.includes('canaleta') || lower.includes('zingueria')) {
      foundItem = PRICE_DATABASE.find(i => i.id === 'ZN-01');
    } else if (lower.includes('albanileria') || lower.includes('construccion')) {
      foundItem = PRICE_DATABASE.find(i => i.id === 'AL-01');
    }

    if (foundItem) {
      setActiveItemId(foundItem.id);
      setSelectedCategory(foundItem.rubro);
    }
  }, [initialServiceId]);

  // Extract unique categories from PRICE_DATABASE
  const categories = useMemo(() => {
    const set = new Set<string>();
    PRICE_DATABASE.forEach(item => set.add(item.rubro));
    return ['todos', ...Array.from(set)];
  }, []);

  // Filtered price items for the active selector
  const availableItems = useMemo(() => {
    return PRICE_DATABASE.filter(item => {
      const matchCat = selectedCategory === 'todos' || item.rubro === selectedCategory;
      if (!matchCat) return false;
      if (!searchFilter.trim()) return true;
      const q = searchFilter.toLowerCase().trim();
      return (
        item.service.toLowerCase().includes(q) ||
        item.rubro.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q) ||
        item.keywords.some(k => k.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchFilter]);

  // Current selected item object
  const currentActiveItem: PriceItem = useMemo(() => {
    return PRICE_DATABASE.find(i => i.id === activeItemId) || PRICE_DATABASE[0];
  }, [activeItemId]);

  // Dynamic unit definition for current active item
  const currentUnitDef = useMemo(() => {
    return getUnitDefinition(currentActiveItem.unit);
  }, [currentActiveItem]);

  // Current single item calculation preview
  const currentItemLaborUnit = useMemo(() => {
    return getLaborUnitPrice(currentActiveItem);
  }, [currentActiveItem]);

  const currentItemSubtotal = useMemo(() => {
    const qty = Number(inputQuantity);
    if (isNaN(qty) || qty <= 0) return 0;
    return Math.round(qty * currentItemLaborUnit);
  }, [inputQuantity, currentItemLaborUnit]);

  // Multi-item Total Summarization
  const grandTotalLabor = useMemo(() => {
    return budgetItems.reduce((sum, it) => sum + (isNaN(it.laborSubtotal) ? 0 : it.laborSubtotal), 0);
  }, [budgetItems]);

  const totalItemsCount = budgetItems.length;

  // Add active item into the multi-item budget
  const handleAddCurrentItemToBudget = () => {
    const qty = Number(inputQuantity);
    if (isNaN(qty) || qty <= 0) return;

    const unitDef = getUnitDefinition(currentActiveItem.unit);
    const laborUnit = getLaborUnitPrice(currentActiveItem);
    const laborSub = Math.round(qty * laborUnit);
    const materialUnit = getMaterialUnitPrice(currentActiveItem);
    const materialSub = Math.round(qty * materialUnit);

    setBudgetItems(prev => {
      // If already exists, update quantity
      const existingIndex = prev.findIndex(item => item.priceItemId === currentActiveItem.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + qty;
        const newLaborSub = Math.round(newQty * laborUnit);
        const newMatSub = Math.round(newQty * materialUnit);
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          laborSubtotal: newLaborSub,
          materialSubtotal: newMatSub,
          totalSubtotal: newLaborSub + newMatSub
        };
        return updated;
      }

      // Add as new item
      const newItem: BudgetItem = {
        id: `bi-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        priceItemId: currentActiveItem.id,
        service: currentActiveItem.service,
        rubro: currentActiveItem.rubro,
        unit: currentActiveItem.unit,
        unitSymbol: unitDef.symbol,
        quantity: qty,
        laborUnitPrice: laborUnit,
        laborSubtotal: laborSub,
        materialUnitPrice: materialUnit,
        materialSubtotal: materialSub,
        totalSubtotal: laborSub + materialSub
      };
      return [...prev, newItem];
    });
  };

  // Remove item from multi-item budget
  const handleRemoveBudgetItem = (id: string) => {
    setBudgetItems(prev => prev.filter(item => item.id !== id));
  };

  // Adjust item quantity inside the multi-item table
  const handleUpdateItemQuantity = (id: string, delta: number) => {
    setBudgetItems(prev => prev.map(item => {
      if (item.id !== id) return item;
      const newQty = Math.max(1, item.quantity + delta);
      const newLaborSub = Math.round(newQty * item.laborUnitPrice);
      const newMatSub = Math.round(newQty * item.materialUnitPrice);
      return {
        ...item,
        quantity: newQty,
        laborSubtotal: newLaborSub,
        materialSubtotal: newMatSub,
        totalSubtotal: newLaborSub + newMatSub
      };
    }));
  };

  // Clear all budget items
  const handleClearBudget = () => {
    setBudgetItems([]);
  };

  // Preformatted WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const today = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const itemsToExport = budgetItems.length > 0 ? budgetItems : [
      {
        id: 'single',
        priceItemId: currentActiveItem.id,
        service: currentActiveItem.service,
        rubro: currentActiveItem.rubro,
        unit: currentActiveItem.unit,
        unitSymbol: currentUnitDef.symbol,
        quantity: inputQuantity,
        laborUnitPrice: currentItemLaborUnit,
        laborSubtotal: currentItemSubtotal,
        materialUnitPrice: 0,
        materialSubtotal: 0,
        totalSubtotal: currentItemSubtotal
      }
    ];

    const totalCalculated = itemsToExport.reduce((acc, it) => acc + it.laborSubtotal, 0);

    let message = `*SOLICITUD DE PRESUPUESTO - 2HERMANOS CONSTRUCTORA*\n`;
    message += `_Base de Precios Oficial de Mano de Obra 2026_\n`;
    message += `📅 *Fecha:* ${today}\n`;
    message += `-------------------------------------------\n`;
    message += `👤 *Cliente:* ${fullName.trim() || 'No especificado'}\n`;
    message += `📱 *Teléfono:* ${phone.trim() || 'No especificado'}\n`;
    message += `📍 *Localidad:* ${zone}\n`;
    message += `🏠 *Inmueble:* ${propertyType.toUpperCase()}\n`;
    if (notes.trim()) {
      message += `📝 *Detalles de Obra:* ${notes.trim()}\n`;
    }
    message += `-------------------------------------------\n`;
    message += `📋 *DESGLOSE DE RUBROS (MANO DE OBRA):*\n`;

    itemsToExport.forEach((item, index) => {
      message += `\n${index + 1}. *${item.service}*\n`;
      message += `   └ Rubro: ${item.rubro}\n`;
      message += `   └ Cantidad: ${item.quantity} ${item.unitSymbol}\n`;
      message += `   └ Valor M.O. Unitario: ${formatARS(item.laborUnitPrice)} / ${item.unitSymbol}\n`;
      message += `   └ *Subtotal M.O.: ${formatARS(item.laborSubtotal)}*\n`;
    });

    message += `\n-------------------------------------------\n`;
    message += `💰 *TOTAL ESTIMADO MANO DE OBRA:* *${formatARS(totalCalculated)} ARS*\n`;
    message += `-------------------------------------------\n`;
    message += `📌 *CONDICIONES Y CLÁUSULAS:*\n`;
    message += `✓ Incluye provisión de mano de obra calificada, herramientas profesionales y supervisión técnica.\n`;
    message += `✗ No incluye materiales ni reparaciones ocultas previas no declaradas (salvo contratación llave en mano).\n`;
    message += `• Validez de la cotización: 15 días corridos. Sujeto a rectificación de medidas en visita técnica presencial in-situ (SIN CARGO).\n\n`;
    message += `👉 *Deseo coordinar la visita técnica presencial sin costo para rectificar medidas y presupuesto definitivo.*`;

    return message;
  };

  // Copy to clipboard handler
  const handleCopyToClipboard = async () => {
    try {
      const msg = generateWhatsAppMessage();
      await navigator.clipboard.writeText(msg);
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 3000);
    } catch {
      setCopiedToClipboard(false);
    }
  };

  // WhatsApp send handler
  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const phoneToUse = targetContact === 'asesor' 
      ? COMPANY_INFO.phoneAdvisorRaw 
      : COMPANY_INFO.phoneCompanyRaw;
    const url = `https://wa.me/${phoneToUse}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Direct form submission handler
  const handleSendFormDirect = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `2H-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(newId);
    setIsSubmitted(true);
  };

  // Print quote handler
  const handlePrintQuote = () => {
    window.print();
  };

  return (
    <section id="cotizador" className="py-16 sm:py-20 bg-slate-100/90 border-t border-slate-200 relative print:bg-white print:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Official 2026 Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 print:hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-[#0055D4] bg-blue-100 border border-blue-200 mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0055D4]" />
            <span>Tarifario Oficial 2026 • Mano de Obra 2Hermanos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Presupuestador y Calculadora de Cotizaciones
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Calculá el valor exacto de mano de obra según la unidad técnica correspondiente a cada rubro (m², m.l. o unidades). Agregá múltiples tareas para obtener tu presupuesto estimado total sumarizado.
          </p>

          {/* Nav Tabs for Presupuestador vs Cláusulas */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              id="tab-presupuestador-btn"
              onClick={() => setActiveTab('presupuestador')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'presupuestador'
                  ? 'bg-[#0055D4] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora Multi-Rubro</span>
            </button>
            <button
              type="button"
              id="tab-clausulas-btn"
              onClick={() => setActiveTab('clausulas')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'clausulas'
                  ? 'bg-[#0055D4] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Cláusulas & Términos Contractuales</span>
            </button>
          </div>
        </div>

        {/* Modal: Confirmation if submitted via web form */}
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                Presupuesto Registrado
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-3 mb-2">
                ¡Solicitud Recibida con Éxito!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-4">
                Generamos la cotización oficial preliminar identificada como{' '}
                <span className="font-mono font-bold text-[#0055D4] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                  #{submissionId}
                </span>
                . Nuestro equipo técnico coordinará contigo la visita sin cargo.
              </p>

              {/* Items summary */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-2 mb-5 max-h-48 overflow-y-auto">
                <div className="flex justify-between font-bold border-b border-slate-200 pb-1.5 text-slate-900">
                  <span>Rubros Solicitados ({budgetItems.length})</span>
                  <span className="text-[#0055D4]">{formatARS(grandTotalLabor)}</span>
                </div>
                {budgetItems.map((bi) => (
                  <div key={bi.id} className="flex justify-between items-center text-[11px]">
                    <span className="truncate pr-2 font-medium">• {bi.service} ({bi.quantity} {bi.unitSymbol})</span>
                    <span className="font-semibold shrink-0">{formatARS(bi.laborSubtotal)}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  id="modal-wa-send-btn"
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Avisar ahora por WhatsApp al Asesor Técnico</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs cursor-pointer"
                >
                  Cerrar Ventana
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View 1: Main Presupuestador Online */}
        {activeTab === 'presupuestador' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Service Selector & Dynamic Input (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* STEP 1: Selector de Rubro y Tarea Oficial */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0055D4] flex items-center justify-center font-bold">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        1. Elegí el Rubro y Servicio Oficial
                      </h3>
                      <p className="text-xs text-slate-500">
                        Base de Precios Oficial 2Hermanos (Mano de Obra Certificada)
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 hidden sm:inline-block">
                    {PRICE_DATABASE.length} ítems cargados
                  </span>
                </div>

                {/* Category Pill Filters */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Filtrar por Especialidad:
                  </label>
                  <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        id={`filter-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                          selectedCategory === cat
                            ? 'bg-[#0055D4] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
                        }`}
                      >
                        {cat === 'todos' ? '🔍 Todos los Rubros' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search in database input */}
                <div className="relative mb-4">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="search-price-items-input"
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Buscar tarea: porcelanato, ladrillo hueco, losa, canaleta, zanja, zócalo, boca..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0055D4] bg-slate-50/70"
                  />
                  {searchFilter && (
                    <button 
                      onClick={() => setSearchFilter('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Service Dropdown Selector */}
                <div className="mb-5">
                  <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Servicio a Cotizar:
                  </label>
                  <select
                    id="service-select"
                    value={activeItemId}
                    onChange={(e) => setActiveItemId(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-[#0055D4] text-slate-800 shadow-xs"
                  >
                    {availableItems.map((item) => {
                      const laborRate = getLaborUnitPrice(item);
                      const unitDef = getUnitDefinition(item.unit);
                      return (
                        <option key={item.id} value={item.id}>
                          {item.service} — {formatARS(laborRate)} / {unitDef.symbol} ({item.rubro})
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Dynamic Unit of Measure Badge & Explanatory Banner */}
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 mb-5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="px-2.5 py-1 rounded-lg bg-[#0055D4] text-white font-mono font-bold text-xs">
                        Unidad: {currentUnitDef.symbol}
                      </div>
                      <span className="text-xs font-bold text-slate-800">
                        {currentUnitDef.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-blue-900 bg-white px-2.5 py-0.5 rounded-md border border-blue-100">
                      Mano de Obra: {formatARS(currentItemLaborUnit)} / {currentUnitDef.symbol}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2">
                    💡 <strong>Regla técnica:</strong> {currentUnitDef.description}.
                  </p>
                </div>

                {/* STEP 2: DYNAMIC INPUT FIELD BASED ON UNIT */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="dynamic-unit-input" className="text-xs font-black uppercase tracking-wider text-slate-800">
                      {currentUnitDef.inputLabel} *
                    </label>
                    <span className="text-sm sm:text-base font-black text-[#0055D4] bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-2xs font-mono">
                      {inputQuantity} {currentUnitDef.symbol}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <input
                        id="dynamic-unit-input"
                        type="number"
                        min={currentUnitDef.min}
                        max={currentUnitDef.max}
                        step={currentUnitDef.defaultStep}
                        value={inputQuantity}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          setInputQuantity(isNaN(val) ? 0 : val);
                        }}
                        placeholder={currentUnitDef.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0055D4] bg-white"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {currentUnitDef.badge}
                      </span>
                    </div>

                    {/* Button to Add into Multi-item Budget */}
                    <button
                      type="button"
                      id="add-item-to-budget-btn"
                      onClick={handleAddCurrentItemToBudget}
                      disabled={inputQuantity <= 0}
                      className="py-3 px-4 sm:px-5 rounded-xl bg-[#0055D4] hover:bg-[#0046b0] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                      <span>+ Agregar al Presupuesto</span>
                    </button>
                  </div>

                  {/* Quick Quantity Presets */}
                  <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-200/70 text-xs">
                    <span className="text-[11px] text-slate-500 font-semibold mr-1">Rápido:</span>
                    {[
                      { label: '+5', val: 5 },
                      { label: '+10', val: 10 },
                      { label: '+25', val: 25 },
                      { label: '+50', val: 50 },
                      { label: 'Reset (30)', val: 30, reset: true }
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          if (preset.reset) setInputQuantity(preset.val);
                          else setInputQuantity(prev => Math.max(1, (prev || 0) + preset.val));
                        }}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-[11px] transition-colors cursor-pointer"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  {/* Realtime Single Item Calculation formula */}
                  <div className="mt-3 p-2.5 bg-blue-50/50 rounded-xl border border-blue-100/80 flex items-center justify-between text-xs">
                    <span className="text-slate-600 font-medium">
                      Subtotal ítem actual:
                    </span>
                    <span className="font-mono font-bold text-slate-900">
                      {inputQuantity} {currentUnitDef.symbol} × {formatARS(currentItemLaborUnit)} = <span className="text-[#0055D4] font-black">{formatARS(currentItemSubtotal)}</span>
                    </span>
                  </div>
                </div>

                {/* STEP 3: Property Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Tipo de Inmueble:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'casa', label: 'Vivienda / Casa', icon: Home },
                      { id: 'quincho', label: 'Quincho / Galería', icon: Home },
                      { id: 'local', label: 'Local Comercial', icon: Store },
                      { id: 'galpon', label: 'Galpón / Tinglado', icon: Briefcase }
                    ].map((prop) => {
                      const IconComponent = prop.icon;
                      return (
                        <button
                          key={prop.id}
                          type="button"
                          id={`prop-type-${prop.id}`}
                          onClick={() => setPropertyType(prop.id)}
                          className={`py-2 px-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            propertyType === prop.id
                              ? 'bg-[#0A1118] text-white border-[#0A1118] shadow-2xs'
                              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                          }`}
                        >
                          <IconComponent className="w-3.5 h-3.5" />
                          <span className="truncate">{prop.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* STEP 4: Client Contact Information Form */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0055D4] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    2. Datos del Cliente y Ubicación de la Obra
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-fullname" className="block text-xs font-semibold text-slate-700 mb-1">
                      Nombre y Apellido / Razón Social *
                    </label>
                    <input
                      id="client-fullname"
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0055D4]"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Teléfono / WhatsApp de Contacto *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="Ej. 358 123-4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0055D4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label htmlFor="client-zone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Localidad de la Obra
                    </label>
                    <select
                      id="client-zone"
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0055D4]"
                    >
                      <option value="Río Cuarto y Gran Río Cuarto">Río Cuarto y Gran Río Cuarto</option>
                      <option value="Ciudad de Córdoba Capital">Ciudad de Córdoba Capital</option>
                      <option value="Zonas Aledañas y Sierras">Zonas Aledañas y Sierras</option>
                      <option value="Río de los Sauces / Calamuchita">Río de los Sauces / Calamuchita</option>
                      <option value="Otra Localidad de Córdoba">Otra localidad de la Provincia</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="client-notes" className="block text-xs font-semibold text-slate-700 mb-1">
                      Detalles Adicionales / Vicios Edilicios
                    </label>
                    <input
                      id="client-notes"
                      type="text"
                      placeholder="Ej. Hay contrapiso previo, altura 2.80m..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0055D4]"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Interactive Multi-item Budget & Official Total (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Main Presupuesto Estimado Total Card */}
              <div className="bg-[#0A1118] text-white rounded-3xl p-6 sm:p-7 border border-blue-900/40 shadow-xl relative overflow-hidden">
                
                {/* Header with 2Hermanos Branding */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <span className="text-xs font-black tracking-wider uppercase text-[#38BDF8] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    2Hermanos Constructora
                  </span>
                  <span className="text-[11px] bg-blue-950 border border-blue-800 text-cyan-300 font-bold px-2.5 py-0.5 rounded-full">
                    Mano de Obra Oficial
                  </span>
                </div>

                {/* Grand Total Display */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-400 mb-1">
                    Presupuesto Estimado Total Sumarizado:
                  </p>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                      {formatARS(grandTotalLabor > 0 ? grandTotalLabor : currentItemSubtotal)}
                    </span>
                    <span className="text-xs text-[#38BDF8] font-bold uppercase tracking-wider">
                      ARS M.O.
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5">
                    * Calculado sobre valores de Mano de Obra oficial de 2Hermanos ({totalItemsCount} {totalItemsCount === 1 ? 'rubro' : 'rubros'} en lista).
                  </p>
                </div>

                {/* Multi-item Table / List */}
                <div className="bg-[#0D1826] rounded-2xl p-4 border border-blue-950/80 mb-5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 mb-3">
                    <span className="font-bold text-slate-300">Detalle de Rubros Añadidos:</span>
                    {budgetItems.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearBudget}
                        className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer font-semibold"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Vaciar</span>
                      </button>
                    )}
                  </div>

                  {budgetItems.length === 0 ? (
                    <div className="py-6 text-center text-slate-400 text-xs">
                      <p className="mb-2">No agregaste ningún rubro al acumulador todavía.</p>
                      <button
                        type="button"
                        onClick={handleAddCurrentItemToBudget}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Agregar {currentActiveItem.service.substring(0, 24)}...</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                      {budgetItems.map((bi) => (
                        <div 
                          key={bi.id} 
                          className="bg-[#121F33] rounded-xl p-3 border border-blue-900/40 text-xs space-y-1.5"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-bold text-white text-xs leading-snug">
                              {bi.service}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemoveBudgetItem(bi.id)}
                              className="text-slate-400 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                              title="Quitar ítem"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-slate-300">
                            <span className="text-slate-400">{bi.rubro}</span>
                            <span className="font-mono text-cyan-300 font-semibold">
                              {formatARS(bi.laborUnitPrice)} / {bi.unitSymbol}
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800">
                              <button
                                type="button"
                                onClick={() => handleUpdateItemQuantity(bi.id, -1)}
                                className="text-slate-400 hover:text-white font-bold px-1 cursor-pointer"
                              >
                                -
                              </button>
                              <span className="font-mono font-bold text-white px-1">
                                {bi.quantity} {bi.unitSymbol}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleUpdateItemQuantity(bi.id, 1)}
                                className="text-slate-400 hover:text-white font-bold px-1 cursor-pointer"
                              >
                                +
                              </button>
                            </div>

                            <span className="font-mono font-black text-emerald-400 text-xs">
                              {formatARS(bi.laborSubtotal)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Table Footer with Summary */}
                  {budgetItems.length > 0 && (
                    <div className="pt-3 mt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-medium">Subtotal Mano de Obra:</span>
                      <span className="font-mono font-black text-white text-sm">
                        {formatARS(grandTotalLabor)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Destination WhatsApp Contact Toggle */}
                <div className="mb-4">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Enviar Consulta a:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setTargetContact('empresa')}
                      className={`py-2 px-2.5 rounded-xl border font-bold text-[11px] transition-all cursor-pointer text-left ${
                        targetContact === 'empresa'
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>🏢 Empresa Central</span>
                      <span className="block font-mono text-[10px] opacity-80">{COMPANY_INFO.phoneCompanyNumber}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTargetContact('asesor')}
                      className={`py-2 px-2.5 rounded-xl border font-bold text-[11px] transition-all cursor-pointer text-left ${
                        targetContact === 'asesor'
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>👷 Asesor Técnico</span>
                      <span className="block font-mono text-[10px] opacity-80">{COMPANY_INFO.phoneAdvisorNumber}</span>
                    </button>
                  </div>
                </div>

                {/* PRIMARY ACTION: SEND VIA WHATSAPP */}
                <button
                  type="button"
                  id="quote-export-whatsapp-btn"
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-4 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Enviar Presupuesto por WhatsApp</span>
                </button>

                {/* SECONDARY ACTIONS: COPY & PRINT */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button
                    type="button"
                    id="copy-quote-btn"
                    onClick={handleCopyToClipboard}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedToClipboard ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Detalle</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    id="print-quote-btn"
                    onClick={handlePrintQuote}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimir / PDF</span>
                  </button>
                </div>

                {/* DIRECT FORM ACTION */}
                <button
                  type="button"
                  id="direct-form-request-btn"
                  onClick={handleSendFormDirect}
                  className="w-full mt-2.5 py-2 px-3 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors text-center cursor-pointer"
                >
                  O enviar solicitud técnica por formulario interno
                </button>

                {/* Mini Contractual Notice footer */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Garantía Escrita 2Hermanos</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('clausulas')}
                    className="text-[#38BDF8] hover:underline font-bold"
                  >
                    Ver Cláusulas Contractuales →
                  </button>
                </div>

              </div>

              {/* DIRECT HELP CARD */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 flex items-start gap-4 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#0055D4] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <p className="font-bold text-slate-900">¿Dudas con la medición de tu obra?</p>
                  <p className="text-slate-600">
                    Coordiná una visita presencial con nuestro Asesor Técnico para rectificar m², metros lineales y diagnóstico estructural <strong>100% sin cargo</strong>:
                  </p>
                  <div className="pt-1 flex flex-col gap-1">
                    <a
                      href={`tel:${COMPANY_INFO.phoneAdvisorRaw}`}
                      className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>👷 Asesor Técnico:</span> {COMPANY_INFO.phoneAdvisorNumber}
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* View 2: Cláusulas Contractuales y Condiciones (Positivas y Negativas) */}
        {activeTab === 'clausulas' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
            
            <div className="border-b border-slate-200 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0055D4] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Marco Legal y Comercial
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Cláusulas Contractuales y Condiciones de Cotización
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Términos aplicables a todos los presupuestos emitidos por 2Hermanos Constructora.
              </p>
            </div>

            {/* POSITIVE CLAUSES */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-emerald-950 uppercase tracking-wide">
                    ■ CLÁUSULAS POSITIVAS (Lo que SÍ incluye el presupuesto estimado)
                  </h4>
                  <p className="text-[11px] text-emerald-800">Compromiso de calidad técnica y ejecución</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-emerald-900 font-medium">
                {CONTRACT_CLAUSES.positive.map((clause, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-black shrink-0">✓</span>
                    <span className="leading-relaxed">{clause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEGATIVE CLAUSES / EXCLUSIONS */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-amber-950 uppercase tracking-wide">
                    ■ CLÁUSULAS NEGATIVAS Y EXCLUSIONES (Lo que NO incluye el presupuesto estimado)
                  </h4>
                  <p className="text-[11px] text-amber-800">Límites y condiciones no contempladas en mano de obra estándar</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-amber-900 font-medium">
                {CONTRACT_CLAUSES.negative.map((clause, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-700 font-black shrink-0">✗</span>
                    <span className="leading-relaxed">{clause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VALIDITY CONDITIONS */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#0055D4] text-white flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-blue-950 uppercase tracking-wide">
                    ■ CONDICIONES DE VALIDEZ DEL PRESUPUESTO
                  </h4>
                  <p className="text-[11px] text-blue-800">Vigencia y formalización in situ</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-blue-900 font-medium">
                {CONTRACT_CLAUSES.validity.map((cond, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#0055D4] font-black shrink-0">•</span>
                    <span className="leading-relaxed">{cond}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to Presupuestador CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setActiveTab('presupuestador')}
                className="py-3 px-6 rounded-xl bg-[#0055D4] hover:bg-[#0046b0] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Volver a la Calculadora Multi-Rubro</span>
              </button>

              <button
                type="button"
                onClick={handlePrintQuote}
                className="py-3 px-5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir Cláusulas</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
