import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

const MenuItem = ({
  children,
  dotColor = "#000",
  isActive = false,
}: {
  children: ReactNode;
  dotColor?: string;
  isActive?: boolean;
}) => {
  return (
    <li className="group cursor-pointer text-sm font-light relative border-2 border-gray-300 rounded-full px-2 py-4">
      {children}
      <div
        className={cn(
          "group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 bottom-2 w-1 h-1 transition-all rounded-full",
          !isActive && "opacity-0"
        )}
        style={{ backgroundColor: dotColor }}
      ></div>
    </li>
  );
};

export default MenuItem;
