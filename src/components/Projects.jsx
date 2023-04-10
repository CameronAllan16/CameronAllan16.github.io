import "../assets/projects.css";

function Projects() {
  return (
    <div className="Projects">
      <h2 className="section-title">My Work</h2>
      <div className="row">
        <div className="col-sm-6">
          <img className="project-image" src="image-1.jpg" />
          <h3>Estate Vault</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-sm-6">
          <img className="project-image" src="image-2.jpg" />
          <h3>Cooking Assistant</h3>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
