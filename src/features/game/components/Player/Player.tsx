import styles from './Player.module.scss';
import { FC, useMemo } from 'react';
import { Card } from 'features/game/components/Card/Card';
import { useGetPlayer } from 'features/game/hooks/useGetPlayer';
import { sortDeck } from 'features/game/utils/sortDeck';

type TProps = {
  playerIndex: number;
};

export const Player: FC<TProps> = ({ playerIndex }) => {
  const { name, hand } = useGetPlayer(playerIndex);

  const openedCards = useMemo(() => {
    const openedCards = hand.filter((card) => !card.closed);
    return sortDeck(openedCards);
  }, [hand]);

  const closedCards = useMemo(() => {
    return hand.filter((card) => card.closed);
  }, [hand]);

  return (
    <div className={styles.player}>
      <div>{name}</div>

      <div className={styles.cards}>
        {openedCards.map((card, cardIndex) => (
          <Card key={`card.${name}.${cardIndex}`} {...card} />
        ))}

        {closedCards.map((card, cardIndex) => (
          <Card key={`card.${name}.${cardIndex}`} {...card} />
        ))}
      </div>
    </div>
  );
};
