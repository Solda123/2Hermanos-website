import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-slate-50 border-t border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0055D4] text-xs font-black tracking-wide uppercase mb-3 border border-blue-200">
            <ThumbsUp className="w-3.5 h-3.5" />
            Experiencias Reales en Obras
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            La Confianza de Nuestros Clientes es Nuestro Mejor Aval
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conocé las opiniones de propietarios y familias en Río Cuarto, Río de los Sauces y la región que confiaron sus lozas, techos, pisos y obras a 2Hermanos Constructora.
          </p>
        </div>

        {/* Testimonials Grid (Desktop/Tablet) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />
                </div>

                {/* Highlight Quote */}
                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                  "{item.highlight}"
                </h3>

                {/* Body Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.content}
                </p>
              </div>

              {/* Client Info & Service Badge */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-2.5">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-slate-900 text-sm leading-none">{item.name}</h4>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Cliente verificado" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.role ? `${item.role} • ` : ''}{item.companyOrLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span className="font-bold text-[#0055D4] bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                    {item.serviceCompleted}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel for Mobile */}
        <div className="md:hidden">
          {(() => {
            const item = testimonialsData[activeTestimonial];
            return (
              <div
                id={`mobile-testimonial-${item.id}`}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-100" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  "{item.highlight}"
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.content}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mb-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500">
                      {item.role ? `${item.role} • ` : ''}{item.companyOrLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span className="font-bold text-[#0055D4] bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                    {item.serviceCompleted}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            );
          })()}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-1.5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  id={`testimonial-dot-${idx}`}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx ? 'w-6 bg-[#0055D4]' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Ver testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                id="btn-prev-testimonial"
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="btn-next-testimonial"
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust metrics row below testimonials */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0055D4]">4.9 / 5</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Calificación promedio en obras</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0055D4]">100%</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Cumplimiento en plazos</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0055D4]">+15 Años</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">De trayectoria constructiva</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0055D4]">100%</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">Garantía escrita en contrato</div>
          </div>
        </div>

      </div>
    </section>
  );
};
