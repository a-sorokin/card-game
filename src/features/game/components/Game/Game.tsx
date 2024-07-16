import styles from './Game.module.scss';
import 'features/game/styles.scss';
import { Card } from 'features/game/components/Card/Card';
import { RANKS, SUITS } from 'features/game/constants';

export const Game = () => {
  return (
    <div className={styles.game}>
      {Object.values(SUITS).map((suit) => (
        <div key={`cardRow.${suit}`} className={styles.row}>
          {Object.values(RANKS).map((rank) => (
            <Card key={`card.${suit}.${rank}`} suit={suit} rank={rank} />
          ))}
        </div>
      ))}

      <div className={styles.row}>
        {Object.values(RANKS).map((rank) => (
          <Card key={`card.closed.${rank}`} suit={SUITS.hearts} rank={rank} closed />
        ))}
      </div>
    </div>
  );
};
