import styles from './Game.module.scss';
import 'features/game/styles.scss';
import { Button } from 'components/Button/Button';
import { Player } from 'features/game/components/Player/Player';
import { GAME_STATUS } from 'features/game/constants/gameConstants';
import { useGameStore } from 'features/game/gameStore';

export const Game = () => {
  const gameStatus = useGameStore((state) => state.gameStatus);
  const startGame = useGameStore((state) => state.startGame);
  const players = useGameStore((state) => state.players);

  return (
    <div className={styles.game}>
      {gameStatus === GAME_STATUS.notStarted ? <Button onClick={startGame}>Start New Game</Button> : null}

      <section className={styles.players}>
        {players.map(({ name }, playerIndex) => (
          <Player key={`player.${name}`} playerIndex={playerIndex} />
        ))}
      </section>
    </div>
  );
};
