import React from 'react';
import { Section } from '../components/Section';
import { Helmet } from 'react-helmet-async';
import { InsightPost } from '../types';

const POSTS: InsightPost[] = [
  {
    id: '1',
    title: 'The Paradox of Efficiency: Why Faster Isn\'t Always Better',
    excerpt: 'In our pursuit of speed, we often sacrifice clarity. How "Calm AI" is emerging as the necessary counter-balance to hyper-growth tools.',
    date: 'Oct 2025',
    category: 'Philosophy',
    readTime: '6 min read',
    author: 'Makhija K.'
  },
  {
    id: '2',
    title: 'From Feature Lists to Empathy Maps',
    excerpt: 'Why we stopped tracking "daily active users" and started measuring "time given back". A look inside our product metrics.',
    date: 'Sep 2025',
    category: 'Product',
    readTime: '4 min read',
    author: 'Engineering Team'
  },
  {
    id: '3',
    title: 'The Future of Audio Engagement with Insoch',
    excerpt: 'Voice is the oldest social network. Here is how AI is helping brands listen better and engage deeper.',
    date: 'Aug 2025',
    category: 'Technology',
    readTime: '5 min read',
    author: 'Product Team'
  }
];

export const Insights: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Insights | Makhija Quantum AI</title>
        <meta name="description" content="Thoughts on the future of work, AI ethics, and calm technology from the team at Makhija Quantum AI." />
      </Helmet>

      <Section className="py-20 bg-brand-soft dark:bg-black">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-900 dark:text-white mb-6 tracking-tight">Insights</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            We write about the intersection of artificial intelligence and human well-being.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer border-b border-gray-100 dark:border-brand-800 pb-10 last:border-0 hover:bg-white dark:hover:bg-brand-900/10 p-6 rounded-2xl transition-colors -mx-6">
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
                  Read Article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};