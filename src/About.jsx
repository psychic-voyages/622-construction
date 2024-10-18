import { Link } from "react-router-dom";

function About() {

  return (
    <>
      <h2>ABOUT</h2>
      <img id="pfp" src="/assets/images/favicon.png" />
      <p className="about-body">
        I am a programmer.<br/>
        I do 3D Printing and art.<br/>
        Ask me about my new screenprinting business.<br/>
        If you're looking to create, I can more than likely help you.<br />
        And if I don't know how, God knows I'm willing to figure it out.
      </p>
      <h2>Contact</h2>
      <p className="about-body">
        E-Mail: ramirez.amadeo1@gmail.com
      </p>
      <p className="about-body">
        Phone: (805) 826-3989
      </p>
      <section id="navigation-links">
        <Link to="/">BACK</Link>
      </section>
    </>
  )
}

export default About
