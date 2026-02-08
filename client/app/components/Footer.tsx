
import { COMPASS_LOGO } from '@/contants';
import React from 'react';
// import { COMPASS_LOGO } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0e1d1f] py-20 px-6 border-t border-white/5 font-[Satoshi]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="text-[#0D9488]">{COMPASS_LOGO}</div>
                        <span className="text-xl font-bold tracking-tighter uppercase text-white">Nomad Navigator</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Charting the intersection of travel and architecture for the discerning global citizen. Join our community of modern explorers.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Explore</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Destinations</a></li>
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Architectural Tours</a></li>
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Membership Deals</a></li>
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Travel Guides</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Contact</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Partner with Us</a></li>
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Press Inquiries</a></li>
                        <li><a href="#" className="hover:text-[#0D9488] transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Newsletter</h4>
                    <p className="text-gray-500 text-sm mb-4">Monthly curated architectural gems directly to your inbox.</p>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-600 text-white"
                        />
                        <button className="bg-[#0D9488] text-white py-3 rounded-md font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-[#0D9488] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-widest font-bold">
                <p>© 2024 Nomad Navigator. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                    <a href="#" className="hover:text-white transition-colors">X</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
