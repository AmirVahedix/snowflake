import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="grow flex items-center gap-4 ">
      <img src={LogoImage} alt="SnowFlake" className="w-8" />
      <p className="text-2xl">SnowFlake</p>
    </div>
  );
};

export default Logo;
