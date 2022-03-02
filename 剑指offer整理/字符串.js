// 剑指 Offer 05. 替换空格
var replaceSpace1 = function (s) {
    let newArr = s.split('')
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === ' ') {
            newArr[i] = '%20'
        }
    }
    return newArr.join('')
};
var replaceSpace2 = function (s) {
    return s.split(' ').join('%20')
}
var replaceSpace = function (s) {
    return s.replace(/\s/g, '%20')
}
s = "We are happy."
console.log('replaceSpace', replaceSpace(s))