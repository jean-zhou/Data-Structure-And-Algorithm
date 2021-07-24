/**
 *  Offer 10- I. 斐波那契数列
 */
var fib = function (n) {
    if (n <= 1) {
        return n
    } else {
        return (fib(n - 1) + fib(n - 2)) % 1000000007
    }
};
n = 2
console.log('-----fib',fib(n))

/**
 * Offer 24. 反转链表
 */
