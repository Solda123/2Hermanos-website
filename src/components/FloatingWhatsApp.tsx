import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userMsg, setUserMsg] = useState<string>('');

  const quickPrompts = [
    'Hola 2Hermanos, deseo solicitar presupuesto sin cargo para una obra.',
    'Hola, necesito cotizar lozas de hormigón o colocación de pisos.',
    'Hola, deseo consultar por impermeabilización de techos en mi zona.'
  ];

  const handleSendPrompt = (textToSend: string) => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover mini chat card */}
      {isOpen && (
        <div
          id="whatsapp-chat-popover"
          className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Popover Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/LOGO 2 HERMANOS.png"
                  alt="2Hermanos"
                  className="w-10 h-10 rounded-full bg-[#0A1118] p-0.5 object-contain ring-2 ring-emerald-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo-2hermanos.svg';
                  }}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">2Hermanos Constructora</p>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>En línea</span> • Presupuestos Sin Cargo
                </p>
              </div>
            </div>
            <button
              type="button"
              id="close-whatsapp-popover"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/90 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 text-xs space-y-3 max-h-72 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200/80 shadow-xs max-w-[85%] text-slate-800 space-y-1.5">
              <p className="font-semibold text-slate-900">¡Hola! 👋</p>
              <p>
                Somos 2Hermanos Constructora. ¿En qué proyecto o reforma te podemos asesorar hoy?
              </p>
              <div className="pt-1 flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Atención oficial en Río Cuarto y Córdoba</span>
              </div>
            </div>

            {/* Quick suggested chips */}
            <div className="pt-2 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Elegí una consulta rápida:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 text-slate-700 hover:text-emerald-900 text-xs font-medium transition-all shadow-2xs cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Custom message input */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribí tu consulta..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && userMsg.trim()) {
                  handleSendPrompt(userMsg);
                }
              }}
              className="flex-1 text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="button"
              id="send-custom-whatsapp-btn"
              onClick={() => handleSendPrompt(userMsg || 'Hola 2Hermanos, deseo comunicarme con ustedes.')}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
              aria-label="Enviar por WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <div className="flex items-center gap-3">
        {/* Subtle pill tooltip when collapsed */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 bg-[#0A1118]/90 hover:bg-[#0A1118] backdrop-blur-sm text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-xl border border-blue-900/80 transition-all transform hover:-translate-x-1 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Presupuesto Sin Cargo • WhatsApp</span>
          </button>
        )}

        <button
          type="button"
          id="floating-whatsapp-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
          aria-label="Abrir chat de WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-7 h-7 fill-current" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-slate-950 text-[10px] font-black rounded-full flex items-center justify-center shadow-md">
                1
              </span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
