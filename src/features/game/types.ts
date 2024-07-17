import { RANKS, SUITS } from 'features/game/constants/cardConstants';

export type TCard = {
  suit: SUITS;
  rank: RANKS;
  closed: boolean;
};

export type TDeck = TCard[];

export type TPlayer = {
  name: string;
  hand: TDeck;
};

export type TPlayers = TPlayer[];
