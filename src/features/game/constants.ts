export enum SUITS {
  spades = 'spades',
  hearts = 'hearts',
  diamonds = 'diamonds',
  clubs = 'clubs',
}

export const SUITS_ORDER = {
  [SUITS.spades]: 0,
  [SUITS.hearts]: 1,
  [SUITS.diamonds]: 2,
  [SUITS.clubs]: 3,
};

export enum RANKS {
  jack = 'J',
  queen = 'Q',
  king = 'K',
  ace = 'A',

  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
}

export const RANKS_ORDER = {
  [RANKS.two]: 0,
  [RANKS.three]: 1,
  [RANKS.four]: 2,
  [RANKS.five]: 3,
  [RANKS.six]: 4,
  [RANKS.seven]: 5,
  [RANKS.eight]: 6,
  [RANKS.nine]: 7,
  [RANKS.ten]: 8,
  [RANKS.jack]: 9,
  [RANKS.queen]: 10,
  [RANKS.king]: 11,
  [RANKS.ace]: 12,
};
