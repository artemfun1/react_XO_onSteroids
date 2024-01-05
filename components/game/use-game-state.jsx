import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDERS } from "./constants";

export function useGameState() {
  function getNextMove(currenMove) {
    const nextMoveIndex = MOVE_ORDERS.indexOf(currenMove) + 1;
    return MOVE_ORDERS[nextMoveIndex] ?? MOVE_ORDERS[0];
  }

  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }
      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
        cells: lastGameState.cells.map((c, i) =>
          i === index ? lastGameState.currentMove : c,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}
