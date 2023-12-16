const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;

const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


class telegramApi {
    constructor(url) {
        this._url = url;
    }

    _checkResponse(response) {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(`Ошибка: ${response.status}`);
    }


    sendData(data) {
        return fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "chat_id": `${TELEGRAM_CHAT_ID}`,
                "text": `${data.subject}: Имя ${data.name}, Телефон ${data.telephone}, Сообщение: ${data.message} `
            }),
        }).then(this._checkResponse);
    }


}

const apiTelegram = new telegramApi(API);
export default apiTelegram;