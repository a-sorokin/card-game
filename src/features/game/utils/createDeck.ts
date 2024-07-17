import { RANKS, RANKS_WEIGHT, SUITS, SUITS_WEIGHT } from 'features/game/constants/cardConstants';
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
      deck.push({
        closed: true,
        rank,
        suit,
        weight: RANKS_WEIGHT[rank] + SUITS_WEIGHT[suit],
      });
    });
  });

  return shuffleDeck(deck);
};
