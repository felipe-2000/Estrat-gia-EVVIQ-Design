/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { MarketAnomalyDiagram, ContentPillarsDiagram, TimelineDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, CheckCircle, FileText, Instagram, DollarSign } from 'lucide-react';

const StrategyCard = ({ title, subtitle, items }: { title: string, subtitle: string, items: string[] }) => {
  return (
    <div className="flex flex-col p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full h-full">
      <h3 className="font-serif text-2xl text-stone-900 mb-2">{title}</h3>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest mb-6">{subtitle}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                <CheckCircle size={16} className="text-nobel-gold mt-0.5 shrink-0" />
                <span>{item}</span>
            </li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-stone-900 rounded-sm flex items-center justify-center text-nobel-gold font-serif font-bold text-xl shadow-sm">E</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              EVVIQ <span className="font-normal text-stone-500">STRATEGY</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#diagnostico" onClick={scrollToSection('diagnostico')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">O Diagnóstico</a>
            <a href="#solucao" onClick={scrollToSection('solucao')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">A Marca</a>
            <a href="#cronograma" onClick={scrollToSection('cronograma')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Cronograma</a>
            <a href="#investimento" onClick={scrollToSection('investimento')} className="px-5 py-2 bg-stone-900 text-white rounded-sm hover:bg-stone-800 transition-colors shadow-sm cursor-pointer">
              Investimento
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#diagnostico" onClick={scrollToSection('diagnostico')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">O Diagnóstico</a>
            <a href="#solucao" onClick={scrollToSection('solucao')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">A Marca</a>
            <a href="#cronograma" onClick={scrollToSection('cronograma')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Cronograma</a>
            <a href="#investimento" onClick={scrollToSection('investimento')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Investimento</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.85)_0%,rgba(249,248,244,0.5)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/50">
            Planejamento Estratégico • 2025
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 text-stone-900 drop-shadow-sm">
            De Marcenaria <br/><span className="italic font-normal text-stone-500 block mt-2">a Marca de Autor</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            Competência técnica que você já tem + Marca de desejo que vamos construir = EVVIQ como referência de criação autoral no litoral norte de SP.
          </p>
          
          <div className="flex justify-center">
             <a href="#diagnostico" onClick={scrollToSection('diagnostico')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>CONHECER ESTRATÉGIA</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: Diagnosis */}
        <section id="diagnostico" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">O Problema</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Diagnóstico Atual</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Você tem uma <strong>anomalia de mercado</strong>: entrega 4x mais rápido e custa significativamente menos que marcas como Florence.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Mas sua comunicação atual é genérica. Falam 7x mais de "design aspiracional" do que de "vida real e técnica". O público não está sentindo o valor do seu ouro escondido.
              </p>
            </div>
            <div className="md:col-span-7">
               <MarketAnomalyDiagram />
            </div>
          </div>
        </section>

        {/* Section 2: The Solution/Archetype */}
        <section id="solucao" className="py-24 bg-stone-50 border-t border-stone-100">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                    A Solução
                </div>
                <h2 className="font-serif text-4xl md:text-6xl mb-8 text-stone-900">Móveis de Autor</h2>
                <p className="text-xl text-stone-600 mb-12 leading-relaxed">
                    EVVIQ vai se tornar a "Ralph Lauren" do design de interiores com a velocidade da "Zara".
                    <br/><strong>Posicionamento Híbrido:</strong> Luxo na exclusividade + Performance na entrega.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                     <div className="bg-white p-8 shadow-sm border border-stone-200">
                        <h3 className="font-serif text-2xl mb-4">O Arquétipo: Criador</h3>
                        <p className="text-stone-600 mb-4">Transforma visão em realidade tangível. Domínio técnico + alma artística.</p>
                        <div className="text-xs font-bold uppercase text-stone-400">Exemplos: Apple, Lego</div>
                     </div>
                     <div className="bg-stone-900 text-white p-8 shadow-sm border border-stone-800">
                        <h3 className="font-serif text-2xl mb-4 text-nobel-gold">Território Mental</h3>
                        <p className="text-stone-300 mb-4">"A única marcenaria de autor que cria obras exclusivas com velocidade de produção seriada."</p>
                     </div>
                </div>
            </div>
        </section>

        {/* Section 3: Communication Pillars */}
        <section className="py-24 bg-white text-stone-800">
            <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Estratégia de Conteúdo</div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Os 3 Pilares</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            Vamos parar de falar frases genéricas de "santuário". Vamos falar de técnica, numeração de obras e prova social.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-nobel-gold text-white flex items-center justify-center font-bold">1</span>
                                <span><strong>Autoria:</strong> Numerar projetos ("OBRA #47").</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center font-bold">2</span>
                                <span><strong>Técnica Invisível:</strong> O motivo de durar 20 anos.</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center font-bold">3</span>
                                <span><strong>Confiança:</strong> Resultados e timeline.</span>
                            </li>
                        </ul>
                     </div>
                     <div>
                        <ContentPillarsDiagram />
                     </div>
                </div>
            </div>
        </section>

        {/* Section 4: Implementation & Impact */}
        <section id="cronograma" className="py-24 bg-[#F9F8F4] border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative min-h-[400px]">
                    <div className="absolute inset-0 rounded-xl overflow-hidden border border-stone-200 shadow-inner bg-white">
                        <QuantumComputerScene />
                         <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-widest text-stone-900">Visualização Estratégica</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <TimelineDiagram />
                    
                    <div className="p-6 bg-white border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold shadow-sm mt-4">
                        <h4 className="font-bold text-stone-900 mb-2">O Post Manifesto</h4>
                        <p className="text-stone-600 text-sm italic mb-2">
                            "Não somos mais uma marcenaria. Somos criadores de ambientes que carregam assinatura. Cada projeto é uma obra única — seu nome, sua história, nossa autoria."
                        </p>
                        <div className="flex items-center gap-2 text-xs text-nobel-gold font-bold uppercase mt-2">
                            <Instagram size={12}/> Lançamento Semana 3
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* Section 5: Offer/Investment */}
        <section id="investimento" className="py-24 bg-stone-900 text-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-nobel-gold uppercase">PROPOSTA COMERCIAL</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-white">Escopo & Investimento</h2>
                    <p className="max-w-2xl mx-auto text-stone-400">Uma parceria completa: Nós somos o cérebro e a produção, você é a operação.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <StrategyCard 
                        title="Agência Entrega" 
                        subtitle="Produção Completa"
                        items={[
                            "Estratégia Completa",
                            "16 Posts/mês finalizados",
                            "4 Reels/mês (Roteiro + Edição)",
                            "Conceitos de Stories",
                            "Reunião mensal de alinhamento"
                        ]}
                     />
                      <div className="flex flex-col items-center justify-center p-8 bg-nobel-gold rounded-xl shadow-lg transform md:-translate-y-4">
                        <div className="text-stone-900 font-bold uppercase tracking-widest mb-4">Investimento Mensal</div>
                        <div className="text-6xl font-serif text-white mb-2">R$ 1k</div>
                        <div className="text-stone-900 font-medium text-sm mb-8">Contrato recorrente</div>
                        <button className="w-full py-3 bg-stone-900 text-white font-bold rounded shadow-lg hover:bg-black transition-colors">
                            Aprovar Início
                        </button>
                        <div className="mt-4 text-xs text-stone-800 text-center">
                            Implementação em 2 semanas
                        </div>
                     </div>
                     <StrategyCard 
                        title="Cliente Fornece" 
                        subtitle="Insumos & Operação"
                        items={[
                            "Material bruto (fotos/vídeos)",
                            "Postagem dos conteúdos",
                            "Relacionamento (DMs)",
                            "Gravação de Stories (com nosso guia)"
                        ]}
                     />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
                <div className="text-white font-serif font-bold text-2xl mb-4">EVVIQ Design</div>
                <p className="text-sm max-w-xs mb-4">Estratégia de reposicionamento para transformar marcenaria técnica em marca de desejo autoral.</p>
                <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-nobel-gold hover:text-stone-900 transition-colors cursor-pointer"><Instagram size={16} /></span>
                    <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:bg-nobel-gold hover:text-stone-900 transition-colors cursor-pointer"><FileText size={16} /></span>
                </div>
            </div>
            <div className="text-right">
                <h4 className="text-white font-serif mb-4">Contato</h4>
                <p className="text-sm mb-2">Bertioga | Riviera de São Lourenço</p>
                <p className="text-sm mb-2">(11) 94167-4875</p>
                <p className="text-sm text-nobel-gold mt-4">Diretor Criativo IA • 19/11/2025</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;