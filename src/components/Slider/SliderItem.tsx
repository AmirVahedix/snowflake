import { Fragment } from "react";
import { Transition } from "@headlessui/react";

const SliderItem = ({ image, show }: { image: string; show: boolean }) => {
  return (
    <Transition
      as={Fragment}
      show={show}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <img
        src={image}
        className="absolute top-0 left-0 -z-10 object-cover object-center w-full h-full rounded-t-[45px] rounded-bl-[45px] rounded-br-[100px]"
        alt=""
      />
    </Transition>
  );
};

export default SliderItem;
