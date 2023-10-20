import SliderTags from "./SliderTags";

const SliderTitle = () => {
  return (
    <div className="absolute bottom-[210px] h-[135px] flex flex-col justify-center gap-2 items-end rounded-r-3xl overflow-hidden w-[298px] px-2 -left-28">
      <SliderTags />
      <h2 className="text-[32px] font-light">Summer Collection </h2>
    </div>
  );
};

export default SliderTitle;
