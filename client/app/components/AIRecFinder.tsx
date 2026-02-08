
import React, { useState } from 'react';
// import { getTravelRecommendation } from '../services/geminiService';
// import { AIRecommendation, SavedItem } from '../types';

type TabType = 'overview' | 'stay' | 'see' | 'eat' | 'do';

interface AIRecFinderProps {
    onCitySelect?: (cityName: string) => void;
    onLike?: (recommendation) => void;
    onSaveItem?: (item) => void;
    isLiked?: (destination: string) => boolean;
}

const AIRecFinder: React.FC<AIRecFinderProps> = ({ onCitySelect, onLike, isLiked, onSaveItem }) => {
    const [vibe, setVibe] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [activeTab, setActiveTab] = useState<TabType>('overview');

    const handleFind = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!vibe.trim()) return;
        setLoading(true);
        try {
            const rec = null
            // const rec = await getTravelRecommendation(vibe);
            setResult(rec);
            setActiveTab('overview');
        } catch (error) {
            console.error("Failed to fetch recommendation", error);
        } finally {
            setLoading(false);
        }
    };



    const TabButton = ({ type, label, icon }: { type: TabType, label: string, icon: string }) => (
        <button
            onClick={() => setActiveTab(type)}
            className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all relative ${activeTab === type ? 'text-[#0D9488]' : 'text-gray-400 hover:text-[#2D3436]'
                }`}
        >
            <span className="mr-2">{icon}</span>
            {label}
            {activeTab === type && <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#0D9488] rounded-full animate-in fade-in slide-in-from-bottom-2" />}
        </button>
    );

    return (
        <section className="py-24 px-6 relative bg-[#F0FDFA] overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="bg-white p-8 md:p-16 rounded-[4rem] card-shadow border border-gray-50">
                    <div className="text-center mb-12">
                        <h2 className="text-[#0D9488] uppercase tracking-widest font-[Satoshi] text-[12px] font-black mb-4">Journey Planner</h2>
                        <h3 className="font-[Clash_Display] font-medium text-4xl md:text-5xl text-[#2D3436] mb-6">AI Destination Architect</h3>
                        <p className="font-[Satoshi] text-gray-500 max-w-xl mx-auto">
                            Describe your perfect mood or a dream destination, and our AI will curate a complete structural and culinary itinerary.
                        </p>
                    </div>

                    <form onSubmit={handleFind} className="flex flex-col md:flex-row gap-4 mb-12">
                        <input
                            type="text" value={vibe} onChange={(e) => setVibe(e.target.value)}
                            placeholder="e.g. A serene week in the Swiss Alps with modern spas"
                            className="font-[Satoshi] flex-1 bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 text-[#2D3436] focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all placeholder:text-gray-400"
                        />
                        <button disabled={loading} className="font-[Satoshi] bg-[#0D9488] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-wide text-xs hover:bg-[#2D3436] transition-all shadow-xl shadow-teal-900/10">
                            {loading ? 'Curating...' : 'Build Odyssey'}
                        </button>
                    </form>

                    {result && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex flex-wrap items-center justify-between gap-6 mb-10 border-b border-gray-100">
                                <div className="flex flex-wrap gap-2">
                                    <TabButton type="overview" label="Overview" icon="🌍" />
                                    <TabButton type="stay" label="Retreat" icon="🏨" />
                                    <TabButton type="see" label="Marvels" icon="🏛️" />
                                    <TabButton type="eat" label="Dine" icon="🍽️" />
                                    <TabButton type="do" label="Pulse" icon="⚡" />
                                </div>
                                <button onClick={() => onLike?.(result)} className={`flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isLiked?.(result.destination) ? 'bg-[#0D9488] text-white' : 'bg-teal-50 text-[#0D9488] hover:bg-[#0D9488] hover:text-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={isLiked?.(result.destination) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    {isLiked?.(result.destination) ? 'Saved' : 'Save Full Plan'}
                                </button>
                            </div>

                            <div className="min-h-[400px]">
                                {activeTab === 'overview' && (
                                    <div className="space-y-8 animate-in fade-in duration-500">
                                        <h4 className="font-serif text-5xl text-[#2D3436] tracking-tight">{result.destination}</h4>
                                        <p className="text-gray-600 leading-relaxed text-xl font-light italic">{result.reason}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {result.architectureHighlights.map((h, i) => (
                                                <div key={i} className="flex items-center gap-4 bg-teal-50/30 p-6 rounded-[2rem] border border-teal-100/50">
                                                    <span className="text-[#0D9488] text-xl">✦</span>
                                                    <span className="text-sm text-[#2D3436] font-medium tracking-tight">{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'stay' && (
                                    <div className="bg-[#2D3436] p-12 rounded-[3rem] text-white relative group overflow-hidden animate-in fade-in duration-500">
                                        <button onClick={() => handleQuickSave(result.stay, 'stay')} className="absolute top-8 right-8 text-white/50 hover:text-[#0D9488] transition-all text-2xl z-10">♥</button>
                                        <div className="relative z-10">
                                            <p className="text-[#0D9488] font-black uppercase tracking-[0.3em] text-[10px] mb-6">Signature Stay</p>
                                            <h6 className="font-serif text-4xl mb-6">{result.stay.name}</h6>
                                            <p className="text-white/70 leading-relaxed text-lg mb-8 max-w-2xl">{result.stay.description}</p>
                                            {result.stay.highlight && (
                                                <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/10">
                                                    <span className="text-[#0D9488] text-sm">✨</span>
                                                    <span className="text-xs font-bold">{result.stay.highlight}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/10 blur-[80px] rounded-full" />
                                    </div>
                                )}

                                {activeTab === 'see' && (
                                    <div className="grid grid-cols-1 gap-6 animate-in fade-in duration-500">
                                        {result.attractions.map((item, i) => (
                                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-teal-500/30 transition-all flex justify-between items-center group card-shadow">
                                                <div>
                                                    <h6 className="font-serif text-2xl text-[#2D3436] mb-2">{item.name}</h6>
                                                    <p className="text-gray-500 text-sm max-w-xl">{item.description}</p>
                                                </div>
                                                <button onClick={() => handleQuickSave(item, 'attraction')} className="text-gray-300 group-hover:text-[#0D9488] transition-all text-2xl">♥</button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'eat' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                                        {result.food.map((item, i) => (
                                            <div key={i} className="bg-teal-50/20 p-8 rounded-[3rem] border border-teal-100/30 flex flex-col h-full card-shadow">
                                                <div className="flex justify-between items-start mb-6">
                                                    <span className="text-3xl bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">🥘</span>
                                                    <button onClick={() => handleQuickSave(item, 'food')} className="text-gray-400 hover:text-[#0D9488] transition-all text-2xl">♥</button>
                                                </div>
                                                <h6 className="font-serif text-2xl text-[#2D3436] mb-4">{item.name}</h6>
                                                <p className="text-gray-600 text-sm flex-1 leading-relaxed">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'do' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                                        {result.activities.map((item, i) => (
                                            <div key={i} className="flex items-start gap-6 bg-white p-8 rounded-[3rem] border border-gray-50 card-shadow group">
                                                <div className="w-12 h-12 rounded-2xl bg-[#2D3436] text-white flex items-center justify-center shrink-0 font-serif text-xl">{i + 1}</div>
                                                <div className="flex-1">
                                                    <h6 className="font-serif text-2xl text-[#2D3436] mb-2">{item.name}</h6>
                                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                                </div>
                                                <button onClick={() => handleQuickSave(item, 'activity')} className="text-gray-300 group-hover:text-[#0D9488] transition-all text-2xl self-start">♥</button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-200/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        </section>
    );
};

export default AIRecFinder;
