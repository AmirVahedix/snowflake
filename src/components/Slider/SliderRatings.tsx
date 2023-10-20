const SliderRatings = () => {
  return (
    <div className="absolute top-10 left-5">
      <div className="relative">
        <div className="min-w-40 rounded-full p-1.5 flex items-center shadow-sm bg-[#F3F3EF]">
          <p className="w-12 h-12 border border-[#BBBBB8] rounded-full flex items-center justify-center">
            <span className="font-medium text-2xl">9</span>
            <span className="text-xl ">'</span>
            <span className="text-xs -mt-1.5">5</span>
          </p>
          <p className="ml-2 mr-5 text-lg underline decoration-gray-300">
            User Rating
          </p>
        </div>
        <div className="min-w-40 scale-90 -mt-[18px] -z-10 relative opacity-[92%] shadow-sm rounded-full p-1.5 flex items-center bg-[#F3F3EF]">
          <p className="w-12 h-12 border border-[#BBBBB8] rounded-full flex items-center justify-center">
            <span className="font-medium text-2xl">8</span>
            <span className="text-xl ">'</span>
            <span className="text-xs -mt-1.5">5</span>
          </p>
          <p className="ml-2 mr-5 text-lg underline decoration-gray-300">
            Furniture Lab
          </p>
        </div>
      </div>
    </div>
  );
};
export default SliderRatings;
