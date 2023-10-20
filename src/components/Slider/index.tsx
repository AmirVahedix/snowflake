import SliderActions from "./SliderActions";
import SliderNavigation from "./SliderNavigation";
import SliderRatings from "./SliderRatings";
import SliderAlbum from "./SliderAlbum";
import SliderTitle from "./SliderTitle";
import SliderItem from "./SliderItem";

const Slider = ({
  slides,
  currentSlide,
  handleNextSlide,
  handlePrevSlide,
}: {
  slides: string[];
  currentSlide: number;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}) => {
  return (
    <div>
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
          {slides.map((slide, i) => (
            <SliderItem image={slide} show={currentSlide === i} />
          ))}
        </div>
        <SliderActions />
        <SliderNavigation
          currentSlide={currentSlide}
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />
        <SliderRatings />
        <SliderAlbum />
        <SliderTitle />
      </div>
    </div>
  );
};

export default Slider;
