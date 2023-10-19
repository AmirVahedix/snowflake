import Switch from "../Form/Switch";

const Toggles = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <Switch defaultEnabled />
      <Switch />
    </div>
  );
};

export default Toggles;
