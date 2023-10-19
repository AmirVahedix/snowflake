import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="flex items-center -space-x-[2px]">
      <MenuItem>New</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Catalog</MenuItem>
    </ul>
  );
};

export default Menu;
