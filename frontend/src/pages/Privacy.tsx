import React from 'react';
import { Section } from '../components/Section';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
    const lastUpdated = 'December 2025';

    return (
        <div className="pt-20">
            <Helmet>
                <title>Privacy Policy | Makhija Quantum AI</title>
                <meta name="description" content="Privacy Policy for Makhija Quantum AI. Learn how we collect, use, and protect your data." />
            </Helmet>

            <Section bgColor="soft" className="py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-900 dark:text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-600 dark:text-gray-300">Last updated: {lastUpdated}</p>
                </div>
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto prose dark:prose-invert prose-brand">
                    <h2>Introduction</h2>
                    <p>
                        At Makhija Quantum AI, we take your privacy seriously. This Privacy Policy explains how we
                        collect, use, disclose, and safeguard your information when you use our Services.
                    </p>
                    <p>
                        Please read this privacy policy carefully. By using our Services, you consent to the
                        practices described in this policy.
                    </p>

                    <h2>Information We Collect</h2>
                    <h3>Information You Provide</h3>
                    <p>We collect information you voluntarily provide, including:</p>
                    <ul>
                        <li>Account registration information (name, email address)</li>
                        <li>Profile information and preferences</li>
                        <li>Content you create using our Services</li>
                        <li>Communications with us (support requests, feedback)</li>
                        <li>Payment information (processed securely by third-party providers)</li>
                    </ul>

                    <h3>Automatically Collected Information</h3>
                    <p>When you use our Services, we may automatically collect:</p>
                    <ul>
                        <li>Device information (browser type, operating system)</li>
                        <li>Usage data (pages visited, features used)</li>
                        <li>Log data (IP address, access times)</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our Services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send technical notices and support messages</li>
                        <li>Respond to your comments and questions</li>
                        <li>Analyze usage patterns to enhance user experience</li>
                        <li>Protect against fraudulent or unauthorized activity</li>
                    </ul>

                    <h2>Data Sharing and Disclosure</h2>
                    <p>We do not sell your personal data. We may share information in the following circumstances:</p>
                    <ul>
                        <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our Services</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        <li><strong>With Your Consent:</strong> When you explicitly agree to sharing</li>
                    </ul>

                    <h2>Data Security</h2>
                    <p>
                        We implement industry-standard security measures to protect your data, including:
                    </p>
                    <ul>
                        <li>End-to-end encryption (AES-256 at rest, TLS 1.3 in transit)</li>
                        <li>Regular security audits and assessments</li>
                        <li>Access controls and authentication requirements</li>
                        <li>Secure data centers with physical protection</li>
                    </ul>
                    <p>
                        However, no method of transmission over the Internet is 100% secure. While we strive to
                        protect your data, we cannot guarantee absolute security.
                    </p>

                    <h2>Data Retention</h2>
                    <p>
                        We retain your information only as long as necessary to provide our Services and fulfill
                        the purposes described in this policy. When you delete your account, we will delete or
                        anonymize your personal data within 30 days, except where required by law.
                    </p>

                    <h2>Your Rights</h2>
                    <p>Depending on your location, you may have the right to:</p>
                    <ul>
                        <li>Access and receive a copy of your personal data</li>
                        <li>Correct inaccurate or incomplete data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Object to or restrict processing of your data</li>
                        <li>Data portability (receive your data in a structured format)</li>
                        <li>Withdraw consent at any time</li>
                    </ul>
                    <p>
                        To exercise these rights, please <Link to="/contact" className="text-brand-accent hover:underline">contact us</Link>.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        We use cookies and similar technologies to enhance your experience. You can control cookie
                        preferences through your browser settings. Note that disabling cookies may limit functionality.
                    </p>

                    <h2>Children's Privacy</h2>
                    <p>
                        Our Services are not intended for children under 13. We do not knowingly collect personal
                        information from children under 13. If we learn we have collected such information, we
                        will delete it promptly.
                    </p>

                    <h2>International Data Transfers</h2>
                    <p>
                        Your information may be transferred to and processed in countries other than your own.
                        We ensure appropriate safeguards are in place to protect your data in accordance with
                        this privacy policy.
                    </p>

                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of material
                        changes by posting the new policy on this page and updating the "Last updated" date.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy or our data practices, please <Link to="/contact" className="text-brand-accent hover:underline">contact us</Link>.
                    </p>
                    <p>
                        For more information about our security practices, visit our <Link to="/security" className="text-brand-accent hover:underline">Security Center</Link>.
                    </p>
                </div>
            </Section>
        </div>
    );
};
