import { useGameStore } from 'features/game/gameStore';

export const useGetPlayer = (playerIndex: number) => {
  const players = useGameStore((state) => state.players);
  return players[playerIndex];
};
