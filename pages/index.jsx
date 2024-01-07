import { Header } from "../components/header";
import { Game } from '../components/game-new/game'

export default function HomePage() {

  return (
      <HomePageLayout header={<Header/>}>
      <Game/>
      </HomePageLayout>
  );
}



function HomePageLayout({header, children }){
return(
  <div className="bg-slate-50 min-h-screen ">
  {header}
  <main className="pt-6 mx-auto w-max">
    {children}
  </main>
</div>
)
}



// const [playersCount, setPlayersCount] = useState(4);

// const {
//   cells,
//   currentMove,
//   nextMove,
//   handleCellClick,
//   winnerSequence,
//   handlePlayerTimeOver,
//   winnerSymbol,
// } = useGameState(playersCount);


// <GameTitle playersCount={playersCount} />
// <GameInfo
//   currentMove={currentMove}
//   className="mt-4"
//   playersCount={playersCount}
//   isWinnerGame={!!winnerSymbol}
//   onPlayerTimeOver={handlePlayerTimeOver}
// ></GameInfo>

// {winnerSymbol && (
//   <div className="m-4">
//     <GameSymbol symbol={winnerSymbol} />
//   </div>
// )}



// <GameField
//   className="mt-6"
//   cells={cells}
//   currentMove={currentMove}
//   nextMove={nextMove}
//   handleCellClick={handleCellClick}
//   winnerSequence={winnerSequence}
//   winnerSymbol={winnerSymbol}
// />