import { PropsWithChildren } from "react";

const MenuItem = ({ children }: PropsWithChildren) => {
  return (
    <li className="text-sm font-light border-2 border-gray-300 rounded-full px-2 py-4">
      {children}
    </li>
  );
};

export default MenuItem;
