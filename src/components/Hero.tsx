import background from "../assets/background.png";
import SearchDestination from "./SearchDestination";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center h-[600px] text-center text-white">
      
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h1 className="text-5xl font-bold">Descubra o Mundo</h1>
        <p className="font-normal text-xl md:text-2xl lg:text-2xl">
          Explore destinos incríveis, crie memórias inesquecíveis e viva
          aventuras extraordinárias
        </p>
        <SearchDestination />
      </div>

    </section>
  );
};

export default Hero;