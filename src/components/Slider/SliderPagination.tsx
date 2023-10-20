import SliderPaginationItem from "./SliderPaginationItem";

import Image1 from "../../assets/sofa/1.jpg";
import Image2 from "../../assets/sofa/2.jpg";
import Image3 from "../../assets/sofa/3.jpg";
import Image4 from "../../assets/sofa/4.jpg";
import Image5 from "../../assets/sofa/5.jpg";
import Image6 from "../../assets/sofa/6.jpg";

const SliderPagination = () => {
  return (
    <div
      className="max-w-[420px] gap-x-10 h-[400px] pr-12 overflow-y-scroll mt-12 grid grid-cols-2"
      id="slider-pagination"
    >
      <div className="flex flex-col gap-y-6">
        <SliderPaginationItem image={Image1} />
        <SliderPaginationItem image={Image2} />
        <SliderPaginationItem image={Image3} />
      </div>
      <div className="flex flex-col gap-y-6 mt-12">
        <SliderPaginationItem image={Image4} />
        <SliderPaginationItem image={Image5} />
        <SliderPaginationItem image={Image6} />
      </div>
    </div>
  );
};

export default SliderPagination;
