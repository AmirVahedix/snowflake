import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="flex items-center justify-between">
      <ul className="flex items-center -space-x-[1.5px]">
        <MenuItem isActive>New</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Catalog</MenuItem>
      </ul>
    </div>
  );
};

export default Menu;
