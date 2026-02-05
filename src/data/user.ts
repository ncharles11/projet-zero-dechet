import type { User, Badge } from '../types';

export const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Crabe Nettoyeur',
    description: 'Premier ramassage effectué',
    icon: '🦀',
    unlocked: true
  },
  {
    id: '2',
    name: 'Gardien du Phare',
    description: '10 événements participés',
    icon: '🗼',
    unlocked: true
  },
  {
    id: '3',
    name: 'Vague d\'Or',
    description: '50kg de déchets collectés',
    icon: '🌊',
    unlocked: true
  },
  {
    id: '4',
    name: 'Éco-Héros',
    description: '100kg de déchets collectés',
    icon: '🦸',
    unlocked: false
  },
  {
    id: '5',
    name: 'Master Océan',
    description: '25 événements participés',
    icon: '👑',
    unlocked: false
  }
];

export const mockUser: User = {
  id: '1',
  name: 'François Jaffrennou',
  level: 7,
  xp: 650,
  badges: mockBadges,
  totalWasteCollected: 47.5,
  eventsParticipated: 12
};
