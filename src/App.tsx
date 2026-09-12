import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MetalurgicaSection } from './components/MetalurgicaSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Chatbot } from './components/Chatbot';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';
import { COMPANY_INFO } from './data/portfolioData';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('albanileria_construccion');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceForQuote(serviceId);
    const element = document.getElementById('cotizador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = (customMessage?: string) => {
    const text = customMessage || COMPANY_INFO.whatsappMessage;
    const url = `https://wa.me/${COMPANY_INFO.phoneCompanyRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuoteFromPortfolio = (serviceType: string) => {
    const lower = serviceType.toLowerCase();
    if (lower.includes('metalurg') || lower.includes('tinglado') || lower.includes('cartel') || lower.includes('montaje') || lower.includes('marquesina')) {
      setSelectedServiceForQuote('metalurgica-montaje-carteleria');
    } else if (lower.includes('loza') || lower.includes('vigueta')) {
      setSelectedServiceForQuote('lozas_hormigon');
    } else if (lower.includes('techo') || lower.includes('chapa') || lower.includes('zinguería')) {
      setSelectedServiceForQuote('techos_tinglados');
    } else if (lower.includes('piso') || lower.includes('porcelanato')) {
      setSelectedServiceForQuote('pisos_porcelanato');
    } else if (lower.includes('impermeabil')) {
      setSelectedServiceForQuote('impermeabilizacion_techos');
    } else if (lower.includes('reforma') || lower.includes('llave en mano')) {
      setSelectedServiceForQuote('obras_reformas');
    } else {
      setSelectedServiceForQuote('albanileria_construccion');
    }

    const element = document.getElementById('cotizador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToQuote = () => {
    const element = document.getElementById('cotizador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-[#0072FF] selection:text-white">
      {/* Top sticky navigation bar */}
      <Navbar onOpenQuote={handleScrollToQuote} />

      {/* Main content body */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={handleExploreServices}
          onOpenQuote={handleScrollToQuote}
        />

        {/* 2. Servicios Grid */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
          onOpenServiceDetails={(service) => setActiveModalService(service)}
        />

        {/* 3. Sección Especial de Metalúrgica, Montaje y Cartelería */}
        <MetalurgicaSection
          onOpenQuote={handleScrollToQuote}
          onSelectForQuote={handleSelectServiceForQuote}
        />

        {/* 4. Sobre Nosotros / Por Qué Elegirnos */}
        <WhyChooseUs />

        {/* 5. Galería / Trabajos Recientes (Antes y Después interactivo y obras reales) */}
        <PortfolioSection
          onQuoteThisProject={handleQuoteFromPortfolio}
        />

        {/* 6. Testimonios de Clientes Satisfechos */}
        <TestimonialsSection />

        {/* 7. Cotizador Interactivo / Formulario de Contacto */}
        <QuoteCalculator
          initialServiceId={selectedServiceForQuote}
        />
      </main>

      {/* 7. Pie de página (Footer) */}
      <Footer />

      {/* 8. Botón flotante de WhatsApp con mini chat (esquina inferior derecha) */}
      <FloatingWhatsApp />

      {/* 9. Asistente Virtual / Chatbot Interactivo (esquina inferior izquierda) */}
      <Chatbot
        onOpenQuote={handleScrollToQuote}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* 10. Service Detail Technical Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForQuote={handleSelectServiceForQuote}
      />
    </div>
  );
}
