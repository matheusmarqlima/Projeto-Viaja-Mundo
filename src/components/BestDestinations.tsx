import DestinationCard from "./DestinationCard";

const BestDestinations = () => {
  return (
    <section className="py-[64px] flex flex-col items-center justify-center  ">
      <h2 className="text-4xl font-bold text-center text-slate-950 mb-4">Melhores Destinos</h2>
      <p className="text-center text-slate-500 py-[16px] px-[8px]">Explore os destinos mais procurados pelos viajantes do mundo todo</p>
      <div className="flex flex-col gap-8">
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </section>
  );
};
export default BestDestinations;
