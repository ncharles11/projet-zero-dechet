export interface DechetItem {
  id: string;
  name: string;
  description: string;
  rarity: 'common' | 'rare' | 'legendary';
  isUnlocked: boolean;
  icon: string;
}

export const dechetDexItems: DechetItem[] = [
  {
    id: '1',
    name: 'Mégot Infini',
    description: 'Le trésor le plus commun de nos plages',
    rarity: 'common',
    isUnlocked: true,
    icon: '🚬'
  },
  {
    id: '2',
    name: 'Bouteille Plastique',
    description: 'Classique mais toujours dérangeante',
    rarity: 'common',
    isUnlocked: true,
    icon: '🍾'
  },
  {
    id: '3',
    name: 'Canette Rouillée',
    description: 'Survivante des années 80',
    rarity: 'rare',
    isUnlocked: false,
    icon: '🥫'
  },
  {
    id: '4',
    name: 'Filet Fantôme',
    description: 'Piège invisible pour la faune marine',
    rarity: 'legendary',
    isUnlocked: false,
    icon: '🕸️'
  },
  {
    id: '5',
    name: 'Pneu Oublié',
    description: 'Monstre noir des fonds marins',
    rarity: 'rare',
    isUnlocked: true,
    icon: '🛞'
  },
  {
    id: '6',
    name: 'Trésor de Pirate',
    description: 'Légende ou réalité ?',
    rarity: 'legendary',
    isUnlocked: false,
    icon: '💎'
  },
  {
    id: '7',
    name: 'Sac en Plastique',
    description: 'Fantôme volant des océans',
    rarity: 'common',
    isUnlocked: true,
    icon: '🛍️'
  },
  {
    id: '8',
    name: 'Verre Cassé',
    description: 'Dangereux et tranchant',
    rarity: 'rare',
    isUnlocked: false,
    icon: '🔪'
  },
  {
    id: '9',
    name: 'Bouchon Mystère',
    description: 'Collection multicolore infinie',
    rarity: 'common',
    isUnlocked: true,
    icon: '🔴'
  },
  {
    id: '10',
    name: 'Batterie Marine',
    description: 'Poison électrique pour l\'océan',
    rarity: 'legendary',
    isUnlocked: false,
    icon: '🔋'
  },
  {
    id: '11',
    name: 'Chaussure Solitaire',
    description: 'L\'autre où est-elle ?',
    rarity: 'rare',
    isUnlocked: true,
    icon: '👟'
  },
  {
    id: '12',
    name: 'Corail Fossile',
    description: 'Mémoire d\'un océan disparu',
    rarity: 'legendary',
    isUnlocked: false,
    icon: '🪸'
  }
];
