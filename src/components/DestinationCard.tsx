import machuPicchu from "../assets/machu-picchu.png";
import MapPin from "../assets/mappin.svg?react";
import Star from "../assets/star.svg?react";

const DestinationCard = () => {
  return (
    <div className="w-[396px] rounded-[12px] shadow-xl relative ">
      <div className="">
        <img src={machuPicchu} alt="Machu Picchu" className="rounded-t-2xl relative"/>
        <div className="absolute top-2 left-4 bg-amber-500 rounded-xl py-[3px] px-[11px]">Aventura</div>
      </div>
      <div className="mx-[15px] pb-[20px] flex flex-col gap-[8px]"> 
        <div className="flex justify-between pt-[16px]">
          <h3 className="text-xl font-semibold ">Machu Picchu</h3>
          <div className="flex items-center text-slate-500">
            <Star /> 4.9
          </div>
        </div>
        <div className="flex items-center gap-1 text-slate-500">
          <MapPin className="h-5 w-5" />
          Peru
        </div>
        <div className="flex justify-between ">
          <span className="text-slate-500">A partir de </span>
          <span className="text-sky-500 font-bold">R$ 2.500</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
