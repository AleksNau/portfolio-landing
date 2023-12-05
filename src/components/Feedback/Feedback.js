import React from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./Feedback.scss";

const Feedback = ({onSubmitBot}) => {
  const navigate = useNavigate();
  const {
    register,
    formState: {errors, isValid},
    getValues,
    handleSubmit

  } = useForm({mode: "onChange"});

  function onSubmit() {
    onSubmitBot(getValues())
  }
    return (
        <div className="feedback">
          <div id="container">
            <h1>&bull; Делать правильные вещи в правильное время. &bull;</h1>
            <div className="underline">
            </div>

            <form action="#" method="post" id="contact_form" onSubmit={handleSubmit(onSubmit)} >
              <div className="name">
                <label htmlFor="name"></label>
                <input type="text" placeholder="Имя" id="name_input" {...register('name')} required/>
              </div>
              <div className="email">
                <label htmlFor="email"></label>
                <input type="email" placeholder="E-mail" id="email_input" {...register('email')} required/>
              </div>
              <div className="telephone">
                <label htmlFor="name"></label>
                <input type="text" placeholder="Номер телефона" id="telephone_input"{...register('telephone')}  required/>
              </div>
              <div className="subject">
                <label htmlFor="subject"></label>
                <select placeholder="Subject line" id="subject_input" {...register('subject')} required>
                  <option disabled hidden selected>Выбрать тему</option>
                  <option>Создать сайт</option>
                  <option>Задать вопрос</option>
                  <option>Предложение о сотрудничестве</option>
                </select>
              </div>
              <div className="message">
                <label htmlFor="message"></label>
                <textarea placeholder="Напишите ваше сообщение" id="message_input" cols="30" rows="5"  {...register('message')}
                          required></textarea>
              </div>
              <div className="submit">
                <input type="button" value="Назад" id="form_button" onClick={() => {navigate("/")}}/>
                <input type="submit" value="Отправить" id="form_button"/>
              </div>
            </form>
          </div>
        </div>
    );
};

export default Feedback;