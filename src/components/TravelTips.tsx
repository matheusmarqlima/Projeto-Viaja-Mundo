import BulbIcon from "../assets/bulb.svg?react";
import WifiIcon from "../assets/wifi.svg?react";
import ForkKnifeIcon from "../assets/forkknife.svg?react";
import CameraIcon from "../assets/camera.svg?react";
import TipCard from "./TipCard";

const TravelTips = () => {
  return (
    <div className="p-4 sm:p-8 bg-white md:py-16">
      <section className="bg-blue-50 max-w-4xl mx-auto py-12 px-4 sm:px-8 ">
        <h2 className="text-4xl font-bold text-center text-slate-950 mb-4">
          Dicas de Viagem
        </h2>
        <p className="text-center text-slate-500 max-w-xl mx-auto mb-12">
          Conselhos práticos de viajantes experientes para tornar sua jornada
          ainda melhor
        </p>
        <div className="max-w-lg mx-auto flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 md:max-w-none">
          <TipCard icon={<BulbIcon />} title="Dica de Ouro">
            Sempre faça uma cópia digital de seus documentos e guarde na nuvem
            para emergências.
          </TipCard>
          <TipCard icon={<WifiIcon />} title="Conectividade">
            Baixe mapas offline e tradutor antes de viajar para economizar dados
            e roaming.
          </TipCard>
          <TipCard icon={<ForkKnifeIcon />} title="Gastronomia Local">
            Experimente a comida de rua local, mas pesquise lugares
            recomendados por moradores.
          </TipCard>
          <TipCard icon={<CameraIcon />} title="Fotografias">
            Acorde cedo para fotografar pontos turísticos sem multidões e com
            luz natural melhor.
          </TipCard>
        </div>
      </section>
    </div>
  );
};

export default TravelTips;