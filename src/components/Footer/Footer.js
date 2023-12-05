import React from "react";
import "./Footer.scss";
import {useNavigate} from "react-router-dom";
import linkedin from "./images/linkedin.svg";
import insta from "./images/instagram.svg";
import vk from "./images/vk.svg";
import telegram from "./images/telegram.svg";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer" id="contacts">
            <h2 className="footer__title">Контакты</h2>
            <p className="footer__paragraph">Хотите узнать больше? Отправьте мне сообщение!</p>
            <button className="footer__feedback" onClick={() => {navigate("/feedback")}}>Связаться</button>
            <ul className="footer__contacts">
                <li className="footer__item">
                        <a href="https://www.linkedin.com/in/aleks-naumenko/" className="footer__link" target='_blank' rel="noreferrer">
                            <img src={linkedin} alt="icon" className="footer__button"/>
                        </a>
                </li>
                <li className="footer__item">
                    <a href="https://vk.com/corpserevivers" className="footer__link" target='_blank' rel="noreferrer">
                        <img src={vk} alt="icon" className="footer__button"/>
                    </a>
                </li>
                <li className="footer__item">
                    <a href="https://www.instagram.com/" className="footer__link" target='_blank' rel="noreferrer">
                        <img src={insta} alt="icon" className="footer__button"/>
                    </a>
                </li>
                <li className="footer__item">
                    <a href="https://t.me/AleksNoww" className="footer__link" target='_blank' rel="noreferrer">
                        <img src={telegram} alt="icon" className="footer__button"/>
                    </a>
                </li>
            </ul>

            <p className="footer__like-me">Like me on
                LinkedIn, Instagram, Telegram, Vkontakte</p>
        </footer>
    );
};

export default Footer;