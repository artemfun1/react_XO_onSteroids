import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDERS } from "./constants";

export function useGameState(playersCount) {

  function getNextMove(currenMove, playersCount) {

    const slicedMoveOrder = MOVE_ORDERS.slice(0,playersCount)

    let nextMoveIndex = slicedMoveOrder.indexOf(currenMove) + 1;
    return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
  }

  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove,playersCount);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }
      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove,playersCount),
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
