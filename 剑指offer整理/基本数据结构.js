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
    if (this.stackB.length) {
        return this.stackB.pop()
    } else {
        while (this.stackA.length) {
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
// console.log('cq', cq)
// console.log('cq.deleteHead()', cq.deleteHead())

// 剑指 Offer 03.数组中重复的数字
// 使用哈希数据结构方法
var findRepeatNumber = function (nums) {
    let numsHash = new Set()
    for (let num of nums) {
        if (numsHash.has(num)) return num
        numsHash.add(num)
    }
}


// 剑指 Offer 06. 从尾到头打印链表
var reversePrint = function (head) {
    let linkArr = []
    while (head) {
        linkArr.push(head.val)
        head = head.next
    }
    return linkArr.reverse()
};
// head = [1, 3, 2]
head = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 2,
            next: null
        }
    }
}
// console.log(reversePrint(head))

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 剑指 Offer 25. 合并两个排序的链表
var mergeTwoLists1 = function (l1, l2) {
    let mergeHead
    if(l1.val < l2.val) {
        mergeHead = new ListNode(l1.val)
    } else {
        mergeHead = new ListNode(l2.val)
    }

    while(l1 && l2) {
        if (l1.val < l2.val) {
            mergeHead.next = l1.next
            l1 = l1.next
        } else {
            mergeHead.next = l2.next
            l2 = l2.next
        }
    }
    return mergeHead
};
var mergeTwoLists = function (l1, l2) {
    var head = null
    if(l1 === null || l2 === null) {
        return l1 || l2
    }
    if(l1.val <= l2.val) {
        head = l1
        head.next = mergeTwoLists(l1.next, l2)
    } else{
        head = l2
        head.next = mergeTwoLists(l2.next, l1)
    }
    return head
}

head1 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 2,
            next: null
        }
    }
}
head2 = {
    val: 0,
    next: {
        val: 1,
        next: {
            val: 5,
            next: null
        }
    }
}

console.log('mergeTwoLists', mergeTwoLists(head1,head2))