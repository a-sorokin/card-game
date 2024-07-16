import { SUITS } from 'features/game/constants';

export enum SUITS_ICONS {
  clubs = '♣',
  diamonds = '♦',
  hearts = '♥',
  spades = '♠',
}

export const SUITS_COLORS = {
  [SUITS.clubs]: 'black',
  [SUITS.diamonds]: 'red',
  [SUITS.hearts]: 'red',
  [SUITS.spades]: 'black',
};
