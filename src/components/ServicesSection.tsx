import React, { useState } from 'react';
import {
  Hammer,
  Home,
  Layers,
  ShieldCheck,
  Wrench,
  Award,
  CheckCircle2,
  ArrowRight,
  Info,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { COMPANY_INFO } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onOpenServiceDetails: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForQuote,
  onOpenServiceDetails
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filteredServices = activeFilter === 'todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeFilter);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#0066FF]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#00A3FF]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#0072FF]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0072FF]" />;
    }
  };

  const filterTabs = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'construccion', label: 'Construcción & Albañilería' },
    { id: 'metalurgica', label: 'Metalúrgica & Montaje' },
    { id: 'techos', label: 'Techos & Lozas' },
    { id: 'pisos', label: 'Pisos & Porcelanatos' },
    { id: 'impermeabilizacion', label: 'Impermeabilización & Pintura' }
  ];

  return (
    <section id="servicios" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#0055D4] bg-blue-100/70 border border-blue-200 mb-3">
            Especialidades 2Hermanos Constructora
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Soluciones Integrales para Cada Espacio
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Mano de obra calificada, materiales de calidad de marcas líderes del mercado y{' '}
            <span className="font-bold text-slate-900">garantía en todos nuestros trabajos</span>.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`filter-service-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0055D4] text-white shadow-md shadow-blue-900/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon & Popular badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center p-3.5 group-hover:bg-[#0055D4] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <span className="group-hover:[&_svg]:text-white transition-colors">
                      {getIcon(service.iconName)}
                    </span>
                  </div>
                  {service.popular && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      Especialidad Destacada
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0055D4] transition-colors">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Warranty Tag (Required by prompt) */}
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-lg mb-5 w-full">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{service.warranty}</span>
                </div>

                {/* Included bullets */}
                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {service.includedFeatures.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  id={`quote-service-btn-${service.id}`}
                  onClick={() => onSelectServiceForQuote(service.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#0055D4] hover:bg-[#0044B0] text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
                >
                  <span>Cotizar este trabajo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id={`details-service-btn-${service.id}`}
                  onClick={() => onOpenServiceDetails(service)}
                  className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Ver más detalles técnicos"
                  aria-label={`Detalles de ${service.title}`}
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom banner for custom requests */}
        <div className="mt-12 bg-gradient-to-r from-[#0A1118] via-[#0D1F38] to-[#0A1118] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-800/50 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ¿Tenés un proyecto especial en Río Cuarto, Ciudad de Córdoba o zonas aledañas?
            </h3>
            <p className="text-slate-300 text-sm">
              Construimos viviendas, techos, pisos, tinglados, montajes y reformas con cotización personalizada y presupuestos sin cargo.
            </p>
          </div>
          <a
            id="services-custom-whatsapp-cta"
            href={`https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent('Hola 2Hermanos Constructora, deseo consultar por un trabajo o proyecto personalizado.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
