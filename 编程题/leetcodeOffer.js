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
// console.log('-----fib',fib(n))

/**
 * Offer 24. 反转链表
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseList = function (head) {
    // 利用栈
    let stack = []
    let node = head
    let newHead = new ListNode(0)
    let pNode = newHead
    while (node) {
        stack.push(node.val)
        node = node.next
    }
    console.log(stack)
    while (stack.length) {
        let n = new ListNode(stack.pop())
        pNode.next = n
        pNode = n
    }
    return newHead.next
};
node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}
// console.log('reverseList', reverseList(node))
