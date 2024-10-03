import { Link } from "react-router-dom";

function Landing() {

  return (
    <>
      <h1>UNDER RE-CONSTRUCTION</h1>
      <h2>v helpful links v</h2>
      <p>suck it link tree!</p>
      <section id="navigation-links">
        <Link to="https://services.622.studio">SERVICES</Link>
        <Link to="https://www.youtube.com/@622.by.sunrise8">YOUTUBE</Link>
        <Link to="https://apricusbydesign.etsy.com/">ETSY</Link>
        <Link to="/about">ABOUT</Link>
      </section>
      
    </>
  )
}

export default Landing
