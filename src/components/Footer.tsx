import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  MessageSquare,
  Instagram,
  Link as LinkIcon,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent(
    'Hola 2Hermanos Constructora, deseo consultar sobre obras, presupuestos y zonas de cobertura.'
  )}`;

  return (
    <footer className="bg-[#070D14] text-slate-300 pt-16 pb-12 border-t border-blue-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-850">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-white/5 p-1.5 rounded-xl border border-white/10 shadow-lg">
                <img
                  src="/logo-2hermanos.svg"
                  alt="2Hermanos Constructora"
                  className="h-14 sm:h-16 w-auto object-contain drop-shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center border-l-[1.5px] border-slate-700 pl-4 py-1">
                <div className="flex items-center leading-none">
                  <span className="text-2xl sm:text-3xl font-black text-[#0055D4] tracking-tight">2</span>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">Hermanos</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#38BDF8] uppercase tracking-[0.2em] font-bold mt-1.5">
                  Soluciones Integrales
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Construimos con experiencia, calidad y compromiso. Especialistas en albañilería tradicional, lozas de hormigón, techos, pisos e impermeabilización en toda la provincia de Córdoba.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-social-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-700/80 text-emerald-400 hover:bg-emerald-900 flex items-center justify-center transition-colors shadow-xs"
                aria-label="WhatsApp de 2Hermanos"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
              <a
                id="footer-social-instagram"
                href="https://www.instagram.com/2hermanscba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500 hover:text-pink-500 flex items-center justify-center transition-colors"
                aria-label="Instagram de 2Hermanos"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-linktree"
                href="https://linktr.ee/2HermanosConstructora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="Linktree de 2Hermanos"
              >
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Nuestras Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#38BDF8]">›</span> Albañilería Tradicional & Obras
                </a>
              </li>
              <li>
                <a href="#metalurgica" className="text-cyan-300 hover:text-white transition-colors flex items-center gap-2 font-medium">
                  <span className="text-cyan-400">›</span> Metalúrgica, Montaje & Cartelería
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#38BDF8]">›</span> Lozas de Hormigón & Viguetas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#38BDF8]">›</span> Techos de Chapa, Zinguería & Tinglados
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#38BDF8]">›</span> Colocación de Pisos & Porcelanatos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#38BDF8]">›</span> Impermeabilización de Techos & Terrazas
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#38BDF8]">›</span> Reformas Integrales & Ampliaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contacto Directo
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <a
                id="footer-phone-company"
                href={`tel:${COMPANY_INFO.phoneCompanyRaw}`}
                className="flex items-start gap-3 text-slate-300 hover:text-[#38BDF8] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/70 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5 border border-blue-800/60">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-[#38BDF8]">{COMPANY_INFO.phoneCompanyNumber}</p>
                  <p className="text-[11px] text-slate-400">Teléfono Empresa</p>
                </div>
              </a>

              <a
                id="footer-phone-advisor"
                href={`tel:${COMPANY_INFO.phoneAdvisorRaw}`}
                className="flex items-start gap-3 text-slate-300 hover:text-cyan-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-950/70 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5 border border-cyan-800/60">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-cyan-300">{COMPANY_INFO.phoneAdvisorNumber}</p>
                  <p className="text-[11px] text-cyan-300">Asesor Técnico • Atención al Cliente</p>
                </div>
              </a>

              <a
                id="footer-email-cta"
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-3 text-slate-300 hover:text-[#38BDF8] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/70 flex items-center justify-center text-sky-400 shrink-0 mt-0.5 border border-blue-800/60">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-[#38BDF8]">{COMPANY_INFO.email}</p>
                  <p className="text-[11px] text-slate-400">Respuesta ágil</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-blue-950/70 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 border border-blue-800/60">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-white">Horarios de Atención</p>
                  <p className="text-[11px] text-slate-400">{COMPANY_INFO.schedule.weekdays}</p>
                  <p className="text-[11px] text-slate-400">{COMPANY_INFO.schedule.saturdays}</p>
                  <p className="text-[11px] text-emerald-400 font-semibold">{COMPANY_INFO.schedule.emergencies}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Coverage Area */}
          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Ubicación & Cobertura
            </h4>
            
            <div className="flex items-start gap-2 text-xs text-slate-300 mb-3">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>

            <p className="text-xs text-slate-400 mb-2 font-semibold">Zonas principales de trabajo:</p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {COMPANY_INFO.coverageAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/60 text-[11px] text-slate-300">
              ¿Tu obra es en otra localidad de Córdoba?{' '}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38BDF8] font-bold hover:underline"
              >
                Consultanos sin cargo
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#38BDF8]" />
            <span>© {new Date().getFullYear()} 2Hermanos Constructora • Soluciones Integrales. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Mano de Obra Calificada • Garantía Escrita</span>
            <button
              type="button"
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
