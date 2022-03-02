// 剑指 Offer 03.数组中重复的数字
var findRepeatNumber1 = function (nums) {
    let repeatNum = []
    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] === nums[j]) repeatNum.push(nums[i])
        }
    }
    return repeatNum[0]
};

// 当找到重复数字直接返回，不统计重复个数
var findRepeatNumber1 = function (nums) {
    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] === nums[j]) return nums[i]
        }
    }
    return -1
};

// 使用哈希数据结构方法
var findRepeatNumber = function (nums) {
    let numsHash = new Set()
    for (let num of nums) {
        if (numsHash.has(num)) return num
        numsHash.add(num)
    }
}
arr = [3, 2, 3, 1, 0, 2, 5, 3]
// console.log('--', findRepeatNumber(arr))

// 剑指 Offer 11. 旋转数组的最小数字
var minArray = function (numbers) {
    // 考虑数组越界
    if (numbers.length === 0) return null
    let tmp = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (tmp <= numbers[i]) {
            tmp = numbers[i]
        } else {
            return numbers[i]
        }
    }
    return numbers[0]
};

// 如何计算数组的和
var sum = function (arr) {
    if (arr.length === 0) return 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], 'arr[i]')
        sum += arr[i]
        console.log('sum', sum)
    }
    return sum
}
arr = [1, 2, 3, 4]
// console.log(sum(arr))

// 53. 最大子数组和
var maxSubArray1 = function (nums) {
    // 暴力破解法
    let maxSum = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (maxSum <= sum) {
                maxSum = sum
            }
        }
    }
    return maxSum
};

var maxSubArray = function (nums) {
    // 动态规划
    let max = nums[0]
    let pre = 0
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i])
        max = Math.max(pre, max)
    }
    return max
}
// nums = [-1]
nums = [1]
console.log('---maxSubArray', maxSubArray(nums))