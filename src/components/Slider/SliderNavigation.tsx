import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { cn } from "../../lib/utils";

const SliderNavigation = ({
  currentSlide,
  handleNextSlide,
  handlePrevSlide,
}: {
  currentSlide: number;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}) => {
  return (
    <div className="absolute top-56 -left-14 flex flex-col items-center">
      <button
        className={cn(
          "w-12 h-12 flex items-center justify-center rounded-full border-[2.3px] border-gray-300 hover:border-gray-400 transition",
          currentSlide == 6 && "text-gray-500"
        )}
        onClick={handleNextSlide}
      >
        <FiArrowUpRight className="text-xl" />
      </button>
      <button
        className={cn(
          "w-12 h-12 flex items-center justify-center rounded-full border-[2.3px] border-gray-300 hover:border-gray-400 transition",
          currentSlide == 0 && "text-gray-500"
        )}
        onClick={handlePrevSlide}
      >
        <FiArrowDownLeft className="text-xl" />
      </button>
    </div>
  );
};

export default SliderNavigation;
