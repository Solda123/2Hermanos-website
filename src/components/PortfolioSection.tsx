import React, { useState, useRef } from 'react';
import {
  SlidersHorizontal,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { MasonryShowcase } from './MasonryShowcase';

interface PortfolioSectionProps {
  onQuoteThisProject: (serviceType: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onQuoteThisProject }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PORTFOLIO_PROJECTS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');

  const containerRef = useRef<HTMLDivElement>(null);

  const selectedProject: PortfolioProject =
    PORTFOLIO_PROJECTS.find((p) => p.id === selectedProjectId) || PORTFOLIO_PROJECTS[0];

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.touches[0].clientX);
  };

  return (
    <section id="trabajos" className="py-20 bg-[#0A1118] text-white relative overflow-hidden border-t border-blue-950/70">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#38BDF8] bg-blue-950/80 border border-blue-800/80 mb-3">
            Obras Realizadas en Córdoba
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Galería de Trabajos: Antes y Después
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Deslizá el cursor sobre las imágenes para comparar el estado inicial con las terminaciones de primera calidad entregadas por nuestro equipo.
          </p>

          {/* Project selector buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {PORTFOLIO_PROJECTS.map((proj) => (
              <button
                key={proj.id}
                id={`select-project-btn-${proj.id}`}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedProjectId === proj.id
                    ? 'bg-[#0072FF] text-white shadow-lg shadow-blue-900/40 font-extrabold ring-2 ring-cyan-400/40'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {proj.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before & After Showcase Block */}
        <div className="bg-[#0D1826] rounded-3xl border border-blue-900/40 p-4 sm:p-8 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Top: Interactive Image Canvas (7 cols) */}
            <div className="lg:col-span-7">
              {/* Top controls */}
              <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Arrastrá la barra central o hacé clic para comparar
                </span>

                {/* View toggle */}
                <div className="inline-flex bg-slate-900 rounded-lg p-0.5 border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setViewMode('slider')}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      viewMode === 'slider' ? 'bg-[#0072FF] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Deslizador
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('sideBySide')}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      viewMode === 'sideBySide' ? 'bg-[#0072FF] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Lado a Lado
                  </button>
                </div>
              </div>

              {viewMode === 'slider' ? (
                /* Slider view */
                <div
                  ref={containerRef}
                  id="before-after-slider-container"
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  onTouchMove={handleTouchMove}
                  onClick={(e) => handleSliderMove(e.clientX)}
                  className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-blue-900/60 shadow-2xl bg-black"
                >
                  {/* AFTER Image (Full background) */}
                  <img
                    src={selectedProject.afterImage}
                    alt={`${selectedProject.title} - Después (Terminado)`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/50 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full pointer-events-none shadow-md">
                    DESPUÉS (Obra Terminada)
                  </div>

                  {/* BEFORE Image (Clipped overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img
                      src={selectedProject.beforeImage}
                      alt={`${selectedProject.title} - Antes (Inicial)`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md border border-slate-700 text-slate-300 text-xs font-bold px-3 py-1 rounded-full pointer-events-none shadow-md">
                      ANTES (Estado Previo)
                    </div>
                  </div>

                  {/* Divider Line & Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,163,255,0.8)] cursor-ew-resize"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-[#0072FF]">
                      <div className="flex items-center -space-x-1">
                        <ChevronLeft className="w-4 h-4 text-[#0055D4]" />
                        <ChevronRight className="w-4 h-4 text-[#0055D4]" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Side by Side view */
                <div className="grid grid-cols-2 gap-3 aspect-[4/3] sm:aspect-[16/10]">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800">
                    <img
                      src={selectedProject.beforeImage}
                      alt="Antes"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 text-slate-300 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      ANTES
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800">
                    <img
                      src={selectedProject.afterImage}
                      alt="Después"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-900/90 text-emerald-200 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      DESPUÉS
                    </div>
                  </div>
                </div>
              )}

              {/* Slider quick preset buttons */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setSliderPosition(10)}
                  className="px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 font-medium cursor-pointer"
                >
                  Ver Más Antes (10%)
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className="px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 font-medium cursor-pointer"
                >
                  50 / 50 Centro
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(90)}
                  className="px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 font-medium cursor-pointer"
                >
                  Ver Más Después (90%)
                </button>
              </div>
            </div>

            {/* Right/Bottom: Project Details Sheet (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-black text-[#38BDF8] uppercase tracking-wider bg-blue-950/80 border border-blue-800/80 px-2.5 py-1 rounded-md">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {selectedProject.serviceType}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 leading-snug">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Meta details */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-950/70 rounded-xl p-4 border border-blue-950">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-400">Ubicación</p>
                      <p className="text-xs font-bold text-white truncate max-w-[140px] sm:max-w-none">
                        {selectedProject.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-400">Plazo pactado</p>
                      <p className="text-xs font-bold text-white">
                        {selectedProject.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key results */}
                <div className="space-y-2 mb-8">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Aspectos Destacados de la Obra:
                  </p>
                  {selectedProject.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3">
                <a
                  id="portfolio-quote-this-btn"
                  href="#cotizador"
                  onClick={() => onQuoteThisProject(selectedProject.serviceType)}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0055D4] hover:bg-[#0044B0] text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
                >
                  <span>Cotizar Proyecto Similar</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  id="portfolio-whatsapp-inquire-btn"
                  href={`https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent(
                    `Hola 2Hermanos Constructora, vi su obra "${selectedProject.title}" en la web y deseo consultar para hacer algo similar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Masonry, Countertops & Concrete Real Works Showcase (Retocadas & Calificadas) */}
        <MasonryShowcase onQuoteService={onQuoteThisProject} />

      </div>
    </section>
  );
};
