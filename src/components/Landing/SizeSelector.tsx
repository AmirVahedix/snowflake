import { useState } from "react";
import SizeSelectorItem from "./SizeSelectorItem";
import { Size } from "../../types/Size";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState<Size>(Size.XL);

  return (
    <div className="grid grid-cols-2 gap-[2px]">
      <SizeSelectorItem
        isSelected={selectedSize === Size.S}
        onClick={() => setSelectedSize(Size.S)}
      >
        S
      </SizeSelectorItem>
      <SizeSelectorItem
        isSelected={selectedSize === Size.M}
        onClick={() => setSelectedSize(Size.M)}
      >
        M
      </SizeSelectorItem>
      <SizeSelectorItem
        isSelected={selectedSize === Size.L}
        onClick={() => setSelectedSize(Size.L)}
      >
        L
      </SizeSelectorItem>
      <SizeSelectorItem
        isSelected={selectedSize === Size.XL}
        onClick={() => setSelectedSize(Size.XL)}
      >
        XL
      </SizeSelectorItem>
    </div>
  );
};

export default SizeSelector;
