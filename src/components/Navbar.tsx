import { Button } from '@/components/ui/button';

export function Navbar() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-clinic-blue/80 backdrop-blur-md border-b border-b-white/5">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-clinic-gold"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span className="font-bold text-xl text-white">MediAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
            Início
          </a>
          <a href="#calculator" className="text-sm text-white/80 hover:text-white transition-colors">
            Calculadora
          </a>
          <a href="#benefits" className="text-sm text-white/80 hover:text-white transition-colors">
            Benefícios
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button 
            onClick={scrollToForm} 
            variant="outline" 
            className="bg-transparent border-clinic-gold text-clinic-gold hover:bg-clinic-gold hover:text-clinic-blue animate-subtle-pulse"
          >
            Agende agora
          </Button>
        </div>
      </div>
    </header>
  );
}
