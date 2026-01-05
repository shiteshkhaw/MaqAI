import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { ArrowRight, Zap, Shield, Sparkles, TrendingUp, Users, Cpu, Radio, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Makhija Quantum AI | Future-Ready. User-Friendly.</title>
        <meta name="description" content="AI that simplifies work — not complicates it. We build future-ready, user-friendly AI tools and systems that quietly remove friction from everyday work." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative min-h-[85vh] flex items-center pt-20">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-ad7117a3943b?q=80&w=2000&auto=format&fit=crop" 
            alt="AI Potential Background" 
            className="w-full h-full object-cover opacity-[0.05] dark:opacity-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-brand-950/80 dark:to-brand-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-700 text-brand-800 dark:text-brand-200 text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
              Future-Ready. User-Friendly.
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-brand-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              AI that simplifies work —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-purple-600 animate-gradient-x">
                not complicates it.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              We build future-ready, user-friendly AI tools and systems that quietly remove friction from everyday work. 
              No hype. No complexity. Just technology designed to fit into real lives and real businesses.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/products" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-brand-accent/20 hover:shadow-brand-accent/30 transition-all">Explore the Ecosystem</Button>
              <Button to="/contact" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/50 dark:bg-brand-900/20 backdrop-blur-sm hover:bg-white dark:hover:bg-brand-800 border-gray-200 dark:border-brand-700">Talk to an Expert</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Core Insight / Vision with Image */}
      <Section bgColor="soft" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 dark:shadow-black/50 border border-white/20 h-[450px]">
               <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply"></div>
               <img 
                 src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop" 
                 alt="Neural Network Visualization" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <p className="text-white text-sm font-mono opacity-80">Calm by Design</p>
               </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Why We Exist</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-6 leading-tight">
              Technology should support humans — <span className="text-gray-400 dark:text-gray-500">not demand attention.</span>
            </h3>
            <div className="prose dark:prose-invert text-lg text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Most people don’t struggle because they lack skill or ambition. They struggle because their work is scattered across too many tools, too many tabs, and too many manual processes.
              </p>
              <p>
                AI was meant to help. But too often, it adds more noise. We exist to change that.
                We believe AI should reduce mental load, not increase it.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
               <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white dark:bg-brand-900/30 border border-gray-100 dark:border-brand-800 shadow-sm">
                  <Shield size={20} className="text-brand-secondary" /> 
                  <span className="font-semibold text-brand-900 dark:text-white">Reduce Mental Load</span>
               </div>
               <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white dark:bg-brand-900/30 border border-gray-100 dark:border-brand-800 shadow-sm">
                  <Users size={20} className="text-brand-accent" /> 
                  <span className="font-semibold text-brand-900 dark:text-white">Intuitive Systems</span>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ecosystem Preview */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Our Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 dark:text-white mb-4">What We Build</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We design an ecosystem of AI tools that can be used independently or together as complete systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: 'Insoch', 
                desc: 'A social media platform where posts naturally turn into live audio rooms — enabling real discussions.', 
                icon: Radio,
                bg: 'from-purple-500/10 to-blue-500/10',
                color: 'text-purple-600 dark:text-purple-400'
              },
              { 
                name: 'Taskos', 
                desc: 'AI productivity and planning tool that helps individuals and teams stay organised without mental clutter.', 
                icon: Sparkles,
                bg: 'from-orange-500/10 to-red-500/10',
                color: 'text-orange-600 dark:text-orange-400'
              },
              { 
                name: 'Accula', 
                desc: 'One-stop business system to track finances, inventory, invoices, and operational work.', 
                icon: TrendingUp,
                bg: 'from-green-500/10 to-teal-500/10',
                color: 'text-green-600 dark:text-green-400'
              },
            ].map((prod) => (
              <Link to="/products" key={prod.name} className="group relative bg-white dark:bg-brand-900/20 border border-gray-100 dark:border-brand-800 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-brand-900/5 dark:hover:shadow-black/40 block">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prod.bg} flex items-center justify-center mb-4`}>
                  <prod.icon size={24} className={prod.color} />
                </div>
                <h4 className="text-lg font-bold text-brand-900 dark:text-white mb-2">{prod.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm">{prod.desc}</p>
                <div className="flex items-center text-sm font-bold text-brand-900 dark:text-white group-hover:gap-2 transition-all cursor-pointer">
                  Learn more <ChevronRight size={16} className="ml-1 text-brand-accent" />
                </div>
              </Link>
            ))}
        </div>
        
        <div className="mt-10 text-center">
            <Button to="/products" variant="ghost" className="text-base text-brand-700 dark:text-gray-300 hover:bg-transparent hover:text-brand-accent">
              View full ecosystem <ArrowRight size={18} className="ml-2" />
            </Button>
        </div>
      </Section>

      {/* Philosophy / Long Term */}
      <Section bgColor="dark" className="relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for the Long Term</h2>
          <p className="text-xl text-gray-300 font-light">
            Makhija Quantum AI is built with long-term thinking at its core. We focus on systems over one-off features, and usefulness over buzzwords.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
             <Cpu className="text-brand-secondary mb-4" size={28} />
             <h3 className="text-lg font-bold text-white mb-2">Practical & Reliable</h3>
             <p className="text-gray-400 leading-relaxed text-sm">We don't replace people where support is enough. We build technology that is practical, reliable, and calm by design.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
             <Shield className="text-brand-secondary mb-4" size={28} />
             <h3 className="text-lg font-bold text-white mb-2">Ethical Approach</h3>
             <p className="text-gray-400 leading-relaxed text-sm">No unnecessary complexity. No dark patterns. No technology built only to impress. We take a human-first approach.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
             <Users className="text-brand-secondary mb-4" size={28} />
             <h3 className="text-lg font-bold text-white mb-2">Earned Trust</h3>
             <p className="text-gray-400 leading-relaxed text-sm">Good AI doesn’t ask for attention. It earns trust by being useful. Our products evolve as work evolves.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center py-20">
        <h2 className="text-4xl md:text-6xl font-bold text-brand-900 dark:text-white mb-8 tracking-tight">
          Ready to reduce <span className="text-brand-accent">friction</span>?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you're an individual trying to stay organised, or a team seeking calmer systems — our tools are designed to fit into your workflow, not disrupt it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/products" className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-brand-900/20 dark:shadow-brand-accent/20">
            See the Products
          </Button>
        </div>
      </Section>
    </div>
  );
};