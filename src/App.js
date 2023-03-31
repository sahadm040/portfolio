import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact";
import SNavbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Sabout from "./components/sabout";
import Sfooter from "./components/sfooter";
import ShomeSection from "./components/shomeSection";
import Sservice from "./components/sservice";
import Homepage from "./pages/homepage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/navbar" element={<SNavbar />} />
          <Route path="/home" element={<ShomeSection />} />
          <Route path="/about" element={<Sabout />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Sservice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Sfooter />} />
        </Routes>
      </BrowserRouter>
      {/* <Container> */}

      {/* <HomeSection /> */}

      {/* <About /> */}

      {/* <Services /> */}
      {/* <Portfolio /> */}

      {/* </Container> */}
    </div>
  );
}

export default App;
