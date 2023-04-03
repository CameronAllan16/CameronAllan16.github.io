import  "../assets/portfolio.css"
import Projects from "./Projects"
import About from "./About"
import Footer from "./Footer"
import Subheader from "./SubHeader"
import Image from "../assets/subheader.jpg"

function Portfolio() {
    return (
      <div className="App">
        
        <Subheader 
        backgroundImage = {Image}
        name = "Cameron Allan"
        title="Passionate Web Developer with a Creative Edge"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ipsum sit amet ante consectetur tincidunt."
      />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }

  export default Portfolio;
