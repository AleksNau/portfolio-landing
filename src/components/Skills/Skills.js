import React from "react";
import "./Skills.scss";
import react from './images/react.png'
import node from './images/node.png'
import sass from './images/sass.png'
import redux from './images/redux.png'

const Skills = () => {
    return (
        <section className="skills">
            <h2 className="skills__title">Навыки</h2>
            <p className="skills__paragraph">Я работаю как с frontend разработкой так и backend разработкой.
                Работаю с React Hooks, Context, Rest API, Figma, PhotoShop, Postman, Node.js.
            </p>
            <ul className="skills__list">
                <li className="skills__item">
                    <img src={react} alt={'Навык'} className="skills__image"/>
                    <p className="skills__name" >React.js</p>
                </li>
                <li className="skills__item">
                    <img src={node} alt={'Навык'} className="skills__image"/>
                    <p className="skills__name">Node.js</p>
                </li>
                <li className="skills__item">
                    <img src={sass} alt={'Навык'} className="skills__image"/>
                    <p className="skills__name">SASS</p>
                </li>
                <li className="skills__item">
                    <img src={redux} alt={'Навык'} className="skills__image"/>
                    <p className="skills__name">Redux</p>
                </li>
            </ul>
        </section>
    );
};

export default Skills;