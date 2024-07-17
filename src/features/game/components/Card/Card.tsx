import styles from './Card.module.scss';
import { FC } from 'react';
import { Back } from 'features/game/components/Back/Back';
import { Corner } from 'features/game/components/Corner/Corner';
import { Middle } from 'features/game/components/Middle/Middle';
import { RANKS, SUITS } from 'features/game/constants/cardConstants';

type TProps = {
  suit: SUITS;
  rank: RANKS;
  closed?: boolean;
};

export const Card: FC<TProps> = ({ suit, rank, closed }) => {
  if (closed) {
    return (
      <section className={styles.card}>
        <Back />
      </section>
    );
  }
  return (
    <section className={styles.card}>
      <Corner suit={suit} rank={rank} position="left" />
      <Middle suit={suit} rank={rank} />
      <Corner suit={suit} rank={rank} position="right" />
    </section>
  );
};
