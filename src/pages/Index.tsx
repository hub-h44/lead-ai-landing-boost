
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { AICalculator } from "@/components/AICalculator";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-clinic-white flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <div id="calculator">
          <AICalculator />
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
