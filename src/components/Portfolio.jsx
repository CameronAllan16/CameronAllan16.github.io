import "../assets/portfolio.css";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Subheader from "./SubHeader";

function Portfolio() {
  return (
    <div className="App">
      <Subheader id="top" name="Cameron Allan" />
      <About id="about"/>
      <Projects id="projects" />
      <Footer />
    </div>
  );
}

export default Portfolio;
