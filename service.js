const Markup = require('telegraf/markup');
const scripts = require('./scripts');

const getWelcomeMessage = (ctx) => buildPhrase(scripts.welcomeMessage);
const getAnswer = (ctx) => buildPhrase(scripts.answer);
const getFallbackMessage = (ctx) => buildPhrase(scripts.fallbackMessage);
const question = scripts.questionList;
const markup = Markup.keyboard(question)
        .oneTime()
        .extra();


const buildPhrase = script => {
    let phrase = '';
    for(let i = 0; i < script.length; ++i) {
        phrase += getRnd(script[i]) + ' ';
    }
    return phrase.trim();
}

const getRnd = arr => {
    const rnd = Math.floor(Math.random() * arr.length);
    return arr[rnd];
}


module.exports = {
    getWelcomeMessage: getWelcomeMessage,
    getAnswer: getAnswer,
    getFallbackMessage: getFallbackMessage,
    markup: markup,
    question: question
}