import React from "react";
import "./Navigation.css";

const Navigation = ({active, setActive}) => {

    return (
        <div className={active ? "navigation navigation_active" : "navigation"} onClick={() => setActive(false)}>
            <div className="navigation__content" onClick={e => e.stopPropagation()}>
                <button type={"button"} className="navigation__button-close" onClick={() => setActive(false)}/>
                <ul className="navigation__list">
                    <li className="navigation__item"><a className="navigation__link" href="#mainpage">Главная</a></li>
                    <li className="navigation__item"><a className="navigation__link" href='#portfolio'>Портфолио</a></li>
                    <li className="navigation__item"><a className="navigation__link" href='#contacts'>Обратная связь</a></li>
                </ul>
            </div>
        </div>

    );
};

export default Navigation;