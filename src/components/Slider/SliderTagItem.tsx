import { ReactNode } from "react";
import { cn } from "../../lib/utils";

const SliderTagItem = ({
  children,
  isActive = false,
  onClick,
}: {
  children: ReactNode;
  isActive?: boolean;
  onClick: () => void;
}) => {
  return (
    <li
      className={cn(
        "rounded-full border-[1.5px] flex items-center px-3 py-[2px] transition-all cursor-pointer",
        isActive
          ? "text-lg text-gray-700 border-gray-400"
          : "text-sm text-gray-500 hover:text-gray-700 border-gray-300"
      )}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default SliderTagItem;
