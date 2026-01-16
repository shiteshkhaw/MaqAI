import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgColor?: 'white' | 'soft' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    bgColor = 'white'
}) => {
    // Enhanced color logic for Dark Mode
    const bgClasses = {
        white: 'bg-white dark:bg-brand-950',
        soft: 'bg-brand-soft dark:bg-[#0B1221]', // Slightly lighter than main dark bg
        dark: 'bg-brand-900 dark:bg-black text-white'
    };

    // Tightened padding to py-12 md:py-20 for denser feel
    return (
        <section id={id} className={`py-12 md:py-20 relative transition-colors duration-300 ${bgClasses[bgColor]} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
};
