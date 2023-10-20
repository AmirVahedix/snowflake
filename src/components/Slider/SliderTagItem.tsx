import { ReactNode } from "react";
import { cn } from "../../lib/utils";

const SliderTagItem = ({
  children,
  isActive = false,
}: {
  children: ReactNode;
  isActive?: boolean;
}) => {
  return (
    <li
      className={cn(
        "rounded-full border-[1.5px] flex items-center px-3 py-[2px] transition cursor-pointer",
        isActive
          ? "text-lg text-gray-700 border-gray-400"
          : "text-sm text-gray-500 hover:text-gray-700 border-gray-300"
      )}
    >
      {children}
    </li>
  );
};

export default SliderTagItem;
