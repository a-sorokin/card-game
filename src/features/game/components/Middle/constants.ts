import { RANKS, SUITS, SUITS_ICONS } from 'features/game/constants';

export const RANKS_ICONS = {
  [RANKS.jack]: {
    [SUITS.clubs]: '👦🏿',
    [SUITS.diamonds]: '👦',
    [SUITS.hearts]: '👦',
    [SUITS.spades]: '👦🏿',
  },
  [RANKS.queen]: {
    [SUITS.clubs]: '🧙🏿‍♀️',
    [SUITS.diamonds]: '🧙‍♀️',
    [SUITS.hearts]: '🧙‍♀️',
    [SUITS.spades]: '🧙🏿‍♀️',
  },
  [RANKS.king]: {
    [SUITS.clubs]: '🧙🏿‍♂️',
    [SUITS.diamonds]: '🧙‍♂️',
    [SUITS.hearts]: '🧙‍♂️',
    [SUITS.spades]: '🧙🏿‍♂️',
  },
  [RANKS.ace]: {
    [SUITS.clubs]: SUITS_ICONS.clubs,
    [SUITS.diamonds]: SUITS_ICONS.diamonds,
    [SUITS.hearts]: SUITS_ICONS.hearts,
    [SUITS.spades]: SUITS_ICONS.spades,
  },
  [RANKS.two]: {
    [SUITS.clubs]: '2',
    [SUITS.diamonds]: '2',
    [SUITS.hearts]: '2',
    [SUITS.spades]: '2',
  },
  [RANKS.three]: {
    [SUITS.clubs]: '3',
    [SUITS.diamonds]: '3',
    [SUITS.hearts]: '3',
    [SUITS.spades]: '3',
  },
  [RANKS.four]: {
    [SUITS.clubs]: '4',
    [SUITS.diamonds]: '4',
    [SUITS.hearts]: '4',
    [SUITS.spades]: '4',
  },
  [RANKS.five]: {
    [SUITS.clubs]: '5',
    [SUITS.diamonds]: '5',
    [SUITS.hearts]: '5',
    [SUITS.spades]: '5',
  },
  [RANKS.six]: {
    [SUITS.clubs]: '6',
    [SUITS.diamonds]: '6',
    [SUITS.hearts]: '6',
    [SUITS.spades]: '6',
  },
  [RANKS.seven]: {
    [SUITS.clubs]: '7',
    [SUITS.diamonds]: '7',
    [SUITS.hearts]: '7',
    [SUITS.spades]: '7',
  },
  [RANKS.eight]: {
    [SUITS.clubs]: '8',
    [SUITS.diamonds]: '8',
    [SUITS.hearts]: '8',
    [SUITS.spades]: '8',
  },
  [RANKS.nine]: {
    [SUITS.clubs]: '9',
    [SUITS.diamonds]: '9',
    [SUITS.hearts]: '9',
    [SUITS.spades]: '9',
  },
  [RANKS.ten]: {
    [SUITS.clubs]: '10',
    [SUITS.diamonds]: '10',
    [SUITS.hearts]: '10',
    [SUITS.spades]: '10',
  },
};
