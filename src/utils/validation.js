const nameValidation = {
    minLength:
        {
            value: 2,
            message: "Минимум 2 символа"
        },
    maxLength:
        {
            value: 40,
            message: "Максимум 40 символов"
        },
    required: "Поле обязательно к заполнению"

}

const emailValidation = {
    pattern:
        {
            value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g,
            message: "Введите корректный эмейл"
        },
    maxLength:
        {
            value: 40,
            message: "Максимум 40 символов"
        },
    required: "Поле обязательно к заполнению"

}


module.exports = {
    nameValidation,
    emailValidation
}