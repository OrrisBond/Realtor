import Footer from "./ Components/Footer/Footer";
import Hero from "./ Components/Hero/Hero";
import Navbar from "./ Components/Navbar/Navbar";
import PropCards from "./ Components/PropCards/PropCards";

function App() {
  return (
    <div>
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <PropCards />
      <PropCards />
      <PropCards />

      <Footer />
    </div>
  );
}

export default App;
