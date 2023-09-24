import Footer from "./ Components/Footer/Footer";
import Hero from "./ Components/Hero/Hero";
import Home from "./ Components/Home";
import Navbar from "./ Components/Navbar/Navbar";
import PropCards from "./ Components/PropCards/PropCards";
import { Routes, Route } from "react-router-dom";
import SearchHome from "./ Components/SeacrhPage/SearchHome";

function App() {
  return (
    <div>
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="searchHome" element={<SearchHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
