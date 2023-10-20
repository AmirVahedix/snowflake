import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

const SliderNavigation = () => {
  return (
    <div className="absolute top-56 -left-14 flex flex-col items-center">
      <button className="w-12 h-12 flex items-center justify-center rounded-full border-[2.3px] border-gray-300 hover:border-gray-400 transition">
        <FiArrowUpRight className="text-xl" />
      </button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full border-[2.3px] border-gray-300 hover:border-gray-400 transition">
        <FiArrowDownLeft className="text-xl" />
      </button>
    </div>
  );
};

export default SliderNavigation;
