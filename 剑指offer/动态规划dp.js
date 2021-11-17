// 剑指 Offer 10 - I.斐波那契数列
var fib = function (n) {
    // 使用简单方法，会提示超时，不是因为错了，而是因为超时，所以使用动态规划
    // if (n === 0 || n === 1) return n
    // return fib(n - 1) + fib(n - 2) 

    // 动态规划  dp
    if (n === 0 || n === 1) return n
    let p = 0
    let q = 0
    let r = 1
    for (let i = 2; i <= n; i++) {
        p = q
        q = r
        r = (p + q) % 1000000007
    }
    return r
};
// n = 2
n = 5
fib(n)
console.log('fib', fib(n))