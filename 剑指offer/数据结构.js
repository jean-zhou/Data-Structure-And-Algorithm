/**
 * 剑指 Offer 09. 用两个栈实现队列
 *  */
var CQueue = function () {
    this.stackA = []
    this.stackB = []
}
// CQueue.prototype.appendTail = function (value) {
//     if (this.stackB.length === 0) {
//         this.stackB.push(value)
//         return
//     }
//     this.stackA.push(value)
// }

// CQueue.prototype.deleteHead = function () {
//     if (!this.stackA.length && !this.stackB.length) return -1
//     if (this.stackB.length !== 0) {
//         return this.stackB.shift()
//     }
//     return this.stackA.shift()
// };

CQueue.prototype.appendTail = function (value) {
    this.stackA.push(value)
}

CQueue.prototype.deleteHead = function () {
    // 自己的方法 - 无法通过所有的测试用例
    // while (this.stackA.length) {
    //     this.stackB.push(this.stackA.pop())
    // }
    // if (!this.stackA.length && !this.stackB.length) return -1
    // if (this.stackB.length) {
    //     return this.stackB.pop()
    // } else {
    //     return this.stackA.pop()
    // }
    // 网上的方法 - 可以通过所有的测试用例
    if(this.stackB.length) {
        return this.stackB.pop()
    } else {
        while(this.stackA.length) {
            this.stackB.push(this.stackA.pop())
        }
        return this.stackB.pop() || -1
    }

}

let cq = new CQueue()
cq.appendTail(12)
cq.appendTail(13)
cq.deleteHead()
cq.appendTail(14)
cq.deleteHead()
cq.deleteHead()
cq.deleteHead()
cq.deleteHead()
// cq.deleteHead()
// cq.deleteHead()
console.log('cq', cq)
// console.log('cq.deleteHead()', cq.deleteHead())
