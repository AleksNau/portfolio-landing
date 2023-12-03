import React from "react";
import "./Skills.scss";
import AutoSlider from '../Slider/Slider';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">Навыки</h2>
            <p className="skills__paragraph">Я работаю как с frontend разработкой так и backend разработкой.
            </p>
            <p className="skills__paragraph skills__paragraph-last">
                Работаю с React Hooks, Context, Rest API, Figma, PhotoShop, Postman, Node.js.
            </p>
            <AutoSlider/>
        </section>
    );
};

export default Skills;