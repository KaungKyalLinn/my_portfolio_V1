import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

  const navUl = useRef(null);
  const menuFirstStick = useRef(null);
  const menuSecondStick = useRef(null);
  const menuThirdStick = useRef(null);

  const menuControl = () => {
    navUl.current.classList.toggle("activeNavUl");
    menuFirstStick.current.classList.toggle("animateFirstStick");
    menuSecondStick.current.classList.toggle("animateSecondStick");
    menuThirdStick.current.classList.toggle("animateThirdStick");
  }

  return (
    <nav className="navBar">
      <div className="navHalf">
        <div className="navLogoDiv">
          <h1 className="navLogo">navLogo</h1>
        </div>
      </div>
      <div className="navHalf navRightHalf">
        <div className="ulWraper">
          <ul className="navUl" ref={navUl}>
            <li className="navLi">
              <NavLink className="navLink" to={"/"}>
                home
              </NavLink>
            </li>
            <li className="navLi">
              <NavLink className="navLink" to={"/pastProject"}>
                past project
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="menu" onClick={menuControl}>
          <span className="menuStick" ref={menuFirstStick}></span>
          <span className="menuStick" ref={menuSecondStick}></span>
          <span className="menuStick" ref={menuThirdStick}></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav