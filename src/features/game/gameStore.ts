import { create } from 'zustand';
import { AMOUNT_OF_PLAYERS, GAME_STATUS } from 'features/game/constants/gameConstants';
import { TDeck, TPlayers } from 'features/game/types';
import { createDeck } from 'features/game/utils/createDeck';
import { dealCards } from 'features/game/utils/dealCards';

type TStore = {
  gameStatus: GAME_STATUS;
  deck: TDeck;
  players: TPlayers;
  round: number;

  startGame: () => void;
};

export const useGameStore = create<TStore>((set) => ({
  gameStatus: GAME_STATUS.notStarted,
  deck: [],
  players: [],
  round: 0,

  startGame: () => {
    const deck = createDeck();
    const players = dealCards(deck, AMOUNT_OF_PLAYERS);

    set({ gameStatus: GAME_STATUS.started, deck, players, round: 1 });
  },
}));
