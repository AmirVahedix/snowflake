import { useState } from "react";

import SliderActions from "./SliderActions";
import SliderNavigation from "./SliderNavigation";
import SliderRatings from "./SliderRatings";
import SliderAlbum from "./SliderAlbum";
import Image1 from "../../assets/sofa/1.jpg";
import Image2 from "../../assets/sofa/2.jpg";
import Image3 from "../../assets/sofa/3.jpg";
import Image4 from "../../assets/sofa/4.jpg";
import Image5 from "../../assets/sofa/5.jpg";
import Image6 from "../../assets/sofa/6.jpg";
import Image7 from "../../assets/sofa/7.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

const Slider = () => {
  const [currentSlide] = useState<number>(5);

  return (
    <div className="relative">
      <div className="w-full relative overflow-hidden h-[800px]">
        <svg
          id="eIFOjaNtYD41"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 800"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <path
            d="M0,180q0,40,40,40t90,0q20,0,20,20t0,40-20,20-90,0Q0,300,0,340"
            transform="matrix(.8 0 0 1.125 0 37.5)"
            fill="white"
            stroke-width="1.6"
          />
        </svg>
        <img
          src={images[currentSlide]}
          className="absolute top-0 left-0 -z-10 object-cover object-center w-full h-full rounded-t-[45px] rounded-bl-[45px] rounded-br-[100px]"
          alt=""
        />
      </div>
      <SliderActions />
      <SliderNavigation />
      <SliderRatings />
      <SliderAlbum />
    </div>
  );
};

export default Slider;
