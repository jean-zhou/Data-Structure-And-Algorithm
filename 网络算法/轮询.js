// 如何写一个轮询
// 有三个ip地址，第一个请求返回第一个ip，第二个请求返回第二个ip
// 参数几个请求
var poll = function (request) {
    let ip = [
        '123',
        '111',
        '121'
    ]
    // 根据第几个请求，返回对应的ip地址
    if (request <= 0) return null
    return ip[request % ip.length - 1]
}
// console.log('poll', poll(5))
// console.log('poll', poll(1))
// console.log('poll', poll(0))


// 写一个负载均衡 1:3:6
// 来的请求 30 % 到 第一个机器
// 来的请求 60 % 到 第二个机器
var loadBalance = function (request) {
    let ip = [
        '123',
        '111',
        '121'
    ]

    if (request <= 0) return null
    // 
    let index = request % (0.3 + 0.6)
    // 如果index 为
}
