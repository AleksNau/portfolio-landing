import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="about-me__title">About me</h2>
            <p className="about-me__paragraph">Hi, I'm Denis – UX/UI designer from Minsk.
                I'm interested in design and everything connected with it.
                </p>
            <p className="about-me__paragraph">I'm studying at courses "Web and mobile design
                interfaces" in IT-Academy.</p>
            <p className="about-me__paragraph">Ready to implement excellent projects
                with wonderful people.</p>
        </section>
    );
};

export default AboutMe;