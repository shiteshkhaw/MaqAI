import React from 'react';

interface DeviceMockupProps {
    children: React.ReactNode;
    variant?: 'browser' | 'desktop' | 'mobile';
    url?: string;
    className?: string;
}

/**
 * DeviceMockup Component
 * 
 * Provides a trusted, professional browser/device frame that makes 
 * previews feel real but safe. Moves perception from "marketing screenshot" 
 * to "real software".
 */
export const DeviceMockup: React.FC<DeviceMockupProps> = ({
    children,
    variant = 'browser',
    url,
    className = ''
}) => {
    // Browser chrome dots
    const BrowserDots = () => (
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
        </div>
    );

    // URL Bar (non-editable, display only)
    const UrlBar = () => (
        <div className="flex-1 mx-4">
            <div className="bg-gray-100 dark:bg-brand-800 rounded-md px-3 py-1.5 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-gray-500 dark:text-gray-400 truncate font-mono">
                    {url || 'app.makhijaquantum.ai'}
                </span>
            </div>
        </div>
    );

    // Browser Actions (right side)
    const BrowserActions = () => (
        <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
        </div>
    );

    if (variant === 'browser') {
        return (
            <div className={`rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 dark:shadow-black/40 border border-gray-200/50 dark:border-white/5 ${className}`}>
                {/* Browser Chrome */}
                <div className="bg-gray-50 dark:bg-brand-900 border-b border-gray-200 dark:border-brand-800 px-4 py-3 flex items-center">
                    <BrowserDots />
                    <UrlBar />
                    <BrowserActions />
                </div>

                {/* Content Area */}
                <div className="bg-white dark:bg-brand-950 relative">
                    {children}
                </div>
            </div>
        );
    }

    if (variant === 'mobile') {
        return (
            <div className={`rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/10 dark:shadow-black/40 border-8 border-gray-800 dark:border-gray-700 max-w-[320px] mx-auto ${className}`}>
                {/* Mobile Notch */}
                <div className="bg-gray-800 dark:bg-gray-700 h-6 flex items-center justify-center">
                    <div className="w-20 h-4 bg-black rounded-full"></div>
                </div>

                {/* Content Area */}
                <div className="bg-white dark:bg-brand-950 relative aspect-[9/19]">
                    {children}
                </div>

                {/* Mobile Bottom Bar */}
                <div className="bg-gray-800 dark:bg-gray-700 h-4 flex items-center justify-center">
                    <div className="w-24 h-1 bg-white/30 rounded-full"></div>
                </div>
            </div>
        );
    }

    // Desktop variant (simplified window frame)
    return (
        <div className={`rounded-xl overflow-hidden shadow-2xl shadow-brand-900/10 dark:shadow-black/40 border border-gray-200/50 dark:border-white/5 ${className}`}>
            {/* Window Chrome */}
            <div className="bg-gray-100 dark:bg-brand-900 border-b border-gray-200 dark:border-brand-800 px-4 py-2.5 flex items-center">
                <BrowserDots />
                <div className="flex-1 text-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {url || 'Preview'}
                    </span>
                </div>
                <div className="w-16"></div>
            </div>

            {/* Content Area */}
            <div className="bg-white dark:bg-brand-950 relative">
                {children}
            </div>
        </div>
    );
};
