
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome precisa ter pelo menos 2 caracteres." }),
  whatsapp: z.string().min(10, { message: "WhatsApp inválido." }),
  email: z.string().email({ message: "Email inválido." }),
  teamSize: z.string().min(1, { message: "Selecione o tamanho da equipe." }),
  urgency: z.string().min(1, { message: "Selecione o nível de urgência." }),
  revenue: z.string().min(1, { message: "Selecione o faturamento mensal." }),
  investment: z.string().min(1, { message: "Selecione o investimento pretendido." }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      email: "",
      teamSize: "",
      urgency: "",
      revenue: "",
      investment: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    // Get UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const utmSource = urlParams.get('utm_source') || ''
    const utmMedium = urlParams.get('utm_medium') || ''
    const utmCampaign = urlParams.get('utm_campaign') || ''
    const utmTerm = urlParams.get('utm_term') || ''
    const utmContent = urlParams.get('utm_content') || ''
    const utmId = urlParams.get('utm_id') || ''
    const ref = urlParams.get('ref') || ''
    const fbclid = urlParams.get('fbclid') || ''
    const gclid = urlParams.get('gclid') || ''
    
    // Combine form values with UTM parameters
    const formData = {
      ...values,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_term: utmTerm,
      utm_content: utmContent,
      utm_id: utmId,
      ref: ref,
      fbclid: fbclid,
      gclid: gclid
    }
    
    console.log("Form submitted:", formData)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact-form" className="bg-clinic-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-blue text-center mb-4">
            Desbloquear seu diagnóstico estratégico
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Preencha o formulário abaixo para iniciar sua transformação digital
          </p>
          
          <Card className="p-8 shadow-lg border-t-4 border-clinic-blue">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Solicitação Recebida!</h3>
                <p className="text-gray-600 mb-8">Nossa equipe entrará em contato em breve.</p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline" 
                  className="border-clinic-blue text-clinic-blue hover:bg-clinic-blue hover:text-white"
                >
                  Enviar outro diagnóstico
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome e sobrenome</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp (DDD+número)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 11999999999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Melhor e-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tamanho atual da equipe</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-5">1 a 5 pessoas</SelectItem>
                            <SelectItem value="6-15">6 a 15 pessoas</SelectItem>
                            <SelectItem value="16+">Mais de 15</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Qual é o seu nível de urgência para implementar uma solução de IA?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mapeando">Mapeando possibilidades, sem pressa.</SelectItem>
                            <SelectItem value="organizando">Ainda me organizando internamente.</SelectItem>
                            <SelectItem value="procurando">Procurando uma solução que me atenda.</SelectItem>
                            <SelectItem value="urgente">Tenho orçamento e preciso implementar com urgência.</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Faturamento mensal da sua clínica:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ate50k">Abaixo de R$ 50.000</SelectItem>
                            <SelectItem value="50k-200k">Entre R$ 50.000 e R$ 200.000</SelectItem>
                            <SelectItem value="200k-500k">Entre R$ 200.000 e R$ 500.000</SelectItem>
                            <SelectItem value="acima1mi">Acima de R$ 1.000.000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="investment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quanto pretende investir em soluções de IA mensalmente:</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ate5k">Abaixo de R$ 5.000</SelectItem>
                            <SelectItem value="5k-20k">Entre R$ 5.000 e R$ 20.000</SelectItem>
                            <SelectItem value="20k-50k">Entre R$ 20.000 e R$ 50.000</SelectItem>
                            <SelectItem value="acima50k">Acima de R$ 50.000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Hidden UTM fields - will be filled by JavaScript */}
                  <input type="hidden" name="utm_source" />
                  <input type="hidden" name="utm_medium" />
                  <input type="hidden" name="utm_campaign" />
                  <input type="hidden" name="utm_term" />
                  <input type="hidden" name="utm_content" />
                  <input type="hidden" name="utm_id" />
                  <input type="hidden" name="ref" />
                  <input type="hidden" name="fbclid" />
                  <input type="hidden" name="gclid" />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-clinic-blue hover:bg-clinic-blue/90 text-white font-bold text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <span className="loader mr-2"></span>
                        Processando...
                      </span>
                    ) : 'AGENDAR AGORA'}
                  </Button>
                </form>
              </Form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
