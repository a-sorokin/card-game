import styles from './Card.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { Back } from 'features/game/components/Back/Back';
import { Corner } from 'features/game/components/Corner/Corner';
import { Middle } from 'features/game/components/Middle/Middle';
import { RANKS, SUITS, SUITS_COLORS } from 'features/game/constants/cardConstants';

type TProps = {
  rank: RANKS;
  suit: SUITS;
  closed: boolean;

  highlighted?: boolean;
};

export const Card: FC<TProps> = ({ suit, rank, closed, highlighted }) => {
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
        [styles.highlighted]: highlighted,
      })}
    >
      <Corner suit={suit} rank={rank} position="left" />
      <Middle suit={suit} rank={rank} />
      <Corner suit={suit} rank={rank} position="right" />
    </section>
  );
};
