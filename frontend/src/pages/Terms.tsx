import React from 'react';
import { Section } from '../components/Section';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
    const lastUpdated = 'December 2025';

    return (
        <div className="pt-20">
            <Helmet>
                <title>Terms of Service | Makhija Quantum AI</title>
                <meta name="description" content="Terms of Service for Makhija Quantum AI products and services." />
            </Helmet>

            <Section bgColor="soft" className="py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-900 dark:text-white mb-4">Terms of Service</h1>
                    <p className="text-gray-600 dark:text-gray-300">Last updated: {lastUpdated}</p>
                </div>
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto prose dark:prose-invert prose-brand">
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By accessing or using the services provided by Makhija Quantum AI ("we," "us," or "our"),
                        including our websites, applications, and related services (collectively, the "Services"),
                        you agree to be bound by these Terms of Service ("Terms").
                    </p>
                    <p>
                        If you do not agree to these Terms, you may not access or use our Services.
                    </p>

                    <h2>2. Description of Services</h2>
                    <p>
                        Makhija Quantum AI provides AI-powered tools, automation solutions, and related technology services
                        designed to help individuals and businesses work more efficiently. Our product ecosystem includes,
                        but is not limited to: WhatsApp Automation, Lead Generation Systems, Instagram Automation, and Content Generation services.
                    </p>

                    <h2>3. User Accounts</h2>
                    <p>
                        To access certain features of our Services, you may be required to create an account.
                        When you create an account, you agree to:
                    </p>
                    <ul>
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Promptly update any changes to your information</li>
                        <li>Accept responsibility for all activities under your account</li>
                    </ul>

                    <h2>4. Acceptable Use</h2>
                    <p>You agree not to use our Services to:</p>
                    <ul>
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe upon the rights of others</li>
                        <li>Transmit harmful or malicious code</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Interfere with the proper functioning of our Services</li>
                        <li>Use automated systems to access our Services without permission</li>
                    </ul>

                    <h2>5. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality of our Services — including but not limited to text,
                        graphics, logos, and software — are the exclusive property of Makhija Quantum AI and are
                        protected by intellectual property laws.
                    </p>
                    <p>
                        You retain ownership of any content you create using our Services, subject to the license
                        you grant us to provide the Services to you.
                    </p>

                    <h2>6. Payment Terms</h2>
                    <p>
                        Certain Services may require payment. By subscribing to paid Services, you agree to pay
                        all applicable fees as described at the time of purchase. All fees are non-refundable
                        unless otherwise stated or required by law.
                    </p>

                    <h2>7. Disclaimers</h2>
                    <p>
                        Our Services are provided "as is" and "as available" without warranties of any kind,
                        either express or implied. We do not guarantee that our Services will be uninterrupted,
                        secure, or error-free.
                    </p>

                    <h2>8. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Makhija Quantum AI shall not be liable for any
                        indirect, incidental, special, consequential, or punitive damages arising from your use
                        of our Services.
                    </p>

                    <h2>9. Changes to Terms</h2>
                    <p>
                        We may update these Terms from time to time. We will notify you of any material changes
                        by posting the new Terms on this page and updating the "Last updated" date.
                    </p>

                    <h2>10. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of India,
                        without regard to its conflict of law provisions. Any disputes shall be resolved in
                        the courts of Mumbai, Maharashtra.
                    </p>

                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please <Link to="/contact" className="text-brand-accent hover:underline">contact us</Link>.
                    </p>
                </div>
            </Section>
        </div>
    );
};
