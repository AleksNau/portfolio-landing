import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <section className="about-me" id="aboutme">
            <h2 className="about-me__title">Обо мне</h2>
            <p className="about-me__paragraph">Привет! Меня зовут Алексей и я веб-разработчик с опытом работы на React.js.
                </p>
            <p className="about-me__paragraph">Я работаю с JavaScript, HTML и CSS, и мне нравится изучать новые возможности и инструменты в этой области.</p>
            <p className="about-me__paragraph">Буду рад вашим предложениям и обратной связи!</p>
        </section>
    );
};

export default AboutMe;