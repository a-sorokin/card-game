import styles from './Card.module.scss';
import { FC } from 'react';
import { Corner } from 'features/game/components/Corner/Corner';
import { Middle } from 'features/game/components/Middle/Middle';
import { RANKS, SUITS } from 'features/game/constants';

type TProps = {
  suit: SUITS;
  rank: RANKS;
};

export const Card: FC<TProps> = ({ suit, rank }) => {
  return (
    <section className={styles.card}>
      <Corner suit={suit} rank={rank} position="left" />
      <Middle />
      <Corner suit={suit} rank={rank} position="right" />
    </section>
  );
};
