import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

const SizeSelectorItem = ({
  children,
  isSelected = false,
  onClick,
}: {
  children: ReactNode;
  isSelected?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "w-9 h-9 border-[1.5px] rounded-full flex items-center justify-center transition-all cursor-pointer hover:text-gray-500",
        isSelected
          ? "border-gray-700 text-gray-700"
          : "border-gray-400 text-gray-400"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SizeSelectorItem;
