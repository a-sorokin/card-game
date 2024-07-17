import styles from './GameControls.module.scss';
import { GameButton } from 'features/game/components/GameButton';
import { GAME_STATUS } from 'features/game/constants/gameConstants';
import { useGameStore } from 'features/game/gameStore';

export const GameControls = () => {
  const gameStatus = useGameStore((state) => state.gameStatus);
  const round = useGameStore((state) => state.round);

  if (gameStatus !== GAME_STATUS.started) {
    return (
      <div className={styles.newGame}>
        <GameButton />
      </div>
    );
  }
  return (
    <div className={styles.controls}>
      <span className={styles.round}>Current Round: {round}</span>

      <div className={styles.nextRound}>
        <GameButton />
      </div>
    </div>
  );
};
