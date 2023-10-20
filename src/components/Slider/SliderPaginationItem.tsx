import { BsCurrencyDollar } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const SliderPaginationItem = ({
  image,
  onClick,
}: {
  image: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col cursor-pointer" onClick={onClick}>
      <img
        src={image}
        className="aspect-square object-cover rounded-lg"
        alt=""
      />
      <div className="text-sm flex justify-between items-center mt-2">
        <div className="flex items-center gap-[6px]">
          <p>Sofa</p>
          <div className="w-1 h-1 rounded-full bg-black"></div>
          <div className="flex items-center ">
            <BsCurrencyDollar className="text-[#7F7F7F]" />
            <p className="italic tracking-tighter">1100</p>
          </div>
        </div>
        <FiArrowRight className="text-lg" />
      </div>
      <div className="flex text-xs items-center mt-2">
        <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
          A
        </span>
        <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
          FR
        </span>
      </div>
    </div>
  );
};

export default SliderPaginationItem;
