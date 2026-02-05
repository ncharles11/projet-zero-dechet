import type { Event } from '../types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Nettoyage Plage du Moulin Blanc',
    date: '2024-02-10T09:00:00',
    location: 'Plouzané',
    participants: 12,
    maxParticipants: 25,
    tags: ['Plastique', 'Mégots'],
    description: 'Rejoignez-nous pour nettoyer l\'une des plus belles plages de la rade !',
    image: '🏖️'
  },
  {
    id: '2',
    title: 'Operation Port Propre - Brest',
    date: '2024-02-11T14:00:00',
    location: 'Port de Brest',
    participants: 8,
    maxParticipants: 15,
    tags: ['Déchets marins', 'Verre'],
    description: 'Nettoyage des quais et zones d\'amarrage du port de Brest.',
    image: '⚓'
  },
  {
    id: '3',
    title: 'Pointe du Diable - Mission Zéro Plastique',
    date: '2024-02-12T10:00:00',
    location: 'Pointe du Diable',
    participants: 18,
    maxParticipants: 30,
    tags: ['Plastique', 'Filets de pêche'],
    description: 'Site mythique à protéger ! Concentration sur les micro-plastiques.',
    image: '🗿'
  },
  {
    id: '4',
    title: 'Plougastel Coastal Cleanup',
    date: '2024-02-13T11:00:00',
    location: 'Plougastel',
    participants: 15,
    maxParticipants: 20,
    tags: ['Mégots', 'Aluminium'],
    description: 'Nettoyage des sentiers côtiers et criques de Plougastel.',
    image: '🌊'
  },
  {
    id: '5',
    title: 'Rade de Brest - Grand Nettoyage',
    date: '2024-02-14T09:30:00',
    location: 'Multiple spots',
    participants: 45,
    maxParticipants: 100,
    tags: ['Tout type', 'Équipe'],
    description: 'Le plus grand événement du mois ! Plusieurs spots simultanés.',
    image: '🚤'
  }
];
