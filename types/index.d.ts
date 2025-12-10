// types/index.d.ts

export interface Prize {
  id: string;
  name: string;
  participants: string[];
  winnerSlots: number;
  winners: Winner[];
}

export interface Winner {
  prizeName: string;
  winnerName: string;
  timestamp: Date;
}
