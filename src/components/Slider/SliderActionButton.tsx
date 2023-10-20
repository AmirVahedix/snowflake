import { ReactNode } from "react";

const SliderActionButton = ({ icon }: { icon: ReactNode }) => {
  return (
    <button className="w-14 h-14 flex items-center backdrop-blur justify-center rounded-full bg-gray-300 bg-opacity-60">
      <span className="text-2xl text-gray-800">{icon}</span>
    </button>
  );
};

export default SliderActionButton;
