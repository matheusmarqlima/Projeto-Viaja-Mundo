import AirplaneIcon from "../assets/airplane.svg?react";
import CalendarIcon from "../assets/calendar.svg?react";
import CardIcon from "../assets/card.svg?react";
import SafeIcon from "../assets/safe.svg?react";

import HowToCard from "./HowToCard";

const HowTo = () => {
  return (
    <section className="mx-4 my-8 md:my-16">
      <h2 className="text-4xl font-bold text-center text-slate-950 mb-4">
        Como Viajar
      </h2>
      <p className="text-center text-slate-500 px-2 max-w-xl mx-auto mb-12">
        Guias essenciais para planejar sua viagem perfeita do início ao fim
      </p>

      <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 md:gap-6">
        <div className="w-full max-w-lg border border-gray-200 rounded-[20px] p-8">
          <HowToCard icon={<AirplaneIcon />} title="Escolhendo seu Destino">
            Dicas para selecionar o destino perfeito baseado no seu
            perfil, orçamento e época do ano.
          </HowToCard>
        </div>

        <div className="w-full max-w-lg border border-gray-200 rounded-[20px] p-8">
          <HowToCard icon={<CalendarIcon />} title="Planejando sua Viagem">
            Como organizar seu roteiro, reservar hospedagens e criar um cronograma
            eficiente.
          </HowToCard>
        </div>

        <div className="w-full max-w-lg border border-gray-200 rounded-[20px] p-8">
          <HowToCard icon={<CardIcon />} title="Orçamento de Viagem">
            Calcule custos, encontre ofertas e aprenda a economizar sem abrir mão
            do conforto.
          </HowToCard>
        </div>

        <div className="w-full max-w-lg border border-gray-200 rounded-[20px] p-8">
          <HowToCard icon={<SafeIcon />} title="Segurança e Documentos">
            Documentação necessária, seguros de viagem e dicas de segurança para
            cada destino.
          </HowToCard>
        </div>
      </div>
    </section>
  );
};

export default HowTo;