const Markup = require('telegraf/markup');

const getWelcomeMessage = (ctx) => "Welcom message";
const getAnswer = (ctx) => "Random text";
const getFallbackMessage = (ctx) => "Fallback message";
const markup = Markup.keyboard(['/tell_me_smth'])
        .oneTime()
        .extra();
const question = 'tell_me_smth';


module.exports = {
    getWelcomeMessage: getWelcomeMessage,
    getAnswer: getAnswer,
    getFallbackMessage: getFallbackMessage,
    markup: markup,
    question: question
}