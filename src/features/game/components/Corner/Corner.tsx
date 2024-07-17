import styles from './Corner.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { RANKS, SUITS, SUITS_ICONS } from 'features/game/constants/cardConstants';

type TProps = {
  suit: SUITS;
  rank: RANKS;
  position: 'left' | 'right';
};

export const Corner: FC<TProps> = ({ suit, rank, position }) => {
  return (
    <div
      className={clsx({
        [styles.leftCorner]: position === 'left',
        [styles.rightCorner]: position === 'right',
      })}
    >
      <div>{rank}</div>
      <div className={styles.suit}>{SUITS_ICONS[suit]}</div>
    </div>
  );
};
