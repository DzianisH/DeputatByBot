module.exports = (ctx, next) => {
    const start = new Date()
    return next(ctx)
        .then(
            () => {
                const ms = new Date() - start
                console.log(createLogMsg(ctx, ms));
            },
            () => {
                const ms = new Date() - start
                console.error(createLogMsg(ctx, ms));            }
            );
}

const createLogMsg = (ctx, ms) => {
    const {id, username, first_name, last_name} = ctx.from;
    return ['Answered in', ms, 'ms to username', username, 'full name', first_name, last_name, 'id', id].join(' ');
}