import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="flex items-center -space-x-[1.5px]">
      <MenuItem isActive>New</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Catalog</MenuItem>
    </ul>
  );
};

export default Menu;
