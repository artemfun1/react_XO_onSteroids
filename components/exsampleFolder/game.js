// import { useGameState } from "./use-game-state";

// import { GameCell } from "./game-cell";
// import { GameInfo } from "./game-info";
// import { ResetButton } from "./reset-button";

// export function Game() {
//   const {
//     draw,
//     cells,
//     currentStep,
//     winnerSequence,
//     winnerSymbol,
//     handleCellClick,
//     resetGame,
//   } = useGameState();

//   return (
//     <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-4">
//       <GameInfo
//         draw={draw}
//         winnerSymbol={winnerSymbol}
//         currentStep={currentStep}
//       />

//       <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)] ">
//         {cells.map((symbol, index) => (
//           <GameCell
//             key={Math.random().toString()}
//             onClick={() => handleCellClick(index)}
//             symbol={symbol}
//             isWinner={winnerSequence?.includes(index)}
//           />
//         ))}
//       </div>
//       <ResetButton onClick={resetGame} />
//     </div>
//   );
// }
