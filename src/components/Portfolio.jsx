import "../assets/portfolio.css";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Subheader from "./SubHeader";

function Portfolio() {
  return (
    <div className="App">
      <Subheader name="Cameron Allan" />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Portfolio;
