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
console.log('--', findRepeatNumber(arr))