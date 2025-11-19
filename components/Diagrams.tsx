/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, PenTool, ShieldCheck, Eye } from 'lucide-react';

// --- MARKET ANOMALY CHART ---
export const MarketAnomalyDiagram: React.FC = () => {
  return (
    <div className="flex flex-col p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-2 text-stone-800">O Ouro Escondido</h3>
      <p className="text-sm text-stone-500 mb-8 max-w-md">
        EVVIQ possui uma vantagem competitiva técnica massiva que não está sendo comunicada.
      </p>
      
      <div className="space-y-8">
        {/* Time Comparison */}
        <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">
                <span>Tempo de Entrega</span>
            </div>
            <div className="relative h-12 bg-stone-100 rounded-full overflow-hidden flex items-center">
                {/* Competitor */}
                <div className="absolute inset-0 w-full bg-stone-200 flex items-center justify-end px-4 text-stone-500 text-xs font-medium">
                    Concorrência (6 Meses)
                </div>
                {/* EVVIQ */}
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-nobel-gold relative z-10 flex items-center px-4 text-white font-bold whitespace-nowrap shadow-md"
                >
                    EVVIQ (72 Dias)
                </motion.div>
            </div>
        </div>

        {/* Cost Benefit */}
        <div>
             <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">
                <span>Economia por Projeto</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex-1 h-24 bg-stone-100 rounded-lg flex flex-col items-center justify-center border border-dashed border-stone-300">
                    <span className="text-2xl font-serif text-stone-400">Padrão</span>
                    <span className="text-xs text-stone-400 uppercase">Custo Inflado</span>
                </div>
                <div className="text-stone-400">→</div>
                <div className="flex-1 h-24 bg-stone-900 rounded-lg flex flex-col items-center justify-center text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-500 text-[10px] font-bold px-2 py-1">SAVE</div>
                    <span className="text-2xl font-serif text-nobel-gold">R$ 150k</span>
                    <span className="text-xs text-stone-400 uppercase">Economia Real</span>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-3 gap-4 text-center">
          <div>
              <div className="text-2xl font-bold text-stone-900">417</div>
              <div className="text-[10px] uppercase tracking-wider text-stone-500">Posts Analisados</div>
          </div>
          <div>
              <div className="text-2xl font-bold text-stone-900">4.6%</div>
              <div className="text-[10px] uppercase tracking-wider text-stone-500">Engajamento Atual</div>
          </div>
           <div>
              <div className="text-2xl font-bold text-stone-900">56%</div>
              <div className="text-[10px] uppercase tracking-wider text-stone-500">Público Masc.</div>
          </div>
      </div>
    </div>
  );
};

// --- CONTENT PILLARS ---
export const ContentPillarsDiagram: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
        title: "Autoria (50%)",
        icon: <PenTool size={24} />,
        desc: "EVVIQ como criadora, não executora. Cada projeto vira uma OBRA numerada.",
        tagline: "OBRA #47 — Assinatura EVVIQ",
        color: "bg-stone-900 text-white"
    },
    {
        title: "Técnica (30%)",
        icon: <Eye size={24} />,
        desc: "Competência invisível. Close-ups de dobradiças, sistemas, o 'como fazemos'.",
        tagline: "Dobradiça Blum 100 mil ciclos",
        color: "bg-stone-100 text-stone-900"
    },
    {
        title: "Confiança (20%)",
        icon: <ShieldCheck size={24} />,
        desc: "Prova social irrefutável. Timeline de 72 dias, depoimentos e economia.",
        tagline: "Entregue em 72 dias exatos",
        color: "bg-nobel-gold text-white"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <div className="flex flex-col gap-2 w-full md:w-1/3">
          {pillars.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePillar(i)}
                className={`p-4 text-left rounded-lg transition-all duration-300 border ${activePillar === i ? 'bg-white border-nobel-gold shadow-md scale-105' : 'bg-transparent border-transparent hover:bg-stone-200/50'}`}
              >
                  <div className="flex items-center gap-3 mb-2">
                      <span className={activePillar === i ? 'text-nobel-gold' : 'text-stone-400'}>{p.icon}</span>
                      <h4 className="font-bold uppercase tracking-wide text-xs">{p.title}</h4>
                  </div>
              </button>
          ))}
      </div>
      
      <div className="flex-1 relative min-h-[200px] bg-white rounded-xl p-8 border border-stone-200 flex flex-col justify-center items-center text-center shadow-inner">
            <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="inline-block mb-4 p-3 rounded-full bg-stone-50 text-stone-900 border border-stone-200">
                    {pillars[activePillar].icon}
                </div>
                <h3 className="font-serif text-2xl text-stone-900 mb-4">{pillars[activePillar].tagline}</h3>
                <p className="text-stone-600 leading-relaxed">
                    {pillars[activePillar].desc}
                </p>
            </motion.div>
      </div>
    </div>
  );
};

// --- TIMELINE ---
export const TimelineDiagram: React.FC = () => {
    return (
        <div className="p-8 bg-stone-900 text-stone-100 rounded-xl my-8 border border-stone-800 shadow-lg">
            <h3 className="font-serif text-xl mb-6 text-nobel-gold">Cronograma 90 Dias</h3>
            <div className="relative border-l border-stone-700 ml-4 space-y-8">
                {[
                    { title: "Mês 1: Fundação", desc: "Post Manifesto + 4 obras numeradas + Depoimentos." },
                    { title: "Mês 2: Diferenciação", desc: "Comparativos técnicos + Timeline 72 dias + Bastidores." },
                    { title: "Mês 3: Consolidação", desc: "Obras icônicas + Finger×EVVIQ + Retrospectiva." }
                ].map((item, i) => (
                    <div key={i} className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-nobel-gold"></div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-stone-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 p-4 bg-stone-800 rounded border border-stone-700 flex items-center gap-4">
                <TrendingUp className="text-green-500" size={24} />
                <div className="text-sm">
                    <span className="block text-white font-bold">Objetivo Principal</span>
                    <span className="text-stone-400">Reposicionar percepção de valor de "Marceneiro" para "Autor".</span>
                </div>
            </div>
        </div>
    )
}