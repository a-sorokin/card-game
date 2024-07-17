import { AMOUNT_OF_ROUNDS } from 'features/game/constants/gameConstants';
import { TDeck, TPlayers } from 'features/game/types';

export const dealCards = (deck: TDeck, amountOfPlayers: number): TPlayers => {
  if (amountOfPlayers > 10) {
    throw new Error('Too many players');
  }

  return Array.from({ length: amountOfPlayers }, (_, index) => ({
    name: `Player ${index + 1}`,
    hand: deck.splice(0, AMOUNT_OF_ROUNDS),
  }));
};
