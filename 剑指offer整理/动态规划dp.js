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

// 剑指 Offer 10- II. 青蛙跳台阶问题
var numWays = function (n) {
    // 使用递归
    // if(n === 0) {
    //     return 1
    // } else if(n === 1 || n === 2) {
    //     return n
    // } else {
    //     return (numWays(n - 1) + numWays(n - 2)) % 1000000007
    // }

    // 模仿斐波那契
    // if(n <= 1) return 1
    // if(n === 2) return n
    // let p = 1, q = 2, r
    // for(let i = 3; i <= n; i++) {
    //     r = (p + q) % 1000000007
    //     q = r
    //     p = q
    // }
    // return r

    // 使用dp数组
    let dp = []
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }
    return dp[n]
};

var numWays = function (n) {
    // f(n) = f(n - 1) + f(n - 2)
    if (n === 1 || n === 0) return 1
    if (n === 2) return 2
    return numWays(n - 1) + numWays(n - 2)
};

var numWays = function (n) {
    if (n === 1 || n === 0) return 1
    let before = 1
    let after = 1
    let tmp
    for (let i = 2; i <= n; i++) {
        // 动态规划 - 状态转移
        tmp = after
        after = (before + tmp) % 1000000007
        before = tmp

    }
    return after
};