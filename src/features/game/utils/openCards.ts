import { TDeck, TPlayers } from 'features/game/types';

const openCard = (deck: TDeck, cardIndex: number) => {
  const newDeck = structuredClone(deck);
  newDeck.forEach((card) => (card.recentlyOpened = false));
  newDeck[cardIndex].closed = false;
  newDeck[cardIndex].recentlyOpened = true;
  return newDeck;
};

export const openCards = (players: TPlayers, cardIndex: number): TPlayers => {
  return players.map((player) => {
    return { ...player, hand: openCard(player.hand, cardIndex) };
  });
};
