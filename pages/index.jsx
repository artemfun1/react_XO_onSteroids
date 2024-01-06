import { useState } from "react";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/Game";
import { Header } from "../components/header";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(2);

  const { cells, currentMove, nextMove, handleCellClick, winnerSequence  } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen ">
      <Header></Header>
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          className="mt-4"
          playersCount={playersCount}
        ></GameInfo>
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
        ></GameField>
      </main>
    </div>
  );
}
