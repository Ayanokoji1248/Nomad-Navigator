"use client"
import { HERO_SLIDES } from '@/contants';
import Link from 'next/link';

const Hero: React.FC = () => {


    return (
        <div className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">

            <div
                className={`absolute inset-0 bg-cover bg-center 
                    }`}
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')` }}
            >
                <div className="absolute inset-0 hero-overlay" />
            </div>


            <div className="relative z-20 text-center px-6 max-w-4xl">
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className='w-full flex items-center justify-center'>
                        <p className="text-[#0D9488] text-[10px] uppercase tracking-wide rounded-full font-black mb-6 drop-shadow-sm font-[Satoshi] bg-white w-fit p-2 px-3">Your Global Sanctuary</p>
                    </div>
                    <h1 className="font-[Clash_Display] text-5xl md:text-7xl text-white mb-8  drop-shadow-xl">
                        Explore Your Next Adventure
                    </h1>
                    <p className="text-lg font-[Satoshi] font-medium text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
                        Discover the hidden gems of the wild where nature meet structure.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-[Satoshi]">
                        <Link
                            href="#deals"
                            className="px-12 py-4 bg-[#0D9488] text-white font-black uppercase text-xs rounded-full hover:bg-white hover:text-[#2D3436] transition-all transform hover:-translate-y-1 shadow-2xl duration-150 ease-in"
                        >
                            Start Exploring
                        </Link>
                        <button className="px-12 py-4 cursor-pointer bg-white/10 backdrop-blur-md border border-white/30 text-white font-black uppercase text-xs rounded-full hover:bg-white hover:text-[#2D3436] transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
