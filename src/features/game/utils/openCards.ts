import { TDeck, TPlayers } from 'features/game/types';

const openCard = (deck: TDeck, cardIndex: number) => {
  const newDeck = structuredClone(deck);
  newDeck[cardIndex].closed = false;
  return newDeck;
};

export const openCards = (players: TPlayers, cardIndex: number): TPlayers => {
  return players.map((player) => {
    return { ...player, hand: openCard(player.hand, cardIndex) };
  });
};
