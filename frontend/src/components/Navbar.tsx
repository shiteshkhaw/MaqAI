import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavItem } from '../types';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS: NavItem[] = [
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Security', path: '/security' },
    { label: 'Insights', path: '/insights' },
];

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/80 dark:bg-brand-950/80 backdrop-blur-lg shadow-lg border-b border-gray-100 dark:border-brand-800 py-3'
            : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logo.png" alt="Makhija Quantum AI" className="h-10 w-auto object-contain group-hover:scale-105 transition-all duration-300" />
                        <span className="font-bold text-lg tracking-tight text-brand-900 dark:text-white">
                            Makhija Quantum AI
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-sm font-medium text-brand-700 dark:text-gray-300 hover:text-brand-accent dark:hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-brand-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-brand-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        <Link
                            to="/contact"
                            className="px-6 py-2.5 text-sm font-semibold text-white bg-brand-900 dark:bg-white dark:text-brand-950 rounded-lg hover:bg-brand-800 dark:hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-brand-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-brand-800 transition-colors"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-brand-900 dark:text-white hover:bg-brand-100 dark:hover:bg-brand-800 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-950 border-b border-gray-100 dark:border-brand-800 shadow-xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-3 text-base font-medium text-brand-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-900 rounded-lg"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 dark:bg-brand-800 my-2" />
                    <Link
                        to="/contact"
                        className="block w-full text-center px-4 py-3 text-base font-bold text-white bg-brand-900 dark:bg-white dark:text-brand-950 rounded-lg"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
};
