import Footer from "./ Components/Footer/Footer";
import Hero from "./ Components/Hero/Hero";
import Home from "./ Components/Home";
import Navbar from "./ Components/Navbar/Navbar";
import PropCards from "./ Components/PropCards/PropCards";
import { Routes, Route } from "react-router-dom";
import SearchHome from "./ Components/SeacrhPage/SearchHome";
import { HouseContext } from "./ Components/FillterBar/HouseContextProvider";
import { useContext } from "react";
import Contact from "./ Components/Contact/Contact";
import { motion } from "framer-motion";
import Popup from "./ Components/Popup/Popup";

function App() {
  const { hero } = useContext(HouseContext);

  return (
    <div>
      <Navbar />
      {/* <Popup /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="searchHome" element={<SearchHome />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
