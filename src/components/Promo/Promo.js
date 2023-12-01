import React from "react";
import "./Promo.scss";
import Menu from '../Menu/Menu';
import meW2 from './images/me-white.jpg'

const Promo = () => {
    return (
        <section className="promo" id="mainpage">
            <div className="promo__container">
                <h1 className="promo__title">Alex Now</h1>
                <div className="promo__job-conteiner">
                    <h2 className="promo__job">Web-developer</h2>
                </div>
            </div>
            <Menu type={'promo'}/>
            <img className="promo__image" src={meW2} alt="промо изображение разработчика"/>
        </section>
    );
};

export default Promo;