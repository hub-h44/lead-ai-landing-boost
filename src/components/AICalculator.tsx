
'use client'

import React, { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"

export function AICalculator() {
  const [packageValue, setPackageValue] = useState(600)
  const [leadsCount, setLeadsCount] = useState(200)
  const [iaRevenue, setIaRevenue] = useState(0)
  const [humanRevenue, setHumanRevenue] = useState(0)
  const [difference, setDifference] = useState(0)

  const formatCurrency = (value: number) => {
    return 'R$ ' + value.toLocaleString('pt-BR', {maximumFractionDigits: 0});
  };

  const calculateResults = () => {
    // Calculate conversions
    const iaConversion = Math.round(leadsCount * 0.4);
    const humanConversion = Math.round(leadsCount * 0.15);
    
    // Calculate revenue
    const iaRev = iaConversion * packageValue;
    const humanRev = humanConversion * packageValue;
    const diff = iaRev - humanRev;
    
    setIaRevenue(iaRev);
    setHumanRevenue(humanRev);
    setDifference(diff);
  };

  useEffect(() => {
    calculateResults();
  }, [packageValue, leadsCount]);

  return (
    <section className="bg-clinic-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="calculator-container bg-white rounded-2xl p-8 md:p-10 shadow-xl border-t-4 border-clinic-blue relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-clinic-blue text-center mb-8">
              Potencial de Conversão com IA
            </h2>
            
            <div className="result-highlight text-center text-xl md:text-2xl p-5 bg-gradient-to-r from-clinic-blue/10 to-transparent border-l-4 border-clinic-gold rounded-lg mb-10">
              Com <span className="font-bold">{leadsCount}</span> leads/mês, você ganha <span className="font-bold text-clinic-gold">{formatCurrency(difference)}</span> a mais!
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-semibold">Valor médio do pacote de consultas:</span>
                <span className="text-clinic-gold font-bold">{formatCurrency(packageValue)}</span>
              </div>
              <input 
                type="range" 
                min="200" 
                max="5000" 
                value={packageValue} 
                step="50"
                onChange={(e) => setPackageValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer calculator-slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>R$ 200</span>
                <span>R$ 5.000</span>
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex justify-between mb-3">
                <span className="font-semibold">Número de leads/mês:</span>
                <span className="text-clinic-gold font-bold">{leadsCount}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="1000" 
                value={leadsCount} 
                step="10"
                onChange={(e) => setLeadsCount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer calculator-slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>50 leads</span>
                <span>1.000 leads</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="option-ia bg-gradient-to-br from-clinic-blue/5 to-white p-6 rounded-xl border border-clinic-blue/20 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 relative">
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-clinic-blue to-clinic-purple"></div>
                <h3 className="font-bold text-xl text-clinic-blue mb-4">IA</h3>
                <div className="text-4xl font-bold text-clinic-blue mb-4">40%</div>
                <div className="text-gray-600 mb-2">Conversão com IA</div>
                <div className="text-2xl font-bold text-clinic-gold">{formatCurrency(iaRevenue)}</div>
              </div>
              
              <div className="option-human bg-gradient-to-br from-clinic-green/5 to-white p-6 rounded-xl border border-clinic-green/20 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 relative">
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-clinic-green to-clinic-green/70"></div>
                <h3 className="font-bold text-xl text-clinic-green mb-4">Humano</h3>
                <div className="text-4xl font-bold text-clinic-green mb-4">15%</div>
                <div className="text-gray-600 mb-2">Conversão humana</div>
                <div className="text-2xl font-bold text-clinic-gold">{formatCurrency(humanRevenue)}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
