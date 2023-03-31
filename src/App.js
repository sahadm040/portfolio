import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact";
import SNavbar from "./components/navbar";
import Sabout from "./components/sabout";
import Sfooter from "./components/sfooter";
import ShomeSection from "./components/shomeSection";
import Sservice from "./components/sservice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/home" element={<ShomeSection />} />
        <Route path="/about" element={<Sabout />} />
        <Route path="/service" element={<Sservice />} />
        <Route path="/footer" element={<Sfooter />} />
        <Route path="/navbar" element={<SNavbar />} />
      </Routes>

      {/* <HomeSection /> */}

      {/* <About /> */}

      {/* <Services /> */}
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
