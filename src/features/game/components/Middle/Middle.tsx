import styles from './Middle.module.scss';
import { FC } from 'react';
import { RANKS_ICONS } from 'features/game/components/Middle/constants';
import { RANKS, SUITS, SUITS_ICONS } from 'features/game/constants/cardConstants';

type TProps = {
  suit: SUITS;
  rank: RANKS;
};

export const Middle: FC<TProps> = ({ suit, rank }) => {
  return (
    <div className={styles.middle}>
      <div className={styles.firstIcon}>{RANKS_ICONS[rank][suit]}</div>
      <div className={styles.secondIcon}>{SUITS_ICONS[suit]}</div>
    </div>
  );
};
