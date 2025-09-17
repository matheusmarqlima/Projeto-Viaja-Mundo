import BestDestinations from "./components/BestDestinations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowTo from "./components/HowTo";
import Subscribe from "./components/Subscribe";
import TravelTips from "./components/TravelTips";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestDestinations />
      <HowTo />
      <TravelTips />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
