'use client';

import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const isMobile = useIsMobile();
  
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-clinic-blue/80 bg-gradient-to-b from-clinic-blue/95 to-clinic-blue/50 text-clinic-white">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(155, 89, 182, 0.3)" />
      
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-24 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 pt-8 md:pt-0 z-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 md:pr-12">
            Seu maior concorrente não é a clínica da esquina: <span className="text-clinic-gold">é o silêncio depois do primeiro 'oi'.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-clinic-white/90 px-4 md:px-0">
            Decubra como ter um atendimento que funciona 24/7 e menos de 40s para ter uma resposta.
          </p>
          <Button 
            onClick={scrollToForm} 
            className="w-[90%] md:w-auto bg-clinic-gold hover:bg-clinic-gold/90 text-clinic-blue font-bold text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-subtle-pulse"
          >
            Desbloquear diagnóstico estratégico
          </Button>
        </div>
        
        <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[600px] relative mb-6 md:mb-0">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#F5F7FA" fillOpacity="0.8" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
}
