import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { FiShoppingCart } from "react-icons/fi";
import ProfileImage from "../../assets/profile.jpg";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <div className="grow flex items-center justify-between">
        <Menu />
        <p className="flex items-center gap-1 text-sm text-black/70">
          <span className="mt-1 text-xs">*</span>
          <span className="underline underline-offset-1 decoration-zinc-300">
            Summer Collection
          </span>
        </p>
        <ul className="flex h-14 items-center -space-x-[1.5px]">
          <div className="border-2 border-gray-300 rounded-full w-12  h-14 p-2">
            <img
              src={ProfileImage}
              alt="Amir Vahedi"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <MenuItem dotColor="#0369a1" isActive className="h-14">
            <FiShoppingCart className="text-lg ml-1 mr-1.5" />
          </MenuItem>
        </ul>
      </div>
    </header>
  );
};

export default Header;
