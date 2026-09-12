import React from 'react';
import {
  Wrench,
  Building2,
  Hammer,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  HardHat,
  ArrowRight,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface MetalurgicaSectionProps {
  onOpenQuote: () => void;
  onSelectForQuote: (serviceId: string) => void;
}

export const MetalurgicaSection: React.FC<MetalurgicaSectionProps> = ({
  onOpenQuote,
  onSelectForQuote
}) => {
  const advisorWhatsAppUrl = `https://wa.me/${COMPANY_INFO.phoneAdvisorRaw}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappAdvisorMessage
  )}`;

  const companyWhatsAppUrl = `https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent(
    'Hola 2Hermanos, deseo consultar por trabajos de metalúrgica, montaje o cartelería.'
  )}`;

  const specialties = [
    {
      id: 'tinglados-estructuras',
      title: 'Estructuras Metálicas & Tinglados',
      icon: Building2,
      badge: 'Cálculo & Resistencia',
      desc: 'Fabricación a medida y montaje de naves industriales, tinglados, galpones comerciales, aleros y cubiertas metálicas de chapa con vigas reticuladas de alta resistencia.',
      features: [
        'Tinglados parabólicos, a dos aguas y naves industriales',
        'Vigas reticuladas, perfiles IPN, UPN y tubos estructurales',
        'Cálculo de cargas de viento y peso propio para climas de Córdoba',
        'Pintura antióxido industrial y terminación sintética epoxi'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'montaje-obra',
      title: 'Montaje Industrial & en Altura',
      icon: HardHat,
      badge: 'Seguridad Certificada',
      desc: 'Cuadrillas especializadas en izaje, fijación y montaje de piezas pesadas en obra y altura. Cumplimiento estricto de normas de higiene, seguridad y elementos de protección personal.',
      features: [
        'Montaje estructural en altura con grúa e izajes seguros',
        'Anclajes químicos y mecánicos de alta tracción y corte',
        'Soldadura eléctrica, MIG y TIG con electrodos certificados',
        'Personal asegurado con cobertura ART y protocolos de obra'
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'carteleria-marquesinas',
      title: 'Cartelería Comercial & Marquesinas',
      icon: Zap,
      badge: 'Comercial & Negocios',
      desc: 'Diseño estructural y colocación de marquesinas modernas, estructuras porta-carteles de gran escala, frentes de locales, letras corpóreas y soportes resistentes a la intemperie.',
      features: [
        'Marquesinas metálicas con revestimiento en chapa o alucobond',
        'Estructuras para carteles luminosos, backlights y frentes comerciales',
        'Bastidores reforzados antiviento para cartelería vial y urbana',
        'Terminaciones prolijas que potencian la imagen de tu negocio'
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'herreria-tanques',
      title: 'Herrería de Obra & Bases para Tanques',
      icon: Layers,
      badge: 'Solidez Garantizada',
      desc: 'Torres metálicas de soporte para tanques de agua elevados, portones automatizables, barandas de escalera, rejas de seguridad y cerramientos perimetrales reforzados.',
      features: [
        'Torres metálicas elevadas y pedestales para tanques cisterna',
        'Portones corredizos, batientes y levadizos a medida',
        'Barandas, pasamanos y escaleras metálicas interiores/exteriores',
        'Herrería pesada para industrias, galpones y viviendas particulares'
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="metalurgica" className="py-20 bg-[#090F17] text-white relative overflow-hidden border-t border-blue-950/80">
      {/* Structural technical grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#132034_1px,transparent_1px),linear-gradient(to_bottom,#132034_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Atmospheric lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#0072FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-cyan-300 bg-blue-950/90 border border-blue-700/70 mb-4 shadow-sm">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>División Especializada 2Hermanos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Servicio de Metalúrgica,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#00A3FF] to-[#0066FF]">
              Montaje y Cartelería
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Estructuras metálicas de alta resistencia, tinglados, montajes en altura, marquesinas comerciales y cartelería para empresas y locales en <strong className="text-white">Río Cuarto, Ciudad de Córdoba y zonas aledañas</strong>.
          </p>
        </div>

        {/* Highlighted Direct Contact Banner (Featuring Technical Advisor & Company) */}
        <div className="mb-14 bg-gradient-to-r from-[#0C1826] via-[#10233B] to-[#0C1826] rounded-3xl p-6 sm:p-8 border border-blue-600/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Title and explanation (6 cols) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Atención Directa y Cotizaciones Rápidas
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                ¿Necesitás cotizar una estructura, tinglado o cartel comercial?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ponemos a tu disposición asesoramiento técnico personalizado para relevamiento de medidas, cálculo de perfilería y presupuesto sin cargo en obra.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Soldaduras reforzadas • Montaje en obra • Cumplimiento de plazos</span>
              </div>
            </div>

            {/* Direct Phone Buttons (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Asesor Técnico Phone Box (Highlighted with prompt's phone) */}
              <div className="bg-[#080E16] rounded-2xl p-4 border border-blue-500/50 shadow-inner flex flex-col justify-between hover:border-cyan-400 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded">
                      Asesor Técnico
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Disponible
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Atención al cliente & Obras:</p>
                  <p className="text-lg font-black text-white tracking-tight mt-0.5">
                    {COMPANY_INFO.phoneAdvisorNumber}
                  </p>
                  <p className="text-[11px] text-slate-300">{COMPANY_INFO.phoneAdvisorDisplay}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800 flex flex-col gap-2">
                  <a
                    id="metalurgica-advisor-whatsapp-btn"
                    href={advisorWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp con Asesor</span>
                  </a>
                  <a
                    id="metalurgica-advisor-call-btn"
                    href={`tel:${COMPANY_INFO.phoneAdvisorRaw}`}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Llamar al Asesor</span>
                  </a>
                </div>
              </div>

              {/* Empresa Phone Box */}
              <div className="bg-[#080E16] rounded-2xl p-4 border border-slate-800 shadow-inner flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                      Empresa
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">
                      Casa Central
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Número oficial de contacto:</p>
                  <p className="text-lg font-black text-white tracking-tight mt-0.5">
                    {COMPANY_INFO.phoneCompanyNumber}
                  </p>
                  <p className="text-[11px] text-slate-300">{COMPANY_INFO.phoneCompanyDisplay}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800 flex flex-col gap-2">
                  <a
                    id="metalurgica-company-whatsapp-btn"
                    href={companyWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Empresa</span>
                  </a>
                  <a
                    id="metalurgica-company-call-btn"
                    href={`tel:${COMPANY_INFO.phoneCompanyRaw}`}
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Llamar a la Empresa</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Cards Grid of Metalúrgica, Montaje y Cartelería */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`metalurgica-card-${item.id}`}
                className="bg-[#0C1521] rounded-3xl border border-blue-900/40 p-6 sm:p-7 hover:border-blue-600 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 border border-blue-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1521] via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#080E16]/90 backdrop-blur-sm border border-blue-500/40 text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </div>
                  </div>

                  {/* Header & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-800">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectForQuote('metalurgica-montaje-carteleria');
                      onOpenQuote();
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0055D4] hover:bg-[#0044B0] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Cotizar este trabajo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneAdvisorRaw}?text=${encodeURIComponent(
                      `Hola Asesor Técnico, deseo consultar sobre "${item.title}" para una obra.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Asesor: 3584120343</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee and Location Badge */}
        <div className="bg-[#0B141F] rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white">Garantía Estructural por Escrito</p>
              <p className="text-[11px] text-slate-400">
                Operamos en Río Cuarto, Ciudad de Córdoba y zonas aledañas con cuadrillas de montaje propias.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400">Atención técnica:</span>
            <span className="font-mono font-bold text-cyan-300 bg-blue-950 px-3 py-1 rounded-lg border border-blue-800">
              358 412-0343
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
