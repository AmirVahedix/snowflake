import { FiShoppingBag } from "react-icons/fi";

import SizeSelector from "./SizeSelector";
import Toggles from "./Toggles";

const Purchase = () => {
  return (
    <div className="mt-8 flex items-start gap-4">
      <SizeSelector />
      <Toggles />
      <div className="flex h-full py-1">
        <button className="h-full w-10 border border-gray-400 flex items-center justify-center rounded-full">
          <FiShoppingBag className="text-gray-700 text-xl" />
        </button>
        <button className="w-32 rounded-full text-gray-800 h-full flex items-center justify-center border border-gray-400">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Purchase;
