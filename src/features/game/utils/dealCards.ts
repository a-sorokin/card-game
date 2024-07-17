import { RANKS_ORDER } from 'features/game/constants/cardConstants';
import { TDeck, TPlayers } from 'features/game/types';

const sortDeck = (deck: TDeck): TDeck => {
  // const sortedDeck = deck.sort((a, b) => RANKS_ORDER[a.rank] - RANKS_ORDER[b.rank]);
  return deck.sort((a, b) => RANKS_ORDER[a.rank] - RANKS_ORDER[b.rank]);

  // console.log(`sortedDeck `, sortedDeck);

  // return sortedDeck;
};

export const dealCards = (deck: TDeck, amountOfPlayers: number): TPlayers => {
  if (amountOfPlayers > 10) {
    throw new Error('Too many players');
  }

  return Array.from({ length: amountOfPlayers }, (_, index) => ({
    name: `Player ${index + 1}`,
    hand: sortDeck(deck.splice(0, 5)),
  }));
};
