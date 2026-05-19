import React from 'react';
import { Section } from '../components/Section';
import { Helmet } from 'react-helmet-async';
import { InsightPost } from '../types';

const POSTS: InsightPost[] = [
    {
        id: '1',
        title: 'How WhatsApp Automation is Transforming E-commerce in India',
        excerpt: 'Discover why top Indian brands are moving from email marketing to WhatsApp automation for recovering abandoned carts and driving sales.',
        date: 'Oct 2025',
        category: 'E-commerce',
        readTime: '6 min read',
        author: 'Makhija K.',
        relatedSlug: '/whatsapp-automation-ecommerce'
    },
    {
        id: '2',
        title: 'The Blueprint for Automated Lead Generation on Instagram',
        excerpt: 'Stop relying on manual DMs. Learn how creators and businesses are building automated funnels to capture leads 24/7.',
        date: 'Sep 2025',
        category: 'Social Media',
        readTime: '4 min read',
        author: 'Growth Team',
        relatedSlug: '/instagram-automation'
    },
    {
        id: '3',
        title: 'Scaling Agency Output with AI Content Generation',
        excerpt: 'How modern agencies are maintaining high-quality brand voices while 10x-ing their content delivery speed using AI.',
        date: 'Aug 2025',
        category: 'Agencies',
        readTime: '5 min read',
        author: 'Product Team',
        relatedSlug: '/ai-content-agencies'
    },
    {
        id: '4',
        title: 'Why Your Customer Support Needs AI Agents, Not Just Chatbots',
        excerpt: 'The era of rigid decision-tree chatbots is over. Explore how autonomous AI agents actually resolve customer tickets.',
        date: 'Jul 2025',
        category: 'Customer Support',
        readTime: '7 min read',
        author: 'Engineering Team',
        relatedSlug: '/chatbots-customer-support'
    }
];

import { Link } from 'react-router-dom';

export const Insights: React.FC = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>AI & Automation Insights | Makhija Quantum AI</title>
                <meta name="description" content="Discover strategies and insights on WhatsApp automation, AI content generation, and building automated workflows for modern businesses." />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Blog",
                            "name": "Makhija Quantum AI Blog",
                            "description": "Insights on AI automation and business growth"
                        }
                    `}
                </script>
            </Helmet>

            <Section className="py-20 bg-brand-soft dark:bg-black">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-900 dark:text-white mb-6 tracking-tight">Insights & Strategies</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                        Actionable insights on leveraging AI agents and workflow automation for your business.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid gap-6 max-w-4xl mx-auto">
                    {POSTS.map((post) => (
                        <Link to={post.relatedSlug || '#'} key={post.id} className="block group border-b border-gray-100 dark:border-brand-800 pb-10 last:border-0 hover:bg-white dark:hover:bg-brand-900/10 p-6 rounded-2xl transition-colors -mx-6">
                            <article>
                                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <span className="font-bold text-brand-accent uppercase tracking-wider text-xs px-2 py-1 bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 rounded-full">{post.category}</span>
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-brand-900 dark:text-white mb-3 group-hover:text-brand-accent transition-colors leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-brand-900 dark:text-white">{post.author}</span>
                                    <span className="text-brand-accent font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                        Read Strategy &rarr;
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
};
