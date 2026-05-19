import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Helmet } from 'react-helmet-async';
import {
    Workflow,
    Globe,
    Bot,
    Plug,
    Compass,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Shield,
    Clock
} from 'lucide-react';

const SERVICES = [
    {
        id: 'automation',
        icon: Workflow,
        title: 'Custom Automation Workflows',
        description: 'We design and implement tailored automation systems that eliminate repetitive tasks, reduce human error, and free your team to focus on high-value work.',
        features: [
            'Process analysis & optimization',
            'Multi-platform workflow integration',
            'Real-time monitoring & alerts',
            'Scalable architecture design'
        ],
        color: 'from-blue-500/10 to-cyan-500/10',
        iconColor: 'text-blue-600 dark:text-blue-400',
        image: '/workflow_automation.png'
    },
    {
        id: 'webdev',
        icon: Globe,
        title: 'Website & Web Application Development',
        description: 'From marketing websites to complex web applications, we build digital experiences that are fast, accessible, and designed for real users.',
        features: [
            'Responsive, mobile-first design',
            'Performance-optimized builds',
            'CMS & e-commerce solutions',
            'Progressive Web Apps (PWAs)'
        ],
        color: 'from-purple-500/10 to-pink-500/10',
        iconColor: 'text-purple-600 dark:text-purple-400',
        image: '/lead_generation.png'
    },
    {
        id: 'ai-solutions',
        icon: Bot,
        title: 'AI Solutions & Agents',
        description: 'We develop AI-powered tools including intelligent agents, content generation systems, video production automation, and custom machine learning solutions.',
        features: [
            'Conversational AI & chatbots',
            'Content & video generation',
            'Data analysis & insights',
            'Custom model training'
        ],
        color: 'from-green-500/10 to-emerald-500/10',
        iconColor: 'text-green-600 dark:text-green-400',
        image: '/chatbots_agents.png'
    },
    {
        id: 'integrations',
        icon: Plug,
        title: 'API & SaaS Integrations',
        description: 'Connect your existing tools seamlessly. We build custom integrations that make your software ecosystem work together as one unified system.',
        features: [
            'Third-party API integration',
            'Data synchronization',
            'Webhook & event handling',
            'Legacy system modernization'
        ],
        color: 'from-orange-500/10 to-yellow-500/10',
        iconColor: 'text-orange-600 dark:text-orange-400',
        image: '/whatsapp_automation.png'
    },
    {
        id: 'consulting',
        icon: Compass,
        title: 'Consulting & Solution Design',
        description: 'Not sure where to start? Our team provides strategic consulting to help you identify opportunities, design solutions, and plan implementation.',
        features: [
            'Technology strategy sessions',
            'Architecture planning',
            'Vendor selection guidance',
            'Implementation roadmaps'
        ],
        color: 'from-indigo-500/10 to-violet-500/10',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
        image: '/content_generation.png'
    }
];

const PROCESS_STEPS = [
    {
        step: '01',
        title: 'Discovery',
        description: 'We listen first. Understanding your challenges, goals, and constraints before proposing solutions.'
    },
    {
        step: '02',
        title: 'Design',
        description: 'We design systems that solve real problems — not theoretical ones. Every solution is tailored to your context.'
    },
    {
        step: '03',
        title: 'Build',
        description: 'We build with care. Clean code, documented systems, and architecture designed for long-term maintainability.'
    },
    {
        step: '04',
        title: 'Support',
        description: 'We stay with you. Ongoing support, training, and optimization to ensure lasting success.'
    }
];

export const Services: React.FC = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>AI & Automation Services | Custom Software Development | Makhija Quantum AI</title>
                <meta name="description" content="Enterprise AI consulting and custom software development services. Workflow automation, web application development, AI integration, and strategic consulting. Trusted by 50+ Indian enterprises." />
                <meta name="keywords" content="AI consulting services India, custom software development Mumbai, workflow automation services, enterprise AI integration, business process automation" />
            </Helmet>

            {/* Hero */}
            <Section bgColor="soft" className="py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 bg-brand-50 dark:bg-brand-900/50 px-4 py-2 rounded-full border border-brand-100 dark:border-brand-800">
                        Enterprise-Grade Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-900 dark:text-white mb-6 tracking-tight">
                        Your Vision.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Our Engineering Excellence.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        From concept to deployment in weeks, not months. We've helped enterprises save <strong className="text-brand-900 dark:text-white">₹2Cr+</strong> in operational costs through intelligent automation and custom AI solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to="/contact" className="h-14 px-8 text-lg rounded-full btn-glow">
                            Schedule Free Consultation <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Trust Indicators */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-brand-900/20 border border-gray-100 dark:border-brand-800">
                        <Sparkles className="text-brand-accent" size={24} />
                        <div>
                            <p className="font-semibold text-brand-900 dark:text-white">Human-First Design</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Built for real people</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-brand-900/20 border border-gray-100 dark:border-brand-800">
                        <Shield className="text-brand-accent" size={24} />
                        <div>
                            <p className="font-semibold text-brand-900 dark:text-white">Security by Default</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise-grade protection</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-brand-900/20 border border-gray-100 dark:border-brand-800">
                        <Clock className="text-brand-accent" size={24} />
                        <div>
                            <p className="font-semibold text-brand-900 dark:text-white">Long-Term Thinking</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Built to last, not to impress</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Services List */}
            <Section bgColor="soft">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">What We Offer</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Whether you need a complete system overhaul or a targeted solution, we approach every project with the same care.
                    </p>
                </div>

                <div className="space-y-24">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            className="group"
                        >
                            <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image Side */}
                                <div className="flex-1 w-full">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/10 dark:shadow-black/40 aspect-[4/3] lg:aspect-auto lg:h-[450px]">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                                        <service.icon size={28} className={service.iconColor} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-brand-900 dark:text-white mb-4 leading-tight">{service.title}</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{service.description}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-3 text-brand-800 dark:text-gray-200 font-medium">
                                                <CheckCircle size={20} className="text-brand-accent flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-10">
                                        <Button to="/contact" variant="ghost" className="p-0 text-brand-accent hover:bg-transparent hover:text-brand-secondary font-bold text-lg group/btn">
                                            Discuss this service <ArrowRight size={20} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Process */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">How We Work</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Every engagement follows a clear, collaborative process designed to deliver real results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROCESS_STEPS.map((step) => (
                        <div key={step.step} className="relative">
                            <div className="bg-white dark:bg-brand-900/20 p-6 rounded-2xl border border-gray-100 dark:border-brand-800 h-full">
                                <span className="text-4xl font-bold text-brand-100 dark:text-brand-800">{step.step}</span>
                                <h3 className="text-xl font-bold text-brand-900 dark:text-white mt-2 mb-3">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section bgColor="dark" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to discuss your project?</h2>
                    <p className="text-gray-300 mb-10 text-lg font-light">
                        Whether you have a clear vision or just a vague idea, we're here to help you figure it out. No pressure, no sales pitch — just a conversation.
                    </p>
                    <Button to="/contact" variant="light" className="h-14 px-10 text-lg rounded-full font-semibold">
                        Get in Touch
                    </Button>
                </div>
            </Section>
        </div>
    );
};
