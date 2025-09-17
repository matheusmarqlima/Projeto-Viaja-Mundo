import BulbIcon from "../assets/bulb.svg?react";
import WifiIcon from "../assets/wifi.svg?react";
import ForkKnifeIcon from "../assets/forkknife.svg?react";
import CameraIcon from "../assets/camera.svg?react";

import TipCard from "./TipCard";

const TravelTips = () => {
  return (
    <section>
      <div>
        <h2>Dicas de Viagem</h2>
        <p>
          Conselhos práticos de viajantes experientes para tornar sua jornada
          ainda melhor
        </p>
        <div>
          <TipCard icon={<BulbIcon />} title="Dica de Ouro">
            Sempre faça uma cópia digital de seus documentos e guarde na nuvem
            para emergências.
          </TipCard>
          <TipCard icon={<WifiIcon />} title="Conectividade">
            Baixe mapas offline e tradutor antes de viajar para economizar dados
            e roaming.
          </TipCard>
          <TipCard icon={<ForkKnifeIcon />} title="Gastronomia Local">
            Experimente a comida de rua local, mas pesquise lugares recomendados
            por moradores.
          </TipCard>
          <TipCard icon={<CameraIcon />} title="Fotografias">
            Acorde cedo para fotografar pontos turísticos sem multidões e com
            luz natural melhor.
          </TipCard>
        </div>
      </div>
    </section>
  );
};
export default TravelTips;
