import React from "react";
import "./Main.scss";
import Promo from '../Promo/Promo';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
    return (
        <div className="main">
            <Promo/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
        </div>
    );
};

export default Main;