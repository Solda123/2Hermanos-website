import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldCheck, MapPin, Instagram, Link as LinkIcon } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Metalúrgica & Cartelería', href: '#metalurgica' },
    { label: 'Por qué elegirnos', href: '#nosotros' },
    { label: 'Trabajos & Obras', href: '#trabajos' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Cotizador Online', href: '#cotizador' }
  ];

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar for trust and contact */}
      <div className="bg-[#0A1118] text-slate-300 text-xs py-2 px-4 border-b border-blue-950/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A3FF]" />
              Mano de Obra Calificada & Garantía Escrita
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Río Cuarto • Ciudad de Córdoba • Zonas Aledañas
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/2hermanscba/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" title="Instagram Oficial">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linktr.ee/2HermanosConstructora" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="Linktree Oficial">
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a
              id="header-phone-company"
              href={`tel:${COMPANY_INFO.phoneCompanyRaw}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#00A3FF] transition-colors font-semibold"
              title="Teléfono de la Empresa"
            >
              <Phone className="w-3.5 h-3.5 text-[#0072FF]" />
              <span>Empresa: {COMPANY_INFO.phoneCompanyNumber}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              id="header-phone-advisor"
              href={`tel:${COMPANY_INFO.phoneAdvisorRaw}`}
              className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors font-semibold"
              title="Asesor Técnico - Atención al cliente"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Asesor: {COMPANY_INFO.phoneAdvisorNumber}</span>
            </a>
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase shadow-sm hidden md:inline">
              Presupuestos Sin Cargo
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo 2Hermanos */}
          <a
            id="brand-logo"
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="2Hermanos Constructora Inicio"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/logo-2hermanos.svg"
                alt="2Hermanos Constructora y Soluciones Integrales"
                className="h-16 w-auto sm:h-20 object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-md"
              />
              <div className="flex flex-col justify-center border-l-[1.5px] border-slate-300 pl-4 h-full py-1">
                <div className="flex items-center leading-none">
                  <span className="text-[26px] sm:text-[32px] font-black tracking-tight text-[#0055D4]">2</span>
                  <span className="text-[26px] sm:text-[32px] font-black tracking-tight text-[#111827]">Hermanos</span>
                </div>
                <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">
                  Soluciones Integrales
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#0066FF] transition-colors tracking-tight relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0072FF] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-sm hover:shadow transition-all duration-150 focus:ring-2 focus:ring-emerald-500/40"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
            <a
              id="nav-quote-btn"
              href="#cotizador"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0055D4] hover:bg-[#0044B0] text-white text-sm font-bold shadow-sm hover:shadow transition-all duration-150 focus:ring-2 focus:ring-blue-600/40"
            >
              <span>Cotizar Sin Cargo</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-header-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
              aria-label="Contactar por WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 mt-3 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0066FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  id="mobile-menu-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Contactar por WhatsApp</span>
                </a>
                <a
                  id="mobile-menu-quote-btn"
                  href="#cotizador"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#0055D4] text-white font-bold text-sm"
                >
                  <span>Solicitar Presupuesto Online</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
