import React from 'react';
import { Section } from '../components/Section';
import { BlogPost } from '../types';

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Age of Calm Technology',
    excerpt: 'Why the next wave of innovation won’t be about doing more, but about worrying less. A deep dive into attention economics.',
    date: 'Oct 12, 2023',
    category: 'Philosophy',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Why We Don’t Use Notification Badges',
    excerpt: 'Red dots are designed to create anxiety. Here is how we designed a notification system that respects your focus.',
    date: 'Sep 28, 2023',
    category: 'Design',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Automating the Mundane: A Case Study',
    excerpt: 'How one logistics company saved 20 hours per week per employee by implementing TaskGuru for inventory management.',
    date: 'Sep 15, 2023',
    category: 'Case Study',
    readTime: '7 min read'
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="py-20 bg-brand-soft">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">Insights</h1>
          <p className="text-xl text-brand-700">
            Thoughts on AI, productivity, and the future of work. <br/>
            No marketing fluff, just honest thinking.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 max-w-4xl mx-auto">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="font-bold text-brand-accent uppercase tracking-wider text-xs">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-3 group-hover:text-brand-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-brand-900 font-medium underline decoration-brand-200 underline-offset-4 group-hover:decoration-brand-accent transition-all">
                Read Article
              </span>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};