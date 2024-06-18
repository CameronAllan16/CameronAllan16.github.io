import '../assets/portfolio.css';
import Footer from './Footer';
import NavBar from './NavBar';

function Portfolio() {
  return (
    <div className="app">
      <NavBar />

      <div className="content-wrapper">
        <div className="content">
          <div className='header-wrapper'>
            <div className='header'>
                <h2>Hello, welcome to my site</h2>
            </div>
          </div>
          <div className="body">
            <p className="body-content">Some content will soon be here.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
