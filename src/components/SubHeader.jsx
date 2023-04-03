import  "../assets/subheader.css"

function Subheader(props) {
    return (
      <div className="subheader">
        <div className="subheader-image">
          <img src={props.backgroundImage} alt="Background" />
          <h1 className="subheader-name">{props.name}</h1>
        </div>
        <div className="subheader-text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    );
  }
  
  export default Subheader;