import { useCallback, useMemo } from 'react';
import { Button } from 'components/Button/Button';
import { GAME_STATUS } from 'features/game/constants/gameConstants';
import { useGameStore } from 'features/game/gameStore';

export const GameButton = () => {
  const gameStatus = useGameStore((state) => state.gameStatus);
  const nextRound = useGameStore((state) => state.nextRound);
  const restartGame = useGameStore((state) => state.restartGame);

  const clickActions = useMemo(
    () => ({
      [GAME_STATUS.notStarted]: nextRound,
      [GAME_STATUS.started]: nextRound,
      [GAME_STATUS.finished]: restartGame,
    }),
    [nextRound, restartGame],
  );

  const onClick = useCallback(() => {
    clickActions[gameStatus]();
  }, [clickActions, gameStatus]);

  return <Button onClick={onClick}>{gameStatus !== GAME_STATUS.started ? 'Start New Game' : 'Deal Next Round'}</Button>;
};
