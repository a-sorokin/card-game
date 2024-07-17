import styles from './Player.module.scss';
import { FC } from 'react';
import { Card } from 'features/game/components/Card/Card';
import { useGetPlayer } from 'features/game/hooks/useGetPlayer';

type TProps = {
  playerIndex: number;
};

export const Player: FC<TProps> = ({ playerIndex }) => {
  const { name, hand } = useGetPlayer(playerIndex);

  return (
    <div className={styles.player}>
      <div>{name}</div>

      <div className={styles.cards}>
        {hand.map((card, cardIndex) => (
          <Card key={`card.${name}.${cardIndex}`} {...card} />
        ))}
      </div>
    </div>
  );
};
