import React from "react";
import "./Portfolio.scss";
import examplesite from './images/exapleSite.jpg'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <figure className="portfolio__example">
                        <img src={examplesite} alt="Пример сайта" className="portfolio__image"/>
                        <figcaption className="portfolio__caption">
                            <a href="#" className="portfolio__link">Example of site</a>
                        </figcaption>
                    </figure>
                </li>
                <li className="portfolio__item">
                    <figure className="portfolio__example">
                        <img src={examplesite} alt="Пример сайта" className="portfolio__image"/>
                        <figcaption className="portfolio__caption">
                            <a href="#" className="portfolio__link">Example of site</a>
                        </figcaption>
                    </figure>
                </li>
                <li className="portfolio__item">
                    <figure className="portfolio__example">
                        <img src={examplesite} alt="Пример сайта" className="portfolio__image"/>
                        <figcaption className="portfolio__caption">
                            <a href="#" className="portfolio__link">Example of site</a>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;