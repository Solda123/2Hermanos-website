import React from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/portfolioData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote
}) => {
  if (!service) return null;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hola 2Hermanos Constructora, deseo consultar por el trabajo de "${service.title}". ¿Podrían asesorarme para coordinar un presupuesto sin cargo?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          id="close-service-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Tag & Title */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0055D4] bg-blue-100 mb-2">
            Detalle Técnico de Obra
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            {service.title}
          </h3>
        </div>

        {/* Full description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {service.fullDescription}
        </p>

        {/* Warranty and price guidance */}
        <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <div>
            <p className="text-xs text-slate-500 font-medium">Garantía Escrita</p>
            <p className="text-xs font-bold text-emerald-800 flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{service.warranty}</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Referencia Estimada</p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">
              {service.basePriceEstimate}
            </p>
          </div>
        </div>

        {/* Included items */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
            ¿Qué incluye el trabajo de 2Hermanos?
          </h4>
          <div className="space-y-2">
            {service.includedFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
            <div className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
              <span>Limpieza y orden en la obra al finalizar la jornada</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            id="modal-quote-now-btn"
            onClick={() => {
              onSelectForQuote(service.id);
              onClose();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-[#0055D4] hover:bg-[#0044B0] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <span>Cotizar este trabajo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="modal-whatsapp-inquire-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
