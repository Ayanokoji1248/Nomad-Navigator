"use client"
import { MOCK_DEALS } from "@/contants"
import Hero from "./components/Hero"
import Navbar from "./components/NavBar"
import PopularDestinations from "./components/PopularDestination"
import { useState } from "react"
import ArchitectureSection from "./components/ArchitectureSection"
import AIRecFinder from "./components/AIRecFinder"
import Footer from "./components/Footer"

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showLikes, setShowLikes] = useState(false);

  const handleOpenCity = (data) => {
    setSelectedCity(data);
    setShowLikes(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D3436] selection:bg-teal-50 selection:text-teal-700">

      <Navbar />
      <main>
        <Hero />
        <PopularDestinations />
        <section id="deals" className="pt-0 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[#0D9488] tracking-wide font-[Satoshi] uppercase text-sm font-black mb-4">Wanderlust Specials</h2>
                <h3 className="font-[Clash_Display] font-medium text-4xl md:text-6xl text-[#2D3436]">Handpicked Retreats</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {MOCK_DEALS.map((deal) => (
                <div
                  key={deal.id}
                  onClick={() => deal.fullData && handleOpenCity(deal.fullData)}
                  className={`group bg-white rounded-3xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2 border border-gray-100`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={deal.image} alt={deal.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    {deal.discount && <div className="absolute top-4 left-4 bg-[#0D9488] text-white px-3 py-1 rounded-full text-[9px] uppercase tracking-widest z-10 font-[Satoshi] font-bold">{deal.discount}</div>}
                  </div>
                  <div className="p-6">
                    <p className="text-[#0D9488] text-[10px] font-black uppercase tracking-wider font-[Satoshi] mb-1">{deal.location}</p>
                    <h4 className="font-[Satoshi] font-bold text-xl text-[#2D3436] mb-3 group-hover:text-[#0D9488] transition-colors">{deal.title}</h4>
                    <div className="flex items-center justify-between mt-4 font-[Satoshi]">
                      <span className="text-[#2D3436] font-bold text-lg">{deal.price}</span>
                      <button className="bg-[#2D3436] text-white hover:bg-[#0D9488] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider transition-all">View Deal</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ArchitectureSection />
        <AIRecFinder />
        <section id="about" className="py-24 px-6 bg-white border-y border-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1544002177-fce4696659d8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#0D9488] p-8 rounded-[2rem] text-white shadow-2xl hidden lg:block">
                <p className="font-serif text-3xl mb-1 italic">Explore freely.</p>
                <p className="text-[10px] uppercase font-black tracking-widest opacity-80">The Nomad Philosophy</p>
              </div>
            </div>
            <div>
              <h2 className="text-[#0D9488] uppercase tracking-wide text-[12px] font-[Satoshi] font-semibold mb-4">Our Vision</h2>
              <h3 className="font-[Clash_Display] font-medium text-4xl md:text-5xl mb-8 leading-tight text-[#2D3436]">Journey Through the World's Living Art</h3>
              <p className="text-gray-500 text-lg font-[Satoshi] leading-relaxed mb-8">
                We believe that travel is more than just reaching a destination; it's about the emotional resonance of the spaces we inhabit. Nomad Navigator curates experiences where architecture and nature dance in perfect harmony.
              </p>
              <button className="flex items-center gap-4 text-[#2D3436] font-black uppercase tracking-widest text-xs group font-[Satoshi] cursor-pointer">
                <span className="w-12 h-12 font-[Satoshi] rounded-full bg-teal-50 text-[#0D9488] flex items-center justify-center group-hover:bg-[#0D9488] group-hover:text-white transition-all">→</span>
                Read Our Story
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage