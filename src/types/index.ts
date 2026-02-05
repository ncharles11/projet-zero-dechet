export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  tags: string[];
  description: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  level: number;
  xp: number;
  badges: Badge[];
  totalWasteCollected: number;
  eventsParticipated: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}
