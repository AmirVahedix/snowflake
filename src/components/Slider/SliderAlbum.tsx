import Image1 from "../../assets/sofa/4.jpg";
import Image2 from "../../assets/sofa/6.jpg";
import Image3 from "../../assets/sofa/7.jpg";

const SliderAlbum = () => {
  return (
    <div className="absolute bottom-48 -right-[72px] w-36 h-36 bg-gray-600/50 backdrop-blur rounded-2xl p-2 grid grid-cols-2 gap-2">
      <img
        src={Image1}
        className="aspect-square object-cover rounded-lg"
        alt=""
      />
      <img
        src={Image2}
        className="aspect-square object-cover rounded-lg"
        alt=""
      />
      <img
        src={Image3}
        className="aspect-square object-cover rounded-lg"
        alt=""
      />
      <div className="w-full bg-gradient-to-b from-white to-slate-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-800 text-xl">+8</p>
      </div>
    </div>
  );
};

export default SliderAlbum;
