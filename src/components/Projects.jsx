import "../assets/projects.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Projects() {
  return (
    <div className="Projects">
      <NavBar/>
      <h2 className="section-title">My Work</h2>
      <div className="row">
        <div className="col-sm-6">
          <img className="project-image" src="image-1.jpg" alt="Estate Vault"/>
          <h3>Estate Vault</h3>
          <p>EstateVault is a way for where estate owners can store and 
            manage their important estate documents, such as wills, 
            power of attorney, but also a place to store external 
            account information like Facebook login information. 
            The users can also allow other non-estate owners to review 
            and suggest changes to their documents. 
            Basically, an all in one estate management system.</p>
        </div>
        <div className="col-sm-6">
          <img className="project-image" src="image-2.jpg" alt="Cooking Assistant"/>
          <h3>Cooking Assistant</h3>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
