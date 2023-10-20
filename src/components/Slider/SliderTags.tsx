import SliderTagItem from "./SliderTagItem";

const SliderTags = () => {
  return (
    <ul className="flex flex-row flex-wrap items-end w-full justify-end gap-x-2 gap-y-[6px]">
      <SliderTagItem>Table</SliderTagItem>
      <SliderTagItem isActive>Sofa</SliderTagItem>
      <SliderTagItem>Cupboard</SliderTagItem>
      <SliderTagItem>Bookshelf</SliderTagItem>
      <SliderTagItem>Chair</SliderTagItem>
      <SliderTagItem>Bed</SliderTagItem>
    </ul>
  );
};

export default SliderTags;
