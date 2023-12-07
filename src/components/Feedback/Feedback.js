import React from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./Feedback.scss";
import {emailValidation, nameValidation} from '../../utils/validation';

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
            <h2 className="feedback__title">&bull; Делать правильные вещи в правильное время. &bull;</h2>
            <div className="underline">
            </div>

            <form action="#" method="post" id="contact_form" onSubmit={handleSubmit(onSubmit)} >
              <div className="feedback__cont">
              <div className="name">
                <label htmlFor="name"/>
                <input type="text" placeholder="Имя" id="name_input" {...register('name',nameValidation)} />
                <span id="name-error" className="form__error">{errors?.name?.message}&nbsp;</span>
              </div>

              <div className="email">
                <label htmlFor="email"/>
                <input type="email" placeholder="E-mail" id="email_input" {...register('email',emailValidation)} />
                <span id="email-error" className="form__error">{errors?.email?.message}&nbsp;</span>
              </div>
              </div>
              <div className="telephone">
                <label htmlFor="telephone"/>
                <input type="text" placeholder="Номер телефона" id="telephone_input"{...register('telephone', {
                  minLength:
                      {
                        value: 6,
                        message: "Минимум 6 символов"
                      },
                  maxLength:
                      {
                        value: 12,
                        message: "Максимум 12 символов"
                      }
                })}  required/>
                <span id="telephone-error" className="form__error">{errors?.telephone?.message}&nbsp;</span>
              </div>
              <div className="subject">
                <label htmlFor="subject"/>
                <select placeholder="Subject line" id="subject_input" {...register('subject')} defaultValue={'Без темы'}>
                  <option>Выбрать тему</option>
                  <option>Создать сайт</option>
                  <option>Задать вопрос</option>
                  <option>Предложение о сотрудничестве</option>
                </select>
              </div>
              <div className="message">
                <label htmlFor="message"/>
                <textarea placeholder="Напишите ваше сообщение" id="message_input" cols="30" rows="5"  {...register('message')}
                          />
              </div>
              <div className="submit">
                <input type="button" value="Назад" id="form_button" className="feedback__back-button" onClick={() => {navigate("/")}}/>
                <input type="submit" value="Отправить" id="form_button" disabled={!isValid}/>
              </div>
            </form>
          </div>
        </div>
    );
};

export default Feedback;