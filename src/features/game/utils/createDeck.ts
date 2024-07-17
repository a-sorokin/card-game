import { RANKS, SUITS } from 'features/game/constants/cardConstants';
import { TDeck } from 'features/game/types';

const shuffleDeck = (deck: TDeck): TDeck => {
  return deck.sort(() => Math.random() - 0.5);
};

export const createDeck = (): TDeck => {
  const suits = Object.values(SUITS);
  const ranks = Object.values(RANKS);

  const deck: TDeck = [];

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ suit, rank, closed: true });
    });
  });

  return shuffleDeck(deck);
};
