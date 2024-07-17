import { RANKS, SUITS } from 'features/game/constants/cardConstants';

export type TCard = {
  closed: boolean;
  rank: RANKS;
  recentlyOpened: boolean;
  suit: SUITS;
  weight: number;
};

export type TDeck = TCard[];

export type TPlayer = {
  name: string;
  hand: TDeck;
};

export type TPlayers = TPlayer[];
