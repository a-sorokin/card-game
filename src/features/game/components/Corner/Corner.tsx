import styles from './Corner.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { SUITS_COLORS, SUITS_ICONS } from 'features/game/components/Card/constants';
import { RANKS, SUITS } from 'features/game/constants';

type TProps = {
  suit: SUITS;
  rank: RANKS;
  position: 'left' | 'right';
};

export const Corner: FC<TProps> = ({ suit, rank, position }) => {
  return (
    <div
      className={clsx(styles[SUITS_COLORS[suit]], {
        [styles.leftCorner]: position === 'left',
        [styles.rightCorner]: position === 'right',
      })}
    >
      <div>{rank}</div>
      <div className={styles.suit}>{SUITS_ICONS[suit]}</div>
    </div>
  );
};
