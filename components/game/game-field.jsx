import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { TriangleIcon } from './icons/triangle-icon';
import { SquareIcon } from './icons/square-icon'
import { useState } from 'react'

const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: 'cross',
  TRIANGLE: "triangle",
  SQUARE: 'square',
}

const MOVE_ORDERS = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE
]

export function GameField({ className }) {

  function getNextMove(currenMove){

    return 

  }

  const [cells, setCells] = useState(()=> new Array(19 * 19).fill(null))
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS)

  const nextMove = 





  const actions = (
    <>
      <UiButton className="" size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton className="" size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
     
      <GameMoveInfo actions={actions} />

      <GameGrid>
        {cells.map((_, i) => (
          <GameCell key={i} />
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children }) {
  return (
    <button className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5  pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions }) {
  return (
    <div className="flex gap-x-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
          Xoд:
          <ZeroIcon className="w-5 h-5" />
        </div>

        <div className="flex items-center gap-1 text-xs text-slate-400">
          Следующий: <CrossIcon />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}
