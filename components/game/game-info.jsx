import clsx from "clsx";
import { useEffect, useState } from "react";
import { Profile } from "../profile";
import { GAME_SYMBOLS } from "./constants";
import { GameSymbol } from "./game-symbol";
import avatarCrc1 from "./images/1.png";
import avatarCrc2 from "./images/2.png";
import avatarCrc3 from "./images/3.png";
import avatarCrc4 from "./images/4.png";

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: 1231,
    avatar: avatarCrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: 850,
    avatar: avatarCrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Lara",
    rating: 1400,
    avatar: avatarCrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: 760,
    avatar: avatarCrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 ",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
     const interval = setInterval(() => {
        setSeconds((prev) => Math.max(prev - 1, 0));
      }, 1000);
      return ()=>{
        clearInterval(interval)
        setSeconds(60)
      }
    }
  }, [isTimerRunning]);

  function getTimerColor(){
    if(isTimerRunning){
      return isDanger ? "text-orange-600" : "text-slate-900"
    }
    return 'text-slate-200'
  }

  return (
    <div className="flex gap-3 items-center ">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div
        className={clsx("w-px h-6 bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1", getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
