import React from 'react';
import {
  Award,
  ShieldCheck,
  CalendarCheck,
  CheckCircle,
  Clock,
  Check,
  MapPin,
  Sparkles
} from 'lucide-react';
import { TRUST_POINTS, COMPANY_INFO } from '../data/portfolioData';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#0066FF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#00A3FF]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-emerald-500" />;
      case 'CheckCircle':
        return <CheckCircle className="w-6 h-6 text-cyan-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  const workflowSteps = [
    {
      step: '01',
      title: 'Contacto Directo & Relevamiento',
      desc: 'Escribinos por WhatsApp o llamanos. Evaluamos las necesidades de tu obra, estructura o reforma en Río Cuarto, Ciudad de Córdoba o zonas aledañas.'
    },
    {
      step: '02',
      title: 'Presupuesto Sin Cargo',
      desc: 'Cotizamos justo lo que necesitás, con desglose claro de materiales y mano de obra calificada sin costos ocultos.'
    },
    {
      step: '03',
      title: 'Ejecución con Cumplimiento de Plazos',
      desc: 'Iniciamos los trabajos con cronogramas pactados, supervisión constante y materiales de primeras marcas.'
    },
    {
      step: '04',
      title: 'Entrega con Garantía Escrita',
      desc: 'Revisión técnica de cada detalle constructivo y respaldo formal de garantía en cada trabajo terminado.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#0055D4] bg-blue-100/70 border border-blue-200 mb-3">
            Calidad • Compromiso • Confianza
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Por Qué Elegir a 2Hermanos Constructora
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Construimos con experiencia, calidad y compromiso para brindarte la seguridad y solidez que tu inversión merece.
          </p>
        </div>

        {/* 4 Key Trust Points (Extracted from real banners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.id}
              id={`trust-point-${point.id}`}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getPillarIcon(point.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#0055D4] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">
                    {point.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Garantía & Respaldo 2H</span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative split block: Institutional trust & 4-step workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-[#0A1118] via-[#0D1C30] to-[#0A1118] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-blue-900/50">
          
          {/* Left: About Us narrative & credentials */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Nuestra Filosofía Constructiva
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Obras sólidas, terminaciones prolijas y trato transparente
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              En <strong className="text-white font-semibold">2Hermanos Constructora</strong> unificamos todas las etapas de tu proyecto: desde la platea y estructura de hormigón hasta la colocación milimétrica de pisos y la protección de cubiertas.
            </p>

            {/* Checklist of assurances */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Mano de Obra Especializada:</strong> Cuadrillas con experiencia comprobada en encofrados, hierros, lozas, pisos y terminaciones.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Materiales de Primer Nivel:</strong> Cemento, viguetas, membranas y porcelanatos de marcas líderes que garantizan durabilidad.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Presupuestos Sin Cargo:</strong> Te visitamos o analizamos tus planos sin ningún costo ni compromiso.
                </p>
              </div>
            </div>

            {/* Coverage badge */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Trabajamos en Río Cuarto, Ciudad de Córdoba y zonas aledañas.</span>
            </div>
          </div>

          {/* Right: 4-Step Process */}
          <div className="lg:col-span-6 bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-blue-900/60 shadow-lg">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              ¿Cómo iniciamos tu proyecto?
            </h4>

            <div className="space-y-6">
              {workflowSteps.map((stepItem, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-600/50 text-[#38BDF8] font-black flex items-center justify-center shrink-0 text-sm">
                    {stepItem.step}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">
                      {stepItem.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">¿Tenés dudas o consultas de obra?</span>
              <a
                id="why-choose-us-whatsapp-btn"
                href={`https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent('Hola 2Hermanos Constructora, deseo hacer una consulta sobre tiempos y presupuesto de obra.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#38BDF8] hover:text-white transition-colors"
              >
                Escribinos por WhatsApp →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
