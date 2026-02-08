"use client"
import React from 'react';

const ArchitectureSection: React.FC = () => {
    const images = [
        { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop', title: 'Modern Verticality', span: 'col-span-2' },
        { url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000&auto=format&fit=crop', title: 'Urban Geometry', span: 'col-span-1' },
        { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop', title: 'Ancient Echoes', span: 'col-span-1' },
        { url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1000&auto=format&fit=crop', title: 'Future Living', span: 'col-span-2' }
    ];

    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-[Satoshi] text-[#0D9488] uppercase tracking-wider text-sm font-black mb-4">Structural Poetry</h2>
                    <h3 className="font-[Clash_Display] font-medium text-4xl md:text-6xl text-[#2D3436]">The Living Gallery</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden group rounded-[3rem] h-[500px] ${img.span} bg-gray-50 card-shadow transition-all duration-700`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#2D3436] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                                <div>
                                    <h4 className="font-[Clash_Display] font-medium text-3xl text-white mb-3">{img.title}</h4>
                                    <div className="font-[Satoshi] flex items-center gap-3 text-white font-semibold uppercase tracking-widest text-[10px]">
                                        View Perspective <span className="w-8 h-8 rounded-full bg-white text-[#0D9488] flex items-center justify-center">→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectureSection;
