// 面试：js实现快速排序 - 使用两个指针
var quickSort = function (arr) {
    if(arr.length <= 1) return arr
    let midIndex = Math.floor(arr.length / 2)
    let mid = arr.splice(midIndex, 1)[0]
    console.log('mid', mid)
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([mid], quickSort(right))
}
var arr = [2, 3, 4, 4, 5, 6, 1, 8, 7, 4, 2]
console.log('---', quickSort(arr))