import React from 'react';
import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Lightbulb, Workflow, Zap, Code } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us | Makhija Quantum AI</title>
        <meta name="description" content="We take a human-first, ethical approach to AI. Practical, reliable, and calm by design. Read our story and methodology." />
      </Helmet>

      <Section bgColor="soft" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 uppercase tracking-widest text-brand-accent font-bold text-sm bg-brand-50 dark:bg-brand-900/50 inline-block px-4 py-2 rounded-full border border-brand-100 dark:border-brand-800"
          >
            Since 2025 • Mumbai, India
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-brand-900 dark:text-white mb-6 tracking-tight"
          >
            Human-First,<br/> Ethical Approach.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-brand-600 dark:text-gray-300 leading-relaxed font-light"
          >
            We don't build technology just to impress. We build it to support people.
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/20 dark:shadow-black/60">
                <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
                    alt="Team collaboration in modern office" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-mono text-sm opacity-80 mb-2">Our Philosophy</p>
                    <p className="text-xl font-bold">Good AI doesn’t ask for attention. It earns trust by being useful.</p>
                </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-4">Our Core Beliefs</h2>
              <div className="prose dark:prose-invert text-lg text-gray-600 dark:text-gray-300 mb-6">
                  <p>
                    We take a human-first, ethical approach to AI. That means no unnecessary complexity, no dark patterns, and no replacing people where support is enough.
                  </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Practical application over theoretical hype",
                  "Reliable systems that don't break trust",
                  "Calm by design — quiet efficiency",
                  "Built for long-term sustainable use"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-brand-900 dark:text-white font-medium">
                    <CheckCircle className="text-brand-accent flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
               <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-4">The Origin Story</h3>
               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 Founded in Mumbai in 2025, Makhija Quantum AI began with a simple observation: modern work tools were demanding more attention than the work itself. We set out to reverse this trend. What started as a small team of engineers and designers tired of "noisy" software has grown into a mission to reclaim mental space for professionals worldwide.
               </p>
            </div>
            
            <div className="p-6 bg-brand-50 dark:bg-brand-900/30 rounded-xl border-l-4 border-brand-accent">
                <p className="text-lg text-brand-800 dark:text-brand-100 font-medium italic">
                "Our products continue to evolve as work evolves — always guided by how people actually use them, not how we think they should."
                </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="soft">
         <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-4">Our Methodology</h2>
            <p className="text-gray-600 dark:text-gray-300">How we turn chaos into calm systems.</p>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-brand-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-800 relative overflow-hidden group hover:-translate-y-1 transition-transform">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lightbulb size={100} />
               </div>
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb size={24} />
               </div>
               <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">1. Observe</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We don't start with code. We start by watching how people actually work. We identify the friction points, the repetitive clicks, and the moments of frustration.
               </p>
            </div>

            <div className="bg-white dark:bg-brand-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-800 relative overflow-hidden group hover:-translate-y-1 transition-transform">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Workflow size={100} />
               </div>
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Workflow size={24} />
               </div>
               <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">2. Simplify</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Before automating, we simplify. We strip away the non-essentials. A complex process automated is still a complex process. We aim for elegance.
               </p>
            </div>

            <div className="bg-white dark:bg-brand-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-800 relative overflow-hidden group hover:-translate-y-1 transition-transform">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Code size={100} />
               </div>
               <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap size={24} />
               </div>
               <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">3. Automate</h3>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Only then do we apply AI. We build invisible layers of intelligence that handle the heavy lifting, surfacing only what requires human judgment.
               </p>
            </div>
         </div>
      </Section>
    </div>
  );
};