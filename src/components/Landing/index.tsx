import { BsCurrencyDollar } from "react-icons/bs";

import Purchase from "./Purchase";
import Slider from "../Slider";

const Landing = () => {
  return (
    <main className="mt-16 grid grid-cols-2 pr-12">
      <div className="flex flex-col">
        <h1 className="text-9xl">SnowFlake</h1>
        <div className="mt-10 flex items-center gap-3">
          <p className="text-[2.5rem] font-light">Sofa</p>
          <div className="w-1 h-1 rounded-full bg-black"></div>
          <div className="flex items-center">
            <BsCurrencyDollar className="text-4xl text-[#7F7F7F]" />
            <p className="text-4xl italic tracking-tighter">1100</p>
          </div>
        </div>
        <p className="mt-10 max-w-sm">
          "Pure milk colored pillowed in synergy with white wood makes space
          more clear and chilly, just like your mom loves"
        </p>
        <Purchase />
      </div>
      <Slider />
    </main>
  );
};

export default Landing;
