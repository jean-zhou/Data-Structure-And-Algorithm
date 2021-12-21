// const fs = require('fs')

// console.log('start')

// let detal = fs.readFileSync('./test.txt')

// console.log('detal ---- ', detal.toString())

// let data2 = fs.readFile('./test.txt', (err, data3) => {
//     console.log('data3 ----')
//     console.log(data3.toString())
// })
// console.log(data2)
// console.log('end')

// 使用 EventEmitter 实现一个 事件 —— 
// 例如：net.Server 对象在每次有连接时触发事件；
// fs.ReadStream 在打开文件时触发事件；
// 流在每当有数据可供读取时触发事件
// const EventEmitter = require('events')

// class MyEmitter extends EventEmitter { }

// const myEmitter = new MyEmitter()

// myEmitter.on('consoleEvent', () => {
//     console.log('console event')
// })

// myEmitter.emit('consoleEvent')

// 实现一个event
//  event 使用的是 观察者模式实现的（也是订阅发布模式）
// class MyEvent {
//     constructor() {
//         this.map = []
//     }

//     // 添加一个事件
//     add(name, cb) {
//         if (this.map[name]) {
//             this.map[name].push(cb)
//             return this
//         }
//         this.map[name] = [cb]
//         // 每次return 才能重新拿到 this对象
//         return this
//     }

//     // 调用 事件
//     myEmit(name, ...args) {
//         this.map[name].forEach(cb => {
//             cb(...args)
//         })
//         return this
//     }
// }


// const myEmitter = new MyEvent()

// myEmitter.add('consoleEvent', (err, args) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log('console event ---- args 参数', args)
// }).myEmit('consoleEvent', 'test args')
//     .myEmit('consoleEvent', 'test 22222')


// async/await 使用
// async function test() {
//     return 2
// }
// test().then(console.log)


// const getPosts = () => new Promise((resolve, reject) => {
//     resolve([
//         {
//             name: 'a'
//         },
//         {
//             name: 'b'
//         },
//         {
//             name: 'c'
//         },
//     ])
// })

// async function test2() {
//     try {
//         const num = await test()
//         console.log('num ---- ', num)

//         // const post = await getPosts()
//         const post = getPosts().then(() => {
//             console.log(post)
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }

// function test2() {
//     try {
//         // const post = await getPosts()
//         getPosts().then((data) => {
//             console.log(data)
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }

// test2()


// koa 如何实现 next 调用中间件的 compose代码
// function compose(middleware) {
//     return function (context, next) {
//         // 上一个中间件
//         let index = -1
//         return dispatch(0)
//         // 递归
//         function dispatch(i) {
//             if (i <= index) return Promise.reject(new Error('next() called multiple times'))

//             index = i
//             let fn = middleware[i]
//             if (i === middleware.length) fn = next
//             if (!fn) return Promise.resolve()

//             try {
//                 return Promise.resolve(fn(context, function next() {
//                     return dispatch(i + 1)
//                 }))

//             } catch (e) {
//                 return Promise.reject(e)
//             }
//         }
//     }
// }

// async function a(ctx, next) {
//     console.log('a start first')
//     // const hello = await Promise.resolve('hello aaaa')
//     // console.log(hello)
//     const start = Date.now()
//     await next()
//     const ms = Date.now() - start
//     console.log(`spend time is ${ms}ms`)
//     console.log('a end -----')
// }

// async function b(ctx, next) {
//     console.log('b start here')
//     // const hello = await Promise.resolve('hello bbbb')
//     // console.log(hello)

//     const hi = () => new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve('bbbb')
//         }, 100)
//     })
//     console.log(await hi())

//     await next()
//     console.log('b end ++++')
// }

// compose([a, b])({})


// koa 使用插件
const Koa = require('koa')
const app = new Koa()
// const userAgent = require('koa-useragent').userAgent
const { userAgent } = require('koa-useragent');
const log = require('./log')
// const config = {format: text => `======${text} ======`}
const config = {format : text => `修改格式为: ----${text} ----`}
app.use(userAgent)
app.use(log(config))
// app.use(async (ctx, next) => {
//     console.log(require('util').inspect(ctx.userAgent))
// })
app.listen(3000)

