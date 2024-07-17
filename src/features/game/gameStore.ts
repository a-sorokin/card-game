import { create } from 'zustand';
import { AMOUNT_OF_PLAYERS, AMOUNT_OF_ROUNDS, GAME_STATUS } from 'features/game/constants/gameConstants';
import { TDeck, TPlayers } from 'features/game/types';
import { createDeck } from 'features/game/utils/createDeck';
import { dealCards } from 'features/game/utils/dealCards';
import { openCards } from 'features/game/utils/openCards';

type TStore = {
  gameStatus: GAME_STATUS;
  deck: TDeck;
  players: TPlayers;
  round: number;

  startGame: () => void;
  nextRound: () => void;
};

export const useGameStore = create<TStore>((set) => ({
  gameStatus: GAME_STATUS.notStarted,
  deck: [],
  players: [],
  round: 0,

  startGame: () => {
    const deck = createDeck();
    const playersAllClosed = dealCards(deck, AMOUNT_OF_PLAYERS);
    const playersFirstOpened = openCards(playersAllClosed, 0);

    set({
      deck,
      gameStatus: GAME_STATUS.started,
      players: playersFirstOpened,
      round: 1,
    });
  },

  nextRound: () => {
    set((state) => {
      const newRound = state.round + 1;

      return {
        players: openCards(state.players, state.round),
        round: newRound,
        gameStatus: newRound === AMOUNT_OF_ROUNDS ? GAME_STATUS.finished : state.gameStatus,
      };
    });
  },
}));
