import background from "../assets/background.png";
import SearchDestination from "./SearchDestination";

const Hero = () => {
  return (
    <section>
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat bg-[url(${background})]`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      </div>

      <div className="flex flex-col relative z-10 px-4 text-center text-white gap-6">
        <h1 className="text-5xl font-bold ">Descubra o Mundo</h1>
        <p>
          Explore destinos incríveis, crie memórias inesquecíveis e viva
          aventuras extraordinárias
        </p>
        <SearchDestination />
      </div>
    </section>
  );
};
export default Hero;
