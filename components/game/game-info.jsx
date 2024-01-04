import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(className, "bg-white rounded-2xl shadow-md px-8 py-4")}
    >
      <div>
        <div className="relative">
          <Profile />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center" >
            <CrossIcon />
          </div>
        </div>
      </div>

      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <div>10 10</div>
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <div></div>
    </div>
  );
}
