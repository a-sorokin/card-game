import { TDeck } from 'features/game/types';

export const sortDeck = (deck: TDeck): TDeck => {
  return deck.sort((a, b) => a.weight - b.weight);
};
