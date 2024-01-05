import { GAME_SYMBOLS } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { ZeroIcon } from "./icons/zero-icon";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}