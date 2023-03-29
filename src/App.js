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
