import "../assets/about.css";
import ProfileImage from "../assets/pic-of-me.JPG";

function About() {
  return (
    <div className="about">
      <h2 className="section-title">About Me</h2>
      <div className="row">
        <div className="col-md-6">
          <img className="profile-image" src={ProfileImage} alt="Cameron Allan" />
        </div>
        <div className="col-md-6">
          <h3>Hi, I'm Cameron Allan</h3>
          <p>I'm a frontend developer from Noblesville, Indiana.</p>
          <p>I specialize in creating clean and modern user interfaces using ReactJS and VueJS.</p>
          <p>When I'm not coding, you can find me spending time with my family, playing video games, and exploring the world of photography.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
