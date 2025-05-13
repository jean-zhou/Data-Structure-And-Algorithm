// 二维数组转换为一维数组
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// const arr = []
const arr = [
  [1, 2, 3],
  [],
  [7, 8, 9]
]
const arr1 = arr.reduce((acc, cur) => acc.concat(cur), [])
// console.log(arr1);

// reduce 用法 
// 1, 统计对象中值的出现次数
const arr2 = ['a', 'b', 'c', 'a', 'b', 'a']
const arr3 = arr2.reduce((acc, cur) => {
  acc[cur] ? acc[cur]++ : acc[cur] = 1;
  return acc;
}, {})
// console.log(arr3);

// js 的动态属性名
let key = "dynamicKey"
let obj = {
  [key]: "dynamicVal"
};
// console.log('动态属性名', obj);

// 空值合并运算符 ??
let a = 0;
let b = 'test';
let c = a ?? b;
// console.log('?? 的 c', c)  // 0

let d = a || b;
// console.log('|| 的 d', d)  // test


// 2, 按属性对对象进行分组
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];
function groupBy(arr, property) {
  return arr.reduce((acc, curObj) => {
    const key = curObj[property];
    const curGroupVal = acc[key] ?? [];
    return {
      ...acc,
      [key]: [...curGroupVal, curObj],
    }
  }, {})
}
const groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople)

// 3, 使用 reduce() 来替代 .filter().map()
const numbers = [-5, 6, 2, 0];
// 给 大于0的值 乘以2
const arr5 = numbers.filter((item) => item > 0).map((item) => item * 2);
// console.log('arr5', arr5);
const arr6 = numbers.reduce((acc, cur) => {
  if (cur > 0) {
    const doubleVal = cur * 2;
    return [
      ...acc,
      doubleVal,
    ]
  }
  return acc;
}, [])
// console.log('arr6', arr6);


// 4, 按顺序运行 Promise
function p1(a) {
  return new Promise((res, rej) => {
    res(a * 1);
  })
}

function p2(a) {
  return new Promise((res, rej) => {
    res(a * 2);
  })
}

function f3(a) {
  return a * 3;
}

function p4(a) {
  return new Promise((res, rej) => {
    res(a * 4);
  })
}

const pArr = [p1, p2, f3, p4];

function runPromiseInOrder(arr, input) {
  return arr.reduce((acc, curFunc) => acc.then(curFunc), Promise.resolve(input))
}
runPromiseInOrder(pArr, 10).then(console.log)