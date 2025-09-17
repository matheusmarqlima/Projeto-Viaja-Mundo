import DestinationCard from "./DestinationCard";

const BestDestinations = () => {
  return (
    <section className="py-[64px] ">
      <h2 className="text-4xl font-bold text-center">Melhores Destinos</h2>
      <p>Explore os destinos mais procurados pelos viajantes do mundo todo</p>
      <div>
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
