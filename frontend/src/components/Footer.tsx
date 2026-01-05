import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-brand-900 text-brand-soft pt-12 pb-8 border-t border-brand-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <img src="/logo.png" alt="Makhija Quantum AI" className="w-8 h-8 object-contain" />
                            <span className="font-bold text-lg tracking-tight text-white">
                                Makhija Quantum AI
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Future-Ready. User-Friendly. <br />
                            Reimagining industries with empathy and precision.
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                            <MapPin size={16} />
                            <span>Mumbai, Maharashtra</span>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Twitter size={20} /></a>
                            <a href="https://github.com/Makhija-Quantum-AI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Github size={20} /></a>
                            <a href="https://in.linkedin.com/company/makhija-quantum-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Ecosystem</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/products" className="hover:text-brand-accent transition-colors">PilotMail</Link></li>
                            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Taskos</Link></li>
                            <li><Link to="/products" className="hover:text-brand-accent transition-colors">WordSage</Link></li>
                            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Accula</Link></li>
                            <li><Link to="/products" className="hover:text-brand-accent transition-colors">Insoch</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-brand-accent transition-colors">Our Story</Link></li>
                            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
                            <li><Link to="/insights" className="hover:text-brand-accent transition-colors">Insights</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Trust & Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/security" className="hover:text-brand-accent transition-colors">Security Center</Link></li>
                            <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {year} Makhija Quantum AI. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 font-medium">Built in Mumbai for the World.</p>
                </div>
            </div>
        </footer>
    );
};
