import { useState } from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";

import { cn } from "../../lib/utils";

const Switch = ({ defaultEnabled = false }: { defaultEnabled?: boolean }) => {
  const [enabled, setEnabled] = useState<boolean>(defaultEnabled);

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={setEnabled}
      className="relative inline-flex pl-[2px] pt-[2px] bg-white h-[30.5px] w-[100px] shrink-0 cursor-pointer rounded-full border-[1.5px] border-gray-400 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-[25px] transform rounded-full ring-0 transition duration-200 ease-in-out",
          enabled
            ? "translate-x-0 bg-[#6395B9] w-[25px]"
            : "translate-x-[44px] bg-[#ABA491] w-[50px]"
        )}
      />
    </HeadlessSwitch>
  );
};

export default Switch;
