import React from "react";
import "./Menu.scss";

const Menu = ({type}) => {
  return (
      <nav className={`menu menu-${type}`}>
          <ul className={`menu__list menu__list-${type}`}>
              <li className={`menu__item menu__item-${type}`}><a href="#mainpage" className={`menu__link`}>Главная</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#aboutme" className={`menu__link`}>Обо мне</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#skills" className={`menu__link`}>Навыки</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#portfolio" className={`menu__link`}>Портфолио</a></li>
              <li className={`menu__item menu__item-${type}`}><a href="#contacts" className={`menu__link`}>Контакты</a></li>
          </ul>
      </nav>
  );
};

export default Menu;