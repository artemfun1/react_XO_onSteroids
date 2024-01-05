import { GameField, GameInfo, GameTitle } from "../components/Game";
import { Header } from "../components/header";

export default function HomePage() {

  return (
    <div className="bg-slate-50 min-h-screen ">
      <Header></Header>
      <main className="pt-6 mx-auto w-max">
        <GameTitle></GameTitle>
        <GameInfo className="mt-4"></GameInfo>
        <GameField className="mt-6"></GameField>
      </main>
    </div>
  );
}
