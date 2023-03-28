import  "../assets/portfolio.css"
import Projects from "./Projects"
import About from "./About"
import Footer from "./Footer"

function Portfolio() {
    return (
      <div className="App">
        <header className="App-header" >
          <p className="portfolio-header">
            Cameron Allan
          </p>
        </header>
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }

  export default Portfolio;
