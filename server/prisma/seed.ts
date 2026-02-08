// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Cities
  const paris = await prisma.city.upsert({
    where: { slug: 'paris' },
    update: {},
    create: {
      name: 'Paris',
      country: 'France',
      description: 'City of Light, famous for Eiffel Tower and romantic ambiance.',
      avg_daily_cost: 120,
      best_time_to_visit: 'Apr-Jun, Sep-Oct',
      rating: 4.7,
      slug: 'paris',
      images: [
        'https://images.unsplash.com/photo-1524390241445-5249cd6288f9?w=800',
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
      ],
    },
  });

  const tokyo = await prisma.city.upsert({
    where: { slug: 'tokyo' },
    update: {},
    create: {
      name: 'Tokyo',
      country: 'Japan',
      description: 'Futuristic metropolis blending tradition and modernity.',
      avg_daily_cost: 100,
      best_time_to_visit: 'Mar-May, Sep-Nov',
      rating: 4.8,
      slug: 'tokyo',
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
        'https://images.unsplash.com/photo-1564507592333-c91648827792?w=800'
      ],
    },
  });

  const newYork = await prisma.city.upsert({
    where: { slug: 'new-york' },
    update: {},
    create: {
      name: 'New York',
      country: 'USA',
      description: 'The Big Apple - never sleeps, endless energy and diversity.',
      avg_daily_cost: 150,
      best_time_to_visit: 'Apr-Jun, Sep-Oct',
      rating: 4.6,
      slug: 'new-york',
      images: [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'
      ],
    },
  });

  // Seed Attractions for Paris
  await prisma.attraction.createMany({
    data: [
      {
        name: 'Eiffel Tower',
        rating: 4.8,
        entry_fee: 29.40,
        images: ['https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'],
        city_id: paris.id,
      },
      {
        name: 'Louvre Museum',
        rating: 4.7,
        entry_fee: 22.00,
        images: ['https://images.unsplash.com/photo-1519445162614-32eabf7d8f0d?w=800'],
        city_id: paris.id,
      },
      {
        name: 'Notre-Dame Cathedral',
        rating: 4.6,
        entry_fee: 10.00,
        images: ['https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800'],
        city_id: paris.id,
      },
    ],
  });

  // Seed Activities for Paris
  await prisma.activity.createMany({
    data: [
      {
        name: 'Seine River Cruise',
        category: 'boat-tour',
        rating: 4.5,
        price_min: 15,
        price_max: 25,
        images: ['https://images.unsplash.com/photo-1559873609-9aa9474d8d9e?w=800'],
        city_id: paris.id,
      },
      {
        name: 'Montmartre Walking Tour',
        category: 'walking-tour',
        rating: 4.7,
        price_min: 20,
        price_max: 35,
        images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'],
        city_id: paris.id,
      },
    ],
  });

  // Seed Stays for Paris
  await prisma.stay.createMany({
    data: [
      {
        name: 'Hôtel de Crillon',
        type: 'luxury',
        price_min: 800,
        price_max: 1500,
        rating: 4.9,
        images: ['https://images.unsplash.com/photo-1571896349840-0d711ec960b8?w=800'],
        city_id: paris.id,
      },
      {
        name: 'Le Pigalle',
        type: 'boutique',
        price_min: 250,
        price_max: 450,
        rating: 4.6,
        images: ['https://images.unsplash.com/photo-1571896349840-0d711ec960b8?w=800'],
        city_id: paris.id,
      },
    ],
  });

  // Seed Foods for Paris
  await prisma.food.createMany({
    data: [
      {
        name: 'Croissant',
        rating: 4.8,
        avg_price: 3,
        type: 'pastry',
        images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800'],
        city_id: paris.id,
      },
      {
        name: 'Escargot',
        rating: 4.3,
        avg_price: 18,
        type: 'appetizer',
        images: ['https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800'],
        city_id: paris.id,
      },
    ],
  });

  // Seed Attractions for Tokyo (similar pattern)
  await prisma.attraction.createMany({
    data: [
      {
        name: 'Shibuya Crossing',
        rating: 4.7,
        entry_fee: 0,
        images: ['https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800'],
        city_id: tokyo.id,
      },
      {
        name: 'Senso-ji Temple',
        rating: 4.6,
        entry_fee: 0,
        images: ['https://images.unsplash.com/photo-1558633214-b2e66479820d?w=800'],
        city_id: tokyo.id,
      },
    ],
  });

  // Seed Attractions for New York
  await prisma.attraction.createMany({
    data: [
      {
        name: 'Statue of Liberty',
        rating: 4.7,
        entry_fee: 25.50,
        images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'],
        city_id: newYork.id,
      },
      {
        name: 'Central Park',
        rating: 4.8,
        entry_fee: 0,
        images: ['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800'],
        city_id: newYork.id,
      },
    ],
  });

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
