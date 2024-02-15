import sittingMan from "../images/sitting_man.jpg";
import { Link } from "react-router-dom";
import homePj from "../images/homePj.jpg";

const HomePage = () => {

  return (
    <>
      <div>
        <div className="page homeHero">
          <div className="heroDiv HHLeft">
            <h1>Hi, I'm Kaung Kyal Linn</h1>
            <p className="HHInfo">Are you looking for design and development in one place?</p>
          </div>
          <div className="heroDiv HHCenter">
            <div className="heroImgDiv">
              <img className="heroImg" src={sittingMan} alt="heroImg" />
            </div>
          </div>
          <div className="heroDiv HHRight">
            <h1>Design / Development</h1>
            <p className="HHInfo">I can help your MERN project with great design</p>
          </div>
        </div>

        <div className="homeOpportunity">
          <h1>Be hornestly I doesn't have any realworld project</h1>
        </div>

        <div className="page homeBody">
          <div className="bodyDiv bodyLeft">
            <h2>I can show you my past project but, please be notic these projects are not real world projects</h2>
            <div className="toProjectDiv fromHome">
              <Link to="/pastProject" className="toProject">{"see how >>"}</Link>
            </div>
          </div>
          <div className="bodyDiv bodyRight">
            <div className="bodyImgDiv">
              <img className="bodyImg" src={homePj} alt="home project" />
            </div>
          </div>
        </div>
        <div className="homeFooter">
          <h2>Logo</h2>
          <p>09 555 555 555</p>
          <p>www.kaungkayllinn2015@gmail.com</p>
          <p>Myanmar, Ayeyarwady</p>
        </div>

      </div>
    </>
  )
}

export default HomePage