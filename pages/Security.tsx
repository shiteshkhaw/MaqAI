import React from 'react';
import { Section } from '../components/Section';
import { Shield, Lock, Eye, FileCheck, Server, Globe, Key, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Security: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Security & Privacy | Makhija Quantum AI</title>
        <meta name="description" content="Enterprise-grade security, end-to-end encryption, and a strict no-data-selling policy. Your trust is our foundation." />
      </Helmet>

      <Section className="py-20 text-center">
        <div className="w-16 h-16 mx-auto bg-brand-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-brand-900/20">
          <Shield size={32} />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-brand-900 dark:text-white mb-6">Your Data, Your Control</h1>
        <p className="text-xl text-brand-700 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          We design our systems with privacy and security at the core. 
          Security is not a feature — it’s a baseline requirement for everything we build.
        </p>
      </Section>

      <Section bgColor="soft">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm hover:shadow-md transition-shadow">
            <Lock className="text-brand-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">End-to-End Encryption</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Your private information is unreadable to anyone but you, not even our engineers.
            </p>
          </div>
          <div className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm hover:shadow-md transition-shadow">
            <Eye className="text-brand-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">Minimal Data Retention</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We practice data minimization. We only collect and keep what is absolutely necessary to provide the service. You can request full data deletion at any time.
            </p>
          </div>
          <div className="bg-white dark:bg-brand-900/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm hover:shadow-md transition-shadow">
            <FileCheck className="text-brand-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-3">Compliance Ready</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our architecture is built to meet GDPR, SOC2, and CCPA standards. We undergo regular third-party security audits to ensure our defenses are watertight.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
               <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-6">Defense in Depth Architecture</h2>
               <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                 We employ a multi-layered security approach to protect our infrastructure and your data from every angle.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <Server className="text-brand-secondary mt-1 flex-shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-brand-900 dark:text-white">Secure Infrastructure</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Hosted on AWS & GCP with VPC isolation and private subnets.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <Globe className="text-brand-secondary mt-1 flex-shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-brand-900 dark:text-white">Network Security</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Cloudflare DDoS protection, WAF, and strict firewall rules.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <Key className="text-brand-secondary mt-1 flex-shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-brand-900 dark:text-white">Access Control</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Role-based access control (RBAC) and Multi-Factor Authentication (MFA) enforcement.</p>
                     </div>
                  </li>
               </ul>
            </div>
            <div className="bg-gray-50 dark:bg-brand-900/30 p-8 rounded-3xl border border-gray-100 dark:border-brand-800">
               <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-6">Our Privacy Manifesto</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-brand-950 rounded-lg border border-gray-100 dark:border-brand-800">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <span className="font-medium text-brand-900 dark:text-gray-200">You own your data. Always.</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-brand-950 rounded-lg border border-gray-100 dark:border-brand-800">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <span className="font-medium text-brand-900 dark:text-gray-200">We do NOT sell data to advertisers.</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-brand-950 rounded-lg border border-gray-100 dark:border-brand-800">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <span className="font-medium text-brand-900 dark:text-gray-200">Privacy is the default setting.</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-brand-950 rounded-lg border border-gray-100 dark:border-brand-800">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     <span className="font-medium text-brand-900 dark:text-gray-200">Transparent AI algorithms.</span>
                  </div>
               </div>
            </div>
        </div>
      </Section>

      <Section bgColor="soft">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-brand-950 p-6 rounded-xl border border-gray-100 dark:border-brand-800">
              <h4 className="font-bold text-lg text-brand-900 dark:text-white mb-2 flex items-center gap-2">
                 <AlertTriangle size={18} className="text-brand-accent" />
                 Do you sell user data?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">No. Never. Our business model is based on subscriptions, not surveillance. You are the customer, not the product.</p>
            </div>
            <div className="bg-white dark:bg-brand-950 p-6 rounded-xl border border-gray-100 dark:border-brand-800">
              <h4 className="font-bold text-lg text-brand-900 dark:text-white mb-2">Where is my data stored?</h4>
              <p className="text-gray-600 dark:text-gray-300">We utilize enterprise-grade cloud infrastructure with data centers in the US, EU, and Asia. Enterprise customers can select their specific data residency region to meet local compliance laws.</p>
            </div>
            <div className="bg-white dark:bg-brand-950 p-6 rounded-xl border border-gray-100 dark:border-brand-800">
              <h4 className="font-bold text-lg text-brand-900 dark:text-white mb-2">How do you train your AI models?</h4>
              <p className="text-gray-600 dark:text-gray-300">We use anonymized, aggregated public datasets. We do NOT use your private business data or personal inputs to train our foundational models without your explicit, opt-in consent.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};