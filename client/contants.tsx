
import React from 'react';
// import { Deal, HeroSlide } from './types';

export const COMPASS_LOGO = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
);

export const NAVIGATION_LINKS = [
    { name: 'Home', href: '#' },
    { name: 'Deals', href: '#deals' },
    { name: 'About Us', href: '#about' }
];

export const HERO_SLIDES = [
    {
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop',
        heading: 'Explore Your Next Adventure',
        subheading: 'Discover the hidden gems of the wild where nature meet structure.'
    },
];

export const POPULAR_DESTINATIONS = [
    {
        city: 'Tokyo',
        country: 'Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop',
        tag: 'Metropolitan'
    },
    {
        city: 'Rome',
        country: 'Italy',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop',
        tag: 'Classical'
    },
    {
        city: 'Barcelona',
        country: 'Spain',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1200&auto=format&fit=crop',
        tag: 'Art Nouveau'
    },
    {
        city: 'Singapore',
        country: 'Singapore',
        image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tag: 'Futuristic'
    },
    {
        city: 'Marrakech',
        country: 'Morocco',
        image: 'https://images.unsplash.com/photo-1561642769-1bca263542e0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tag: 'Moorish'
    },
    {
        city: 'New York',
        country: 'USA',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop',
        tag: 'Art Deco'
    }
];

export const MOCK_DEALS = [
    {
        id: '1',
        title: 'Gothic Masterpieces',
        location: 'Prague, Czech Republic',
        description: 'Walk through the historical heart of Europe and explore stunning medieval spires and cobblestone charm.',
        price: '$1,299',
        discount: '15% OFF',
        image: 'https://images.unsplash.com/photo-1513807016779-d51c0c026263?q=80&w=800&auto=format&fit=crop',
        category: 'Classic',
        fullData: {
            name: 'Prague',
            description: 'Prague is the capital and largest city of the Czech Republic. It is one of the finest cities in Europe and since 1992, its historic center has been on the UNESCO World Heritage List.',
            heroImage: 'https://images.unsplash.com/photo-1541849546-2165af35934b?q=80&w=2000&auto=format&fit=crop',
            galleryImages: [
                'https://images.unsplash.com/photo-1513807016779-d51c0c026263?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519677100203-ad49327a3862?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1513360371669-4ada3d3f4be5?q=80&w=1200&auto=format&fit=crop'
            ],
            stay: [
                { name: 'Augustine Luxury Collection', description: 'Housed in a 13th-century monastery in the Mala Strana district.', highlight: 'Original vaulted ceilings', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop' },
                { name: 'The Emblem Hotel', description: 'A lifestyle hotel in the heart of Old Town with an Art Deco flair.', highlight: 'Rooftop terrace views', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop' },
                { name: 'Aria Hotel Prague', description: 'A music-themed luxury hotel in the Lesser Town area.', highlight: 'Musical history', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop' },
                { name: 'Four Seasons Hotel', description: 'Located in the Old Town, offering views of the Charles Bridge.', highlight: 'Riverside Luxury', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop' },
                { name: 'BoHo Prague Hotel', description: 'Exclusive boutique hotel in a former post office.', highlight: 'Modern Design', image: 'https://images.unsplash.com/photo-1551882547-ff43c63f1c64?q=80&w=800&auto=format&fit=crop' }
            ],
            attractions: [
                { name: 'Prague Castle', description: 'The largest ancient castle complex in the world.', image: 'https://images.unsplash.com/photo-1513807016779-d51c0c026263?q=80&w=800&auto=format&fit=crop' },
                { name: 'Charles Bridge', description: 'A historic Gothic stone bridge with 30 statues.', image: 'https://images.unsplash.com/photo-1519677100203-ad49327a3862?q=80&w=1200&auto=format&fit=crop' },
                { name: 'Dancing House', description: 'Famous deconstructivist landmark by Frank Gehry.', image: 'https://images.unsplash.com/photo-1520608561142-888463994385?q=80&w=800&auto=format&fit=crop' },
                { name: 'St. Vitus Cathedral', description: 'A spiritual symbol of the Czech state.', image: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=800&auto=format&fit=crop' },
                { name: 'Old Town Hall', description: 'Home to the world-famous astronomical clock.', image: 'https://images.unsplash.com/photo-1513360371669-4ada3d3f4be5?q=80&w=1200&auto=format&fit=crop' }
            ],
            food: {
                items: ['Trdelník (Chimney Cake)', 'Svíčková', 'Pilsner Beer', 'Goulash'],
                places: [
                    { name: 'Café Savoy', description: 'Grand historic café with a Neo-Renaissance ceiling.', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop' },
                    { name: 'Lokál Dlouhááá', description: 'Traditional pub serving homemade local dishes.', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop' },
                    { name: 'Eska', description: 'Nordic-style restaurant in a former factory.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop' },
                    { name: 'La Degustation', description: 'Michelin-starred focus on traditional Czech recipes.', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop' }
                ]
            },
            activities: [
                { name: 'Vltava River Cruise', description: 'See city lights from the water at sunset.' },
                { name: 'Old Town Walking Tour', description: 'Deep dive into the Gothic heart.' },
                { name: 'Beer Tasting Tour', description: 'Explore the heritage of Czech pilsners.' },
                { name: 'Puppet Theater Show', description: 'Experience a unique local art form.' },
                { name: 'Jewish Quarter Visit', description: 'Historical tour of Josefov district.' }
            ]
        }
    },
    {
        id: '2',
        title: 'Modernism in the Desert',
        location: 'Dubai, UAE',
        description: 'Experience the cutting edge of sky-high architecture in the heart of the Emirates.',
        price: '$2,450',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
        category: 'Modern',
        fullData: {
            name: 'Dubai',
            description: 'Dubai is a city and emirate in the United Arab Emirates luxury shopping, ultramodern architecture and a lively nightlife scene.',
            heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop',
            galleryImages: [
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop'
            ],
            stay: [
                { name: 'Burj Al Arab', description: 'The world\'s only 7-star hotel, shaped like a sail.', highlight: 'Ultra luxury', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop' },
                { name: 'Address Sky View', description: 'Infinity pool connecting two towers.', highlight: 'Skyline views', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop' },
                { name: 'Atlantis The Royal', description: 'A masterpiece of structural engineering on the Palm.', highlight: 'Modern Marvel', image: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=800&auto=format&fit=crop' },
                { name: 'Armani Hotel', description: 'Located within the Burj Khalifa itself.', highlight: 'Designer Luxury', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop' },
                { name: 'Jumeirah Al Naseem', description: 'Beachfront luxury with architectural brilliance.', highlight: 'Oceanic Views', image: 'https://images.unsplash.com/photo-1571011294489-f3319837bd31?q=80&w=800&auto=format&fit=crop' }
            ],
            attractions: [
                { name: 'Burj Khalifa', description: 'The tallest building in the world.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
                { name: 'Museum of the Future', description: 'Innovative architectural torus design.', image: 'https://images.unsplash.com/photo-1634712382125-99d605481775?q=80&w=800&auto=format&fit=crop' },
                { name: 'Dubai Frame', description: 'The world\'s largest picture frame.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop' },
                { name: 'Cayan Tower', description: 'Stunning 90-degree twist skyscraper.', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=800&auto=format&fit=crop' },
                { name: 'Ain Dubai', description: 'The largest observation wheel on Earth.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop' }
            ],
            food: {
                items: ['Luqaimat', 'Camel Milk Chocolate', 'Arabic Coffee', 'Shawarma'],
                places: [
                    { name: 'Zuma Dubai', description: 'Contemporary Japanese dining.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop' },
                    { name: 'Al Fanar', description: 'Authentic Emirati cuisine.', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop' },
                    { name: 'Ossiano', description: 'Underwater dining experience with a view of the aquarium.', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop' },
                    { name: 'Tresind Studio', description: 'Immersive Indian fine dining.', image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=800&auto=format&fit=crop' }
                ]
            },
            activities: [
                { name: 'Desert Safari', description: 'Dune bashing at sunset.' },
                { name: 'Palm Jumeirah Heli-tour', description: 'View the palm from the sky.' },
                { name: 'Dubai Fountain Show', description: 'World-famous choreographed water dance.' },
                { name: 'Gold Souk Walk', description: 'Traditional market exploration.' },
                { name: 'Kite Beach Evening', description: 'Relaxed seaside atmosphere with food trucks.' }
            ]
        }
    },
    {
        id: '3',
        title: 'Brutalist Retreats',
        location: 'London, UK',
        description: 'A deep dive into the concrete poetry of London’s post-war architectural icons.',
        price: '$980',
        discount: 'Early Bird',
        image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800&auto=format&fit=crop',
        category: 'Modern'
    },
    {
        id: '4',
        title: 'Alpine Zen Sanctuary',
        location: 'Swiss Alps, Switzerland',
        description: 'Minimalist architecture meets the grandeur of the Alps for ultimate tranquility.',
        price: '$3,100',
        image: 'https://images.unsplash.com/photo-1513807016779-d51c0c026263?q=80&w=800&auto=format&fit=crop',
        category: 'Nature'
    }
];
