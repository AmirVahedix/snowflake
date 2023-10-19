import { PropsWithChildren } from "react";

const MenuItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="group cursor-pointer text-sm font-light relative border-2 border-gray-300 rounded-full px-2 py-4">
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-1 h-1 bg-white group-hover:bg-black transition rounded-full"></div>
    </li>
  );
};

export default MenuItem;
