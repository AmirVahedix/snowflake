import SizeSelector from "./SizeSelector";
import Toggles from "./Toggles";

const Purchase = () => {
  return (
    <div className="mt-8 flex items-start gap-4">
      <SizeSelector />
      <Toggles />
    </div>
  );
};

export default Purchase;
