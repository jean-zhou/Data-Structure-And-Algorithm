/**
 * 1, 统计字符串的字符个数
 */
function countStr(s) {
    let strArr = s.split('')
    let countObj = {}
    let resultStr = ''
    strArr.forEach(i => {
        if (!countObj[i]) {
            countObj[i] = 1
        } else {
            countObj[i]++
        }
    })
    // return countObj
    for (e in countObj) {
        resultStr += `${e}=${countObj[e]} `
    }
    return resultStr.slice(0, resultStr.length - 1)
}
s = 'aaadddccc'
// console.log(countStr(s))

/**
 * 拿到字符串中出现最多的字符及其个数
 */
function maxStr(s) {
    let sArr = s.split('')
    let countObj = {}
    sArr.forEach((e) => {
        if (!countObj[e]) {
            countObj[e] = 1
        } else {
            countObj[e]++
        }
    })

    let max = 0
    let maxString = ''
    for (let i in countObj) {
        if (countObj.length <= 1) {
            max = countObj.length
            maxString = countObj[0]
            return
        } else {
            if (max < countObj[i]) {
                max = countObj[i]
                maxString = i
            }
        }
    }
    return `最大值是${maxString}，有${max}个`
}
let str = "bcdefgadddaaaaa";
console.log(maxStr(str))

/**
 * 截取字符串中的部分字符串
 */