import SearchIcon from "../assets/search.svg?react";
import Button from "./Button";
import InputText from "./InputText";
import MapPin from "../assets/mappin.svg?react";

const SearchDestination = () => {
  return (
    <div className="backdrop-blur-md flex flex-col gap-5 p-6 bg-white/10 rounded-[10px] md:flex-row md:items-center">
      <InputText icon={<MapPin />} placeholder="Para onde você quer ir?" className="md:w-[470px]"/>
      <Button className="bg-sky-500 flex justify-center h-[48px] w-full rounded-[10px] items-center md:w-[138px]" icon={<SearchIcon />}>Buscar</Button>
    </div>
  );
};
export default SearchDestination;
