import SearchIcon from "../assets/search.svg?react";
import Button from "./Button";
import InputText from "./InputText";
import MapPin from "../assets/mappin.svg?react";

const SearchDestination = () => {
  return (
    <div>
      <InputText icon={<MapPin />} placeholder="Para onde você quer ir?" />
      <Button icon={<SearchIcon />}>Buscar</Button>
    </div>
  );
};
export default SearchDestination;
