export enum SUITS {
  spades = 'spades',
  hearts = 'hearts',
  diamonds = 'diamonds',
  clubs = 'clubs',
}

export const SUITS_WEIGHT = {
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

export const RANKS_WEIGHT = {
  [RANKS.two]: 10,
  [RANKS.three]: 20,
  [RANKS.four]: 30,
  [RANKS.five]: 40,
  [RANKS.six]: 50,
  [RANKS.seven]: 60,
  [RANKS.eight]: 70,
  [RANKS.nine]: 80,
  [RANKS.ten]: 90,
  [RANKS.jack]: 100,
  [RANKS.queen]: 110,
  [RANKS.king]: 120,
  [RANKS.ace]: 130,
};

export enum CARD_COLORS {
  black = 'black',
  red = 'red',
}

export const SUITS_COLORS = {
  [SUITS.clubs]: CARD_COLORS.black,
  [SUITS.diamonds]: CARD_COLORS.red,
  [SUITS.hearts]: CARD_COLORS.red,
  [SUITS.spades]: CARD_COLORS.black,
};

export enum SUITS_ICONS {
  clubs = '♣',
  diamonds = '♦',
  hearts = '♥',
  spades = '♠',
}
