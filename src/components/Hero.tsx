import React from 'react';
import { MessageSquare, ArrowDown, Shield, Award, CalendarCheck, CheckCircle2, Star, MapPin, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreServices: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onOpenQuote }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    '¡Hola 2Hermanos! Deseo solicitar asesoramiento y cotización sin cargo para una obra / proyecto.'
  )}`;

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#0A1118] via-[#0B1726] to-[#0A1118] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-blue-950/60">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14233c_1px,transparent_1px),linear-gradient(to_bottom,#14233c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Atmospheric blue/cyan glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-800/60 shadow-inner mb-6 flex-wrap">
              <span className="flex h-2 w-2 rounded-full bg-[#00A3FF] animate-pulse" />
              <span className="text-xs font-semibold text-slate-200 tracking-wide flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Río Cuarto • Ciudad de Córdoba • Zonas Aledañas
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase shadow-xs">
                Presupuestos Sin Cargo
              </span>
            </div>

            {/* High-Impact Slogan & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-white leading-[1.05] mb-6 drop-shadow-lg">
              Construimos tus proyectos con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#00A3FF] to-[#0055D4] drop-shadow-sm">
                calidad y confianza.
              </span>
            </h1>

            {/* Subtitle with Real Value Proposition */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed mb-10">
              Somos especialistas en <strong className="text-white">Albañilería Tradicional</strong>,{' '}
              <strong className="text-white">Lozas de Hormigón</strong>,{' '}
              <strong className="text-white">Pisos y Porcelanatos</strong>, e{' '}
              <strong className="text-white">Impermeabilizaciones</strong>. Desarrollamos obras integrales con mano de obra calificada, estricto cumplimiento de tiempos y{' '}
              <span className="text-cyan-300 font-bold border-b border-cyan-500/30 pb-0.5">presupuestos sin cargo</span>.
            </p>

            {/* Call to actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <a
                id="hero-whatsapp-cta"
                href={`https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent(
                  '¡Hola 2Hermanos! Deseo solicitar asesoramiento y cotización sin cargo para una obra / proyecto.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-emerald-400/30"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Contactar por WhatsApp</span>
              </a>

              <a
                id="hero-services-secondary-cta"
                href="#servicios"
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-blue-700/60 hover:border-blue-500 text-slate-200 hover:text-white font-semibold text-base transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-700/50"
              >
                <span>Ver servicios y obras</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Quick Contact Numbers Banner */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneCompanyRaw}`}
                className="inline-flex items-center gap-2 bg-slate-900/90 border border-blue-900 px-3 py-1.5 rounded-lg text-slate-200 hover:border-blue-500 hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-slate-400">Empresa:</span>
                <strong className="text-white">{COMPANY_INFO.phoneCompanyNumber}</strong>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneAdvisorRaw}`}
                className="inline-flex items-center gap-2 bg-slate-900/90 border border-cyan-900/80 px-3 py-1.5 rounded-lg text-slate-200 hover:border-cyan-400 hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-slate-400">Asesor Técnico:</span>
                <strong className="text-cyan-300">{COMPANY_INFO.phoneAdvisorNumber}</strong>
              </a>
            </div>

            {/* Key trust bullets (4 pillars from banners) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Mano de Obra</p>
                  <p className="text-xs font-bold text-slate-200">Calificada</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#00A3FF]" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Materiales</p>
                  <p className="text-xs font-bold text-slate-200">De Primera Calidad</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Cumplimiento</p>
                  <p className="text-xs font-bold text-slate-200">En Tiempos</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Garantía</p>
                  <p className="text-xs font-bold text-slate-200">En Cada Trabajo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#0F1B2B] to-[#0A131F] border border-blue-700/40 p-6 shadow-2xl">
                
                {/* Header in card */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-white/5 p-1.5 rounded-xl border border-white/10 shadow-sm">
                      <img
                        src="/logo-2hermanos.svg"
                        alt="Logo 2Hermanos"
                        className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
                      />
                    </div>
                    <div className="flex flex-col justify-center border-l-[1.5px] border-slate-700 pl-4 py-1">
                      <div className="flex items-center leading-none">
                        <span className="text-xl sm:text-2xl font-black text-[#0055D4] tracking-tight">2</span>
                        <span className="text-xl sm:text-2xl font-black text-white tracking-tight">Hermanos</span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-sky-400 font-bold uppercase tracking-[0.2em] mt-1">Soluciones Integrales</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Cotización Sin Cargo
                  </span>
                </div>

                {/* Hero Feature Image: Construction / Roofs / Floors */}
                <div className="my-5 relative rounded-xl overflow-hidden aspect-video border border-blue-900/50 group">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=900&q=80"
                    alt="Obras de construcción y lozas de hormigón 2Hermanos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="font-bold text-white bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700/80">
                      Obras Llave en Mano & Lozas
                    </span>
                    <span className="text-amber-300 font-bold bg-slate-900/90 px-2 py-1 rounded-md flex items-center gap-1 border border-slate-700/80">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      4.9 / 5.0
                    </span>
                  </div>
                </div>

                {/* Interactive metrics block */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#080D14] rounded-xl p-3 border border-slate-800">
                    <p className="text-xl font-extrabold text-white tracking-tight">Río Cuarto & Cba</p>
                    <p className="text-xs text-slate-400 font-medium">Y Zonas Aledañas</p>
                  </div>
                  <div className="bg-[#080D14] rounded-xl p-3 border border-slate-800">
                    <p className="text-xl font-extrabold text-[#38BDF8] tracking-tight">100% Garantía</p>
                    <p className="text-xs text-slate-400 font-medium">Escrita por Contrato</p>
                  </div>
                </div>

                {/* Direct quote / consultation button */}
                <button
                  id="hero-card-fast-quote-btn"
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0055D4] to-[#0072FF] hover:from-[#0047B3] hover:to-[#0062E0] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-blue-400/30"
                >
                  <Wrench className="w-4 h-4 text-cyan-300" />
                  <span>Cotizá Justo Lo Que Necesitás</span>
                  <span className="text-xs bg-cyan-400 text-slate-950 font-black px-2 py-0.5 rounded-full">
                    GRATIS
                  </span>
                </button>
              </div>

              {/* Floating trust badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0A1118] border border-blue-800/80 rounded-xl p-3.5 shadow-2xl items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-[#38BDF8] flex items-center justify-center font-black text-xl">
                  2H
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">Construcción con Compromiso</p>
                  <p className="text-[11px] text-slate-400">Atención personalizada y directa</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
