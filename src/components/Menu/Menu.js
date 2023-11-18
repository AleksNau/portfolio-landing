import React from "react";
import "./Menu.scss";

const Menu = ({type}) => {
  return (
      <nav className={`menu menu-${type}`}>
          <ul className={`menu__list menu__list-${type}`}>
              <li className={`menu__item menu__item-${type}`}><a href="#" className={`menu__link`}>Home</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#" className={`menu__link`}>About me</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#" className={`menu__link`}>Skills</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#" className={`menu__link`}>Portfolio</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#" className={`menu__link`}>Contacts</a></li>
          </ul>
      </nav>
  );
};

export default Menu;