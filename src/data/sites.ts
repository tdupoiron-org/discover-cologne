import { Site } from '@/types/site'

export const kolnSites: Site[] = [
  {
    id: 'cologne-cathedral',
    name: 'Cologne Cathedral (Kölner Dom)',
    description: 'Iconic Gothic cathedral and UNESCO World Heritage Site. Climb 533 steps to the tower for breathtaking city views. Houses the Shrine of the Three Kings.',
    image: 'https://images.unsplash.com/photo-1568271710-7de3a6f17641?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287',
    duration: '2-3 hours',
    crowdLevel: 'high',
    rating: 4.9,
    popularity: 'must-see',
    category: 'Cathedral'
  },
  {
    id: 'old-town',
    name: 'Old Town (Altstadt)',
    description: 'Historic heart of Cologne with colorful buildings, traditional brewhouses, and charming squares. Perfect for exploring German culture and trying authentic Kölsch beer.',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1288',
    duration: '2-3 hours',
    crowdLevel: 'medium',
    rating: 4.7,
    popularity: 'must-see',
    category: 'Neighborhood'
  },
  {
    id: 'hohenzollern-bridge',
    name: 'Hohenzollern Bridge',
    description: 'Famous bridge adorned with thousands of love locks. Offers stunning views of the cathedral and Rhine River, especially at sunset.',
    image: 'https://images.unsplash.com/photo-1571048314695-3f4d5ad75a8f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940',
    duration: '30-45 min',
    crowdLevel: 'medium',
    rating: 4.8,
    popularity: 'must-see',
    category: 'Landmark'
  },
  {
    id: 'chocolate-museum',
    name: 'Chocolate Museum',
    description: 'Interactive museum showcasing 5,000 years of chocolate history. Features a chocolate fountain and offers tastings. Perfect for families and chocolate lovers.',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
    duration: '1.5-2 hours',
    crowdLevel: 'medium',
    rating: 4.6,
    popularity: 'popular',
    category: 'Museum'
  },
  {
    id: 'rhine-river-cruise',
    name: 'Rhine River Cruise',
    description: 'Relaxing boat ride along the historic Rhine offering unique views of Cologne\'s skyline, bridges, and riverside architecture.',
    image: 'https://images.unsplash.com/photo-156486887307-1de0df11da9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1344',
    duration: '1 hour',
    crowdLevel: 'low',
    rating: 4.5,
    popularity: 'popular',
    category: 'Experience'
  },
  {
    id: 'belgian-quarter',
    name: 'Belgian Quarter',
    description: 'Trendy neighborhood with boutique shops, cafes, and street art. Known for its vibrant nightlife and multicultural atmosphere.',
    image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1288',
    duration: '2-3 hours',
    crowdLevel: 'medium',
    rating: 4.6,
    popularity: 'popular',
    category: 'Neighborhood'
  },
  {
    id: 'roman-germanic-museum',
    name: 'Roman-Germanic Museum',
    description: 'Archaeological museum displaying Roman artifacts found in Cologne. Houses the famous Dionysus mosaic and ancient glass collection.',
    image: 'https://images.unsplash.com/photo-1566127444979-b3d2b6fd6d6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
    duration: '1-1.5 hours',
    crowdLevel: 'low',
    rating: 4.4,
    popularity: 'hidden-gem',
    category: 'Museum'
  },
  {
    id: 'cologne-zoo',
    name: 'Cologne Zoo',
    description: 'One of Germany\'s oldest zoos featuring over 10,000 animals. Includes impressive aquarium and tropical rainforest house.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
    duration: '2-3 hours',
    crowdLevel: 'medium',
    rating: 4.6,
    popularity: 'popular',
    category: 'Attraction'
  },
  {
    id: 'kolumba-museum',
    name: 'Kolumba Museum',
    description: 'Award-winning art museum built over medieval church ruins. Combines ancient foundations with modern architecture by Peter Zumthor.',
    image: 'https://images.unsplash.com/photo-1578924608675-c6d5a0b2b1b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
    duration: '1.5-2 hours',
    crowdLevel: 'low',
    rating: 4.7,
    popularity: 'hidden-gem',
    category: 'Museum'
  },
  {
    id: 'rheinpark',
    name: 'Rheinpark',
    description: 'Expansive riverside park perfect for picnics, jogging, and relaxing. Take the cable car across the Rhine for panoramic city views.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1288',
    duration: '1-2 hours',
    crowdLevel: 'low',
    rating: 4.5,
    popularity: 'popular',
    category: 'Park'
  },
  {
    id: 'eau-de-cologne',
    name: 'Farina Fragrance Museum',
    description: 'Birthplace of Eau de Cologne (Kölnisch Wasser). Learn about the 300-year history of the world\'s oldest fragrance brand.',
    image: 'https://images.unsplash.com/photo-1588405748879-acb4655df2a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
    duration: '1 hour',
    crowdLevel: 'low',
    rating: 4.4,
    popularity: 'hidden-gem',
    category: 'Museum'
  },
  {
    id: 'st-gereon',
    name: 'St. Gereon\'s Basilica',
    description: 'Remarkable Romanesque church with a unique decagonal dome. One of twelve Romanesque churches in Cologne\'s historic center.',
    image: 'https://images.unsplash.com/photo-1548625149-720134d51a3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
    duration: '30-45 min',
    crowdLevel: 'low',
    rating: 4.6,
    popularity: 'hidden-gem',
    category: 'Church'
  }
]
