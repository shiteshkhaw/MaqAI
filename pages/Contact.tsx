import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Mail, MapPin, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact | Makhija Quantum AI</title>
        <meta name="description" content="Get in touch with our team in Mumbai. Discuss enterprise solutions or join our engineering team." />
      </Helmet>

      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-900 dark:text-white mb-6">Let’s shape the future.</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed">
              Whether you are an enterprise looking for calm efficiency or an engineer ready to build meaningful tools, we want to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-brand-900/30 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-brand-800">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-800 rounded-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-900 group-hover:text-white transition-colors shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 dark:text-white mb-1 text-base">Email Us</h3>
                  <span className="text-base text-brand-600 dark:text-brand-200 break-all">Honeymakhijacorporation@gmail.com</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-brand-900/30 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-brand-800">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-800 rounded-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-900 group-hover:text-white transition-colors shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 dark:text-white mb-1 text-base">Headquarters</h3>
                  <span className="text-base text-brand-600 dark:text-brand-200">Mumbai, Maharashtra</span>
                  <p className="text-gray-400 text-xs mt-1">Global Operations</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-brand-900/30 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-brand-800">
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-800 rounded-lg flex items-center justify-center text-brand-accent group-hover:bg-brand-900 group-hover:text-white transition-colors shadow-sm">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900 dark:text-white mb-1 text-base">Company Size</h3>
                  <span className="text-base text-brand-600 dark:text-brand-200">1,001–5,000 Employees (Aspirational)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl shadow-xl shadow-brand-900/5 dark:shadow-black/50 border border-gray-100 dark:border-brand-800 backdrop-blur-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-4">Message Received</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-base">Our team will review your inquiry and get back to you shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-brand-900 dark:text-white mb-2">First Name</label>
                    <input 
                      id="firstName"
                      required
                      type="text" 
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-brand-950 border border-gray-200 dark:border-brand-800 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-brand-900 dark:text-white mb-2">Last Name</label>
                    <input 
                      id="lastName"
                      required
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-brand-950 border border-gray-200 dark:border-brand-800 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-900 dark:text-white mb-2">Work Email</label>
                  <input 
                    id="email"
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-brand-950 border border-gray-200 dark:border-brand-800 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder-gray-400"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-900 dark:text-white mb-2">How can we help?</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-brand-950 border border-gray-200 dark:border-brand-800 text-brand-900 dark:text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none placeholder-gray-400"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="w-full py-4 text-lg rounded-xl font-bold">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};