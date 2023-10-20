import { CgArrowsExpandRight } from "react-icons/cg";
import { LuBookmark } from "react-icons/lu";
import { BiLogoCodepen } from "react-icons/bi";
import SliderActionButton from "./SliderActionButton";

const SliderActions = () => {
  return (
    <div className="absolute top-24 -right-7 flex flex-col items-center gap-3">
      <SliderActionButton icon={<CgArrowsExpandRight />} />
      <SliderActionButton icon={<LuBookmark />} />
      <SliderActionButton icon={<BiLogoCodepen />} />
    </div>
  );
};

export default SliderActions;
