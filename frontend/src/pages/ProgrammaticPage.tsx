import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Helmet } from 'react-helmet-async';
import { PAGES_CONTENT } from '../data/pagesContent';
import { ArrowRight, CheckCircle, ChevronRight, Zap } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';

interface ProgrammaticPageProps {
    slug: string;
}

export const ProgrammaticPage: React.FC<ProgrammaticPageProps> = ({ slug }) => {
    const pageData = PAGES_CONTENT[slug];

    if (!pageData) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="pt-20">
            <Helmet>
                <title>{pageData.metaTitle}</title>
                <meta name="description" content={pageData.metaDescription} />
                <meta name="keywords" content={pageData.keywords} />
                <link rel="canonical" href={`https://makhijaquantum.ai/${slug}`} />
                <meta property="og:title" content={pageData.metaTitle} />
                <meta property="og:description" content={pageData.metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://makhijaquantum.ai/${slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify(pageData.structuredData)}
                </script>
            </Helmet>

            {/* Hero */}
            <Section bgColor="soft" className="py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 bg-brand-50 dark:bg-brand-900/50 px-4 py-2 rounded-full border border-brand-100 dark:border-brand-800">
                        Enterprise Automation
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-900 dark:text-white mb-6 tracking-tight">
                        {pageData.heroTitle}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">{pageData.heroSubtitle}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        {pageData.heroDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button to="/contact" className="h-14 px-8 text-lg rounded-full btn-glow">
                            {pageData.ctaText} <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Hero Image */}
            {pageData.imageUrl && (
                <Section className="pb-12 -mt-10">
                    <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 border border-gray-100 dark:border-brand-800">
                        <img src={pageData.imageUrl} alt={pageData.metaTitle} className="w-full h-auto object-cover" />
                    </div>
                </Section>
            )}

            {/* Problem Statement */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-brand-900/20 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-brand-800 shadow-xl shadow-brand-900/5">
                        <h2 className="text-sm font-bold tracking-widest text-red-500 uppercase mb-3">The Problem</h2>
                        <h3 className="text-3xl font-bold text-brand-900 dark:text-white mb-4 leading-tight">{pageData.problemStatement.title}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {pageData.problemStatement.description}
                        </p>
                    </div>
                </div>
            </Section>

            {/* Solution Explanation */}
            <Section bgColor="soft">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">The Solution</h2>
                            <h3 className="text-3xl font-bold text-brand-900 dark:text-white mb-6 leading-tight">{pageData.solutionExplanation.title}</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                {pageData.solutionExplanation.description}
                            </p>
                            <Button to="/contact" variant="outline" className="rounded-full">
                                {pageData.ctaText}
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {pageData.solutionExplanation.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-brand-900/30 border border-gray-100 dark:border-brand-800 shadow-sm">
                                    <CheckCircle className="text-brand-accent flex-shrink-0" size={24} />
                                    <span className="font-semibold text-brand-900 dark:text-white">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">Common Use Cases</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        How our clients use this technology to scale their operations.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {pageData.useCases.map((useCase, index) => (
                        <div key={index} className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-800 h-full hover:-translate-y-1 transition-transform duration-300">
                            <Zap className="text-brand-secondary mb-4" size={32} />
                            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">{useCase.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Benefits */}
            <Section bgColor="soft">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mb-4">Measurable Benefits</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pageData.benefits.map((benefit, i) => (
                        <div key={i} className="flex flex-col text-center items-center p-8 bg-white dark:bg-brand-900/20 rounded-2xl border border-gray-100 dark:border-brand-800">
                            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary mb-3">{benefit.title}</span>
                            <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Internal Links / Related Services */}
            {pageData.relatedLinks && pageData.relatedLinks.length > 0 && (
                <Section>
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-6">Explore Related Solutions</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {pageData.relatedLinks.map((link, idx) => (
                                <Link 
                                    key={idx} 
                                    to={link.url}
                                    className="flex items-center gap-2 px-6 py-3 bg-brand-50 dark:bg-brand-900/30 text-brand-900 dark:text-white rounded-full font-medium hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors border border-gray-100 dark:border-brand-800"
                                >
                                    {link.label} <ChevronRight size={16} className="text-brand-accent" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* Final CTA */}
            <Section bgColor="dark" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your workflow?</h2>
                    <p className="text-gray-300 mb-10 text-lg font-light">
                        Let's discuss how {pageData.heroSubtitle} can specifically help your business.
                    </p>
                    <Button to="/contact" variant="light" className="h-14 px-10 text-lg rounded-full font-semibold">
                        {pageData.ctaText}
                    </Button>
                </div>
            </Section>
        </div>
    );
};
