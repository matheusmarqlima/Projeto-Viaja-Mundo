import machuPicchu from "../assets/machu-picchu.png";
import MapPin from "../assets/mappin.svg?react";
import Star from "../assets/star.svg?react";

const DestinationCard = () => {
  return (
    <div className="py-[64px] border-t-yellow-300">
      <div>
        <img src={machuPicchu} alt="Machu Picchu" />
        <div>Aventura</div>
      </div>
      <div>
        <div>
          <h3>Machu Picchu</h3>
          <div>
            <Star /> 4.9
          </div>
        </div>
        <div>
          <MapPin className="h-5 w-5" />
          Peru
        </div>
        <div>
          <span>A partir de</span>
          <span>R$ 2.500</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
