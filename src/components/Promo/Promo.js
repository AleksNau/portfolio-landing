import React from "react";
import "./Promo.scss";
import Menu from '../Menu/Menu';
import meW2 from './images/me-white.jpg'
import {useNavigate} from "react-router-dom";

const Promo = () => {
    const navigate = useNavigate();
    return (
        <section className="promo" id="mainpage">
            <div className="promo__container">
                <h1 className="promo__title">Разработка сайтов</h1>
                <div className="promo__job-conteiner">
                    <h2 className="promo__job">Обо мне</h2>
                    <p className="promo__paragraph">Меня зовут Алексей и я веб-разработчик с опытом работы на React.js.</p>
                    <p className="promo__paragraph">Я работаю с JavaScript, HTML и CSS, и постоянно изучаю новые технологии и инструменты в этой области.</p>
                    <button className="promo__lead" onClick={() => {navigate("/feedback")}}>Связаться</button>
                </div>
            </div>
            <Menu type={'promo'}/>
            <img className="promo__image" src={meW2} alt="промо изображение разработчика"/>
        </section>
    );
};

export default Promo;