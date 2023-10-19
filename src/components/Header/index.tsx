import LogoImage from "../../assets/logo.png";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { FiShoppingCart } from "react-icons/fi";
import ProfileImage from "../../assets/profile.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="grow flex items-center gap-4 ">
        <img src={LogoImage} alt="SnowFlake" className="w-8" />
        <p className="text-2xl">SnowFlake</p>
      </div>
      <div className="grow flex items-center justify-between">
        <div className="flex items-center justify-between">
          <Menu />
        </div>
        <p className="flex items-center gap-1 text-sm text-black/70">
          <span className="mt-1 text-xs">*</span>
          <span className="underline underline-offset-1 decoration-zinc-300">
            Summer Collection
          </span>
        </p>
        <ul className="flex h-12 items-center -space-x-[2px]">
          <div className="border-2 border-gray-300 rounded-full h-12 p-2">
            <img
              src={ProfileImage}
              alt="Amir Vahedi"
              className="w-full h-full rounded-full"
            />
          </div>
          <MenuItem dotColor="#0369a1" isActive>
            <FiShoppingCart className="text-lg ml-1 mr-1.5" />
          </MenuItem>
        </ul>
      </div>
    </header>
  );
};

export default Header;
