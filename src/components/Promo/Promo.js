import React from "react";
import "./Promo.scss";
import Menu from '../Menu/Menu';
import SwitcherLang from '../SwitcherLang/SwitcherLang';
import promoImage from './images/promo-image.jpg'

const Promo = () => {
    return (
        <section className="promo" id="mainpage">
            <div className="promo__container">
                <h1 className="promo__title">Alex Now</h1>
                <h2 className="promo__job">Web-developer</h2>
                <SwitcherLang/>
            </div>
            <Menu type={'promo'}/>
            <img className="promo__image" src={promoImage} alt="промо изображение разработчика"/>
        </section>
    );
};

export default Promo;