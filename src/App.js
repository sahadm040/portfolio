import { Container } from "react-bootstrap";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import HomeSection from "./components/homeSection";
import SNavbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Sabout from "./components/sabout";
import Services from "./components/services";
import Sfooter from "./components/sfooter";
import ShomeSection from "./components/shomeSection";
import Sservice from "./components/sservice";

function App() {
  return (
    <div className="App">
      {/* <Container> */}
      <SNavbar />
      <ShomeSection />
      {/* <HomeSection /> */}
      <Sabout />
      {/* <About /> */}
      <Sservice />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      <Contact />
      {/* </Container> */}
      <Sfooter />
    </div>
  );
}

export default App;
