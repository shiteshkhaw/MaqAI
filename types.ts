export interface NavItem {
  label: string;
  path: string;
}

export type IconType = 'mail' | 'check' | 'edit' | 'chart' | 'audio' | 'shield';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: IconType;
  status: 'Live' | 'Beta' | 'Coming Soon';
  link?: string;
}

export interface InsightPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}