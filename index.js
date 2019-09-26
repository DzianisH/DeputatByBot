const Telegraf = require('telegraf');
const service = require('./service');
const logger = require('./logger');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(logger);
bot.start((ctx) => ctx.reply(service.getWelcomeMessage(ctx), service.markup));
bot.hears(service.question, (ctx) => ctx.reply(service.getAnswer(ctx), service.markup));
bot.on('message', ctx => ctx.reply(service.getFallbackMessage(ctx), service.markup));

bot.launch();
