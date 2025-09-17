import DestinationCard from "./DestinationCard";

const BestDestinations = () => {
  return (
    <section>
      <h2>Melhores Destinos</h2>
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
