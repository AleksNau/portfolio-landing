import React from "react";
import "./Feedback.scss";

const Feedback = () => {
    return (
        <div className="feedback">
          <div id="container">
            <h1>&bull; Делать правильные вещи в правильное время. &bull;</h1>
            <div className="underline">
            </div>

            <form action="#" method="post" id="contact_form">
              <div className="name">
                <label htmlFor="name"></label>
                <input type="text" placeholder="Имя" name="name" id="name_input" required/>
              </div>
              <div className="email">
                <label htmlFor="email"></label>
                <input type="email" placeholder="E-mail" name="email" id="email_input" required/>
              </div>
              <div className="telephone">
                <label htmlFor="name"></label>
                <input type="text" placeholder="Номер телефона" name="telephone" id="telephone_input" required/>
              </div>
              <div className="subject">
                <label htmlFor="subject"></label>
                <select placeholder="Subject line" name="subject" id="subject_input" required>
                  <option disabled hidden selected>Выбрать тему</option>
                  <option>Создать сайт</option>
                  <option>Задать вопрос</option>
                  <option>Предложение о сотрудничестве</option>
                </select>
              </div>
              <div className="message">
                <label htmlFor="message"></label>
                <textarea name="message" placeholder="Напишите ваше сообщение" id="message_input" cols="30" rows="5"
                          required></textarea>
              </div>
              <div className="submit">
                <input type="submit" value="Отправить" id="form_button"/>
              </div>
            </form>
          </div>
        </div>
    );
};

export default Feedback;