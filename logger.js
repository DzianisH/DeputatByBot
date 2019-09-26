module.exports = (ctx, next) => {
    const start = new Date()
    return next(ctx)
        .then(
            () => {
                const ms = new Date() - start
                const msg = createLogMsg(ctx, ms);
                console.log(msg);
            },
            () => {
                const ms = new Date() - start
                const msg = createLogMsg(ctx, ms);
                console.error(msg);
            });
}

const createLogMsg = (ctx, ms) => {
    const {id, username, first_name, last_name} = ctx.from;
    return ['Answered in', ms, 'ms to username', username, 'full name', first_name, last_name, 'id', id].join(' ');
}
