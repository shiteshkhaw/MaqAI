import React from 'react';
import { Lock, Eye } from 'lucide-react';

interface AppPreviewProps {
    children: React.ReactNode;
    accessLevel?: 'public' | 'gated' | 'coming-soon';
    previewHeight?: string;
    overlayMessage?: string;
    ctaLabel?: string;
    onRequestAccess?: () => void;
    className?: string;
}

/**
 * AppPreview Component
 * 
 * Creates a safe, controlled interaction boundary around app previews.
 * Prevents navigation, limits scrolling, blocks keyboard input while
 * maintaining visual interactivity.
 */
export const AppPreview: React.FC<AppPreviewProps> = ({
    children,
    accessLevel = 'public',
    previewHeight = '400px',
    overlayMessage,
    ctaLabel = 'Request Access',
    onRequestAccess,
    className = ''
}) => {
    // Prevent all navigation and form submissions
    const handleInteraction = (e: React.MouseEvent | React.KeyboardEvent) => {
        if (accessLevel !== 'public') {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    // Status badge based on access level
    const StatusBadge = () => {
        const badges = {
            'public': {
                icon: Eye,
                text: 'Live Preview',
                className: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
            },
            'gated': {
                icon: Lock,
                text: 'Limited Access',
                className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
            },
            'coming-soon': {
                icon: Lock,
                text: 'Coming Soon',
                className: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700'
            }
        };

        const badge = badges[accessLevel];
        const Icon = badge.icon;

        return (
            <div className={`absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${badge.className}`}>
                <Icon size={12} />
                {badge.text}
            </div>
        );
    };

    // Gated overlay with blur effect
    const GatedOverlay = () => {
        if (accessLevel === 'public') return null;

        return (
            <div
                className="absolute inset-0 z-10 flex items-end justify-center"
                style={{
                    background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 30%, transparent 70%)'
                }}
            >
                <div className="dark:hidden absolute inset-0" style={{
                    background: 'linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.7) 40%, transparent 80%)'
                }}></div>
                <div className="hidden dark:block absolute inset-0" style={{
                    background: 'linear-gradient(to top, rgba(2,6,23,0.98) 0%, rgba(2,6,23,0.7) 40%, transparent 80%)'
                }}></div>

                <div className="relative z-20 pb-8 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {overlayMessage || (accessLevel === 'coming-soon'
                            ? 'This product is currently in development'
                            : 'Full access requires approval'
                        )}
                    </p>
                    <button
                        onClick={onRequestAccess}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-900 dark:bg-brand-accent text-white rounded-full text-sm font-semibold hover:bg-brand-800 dark:hover:bg-indigo-500 transition-all shadow-lg shadow-brand-900/20 btn-glow"
                    >
                        <Lock size={14} />
                        {ctaLabel}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div
            className={`relative overflow-hidden rounded-lg ${className}`}
            style={{ maxHeight: previewHeight }}
            onClick={handleInteraction}
            onKeyDown={handleInteraction}
        >
            {/* Status Badge */}
            <StatusBadge />

            {/* Preview Content - pointer events controlled */}
            <div
                className={`relative ${accessLevel !== 'public' ? 'pointer-events-none select-none' : ''}`}
                style={{
                    maxHeight: previewHeight,
                    overflow: accessLevel === 'public' ? 'hidden' : 'hidden'
                }}
            >
                {children}
            </div>

            {/* Gated Overlay */}
            <GatedOverlay />
        </div>
    );
};
