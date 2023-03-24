import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HomeSection from "./components/homeSection";
import SNavbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Sabout from "./components/sabout";
import Services from "./components/services";
import ShomeSection from "./components/shomeSection";
import Sservice from "./components/sservice";

function App() {
  return (
    <div className="App">
      <SNavbar />
      <ShomeSection />
      {/* <HomeSection /> */}
      <Sabout />
      {/* <About /> */}
      <Sservice />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
