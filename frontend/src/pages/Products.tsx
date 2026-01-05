import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { DeviceMockup } from '../components/DeviceMockup';
import { AppPreview } from '../components/AppPreview';
import { Mail, ListTodo, PenTool, TrendingUp, CheckCircle, Radio, ArrowRight, User, Users, Building, ExternalLink } from 'lucide-react';
import { Product, IconType } from '../types';
import { Helmet } from 'react-helmet-async';

const PRODUCTS: Product[] = [
    {
        id: 'insoch',
        name: 'Insoch',
        tagline: 'Audio-Led Social Engagement',
        description: 'A social media platform where posts naturally turn into live audio rooms — enabling real discussions and community building instead of one-way broadcasting.',
        features: ['Live audio rooms', 'Real discussions', 'Community building', 'Natural interaction'],
        icon: 'audio',
        status: 'Live',
        link: 'https://insoch.in/#/landing',
        image: '/insoch.png'
    },
    {
        id: 'pilotmail',
        name: 'PilotMail',
        tagline: 'AI-Powered Email Automation',
        description: 'An AI-powered email automation tool that helps entrepreneurs, businesses, influencers, and support teams manage communication with speed, accuracy, and professionalism — without replacing the human behind it.',
        features: ['Speed & Accuracy', 'Professionalism', 'Human-centric', 'Support management'],
        icon: 'mail',
        status: 'Live',
        link: 'https://pilotmail.in/',
        image: '/pilotmail.png'
    },
    {
        id: 'taskos',
        name: 'Taskos',
        tagline: 'Productivity Without Clutter',
        description: 'An AI productivity and planning tool that helps individuals and teams track tasks, plan their day, and stay organised without mental clutter.',
        features: ['Track tasks', 'Plan your day', 'No mental clutter', 'Team organisation'],
        icon: 'check',
        status: 'Live'
    },
    {
        id: 'wordsage',
        name: 'WordSage',
        tagline: 'Intelligent Writing Assistant',
        description: 'An AI writing assistant that improves grammar, refines tone, drafts content, and helps people communicate clearly while preserving their natural voice.',
        features: ['Improve grammar', 'Refine tone', 'Draft content', 'Preserve natural voice'],
        icon: 'edit',
        status: 'Live',
        link: 'https://wordsage.in/',
        image: '/wordsage.png'
    },
    {
        id: 'accula',
        name: 'Accula',
        tagline: 'One-Stop Business System',
        description: 'A one-stop business system to track finances, inventory, invoices, and operational work — built to bring clarity to everyday business management.',
        features: ['Track finances', 'Inventory & Invoices', 'Operational clarity', 'Business management'],
        icon: 'chart',
        status: 'Live',
        link: 'https://accula.in/',
        image: '/accula.png'
    }
];

const IconMap: Record<IconType, React.ElementType> = {
    mail: Mail,
    check: ListTodo,
    edit: PenTool,
    chart: TrendingUp,
    audio: Radio,
    shield: CheckCircle
};

export const Products: React.FC = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>AI Products & Solutions | Makhija Quantum AI Software Suite</title>
                <meta name="description" content="Explore our integrated AI product ecosystem: WordSage writing assistant, PilotMail email automation, Insoch social platform, Accula business management. Enterprise-ready tools trusted by 50+ companies." />
                <meta name="keywords" content="AI writing assistant, email automation software, business management software, AI productivity tools, workflow automation software India" />
            </Helmet>

            <Section bgColor="dark" className="py-16 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-brand-900/90 dark:bg-black/80"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        The Integrated AI Ecosystem
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                        Five AI-powered products. One seamless ecosystem.<br />
                        Each tool solves a specific problem — together, they transform how you work.
                    </p>
                </div>
            </Section>

            {/* How We Help Section */}
            <Section>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-4">How We Help</h2>
                        <p className="text-gray-600 dark:text-gray-300">Our tools are used by those who want their work to feel lighter and more structured.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-800 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                                <User size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-2">For Individuals</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Clear planning, calmer communication, better focus, and less cognitive overload.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-800 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-2">For Teams</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Workflows that connect tasks, communication, and operations into systems that manage themselves.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-50 dark:bg-brand-800 rounded-lg flex items-center justify-center text-brand-accent mb-4">
                                <Building size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-2">For Institutions</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Scalable operations that reduce manual effort while improving visibility and control.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <div className="bg-brand-soft dark:bg-[#0B1221]">
                {PRODUCTS.map((product, index) => {
                    const Icon = IconMap[product.icon];
                    return (
                        <section key={product.id} className="py-16 border-b border-gray-200 dark:border-brand-800 last:border-0">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-14 h-14 bg-white dark:bg-brand-900 rounded-2xl flex items-center justify-center text-brand-900 dark:text-white shadow-lg shadow-brand-900/5 border border-gray-100 dark:border-brand-700">
                                                <Icon size={28} />
                                            </div>
                                            {product.status === 'Beta' && (
                                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wide border border-blue-200 dark:border-blue-800">
                                                    Beta Access
                                                </span>
                                            )}
                                        </div>

                                        <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-2">{product.name}</h2>
                                        <h3 className="text-lg text-brand-accent font-medium mb-4">{product.tagline}</h3>
                                        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                            {product.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                                            {product.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-2 text-brand-800 dark:text-gray-200 text-sm font-medium">
                                                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            to={product.link ? undefined : "/contact"}
                                            href={product.link}
                                            target={product.link ? "_blank" : undefined}
                                            rel={product.link ? "noopener noreferrer" : undefined}
                                            className="group h-12 px-6 rounded-full text-sm"
                                        >
                                            {product.link ? "Visit Website" : "Request Access"}
                                            {product.link ? (
                                                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                                            ) : (
                                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                                            )}
                                        </Button>
                                    </div>

                                    <div className="flex-1 w-full">
                                        {/* Product Preview with Device Mockup */}
                                        <DeviceMockup
                                            variant="browser"
                                            url={product.link ? new URL(product.link).hostname : `${product.id}.makhijaquantum.ai`}
                                        >
                                            <AppPreview
                                                accessLevel={product.link ? 'public' : 'gated'}
                                                previewHeight="400px"
                                                ctaLabel={product.link ? 'Visit Website' : 'Request Access'}
                                                onRequestAccess={() => {
                                                    if (product.link) {
                                                        window.open(product.link, '_blank');
                                                    } else {
                                                        window.location.href = '/#/contact';
                                                    }
                                                }}
                                            >
                                                {product.image ? (
                                                    <img
                                                        src={product.image}
                                                        alt={`${product.name} screenshot`}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                ) : (
                                                    <div className="aspect-[16/10] flex items-center justify-center bg-gradient-to-tr from-gray-50 to-white dark:from-brand-900 dark:to-brand-800">
                                                        <div className="text-center p-8">
                                                            <div className="w-24 h-24 mx-auto rounded-full bg-brand-soft dark:bg-brand-800 flex items-center justify-center mb-4 shadow-inner">
                                                                <Icon size={48} className="text-brand-300 dark:text-brand-500 opacity-50" />
                                                            </div>
                                                            <p className="text-gray-400 dark:text-gray-500 text-sm">Preview coming soon</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </AppPreview>
                                        </DeviceMockup>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            <Section className="text-center">
                <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-4">Sometimes people only need the right tool.</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
                    Sometimes they need a complete system. We quietly support both.
                </p>
                <Button to="/contact" variant="outline" className="rounded-full px-8">Join the Waitlist</Button>
            </Section>
        </div>
    );
};
