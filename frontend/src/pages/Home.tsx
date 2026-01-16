import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { DeviceMockup } from '../components/DeviceMockup';
import { ArrowRight, Shield, Sparkles, TrendingUp, Users, Cpu, Radio, ChevronRight } from 'lucide-react';
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
                <title>Makhija Quantum AI | India's Leading AI Automation & Software Solutions Company</title>
                <meta name="description" content="Transform your business with enterprise-grade AI solutions. Makhija Quantum AI delivers intelligent automation, custom software development, and AI-powered tools trusted by businesses across India. Reduce costs by 40% with our proven AI systems." />
                <meta name="keywords" content="AI automation India, enterprise AI solutions, custom software development, business automation, AI consulting Mumbai, machine learning solutions, workflow automation, AI-powered software" />
                <meta property="og:title" content="Makhija Quantum AI - Enterprise AI & Automation Solutions" />
                <meta property="og:description" content="India's fastest-growing AI company. Transform operations with intelligent automation trusted by 50+ enterprises." />
            </Helmet>

            {/* Hero Section */}
            <div className="relative min-h-[85vh] flex items-center pt-20">
                {/* Stunning Animated Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Animated Gradient Base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-blue-50 dark:from-brand-950 dark:via-brand-950 dark:to-indigo-950"></div>

                    {/* Floating Orbs */}
                    <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-accent/20 to-brand-secondary/20 dark:from-brand-accent/30 dark:to-brand-secondary/30 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-purple-400/15 to-pink-400/15 dark:from-purple-500/25 dark:to-pink-500/25 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 dark:from-cyan-400/20 dark:to-blue-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

                    {/* Fade to page color */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-soft dark:to-brand-950"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">

                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-700 text-brand-800 dark:text-brand-200 text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
                            Trusted by 50+ Enterprises Across India
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-brand-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                            The AI Partner That<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-purple-600 gradient-text-animate">
                                Delivers Results.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                            We build enterprise-grade AI systems that actually work. Our clients report <strong className="text-brand-900 dark:text-white">40% cost reduction</strong> and <strong className="text-brand-900 dark:text-white">3x productivity gains</strong> within the first quarter. No buzzwords — just measurable outcomes.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button to="/products" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-brand-accent/20 hover:shadow-brand-accent/40 transition-all btn-glow">Explore Our Solutions</Button>
                            <Button to="/contact" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/50 dark:bg-brand-900/20 backdrop-blur-sm hover:bg-white dark:hover:bg-brand-800 border-gray-200 dark:border-brand-700 shine-hover">Schedule a Consultation</Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Core Insight / Vision with Image */}
            <Section bgColor="soft" className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        {/* Featured Product Preview */}
                        <DeviceMockup variant="browser" url="wordsage.in">
                            <div className="relative">
                                <img
                                    src="/wordsage.png"
                                    alt="WordSage - AI Writing Assistant"
                                    className="w-full h-auto"
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-brand-950 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-white/90 dark:bg-brand-900/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                        Featured: WordSage
                                    </span>
                                    <Link to="/products" className="text-xs font-semibold text-brand-accent hover:text-brand-secondary transition-colors flex items-center gap-1 bg-white/90 dark:bg-brand-900/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                        View All Products <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </DeviceMockup>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Why Industry Leaders Choose Us</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-6 leading-tight">
                            We Solve the Problems <span className="text-gray-400 dark:text-gray-500">Others Overlook.</span>
                        </h3>
                        <div className="prose dark:prose-invert text-lg text-gray-600 dark:text-gray-300 space-y-4">
                            <p>
                                <strong className="text-brand-900 dark:text-white">The hidden cost of fragmented tools:</strong> Your team loses 28% of their workweek switching between apps, searching for information, and doing manual busywork.
                            </p>
                            <p>
                                We've spent years studying how high-performing organizations actually work. The pattern is clear: <em>simplicity scales, complexity collapses.</em> Our AI systems are engineered to consolidate, automate, and amplify — never to add friction.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white dark:bg-brand-900/30 border border-gray-100 dark:border-brand-800 shadow-sm">
                                <Shield size={20} className="text-brand-secondary" />
                                <span className="font-semibold text-brand-900 dark:text-white">Enterprise-Grade Security</span>
                            </div>
                            <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-white dark:bg-brand-900/30 border border-gray-100 dark:border-brand-800 shadow-sm">
                                <Users size={20} className="text-brand-accent" />
                                <span className="font-semibold text-brand-900 dark:text-white">24/7 Dedicated Support</span>
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
                        <Link to="/products" key={prod.name} className="group relative bg-white dark:bg-brand-900/20 border border-gray-100 dark:border-brand-800 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-brand-900/5 dark:hover:shadow-black/40 block shine-hover">
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

            {/* Services Highlight */}
            <Section bgColor="soft">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Beyond Products</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-6">
                            We also build <span className="text-brand-accent">custom solutions</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            Whether you need a custom automation workflow, a complete web application, or an AI-powered system designed specifically for your business — we're here to help.
                        </p>
                        <div className="space-y-3 mb-8">
                            {[
                                'Custom automation workflows',
                                'Website & web application development',
                                'AI solutions & intelligent agents',
                                'API integrations & system architecture'
                            ].map((service) => (
                                <div key={service} className="flex items-center gap-3 text-brand-800 dark:text-gray-200">
                                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                                    <span className="font-medium">{service}</span>
                                </div>
                            ))}
                        </div>
                        <Button to="/services" variant="outline" className="rounded-full">
                            Explore Services <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-brand-900/30 p-6 rounded-2xl border border-gray-100 dark:border-brand-800 card-hover shine-hover">
                            <div className="text-3xl font-bold text-brand-accent mb-2">50+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
                        </div>
                        <div className="bg-white dark:bg-brand-900/30 p-6 rounded-2xl border border-gray-100 dark:border-brand-800 card-hover shine-hover">
                            <div className="text-3xl font-bold text-brand-secondary mb-2">98%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                        </div>
                        <div className="bg-white dark:bg-brand-900/30 p-6 rounded-2xl border border-gray-100 dark:border-brand-800 card-hover shine-hover">
                            <div className="text-3xl font-bold text-brand-accent mb-2">5+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Products Launched</div>
                        </div>
                        <div className="bg-white dark:bg-brand-900/30 p-6 rounded-2xl border border-gray-100 dark:border-brand-800 card-hover shine-hover">
                            <div className="text-3xl font-bold text-brand-secondary mb-2">24/7</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">What People Say</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">Trusted by Teams</h2>
                    <p className="text-gray-600 dark:text-gray-300">Real feedback from real users building real things.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            quote: "Finally, tools that don't demand my attention every five minutes. The automation has saved our team hours each week.",
                            name: "Priya S.",
                            role: "Operations Manager",
                            company: "E-commerce Startup"
                        },
                        {
                            quote: "We approached them with a complex workflow problem and they delivered a solution that actually works. No over-engineering, just what we needed.",
                            name: "Rahul M.",
                            role: "CTO",
                            company: "Logistics Company"
                        },
                        {
                            quote: "Their approach is refreshingly different — they listen first, understand the problem, and then build. Not the other way around.",
                            name: "Anita K.",
                            role: "Founder",
                            company: "Digital Agency"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white dark:bg-brand-900/20 p-6 rounded-2xl border border-gray-100 dark:border-brand-800 card-hover">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-bold text-brand-900 dark:text-white">{testimonial.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                            </div>
                        </div>
                    ))}
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
                        <p className="text-gray-400 leading-relaxed text-sm">Good AI doesn't ask for attention. It earns trust by being useful. Our products evolve as work evolves.</p>
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
