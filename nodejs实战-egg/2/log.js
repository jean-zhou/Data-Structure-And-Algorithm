// 写一个中间件
module.exports = options => {
    if(!options.format) {
        console.error('need  option format')
    }
    return async (ctx, next) => {
        console.log(options.format(ctx.url))
        await next()
    }
}