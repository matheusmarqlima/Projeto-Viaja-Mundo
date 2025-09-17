import SearchIcon from "../assets/search.svg?react";
import Button from "./Button";
import InputText from "./InputText";
import MapPin from "../assets/mappin.svg?react";

const SearchDestination = () => {
  return (
    <div className="backdrop-blur-md flex flex-col gap-5 p-6 bg-white/10 rounded-3x1 ">
      <InputText icon={<MapPin />} placeholder="Para onde você quer ir?" />
      <Button className="bg-sky-500 flex justify-center h-[48px] w-full rounded-[10px] items-center" icon={<SearchIcon />}>Buscar</Button>
    </div>
  );
};
export default SearchDestination;
