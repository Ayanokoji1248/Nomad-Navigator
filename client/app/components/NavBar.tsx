"use client"
import React, { useState, useEffect } from 'react';
import { COMPASS_LOGO, NAVIGATION_LINKS } from '../../contants';

interface NavbarProps {
    onToggleLikes?: () => void;
    likesCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleLikes, likesCount = 0 }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div
                    onClick={() => window.location.href = '#'}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className={`${isScrolled ? 'text-[#0D9488]' : 'text-white'} group-hover:rotate-45 transition-transform duration-500`}>
                        {COMPASS_LOGO}
                    </div>
                    <span className={`text-xl font-bold font-[Satoshi] tracking-tight uppercase hidden sm:block ${isScrolled ? 'text-[#2D3436]' : 'text-white'}`}>
                        Nomad Navigator
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <ul className="hidden lg:flex items-center gap-10 font-[Satoshi]">
                        {NAVIGATION_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`relative text-[10px] font-black uppercase tracking-wide transition-colors group ${isScrolled ? 'text-[#2D3436]' : 'text-white'}`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0D9488] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={onToggleLikes}
                            className={`relative p-2 transition-all hover:scale-110 font-[Satoshi] ${isScrolled ? 'text-[#2D3436]' : 'text-white'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {likesCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#0D9488] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                                    {likesCount}
                                </span>
                            )}
                        </button>

                        <button className={`font-[Satoshi] px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-wide cursor-pointer ease-in duration-150 transition-all active:scale-95 ${isScrolled ? 'bg-[#2D3436] text-white hover:bg-[#0D9488]' : 'bg-white text-[#2D3436] hover:bg-[#0D9488] hover:text-white shadow-xl'}`}>
                            Book Journey
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
