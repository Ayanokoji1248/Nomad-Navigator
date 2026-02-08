
import { POPULAR_DESTINATIONS } from '@/contants';
import React from 'react';
// import { POPULAR_DESTINATIONS } from '../../constants';


const PopularDestinations: React.FC = () => {
    return (
        <section id="popular" className="py-24 px-6 bg-[#FDFCF8]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-[#0D9488] uppercase tracking-wide font-[Satoshi] text-sm font-black mb-4">Timeless Escapes</h2>
                        <h3 className="font-[Clash_Display] font-medium text-4xl md:text-6xl text-[#2D3436] mb-6">Iconic Cities</h3>
                        <p className="text-gray-500 text-lg leading-relaxed font-[Satoshi]">
                            Experience the heartbeat of civilizations through the lens of architectural brilliance and modern luxury.
                        </p>
                    </div>
                    <button className="cursor-pointer font-[Satoshi] hidden md:block px-8 py-4 border-2 border-gray-200 text-[#2D3436] font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[#2D3436] hover:text-white transition-all">
                        Browse All Cities
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {POPULAR_DESTINATIONS.map((dest, idx) => (
                        <div
                            key={idx}
                            className="group font-[Satoshi] relative h-[550px] overflow-hidden rounded-[3rem] cursor-pointer card-shadow transition-all duration-700 hover:shadow-teal-900/10"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url('${dest.image}')` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </div>

                            <div className="absolute top-8 left-8 z-10">
                                <span className="bg-white/95 text-[#2D3436] text-[9px] font-black uppercase tracking-wide px-5 py-2.5 rounded-full shadow-lg">
                                    {dest.tag}
                                </span>
                            </div>

                            <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                <p className="text-[#0D9488] w-fit p-2 py-1 rounded-full bg-white uppercase tracking-wide text-[10px] font-black mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    {dest.country}
                                </p>
                                <h4 className="font-[Clash_Display] font-semibold text-5xl text-white leading-tight mb-4">
                                    {dest.city}
                                </h4>

                                <div className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-widest translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                    Discover {dest.city}
                                    <span className="w-10 h-10 rounded-full bg-white text-s[#2D3436] flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
