import avatarCrc1 from "./ui/images/1.png";
import avatarCrc2 from "./ui/images/2.png";
import avatarCrc3 from "./ui/images/3.png";
import avatarCrc4 from "./ui/images/4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDERS = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];


export const PLAYERS = [
  {
    id: 1,
    name: "Paromovevg",
    rating: 1231,
    avatar: avatarCrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: 850,
    avatar: avatarCrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Lara",
    rating: 1400,
    avatar: avatarCrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: 760,
    avatar: avatarCrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];