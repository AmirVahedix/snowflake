import SliderPaginationItem from "./SliderPaginationItem";

const SliderPagination = ({
  slides,
  setCurrentSlide,
}: {
  slides: string[];
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      className="max-w-[420px] gap-x-10 h-[400px] pr-12 overflow-y-scroll mt-12 grid grid-cols-2"
      id="slider-pagination"
    >
      <div className="flex flex-col gap-y-6">
        <SliderPaginationItem
          image={slides[0]}
          onClick={() => setCurrentSlide(0)}
        />
        <SliderPaginationItem
          image={slides[1]}
          onClick={() => setCurrentSlide(1)}
        />
        <SliderPaginationItem
          image={slides[2]}
          onClick={() => setCurrentSlide(2)}
        />
        <SliderPaginationItem
          image={slides[3]}
          onClick={() => setCurrentSlide(3)}
        />
      </div>
      <div className="flex flex-col gap-y-6 mt-12">
        <SliderPaginationItem
          image={slides[4]}
          onClick={() => setCurrentSlide(4)}
        />
        <SliderPaginationItem
          image={slides[5]}
          onClick={() => setCurrentSlide(5)}
        />
        <SliderPaginationItem
          image={slides[6]}
          onClick={() => setCurrentSlide(6)}
        />
      </div>
    </div>
  );
};

export default SliderPagination;
