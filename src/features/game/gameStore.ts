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

  initGame: () => void;
  nextRound: () => void;
  restartGame: () => void;
};

export const useGameStore = create<TStore>((set, get) => ({
  gameStatus: GAME_STATUS.notStarted,
  deck: [],
  players: [],
  round: 0,

  initGame: () => {
    const deck = createDeck();
    const players = dealCards(deck, AMOUNT_OF_PLAYERS);

    set({
      deck,
      gameStatus: GAME_STATUS.notStarted,
      players,
      round: 0,
    });
  },

  nextRound: () => {
    set((state) => {
      const newRound = state.round + 1;

      return {
        players: openCards(state.players, state.round),
        round: newRound,
        gameStatus: newRound === AMOUNT_OF_ROUNDS ? GAME_STATUS.finished : GAME_STATUS.started,
      };
    });
  },

  restartGame: () => {
    get().initGame();
    get().nextRound();
  },
}));
