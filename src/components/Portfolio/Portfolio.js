import React from "react";
import "./Portfolio.scss";
import mestoSite from './images/mesto.jpg'
import travelSite from './images/travels.jpg'
import gameSite from './images/gameclub.jpg'

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <figure className="portfolio__example">
                        <img src={mestoSite} alt="Сайт самодельного инстаграма Место" className="portfolio__image"/>
                        <figcaption className="portfolio__caption">
                            <a href="https://aleksnau.github.io/mesto/" className="portfolio__link" target='_blank' rel="noreferrer">Проект Место</a>
                        </figcaption>
                    </figure>
                </li>
                <li className="portfolio__item">
                    <figure className="portfolio__example">
                        <img src={travelSite} alt="Сайт посвященный путешествиям по России" className="portfolio__image"/>
                        <figcaption className="portfolio__caption">
                            <a href="https://aleksnau.github.io/russian-travel/" className="portfolio__link" target='_blank' rel="noreferrer">Путешествия по России</a>
                        </figcaption>
                    </figure>
                </li>
                <li className="portfolio__item">
                    <figure className="portfolio__example">
                        <img src={gameSite} alt="Сайт игрового клуба" className="portfolio__image"/>
                        <figcaption className="portfolio__caption">
                            <a href="https://aleksnau.github.io/Project-Go/#zero" className="portfolio__link" target='_blank' rel="noreferrer">Игровой клуб</a>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;