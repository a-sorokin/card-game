import styles from './Card.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { Back } from 'features/game/components/Back/Back';
import { Corner } from 'features/game/components/Corner/Corner';
import { Middle } from 'features/game/components/Middle/Middle';
import { SUITS_COLORS } from 'features/game/constants/cardConstants';
import { TCard } from 'features/game/types';

export const Card: FC<TCard> = ({ suit, rank, closed, recentlyOpened }) => {
  if (closed) {
    return (
      <section className={styles.card}>
        <Back />
      </section>
    );
  }
  return (
    <section
      className={clsx(styles.card, styles[SUITS_COLORS[suit]], {
        [styles.highlighted]: recentlyOpened,
      })}
    >
      <Corner suit={suit} rank={rank} position="left" />
      <Middle suit={suit} rank={rank} />
      <Corner suit={suit} rank={rank} position="right" />
    </section>
  );
};
