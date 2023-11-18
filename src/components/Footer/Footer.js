import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer__title">Contacts</h2>
            <p className="footer__paragraph">Want to know more or just chat?
                You are welcome!</p>
            <button className="footer__feedback">Send message</button>
            <ul className="footer__contacts">
                <li className="footer__item">
                    <button className="footer__button"/>
                </li>
                <li className="footer__item">
                    <button className="footer__button"/>
                </li>
                <li className="footer__item">
                    <button className="footer__button"/>
                </li>
                <li className="footer__item">
                    <button className="footer__button"/>
                </li>
            </ul>

            <p className="footer__like-me">Like me on
                LinkedIn, Instagram, Behance, Dribble</p>
        </footer>
    );
};

export default Footer;