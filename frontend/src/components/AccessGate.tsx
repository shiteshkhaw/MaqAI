import React from 'react';
import { Lock, Shield, ArrowRight, X } from 'lucide-react';
import { Button } from './Button';

interface AccessGateProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
    onRequestAccess?: () => void;
}

/**
 * AccessGate Component
 * 
 * Modal overlay for converting curiosity into intent while reinforcing trust.
 * Calm, respectful tone - no urgency spam.
 */
export const AccessGate: React.FC<AccessGateProps> = ({
    isOpen,
    onClose,
    productName = 'this product',
    onRequestAccess
}) => {
    if (!isOpen) return null;

    const handleRequestAccess = () => {
        if (onRequestAccess) {
            onRequestAccess();
        } else {
            // Default: navigate to contact
            window.location.href = '/#/contact';
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-brand-900/40 dark:bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative bg-white dark:bg-brand-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-100 dark:border-brand-800">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-50 dark:bg-brand-800 flex items-center justify-center">
                    <Lock size={28} className="text-brand-accent" />
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-3">
                        Limited Preview
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Full access to {productName} requires approval. Request access to explore the complete experience.
                    </p>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <Shield size={14} className="text-green-500" />
                        <span>Secure Access</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Lock size={14} className="text-blue-500" />
                        <span>Privacy First</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    <Button
                        onClick={handleRequestAccess}
                        className="w-full h-12 rounded-xl justify-center btn-glow"
                    >
                        Request Access
                        <ArrowRight size={16} className="ml-2" />
                    </Button>

                    <Button
                        onClick={onClose}
                        variant="ghost"
                        className="w-full h-10 rounded-xl justify-center text-gray-500"
                    >
                        Continue Browsing
                    </Button>
                </div>

                {/* Footer Note */}
                <p className="text-xs text-center text-gray-400 mt-6">
                    We typically respond within 24 hours
                </p>
            </div>
        </div>
    );
};
