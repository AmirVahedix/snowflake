import { useState } from "react";
import SliderTagItem from "./SliderTagItem";

const SliderTags = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <ul className="flex flex-row flex-wrap items-end w-full justify-end gap-x-2 gap-y-[6px]">
      <SliderTagItem
        isActive={activeIndex == 0}
        onClick={() => {
          setActiveIndex(0);
        }}
      >
        Table
      </SliderTagItem>
      <SliderTagItem
        isActive={activeIndex == 1}
        onClick={() => {
          setActiveIndex(1);
        }}
      >
        Sofa
      </SliderTagItem>
      <SliderTagItem
        isActive={activeIndex == 2}
        onClick={() => {
          setActiveIndex(2);
        }}
      >
        Cupboard
      </SliderTagItem>
      <SliderTagItem
        isActive={activeIndex == 3}
        onClick={() => {
          setActiveIndex(3);
        }}
      >
        Bookshelf
      </SliderTagItem>
      <SliderTagItem
        isActive={activeIndex == 4}
        onClick={() => {
          setActiveIndex(4);
        }}
      >
        Chair
      </SliderTagItem>
      <SliderTagItem
        isActive={activeIndex == 5}
        onClick={() => {
          setActiveIndex(5);
        }}
      >
        Bed
      </SliderTagItem>
    </ul>
  );
};

export default SliderTags;
