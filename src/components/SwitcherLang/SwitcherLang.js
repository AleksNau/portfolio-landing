import React from "react";
import "./SwitcherLang.scss";

const SwitcherLang = () => {
    return (
        <div className="switcher">
            <ul className="switcher__list">
                <li className="switcher__item">RU</li>
                <li className="switcher__item">ENG</li>
            </ul>
        </div>
    );
};

export default SwitcherLang;