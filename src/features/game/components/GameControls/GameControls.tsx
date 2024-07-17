import styles from './GameControls.module.scss';
import { Button } from 'components/Button/Button';
import { GAME_STATUS } from 'features/game/constants/gameConstants';
import { useGameStore } from 'features/game/gameStore';

export const GameControls = () => {
  const gameStatus = useGameStore((state) => state.gameStatus);
  const startGame = useGameStore((state) => state.startGame);
  const round = useGameStore((state) => state.round);

  if (gameStatus === GAME_STATUS.notStarted) {
    return <Button onClick={startGame}>Start New Game</Button>;
  }

  return (
    <div className={styles.controls}>
      <span className={styles.round}>Current Round: {round}</span>

      <div className={styles.nextRound}>
        <Button onClick={() => {}}>Deal Next Round</Button>
      </div>
    </div>
  );
};
