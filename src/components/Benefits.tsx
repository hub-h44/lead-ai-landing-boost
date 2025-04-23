
import { Card } from "@/components/ui/card"

const benefitsData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clinic-blue">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: "Atendimento 24/7",
    description: "Nunca mais perca um lead. Nossa IA responde dúvidas e agenda consultas em qualquer horário ou dia da semana."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clinic-blue">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    title: "Personalização Total",
    description: "IA treinada com sua comunicação, protocolos e valores, garantindo respostas personalizadas e alinhadas com sua clínica."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clinic-blue">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
    title: "Conversão Acima de 40%",
    description: "Aumente drasticamente sua taxa de conversão de leads em pacientes com respostas imediatas e acompanhamento inteligente."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clinic-blue">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "Integração Simples",
    description: "Implementação rápida com seus sistemas atuais, sem necessidade de mudanças complexas na sua infraestrutura."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clinic-blue">
        <path d="M20 7h-9"></path>
        <path d="M14 17H5"></path>
        <circle cx="17" cy="17" r="3"></circle>
        <circle cx="7" cy="7" r="3"></circle>
      </svg>
    ),
    title: "Análises Avançadas",
    description: "Dashboards detalhados sobre o desempenho do atendimento, permitindo otimização contínua da sua estratégia."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-clinic-blue">
        <path d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2z"></path>
        <path d="M17 6a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2z"></path>
        <path d="M5 10a2 2 0 0 1 2 2a2 2 0 0 1 2-2a2 2 0 0 1-2-2a2 2 0 0 1-2 2z"></path>
        <path d="M19 4v4"></path>
        <path d="M19 16v4"></path>
        <path d="M5 8v8"></path>
      </svg>
    ),
    title: "Escalabilidade",
    description: "Lide com 10 ou 10.000 consultas simultaneamente sem perda de qualidade, permitindo crescimento sem aumento proporcional de custos."
  }
]

export function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-clinic-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-blue mb-4">
            Transforme seu Atendimento com IA
          </h2>
          <p className="text-xl text-gray-600">
            Descubra como nossa solução de IA pode revolucionar o atendimento da sua clínica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 border border-gray-200 hover:border-clinic-blue/50 transition-colors hover:shadow-lg"
            >
              <div className="h-16 flex items-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-clinic-blue mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
