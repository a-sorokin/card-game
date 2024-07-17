import styles from './Game.module.scss';
import 'features/game/styles.scss';
import { useEffect } from 'react';
import { GameControls } from 'features/game/components/GameControls/GameControls';
import { Player } from 'features/game/components/Player/Player';
import { useGameStore } from 'features/game/gameStore';

export const Game = () => {
  const players = useGameStore((state) => state.players);
  const initGame = useGameStore((state) => state.initGame);

  useEffect(() => {
    initGame();
  }, [initGame]);

  return (
    <div className={styles.game}>
      <GameControls />

      <section className={styles.players}>
        {players.map(({ name }, playerIndex) => (
          <Player key={`player.${name}`} playerIndex={playerIndex} />
        ))}
      </section>
    </div>
  );
};
