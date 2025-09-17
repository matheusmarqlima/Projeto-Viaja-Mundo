import AirplaneIcon from "../assets/airplane.svg?react";
import CalendarIcon from "../assets/calendar.svg?react";
import CardIcon from "../assets/card.svg?react";
import SafeIcon from "../assets/safe.svg?react";

import HowToCard from "./HowToCard";

const HowTo = () => {
  return (
    <section>
      <h2>Como Viajar</h2>
      <p>Guias essenciais para planejar sua viagem perfeita do início ao fim</p>
      <div>
        <HowToCard icon={<AirplaneIcon />} title="Escolhendo seu Destino">
          Dicas para selecionar o destino perfeito baseado no seu perfil,
          orçamento e época do ano.
        </HowToCard>
        <HowToCard icon={<CalendarIcon />} title="Planejando sua Viagem">
          Como organizar seu roteiro, reservar hospedagens e criar um cronograma
          eficiente.
        </HowToCard>
        <HowToCard icon={<CardIcon />} title="Orçamento de Viagem">
          Calcule custos, encontre ofertas e aprenda a economizar sem abrir mão
          do conforto.
        </HowToCard>
        <HowToCard icon={<SafeIcon />} title="Segurança e Documentos">
          Documentação necessária, seguros de viagem e dicas de segurança para
          cada destino.
        </HowToCard>
      </div>
    </section>
  );
};
export default HowTo;
