import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { ChatMessage } from '../types';
import { 
  calculateBotQuote, 
  POPULAR_PRICE_SHORTCUTS, 
  formatARS,
  PRICE_DATABASE 
} from '../data/priceDatabase';
import { COMPANY_INFO } from '../data/portfolioData';

interface ChatbotProps {
  onOpenQuote: () => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenQuote, onOpenWhatsApp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnreadNotice, setHasUnreadNotice] = useState(true);

  const initialBotMessage: ChatMessage = {
    id: 'msg-init',
    sender: 'bot',
    text: '¡Hola! Soy el asistente virtual de **2Hermanos Constructora** 🏗️. Cuento con la **Base de Precios Oficiales 2026** para estimar tu presupuesto al instante. ¿Qué trabajo o cuántos m² querés cotizar?',
    timestamp: 'Ahora',
    suggestedActions: [
      { label: '💰 Ver Precios Oficiales 2026', actionType: 'query', value: 'lista_precios' },
      { label: '💎 Cotizar Porcelanato', actionType: 'query', value: 'cuanto sale colocar porcelanato' },
      { label: '🧱 Cotizar Muro Ladrillo Hueco', actionType: 'query', value: 'precio pared ladrillo hueco 18' },
      { label: '🚗 Cotizar Contrapiso Cochera', actionType: 'query', value: 'precio contrapiso armado' },
      { label: '🔨 Ver Todos los Servicios', actionType: 'query', value: 'servicios' },
      { label: '⏰ Horarios & Contacto', actionType: 'query', value: 'horarios' },
    ]
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnreadNotice(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const getBotResponse = (userInput: string): { text: string; suggestedActions?: ChatMessage['suggestedActions'] } => {
    const query = userInput.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 1. Horarios y contactos
    if (query.includes('horario') || query.includes('hora') || query.includes('atienden') || query.includes('abierto') || query.includes('sabado') || query.includes('domingo') || query.includes('cuando')) {
      return {
        text: 'Nuestros horarios de atención y coordinación de obras son:\n\n• **Lunes a Viernes:** 07:30 a 19:00 hs.\n• **Sábados:** 08:00 a 13:00 hs.\n• **Teléfono Empresa:** 3585102643\n• **Asesor Técnico (Atención al cliente):** 3584120343\n• **Guardias y urgencias de techos/filtraciones:** Atención activa.',
        suggestedActions: [
          { label: '💬 Consultar por WhatsApp', actionType: 'whatsapp', value: 'Hola 2Hermanos, tengo una consulta sobre sus horarios y obras' },
          { label: '📋 Solicitar cotización sin cargo', actionType: 'scrollQuote' }
        ]
      };
    }

    // 2. Precios Oficiales 2026 (Lista / Tarifario)
    if (
      query === 'lista_precios' || 
      query === 'precios' ||
      query.includes('lista de precios') || 
      query.includes('tabla de precios') || 
      query.includes('tarifario') || 
      query.includes('valores 2026') ||
      query.includes('precios oficiales')
    ) {
      return {
        text: '📊 **Tarifario Oficial 2026 de 2Hermanos Constructora** (Bases UTN FRVT & Clickie):\n\n' +
          '• **Porcelanato (Mano de Obra):** $26.950 / m² | Completo c/pegamento: $45.430 / m²\n' +
          '• **Mampostería Ladrillo Hueco 18:** $28.270 / m² ($11.200 M.O.)\n' +
          '• **Mampostería Ladrillo Común 15:** $33.000 / m²\n' +
          '• **Contrapiso Armado Cochera (15 cm):** $47.832 / m²\n' +
          '• **Contrapiso Cascote (8-10 cm):** $14.300 / m²\n' +
          '• **Carpeta de Cemento (3 cm):** $9.020 / m²\n' +
          '• **Losa de Viguetas e Isopor:** $39.600 / m²\n' +
          '• **Revoque Completo Exterior (3 capas):** $29.370 / m²\n' +
          '• **Revoque Grueso Exterior:** $12.100 / m²\n' +
          '• **Impermeabilización Membrana 4mm:** $19.470 / m²\n' +
          '• **Cielorraso Suspendido Durlock:** $24.860 / m²\n' +
          '• **Instalación Eléctrica por Boca:** $23.100 / boca\n' +
          '• **Pintura Látex Interior (2 manos):** $8.030 / m²\n' +
          '• **Platea de Hormigón Armado 10 cm:** $502.623 / m³\n' +
          '• **Mesada Mármol Gris Mara c/frentín:** $220.033 / m²\n\n' +
          '💡 *Podés escribir directamente los metros que tenés (ej: "cotizar 50 m2 de porcelanato" o "30 m2 de contrapiso") y te calculo el total al instante.*',
        suggestedActions: [
          { label: '💎 Cotizar Porcelanato 40 m²', actionType: 'query', value: 'cotizar 40 m2 de porcelanato' },
          { label: '🧱 Cotizar Ladrillo Hueco 30 m²', actionType: 'query', value: 'cotizar 30 m2 de ladrillo hueco' },
          { label: '🚗 Cotizar Contrapiso 25 m²', actionType: 'query', value: 'cotizar 25 m2 de contrapiso' },
          { label: '🏗️ Cotizar Losa Viguetas 50 m²', actionType: 'query', value: 'cotizar 50 m2 de losa viguetas' },
          { label: '⚡ Boca de luz (10 bocas)', actionType: 'query', value: 'cotizar 10 bocas de luz' }
        ]
      };
    }

    // 3. Cotizador Automático con Base de Datos de Precios (Búsqueda inteligente + cálculo de cantidad)
    const botQuote = calculateBotQuote(userInput);
    if (botQuote) {
      const { item, quantity, totalEstimate, summaryText } = botQuote;
      const waMsg = `Hola Asesor Técnico de 2Hermanos, estuve consultando en la web la cotización de "${item.service}" (${quantity} ${item.unit} - Estimado: ${formatARS(totalEstimate)}). Deseo consultar presupuesto formal y visita sin cargo.`;

      return {
        text: summaryText,
        suggestedActions: [
          { 
            label: `💬 Pedir visita x WhatsApp (${formatARS(totalEstimate)})`, 
            actionType: 'whatsapp', 
            value: waMsg 
          },
          { 
            label: '📋 Abrir Cotizador Web', 
            actionType: 'scrollQuote' 
          },
          { 
            label: '📊 Ver otros precios 2026', 
            actionType: 'query', 
            value: 'lista_precios' 
          }
        ]
      };
    }

    // 4. Presupuestos y cotizaciones genéricas (cuando no coincide con un ítem específico)
    if (query.includes('presupuesto') || query.includes('cotiz') || query.includes('costo') || query.includes('precio') || query.includes('tarifa') || query.includes('cuanto sale') || query.includes('cuanto cuesta') || query.includes('pedir')) {
      return {
        text: 'En **2Hermanos Constructora** todos los presupuestos y visitas técnicas son **100% SIN CARGO y sin compromiso**.\n\nContamos con la base de precios 2026 cargada en el sistema. Escribime el trabajo y los metros cuadrados (ej: *"50 m2 de porcelanato"*, *"30 m2 de pared de ladrillo"*, *"20 m2 de contrapiso"* o *"losa de viguetas"*).\n\nTambién podés usar el cotizador web interactivo o escribir a nuestro Asesor Técnico al **3584120343**.',
        suggestedActions: [
          { label: '📊 Ver Lista de Precios 2026', actionType: 'query', value: 'lista_precios' },
          { label: '⚡ Abrir Cotizador Online', actionType: 'scrollQuote' },
          { label: '💬 Pedir Presupuesto por WhatsApp', actionType: 'whatsapp', value: 'Hola 2Hermanos, deseo solicitar un presupuesto sin cargo para una obra' }
        ]
      };
    }

    // 3. Metalúrgica, Montaje y Cartelería
    if (query.includes('metalurg') || query.includes('montaje') || query.includes('cartel') || query.includes('tinglado') || query.includes('galpon') || query.includes('estructura') || query.includes('marquesina') || query.includes('herreria')) {
      return {
        text: '¡Contamos con una **División Especializada en Metalúrgica, Montaje y Cartelería**! 🛠️\n\n• Fabricación y montaje de **tinglados y naves industriales**.\n• **Montajes en altura** y estructuras pesadas con cuadrilla asegurada.\n• **Cartelería comercial**, marquesinas y frentes para locales.\n• **Bases metálicas para tanques** y herrería de obra.\n\n📞 **Contacto directo Asesor Técnico:** 3584120343',
        suggestedActions: [
          { label: '🏗️ Ver sección de Metalúrgica', actionType: 'query', value: 'ver_metalurgica' },
          { label: '💬 Contactar al Asesor (3584120343)', actionType: 'whatsapp', value: 'Hola Asesor Técnico de 2Hermanos, deseo consultar por estructuras metálicas, montaje o cartelería.' },
          { label: '📝 Cotizar estructura', actionType: 'scrollQuote' }
        ]
      };
    }

    // 4. Servicios ofrecidos
    if (query.includes('servicio') || query.includes('trabajo') || query.includes('hacen') || query.includes('ofrecen') || query.includes('loza') || query.includes('piso') || query.includes('techo') || query.includes('albañil') || query.includes('albanil') || query.includes('impermeabiliz')) {
      return {
        text: 'Nuestras principales especialidades son:\n\n• **Albañilería Tradicional:** Cimientos, paredes de ladrillo hueco/visto, revoques y estructuras.\n• **Metalúrgica, Montaje & Cartelería:** Tinglados, marquesinas, carteles y herrería.\n• **Lozas de Hormigón & Viguetas:** Encofrados, armado de hierros y llenado.\n• **Techos, Zinguería & Tinglados:** Estructuras metálicas, chapas y canaletas.\n• **Pisos & Porcelanatos:** Contrapisos nivelados y colocación prolija.\n• **Impermeabilización de Techos:** Membranas asfálticas y sellados fibrados.\n• **Reformas & Obras Llave en Mano.**',
        suggestedActions: [
          { label: '🔍 Ver sección de servicios', actionType: 'query', value: 'ver_servicios' },
          { label: '📝 Cotizar un trabajo ahora', actionType: 'scrollQuote' }
        ]
      };
    }

    // 5. Garantía
    if (query.includes('garantia') || query.includes('confianza') || query.includes('calidad') || query.includes('seguro')) {
      return {
        text: 'Ofrecemos **Garantía Escrita en todos nuestros trabajos** respaldada formalmente. Trabajamos con **mano de obra calificada**, materiales de primera línea y cumplimiento estricto de los tiempos pactados.',
        suggestedActions: [
          { label: '📝 Solicitar presupuesto sin cargo', actionType: 'scrollQuote' },
          { label: '💬 Conversar por WhatsApp', actionType: 'whatsapp', value: 'Hola 2Hermanos, deseo consultar sobre sus garantías y referencias' }
        ]
      };
    }

    // 6. Redes Sociales
    if (query.includes('redes') || query.includes('instagram') || query.includes('facebook') || query.includes('linktree')) {
      return {
        text: '¡Seguinos en nuestras redes sociales para ver el día a día de nuestras obras!\n\n• **Instagram:** [@2hermanscba](https://www.instagram.com/2hermanscba/)\n• **Linktree:** [2HermanosConstructora](https://linktr.ee/2HermanosConstructora)\n\n¡Subimos fotos de los avances, terminaciones de alta calidad y más!',
        suggestedActions: [
          { label: '💬 Consultar por WhatsApp', actionType: 'whatsapp', value: 'Hola 2Hermanos, vengo de ver sus redes sociales' },
          { label: '📝 Cotizar un trabajo ahora', actionType: 'scrollQuote' }
        ]
      };
    }

    // 7. Zonas de cobertura
    if (query.includes('zona') || query.includes('donde') || query.includes('cobertura') || query.includes('sauces') || query.includes('cuarto') || query.includes('cordoba') || query.includes('llegan') || query.includes('ubicacion')) {
      return {
        text: 'Operamos principalmente en:\n\n• **Río Cuarto y Gran Río Cuarto.**\n• **Ciudad de Córdoba Capital.**\n• **Zonas Aledañas y Sierras.**\n\nNos desplazamos a evaluar la obra sin costo ni compromiso.',
        suggestedActions: [
          { label: '📍 Consultar por mi localidad', actionType: 'whatsapp', value: 'Hola 2Hermanos, quería consultar si trabajan en mi localidad' },
          { label: '📋 Pedir cotización', actionType: 'scrollQuote' }
        ]
      };
    }

    // 6. Materiales y formas de trabajo
    if (query.includes('material') || query.includes('mano de obra') || query.includes('llave en mano')) {
      return {
        text: 'Podemos trabajar bajo dos modalidades:\n\n1. **Solo Mano de Obra:** Nosotros aportamos herramientas y mano de obra calificada, vos adquirís los materiales según nuestra lista de cómputo.\n2. **Llave en Mano:** Nos encargamos de la compra de materiales de primera calidad (Holcim, Loma Negra, etc.) y la ejecución completa de la obra.',
        suggestedActions: [
          { label: '💬 Asesorarme sobre materiales', actionType: 'whatsapp', value: 'Hola 2Hermanos, quisiera consultar sobre modalidades de obra' },
          { label: '📝 Cotizar online', actionType: 'scrollQuote' }
        ]
      };
    }

    // 7. Saludos / cortesías
    if (query.includes('hola') || query.includes('buenos dias') || query.includes('buenas tardes') || query.includes('que tal')) {
      return {
        text: '¡Hola! Qué gusto saludarte. ¿En qué obra, proyecto o reforma te podemos asesorar hoy?',
        suggestedActions: [
          { label: '🛠️ Ver servicios', actionType: 'query', value: 'servicios' },
          { label: '📝 Pedir presupuesto sin cargo', actionType: 'scrollQuote' },
          { label: '📍 Consultar zonas', actionType: 'query', value: 'zonas' }
        ]
      };
    }

    // 8. Special shortcut: ver servicios
    if (query === 'ver_servicios') {
      const servicesEl = document.getElementById('servicios');
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: 'smooth' });
      }
      return {
        text: 'Te hemos desplazado a la sección de **Nuestros Servicios**. Allí podés ver los detalles de albañilería, lozas, pisos, techos e impermeabilizaciones.',
        suggestedActions: [
          { label: '⚡ Cotizar justo lo que necesitás', actionType: 'scrollQuote' },
          { label: '💬 Escribir por WhatsApp', actionType: 'whatsapp', value: 'Hola 2Hermanos, estuve viendo sus servicios y tengo una consulta' }
        ]
      };
    }

    // 9. Special shortcut: ver metalúrgica
    if (query === 'ver_metalurgica') {
      const metalurgicaEl = document.getElementById('metalurgica');
      if (metalurgicaEl) {
        metalurgicaEl.scrollIntoView({ behavior: 'smooth' });
      }
      return {
        text: 'Te hemos desplazado a la sección de **Metalúrgica, Montaje y Cartelería** 🛠️. Podés contactar directamente al Asesor Técnico al **3584120343**.',
        suggestedActions: [
          { label: '💬 WhatsApp Asesor Técnico', actionType: 'whatsapp', value: 'Hola Asesor Técnico de 2Hermanos, deseo asesoramiento para una estructura metálica o cartel.' },
          { label: '📋 Cotizar estructura online', actionType: 'scrollQuote' }
        ]
      };
    }

    // Fallback: Ofrecer WhatsApp o Formulario
    return {
      text: 'Para darte la información más precisa sobre ese trabajo específico, nuestro equipo puede responderte directamente por **WhatsApp** o podés dejarnos tu consulta en el cotizador.',
      suggestedActions: [
        { 
          label: '💬 Chatear por WhatsApp', 
          actionType: 'whatsapp', 
          value: `Hola 2Hermanos, tengo una consulta para mi obra: "${userInput}"` 
        },
        { 
          label: '📝 Usar Cotizador Web', 
          actionType: 'scrollQuote' 
        }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = (textToSend || inputValue).trim();
    if (!messageText) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: 'Ahora'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(messageText);
      const newBotMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReply.text,
        timestamp: 'Ahora',
        suggestedActions: botReply.suggestedActions
      };
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleActionClick = (action: { label: string; actionType: 'query' | 'whatsapp' | 'scrollQuote'; value?: string }) => {
    if (action.actionType === 'query') {
      handleSendMessage(action.value || action.label);
    } else if (action.actionType === 'whatsapp') {
      onOpenWhatsApp(action.value || 'Hola 2Hermanos, me comunico desde el chat web.');
    } else if (action.actionType === 'scrollQuote') {
      onOpenQuote();
      const botConfirmMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '¡Listo! Te llevamos al cotizador interactivo para que elijas el rubro y nos envíes tu solicitud sin costo.',
        timestamp: 'Ahora',
        suggestedActions: [
          { label: '💬 También consultar por WhatsApp', actionType: 'whatsapp', value: 'Hola 2Hermanos, estoy cotizando mi obra' }
        ]
      };
      setMessages((prev) => [...prev, botConfirmMsg]);
    }
  };

  const handleResetChat = () => {
    setMessages([initialBotMessage]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-40">
        {!isOpen && (
          <div className="relative group">
            {hasUnreadNotice && (
              <div 
                onClick={() => setIsOpen(true)}
                className="cursor-pointer absolute bottom-16 left-0 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 whitespace-nowrap flex items-center gap-2 animate-bounce transition-transform"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                <span className="font-bold text-[#0055D4]">¿Consultas para tu obra?</span>
                <span className="text-slate-500">Asistente en línea</span>
              </div>
            )}

            <button
              id="btn-open-chatbot"
              onClick={() => setIsOpen(true)}
              className="bg-[#0A1118] hover:bg-slate-900 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 border-2 border-blue-500/40 active:scale-95 cursor-pointer"
              aria-label="Abrir asistente 2Hermanos"
            >
              <div className="relative">
                <Bot className="w-6 h-6 text-[#38BDF8]" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0A1118] rounded-full" />
              </div>
              <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-1">
                Chat de Obra
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[600px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A1118] via-[#0D1C30] to-[#0A1118] text-white p-4 flex items-center justify-between shadow-md border-b border-blue-900/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A1118] border border-blue-500/40 flex items-center justify-center relative p-1">
                <img
                  src="/LOGO 2 HERMANOS.png"
                  alt="2H"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo-2hermanos.svg';
                  }}
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#0A1118]" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5 leading-none text-white">
                  2Hermanos Constructora
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </h3>
                <p className="text-[11px] text-cyan-300 mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  En línea • Presupuestos Sin Cargo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-300">
              <button
                id="btn-reset-chat"
                onClick={handleResetChat}
                title="Reiniciar chat"
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Reiniciar chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                id="btn-close-chatbot"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick FAQ Shortcuts Bar */}
          <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            <span className="text-slate-500 font-bold uppercase tracking-wider shrink-0 text-[10px]">
              Opciones:
            </span>
            <button
              id="faq-btn-precios"
              onClick={() => handleSendMessage('lista_precios')}
              className="bg-blue-600 text-white px-2.5 py-0.5 rounded-md hover:bg-blue-700 transition-colors shrink-0 font-bold flex items-center gap-1 shadow-xs cursor-pointer"
            >
              💰 Precios 2026
            </button>
            <button
              id="faq-btn-servicios"
              onClick={() => handleSendMessage('servicios')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md hover:bg-blue-50 hover:text-[#0055D4] transition-colors shrink-0 font-medium cursor-pointer"
            >
              Servicios
            </button>
            <button
              id="faq-btn-presupuesto"
              onClick={() => handleSendMessage('presupuesto')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md hover:bg-blue-50 hover:text-[#0055D4] transition-colors shrink-0 font-medium cursor-pointer"
            >
              Presupuestos
            </button>
            <button
              id="faq-btn-zonas"
              onClick={() => handleSendMessage('zonas')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md hover:bg-blue-50 hover:text-[#0055D4] transition-colors shrink-0 font-medium cursor-pointer"
            >
              Zonas
            </button>
            <button
              id="faq-btn-garantia"
              onClick={() => handleSendMessage('garantia')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md hover:bg-blue-50 hover:text-[#0055D4] transition-colors shrink-0 font-medium cursor-pointer"
            >
              Garantía
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#0055D4] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    2H
                  </div>
                )}

                <div className={`max-w-[85%] ${msg.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0055D4] text-white rounded-tr-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line space-y-1.5">
                      {msg.text.split('\n').map((paragraph, pIdx) => {
                        if (!paragraph) return <div key={pIdx} className="h-1" />;
                        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={pIdx}>
                            {parts.map((part, i) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <strong key={i} className="font-bold text-slate-900">
                                    {part.slice(2, -2)}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {msg.suggestedActions.map((action, aIdx) => (
                        <button
                          key={aIdx}
                          id={`chat-action-${aIdx}`}
                          onClick={() => handleActionClick(action)}
                          className={`text-[11px] font-bold px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 text-left cursor-pointer ${
                            action.actionType === 'whatsapp'
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                              : action.actionType === 'scrollQuote'
                              ? 'bg-blue-50 border-blue-200 text-[#0055D4] hover:bg-blue-100 font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {action.label}
                          <ArrowRight className="w-3 h-3 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-full bg-[#0055D4] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                  2H
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#0055D4] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#0055D4] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#0055D4] rounded-full animate-bounce"></span>
                  <span className="text-[11px] text-slate-400 ml-1">Escribiendo...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              id="chatbot-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribí tu consulta sobre obras..."
              className="flex-1 text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0055D4]/40 focus:border-[#0055D4] text-slate-800 placeholder:text-slate-400"
            />
            <button
              id="chatbot-submit"
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-[#0055D4] hover:bg-[#0044B0] disabled:opacity-40 disabled:hover:bg-[#0055D4] text-white transition-colors flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Fallback Note */}
          <div className="bg-slate-50 px-3 py-1.5 text-center text-[10px] text-slate-400 border-t border-slate-100 flex items-center justify-center gap-1">
            <span>¿Preferís consultar por WhatsApp?</span>
            <button
              id="chat-footer-whatsapp-link"
              onClick={() => onOpenWhatsApp('Hola 2Hermanos, deseo consultar con un encargado')}
              className="text-emerald-700 font-bold hover:underline cursor-pointer"
            >
              WhatsApp directo
            </button>
          </div>
        </div>
      )}
    </>
  );
};
