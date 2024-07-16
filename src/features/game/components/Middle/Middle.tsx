import styles from './Middle.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { RANKS_ICONS } from 'features/game/components/Middle/constants';
import { RANKS, SUITS, SUITS_COLORS, SUITS_ICONS } from 'features/game/constants';

type TProps = {
  suit: SUITS;
  rank: RANKS;
};

export const Middle: FC<TProps> = ({ suit, rank }) => {
  return (
    <div className={clsx(styles.middle, styles[SUITS_COLORS[suit]])}>
      <div className={styles.firstIcon}>{RANKS_ICONS[rank][suit]}</div>
      <div className={styles.secondIcon}>{SUITS_ICONS[suit]}</div>
    </div>
  );
};
