import { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

import Purchase from "./Purchase";
import Slider from "../Slider";
import SliderPagination from "../Slider/SliderPagination";

import Image1 from "../../assets/sofa/1.jpg";
import Image2 from "../../assets/sofa/2.jpg";
import Image3 from "../../assets/sofa/3.jpg";
import Image4 from "../../assets/sofa/4.jpg";
import Image5 from "../../assets/sofa/5.jpg";
import Image6 from "../../assets/sofa/6.jpg";
import Image7 from "../../assets/sofa/7.jpg";

const slides: string[] = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
];

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = () => {
    if (currentSlide == slides.length - 1) return;
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    if (currentSlide == 0) return;
    setCurrentSlide((prev) => prev - 1);
  };

  //preloading image
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide;
    });
  }, []);

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
        <SliderPagination slides={slides} setCurrentSlide={setCurrentSlide} />
      </div>
      <Slider
        slides={slides}
        currentSlide={currentSlide}
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
      />
    </main>
  );
};

export default Landing;
