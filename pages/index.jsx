import { useState } from "react";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/Game";
import { Header } from "../components/header";
import { GameSymbol } from '../components/Game/game-symbol'

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);

  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen ">
      <Header></Header>
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          currentMove={currentMove}
          className="mt-4"
          playersCount={playersCount}
          isWinnerGame={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        ></GameInfo>
        {winnerSymbol &&(
          <div className='m-4'><GameSymbol symbol={winnerSymbol}/></div>
        )}
        
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        ></GameField>
      </main>
    </div>
  );
}
