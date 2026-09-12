import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Sliders,
  Star,
  MapPin,
  ArrowRight,
  MessageSquare,
  FileImage,
  Info,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { MASONRY_WORK_ITEMS, RETOUCH_PRESETS } from '../data/masonryData';
import { COMPANY_INFO } from '../data/portfolioData';
import { MasonryWorkItem } from '../types';

interface MasonryShowcaseProps {
  onQuoteService: (serviceName: string) => void;
}

export const MasonryShowcase: React.FC<MasonryShowcaseProps> = ({ onQuoteService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeRetouchPreset, setActiveRetouchPreset] = useState<string>('retocado');
  const [activeItemModal, setActiveItemModal] = useState<MasonryWorkItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas las Fotos', count: MASONRY_WORK_ITEMS.length },
    { id: 'Mesadas & Cocina', label: 'Mesadas de Hormigón (5 Fases)', count: 5 },
    { id: 'Plateas & Cocheras', label: 'Plateas & Cocheras (4 Pasos)', count: 3 },
    { id: 'Hormigón Visto', label: 'Hormigón Visto Arquitectura', count: 1 },
    { id: 'Mampostería Tradicional', label: 'Mampostería & Bloques', count: 3 }
  ];

  const filteredItems = selectedCategory === 'todos'
    ? MASONRY_WORK_ITEMS
    : MASONRY_WORK_ITEMS.filter((item) => item.category === selectedCategory);

  const currentPreset = RETOUCH_PRESETS.find((p) => p.id === activeRetouchPreset) || RETOUCH_PRESETS[0];

  return (
    <div id="obras-albanileria" className="mt-20 pt-16 border-t border-blue-900/40">
      {/* Header with Badges */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Fotografías de Obra • Retocadas y Calificadas</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Trabajos de Albañilería, Mesadas y Hormigón
        </h3>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Revisión técnica de obras realizadas en Río Cuarto y Córdoba: desde mesadas monolíticas en hormigón armado hasta plateas de cocheras y mampostería nivelada.
        </p>
      </div>

      {/* Retouching Studio Controls Bar */}
      <div className="bg-[#0D1826] border border-blue-900/60 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-950 flex items-center justify-center text-[#38BDF8] border border-blue-800/60 shrink-0">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Filtro de Retoque Fotográfico Aplicado:
              </p>
              <p className="text-[11px] text-slate-300">
                {currentPreset.desc}
              </p>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {RETOUCH_PRESETS.map((preset) => (
              <button
                key={preset.id}
                id={`retouch-preset-btn-${preset.id}`}
                onClick={() => setActiveRetouchPreset(preset.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeRetouchPreset === preset.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-900/50 font-black'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`filter-masonry-${cat.id}`}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-[#0072FF] text-white shadow-lg shadow-blue-900/40 ring-1 ring-cyan-400/50'
                : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <span>{cat.label}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/40 text-slate-300">
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Masonry Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`masonry-card-${item.id}`}
            className="bg-[#0C1521] rounded-2xl border border-blue-950 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group"
          >
            <div>
              {/* Image with Retouching Filter Applied */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  style={{
                    filter: currentPreset.css === 'none' ? 'none' : currentPreset.css
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Stage Badge */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-cyan-500/40 text-cyan-300 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {item.stageBadge}
                </div>

                {/* Score Badge (Compressed scale) */}
                <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-sm border border-amber-500/60 text-amber-300 text-xs font-black px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{item.score.toFixed(1)}</span>
                  <span className="text-[10px] text-slate-400 font-normal">/10</span>
                </div>

                {/* Original Filename Tag */}
                <div className="absolute bottom-2 left-2 bg-slate-950/90 text-slate-300 text-[10px] px-2 py-0.5 rounded flex items-center gap-1 border border-slate-800">
                  <FileImage className="w-2.5 h-2.5 text-cyan-400" />
                  <span className="font-mono text-[9px] truncate max-w-[170px]">{item.filename}</span>
                </div>

                <div className="absolute bottom-2 right-2 text-[10px] text-slate-300 bg-black/70 px-2 py-0.5 rounded flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-sky-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5">
                {/* Target Section Badge */}
                <span className="inline-block text-[10px] font-extrabold text-[#38BDF8] uppercase tracking-wider bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900/60 mb-2">
                  Sección: {item.section}
                </span>

                <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.evaluationSummary}
                </p>

                {/* Criteria Score Breakdown (Compressed towards center) */}
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-900 space-y-2 mb-4">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Nivelación y Escuadra:</span>
                    <span className="font-bold text-slate-200">{item.scoreDetails.nivelacion.toFixed(1)} / 10</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full rounded-full"
                      style={{ width: `${(item.scoreDetails.nivelacion / 10) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Armadura y Encofrado:</span>
                    <span className="font-bold text-slate-200">{item.scoreDetails.armadura.toFixed(1)} / 10</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-400 h-full rounded-full"
                      style={{ width: `${(item.scoreDetails.armadura / 10) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Terminación y Prolijidad:</span>
                    <span className="font-bold text-slate-200">{item.scoreDetails.prolijidad.toFixed(1)} / 10</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-400 h-full rounded-full"
                      style={{ width: `${(item.scoreDetails.prolijidad / 10) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Technical Points */}
                <div className="space-y-1.5">
                  {item.technicalPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-5 pt-3 border-t border-slate-900 flex items-center justify-between gap-2">
              <a
                href="#cotizador"
                onClick={() => onQuoteService(item.category)}
                className="text-xs font-bold text-sky-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Cotizar similar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneAdvisorRaw}?text=${encodeURIComponent(
                  `Hola Asesor Técnico de 2Hermanos, vi en la web la obra "${item.title}" (${item.filename}) y deseo consultar presupuesto.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/80 text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Consultar</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Special Highlights Summary Banner */}
      <div className="mt-12 bg-gradient-to-r from-blue-950/80 via-slate-900 to-cyan-950/80 rounded-2xl border border-cyan-800/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            Control de Calidad en Cada Etapa
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-white">
            ¿Tenés en mente una mesada de hormigón, platea o muro de ladrillo?
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
            Realizamos visitas técnicas sin cargo en Río Cuarto, Ciudad de Córdoba y zonas aledañas. Nuestro Asesor Técnico supervisa personalmente el armado de hierro, encofrados y fraguado.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="#cotizador"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm text-center shadow-lg transition-all cursor-pointer"
          >
            Solicitar Presupuesto sin Cargo
          </a>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneAdvisorRaw}?text=${encodeURIComponent(
              'Hola Asesor Técnico, quiero consultar sobre una obra de albañilería / mesada de hormigón / platea.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Asesor: 3584120343</span>
          </a>
        </div>
      </div>
    </div>
  );
};
