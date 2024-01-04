
import { GameTitle } from "../components/Game/game-title";
import { Header } from "../components/header";
import { GameInfo } from '../components/Game'

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen ">
      <Header></Header>

      <main className="pt-6 mx-auto max-w-[616px]">
        <GameTitle></GameTitle>

        <GameInfo className='mt-4'></GameInfo>

          

        

      </main>
    </div>
  );
}
