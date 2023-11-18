import React from "react";
import "./Skills.scss";
import skillImage from './images/adobePhoto.jpg'

const Skills = () => {
    return (
        <section className="skills">
            <h2 className="skills__title">Skills</h2>
            <p className="skills__paragraph">skills</p>
            <ul className="skills__list">
                <li className="skills__item">
                    <img src={skillImage} alt={'Навык'}/>
                    <p className="skills__name" >Adobe</p>
                </li>
                <li className="skills__item">
                    <img src={skillImage} alt={'Навык'}/>
                    <p className="skills__name">Adobe</p>
                </li>
                <li className="skills__item">
                    <img src={skillImage} alt={'Навык'}/>
                    <p className="skills__name">Adobe</p>
                </li>
                <li className="skills__item">
                    <img src={skillImage} alt={'Навык'}/>
                    <p className="skills__name">Adobe</p>
                </li>
            </ul>
        </section>
    );
};

export default Skills;