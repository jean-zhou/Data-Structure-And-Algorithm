// 1，什么情况下 a === a - 1 ？
// 答案：正负 Infinity
let a = Number.NEGATIVE_INFINITY
// console.log(a === a - 1);


// 答案2：给a一个比较大的数值，比如1e45
let a1 = 1e45
// console.log(a === a - 1);

//2，Infinity 拓展
// 要注意，Infinity运算的结果并不总是Infinity
// console.log(Infinity + Infinity)  // Infinity
// console.log(Infinity - Infinity)  // NaN
// console.log(Infinity * Infinity)  // Infinity
// console.log(Infinity / Infinity)  // NaN
// console.log(Infinity / 0)  // Infinity
// console.log(Infinity * 0)  // NaN

// 3，js数值精确度

// 在JavaScript里，整数可以被精确表示的范围是从 ** -2 \** 53 + 1 ** 到 ** 2 \** 53 - 1 **，即 **-9007199254740991 ** 到 ** 9007199254740991 **。超过这个数值的整数，都不能被精确表示。常量 ** Number.MAX_SAFE_INTEGER ** 和 ** Number.MIN_SAFE_INTEGER ** 分别对应 ** 9007199254740991 ** 和 **-9007199254740991 **。

let a2 = 2 ** 100  // (乘方大于53)
// console.log(a === a - 1);  // true

let a3 = 9007199254740986;
for (let i = 0; i < 10; i++) {
  // console.log(`${i} : ${a + i} `);
}
/*
0 : 9007199254740986
1 : 9007199254740987
2 : 9007199254740988
3 : 9007199254740989
4 : 9007199254740990
5 : 9007199254740991
6 : 9007199254740992  // 超过 9007199254740991 之后，
7 : 9007199254740992  // JavaScript的Number类型就没办法精确地表示整数了。
8 : 9007199254740994  // 所以无法准确计算了
9 : 9007199254740996
*/



// 4，如何在从数组里随机选择元素的时候避免连续两次选中同一个元素
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var lastPick = null
// console.log('lastPick', lastPick)
// function randomUniq(arr) {
//   let picked = arr[Math.floor(Math.random() * arr.length)]
//   if (lastPick === picked) {
//     picked = arr[Math.floor(Math.random() * arr.length)]
//   }
//   lastPick = picked
//   return picked
// }

function randomUniq(arr) {
  let picked = null
  do {
    picked = arr[Math.floor(Math.random() * arr.length)]
  } while (picked === lastPick)
  lastPick = picked
  return picked
}

arr = [
  '实际上我们可以在',
  '随机选择的时候',
  '改进一下算法',
  '让它不要重复选择上一次选过的句子',
  '那么问题来了',
  '如何在从数组里随机选择元素的时候',
  '避免连续两次选中同一个元素呢',
  '快将你的想法发布到评论区里',
]
// console.log('randomUniq', randomUniq(arr))
// console.log('randomUniq', randomUniq(arr))
// console.log('randomUniq', randomUniq(arr))
// console.log('randomUniq', randomUniq(arr))
// console.log('randomUniq', randomUniq(arr))

// 5，do while 和 while 有什么区别
function test() {
  let i = 0
  do {
    i++
    // console.log('----do', i)
  } while (i < 0)
}

function test2() {
  let j = 0

  while (j < 0) {
    j++
    // console.log('----do ---- j', j)
  }
}
// console.log('test', test())
// console.log('test2', test2())
let lastPicked = null;
function randomUniqSplice(arr) {
  const idx = Math.floor(arr.length * Math.random());
  let picked;
  if (lastPicked) {
    picked = arr.splice(idx, 1, lastPicked);  // 增加到数组中
    console.log('---lastPicked,', picked)
  } else {
    picked = arr.splice(idx, 1); // 删除数组中这个元素，返回已删除的元素数组
    console.log('---picked,', picked)
  }
  lastPicked = picked[0];
  return lastPicked;
}

let lastPicked1 = null
function randomUniqSplice1(arr) {
  console.log('arr 函数入口', arr)
  let picked;
  let idx = Math.floor(Math.random() * arr.length)
  if (lastPicked1) {
    // arr.splice(idx, 0, lastPicked1)  // 如果已经有了把之前取出的加入到数组中任意位置
    // picked = arr[idx]
    console.log('arr 修改之前', arr)
    picked = arr.splice(idx, 1, lastPicked1)
    // splice 替换 如果之前的位置没有元素，则添加到数组中，
    // 如果位置上有元素则替换
    // 但是这里使用的 picked = arr.splice(idx, 1, lastPicked1)，
    // 是把之前删除的元素加进去，同时新选择的元素删除，因为splice 替换会返回删除的那个元素
    console.log('arr 修改之后', arr)
    console.log('picked', picked)
  } else {
    picked = arr.splice(idx, 1)  // 取出数组中这个元素
  }
  lastPicked1 = picked[0]
  console.log('lastPicked1', lastPicked1)
  return lastPicked1
}

let lastPicked2 = null
function randomUniqSplice2(arr) {
  let picked;
  let idx = Math.floor(Math.random() * arr.length)
  if (lastPicked2) {
    picked = arr.splice(idx, 1, lastPicked2)
  } else {
    picked = arr.splice(idx, 1)
  }
  lastPicked2 = picked[0]
  return lastPicked2
}

function randomPick1(arrs) {
  const len = arrs.length - 1;
  const index = Math.floor(len * Math.random());
  const picked = arrs[index];
  [arrs[index], arrs[len]] = [arrs[len], arrs[index]];
  return picked;
}

// console.log('randomPick1', randomPick1(arr))
// console.log('randomPick1', randomPick1(arr))
// console.log('randomPick1', randomPick1(arr))

function testChange() {
  let a = 111
  let b = 222
  let arr = [a, b]
  console.log('arr', arr)
  [a, b] = [b, a]
  console.log(arr)
}
// testChange()

// function randomPick2(arr) {
//   // 在前面arr.length - 1 的情况下筛选，然后再把这个选出来的数插入到数组的最后
//   // 或者说是把这个数和数组最后一位交换，不删除和添加数组，消耗性能
//   const len = arr.length - 1
//   // 做到只在数组长度 减一的数组中取随机数 —— random 是一个从0到1的最随机数小数
//   const idx = Math.floor(Math.random() * len)
//   console.log('idx', idx)
//   const picked = arr[idx]
//   // console.log('picked', picked)
//   // 然后把这个位置上的元素和数组最后一位交换位置
//   [arr[idx], arr[len]] = [arr[len], arr[idx]];  // 这个时候 arr[idx] 可能是有两个值得
//   return picked
// }

function randomPick2(arrs) {
  const len = arrs.length - 1;
  // let index = Math.floor(len * Math.random())
  const index = Math.floor(len * Math.random());
  // console.log('index', index)
  const picked = arrs[index];
  // // 不使用结构赋值交换元素的位置
  // let temp
  // temp = arr[idx]
  // arr[idx] = arr[len]
  // arr[len] = temp


  // const len = arrs.length - 1;
  // const index = Math.floor(len * Math.random());
  // const picked = arrs[index];
  [arrs[index], arrs[len]] = [arrs[len], arrs[index]]

  return picked
}

// console.log('randomPick2', randomPick2(arr))
// console.log('randomPick2', randomPick2(arr))
// console.log('randomPick2', randomPick2(arr))

// 如何做到抛弃第一次选择的结果？
function throwFirst(arr) {
  arr = [...arr]  // 复制数组以免修改原数组
  function randomPick() {
    let len = arr.length - 1
    let index = Math.floor(Math.random() * len)
    let picked = arr[index];
    [arr[index], arr[len]] = [arr[len], arr[index]]
    // let temp = arr[index]
    // arr[index] = arr[len]
    // arr[len] = temp
    return picked
  }
  randomPick()
  return randomPick()
}
// console.log('throwFirst', throwFirst(arr))
// console.log('throwFirst', throwFirst(arr))
// console.log('throwFirst', throwFirst(arr))


function createRandomPicker(arrs) {
  arrs = [...arrs]; // copy 数组，以免修改原始数据
  function randomPick() {
    const len = arrs.length - 1;
    const index = Math.floor(len * Math.random());
    const picked = arrs[index];
    [arrs[index], arrs[len]] = [arrs[len], arrs[index]];
    return picked;
  }
  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}
// console.log('createRandomPicker', createRandomPicker(arr)())


// 取数值的整数，小数部分
// 取整数
function getInt(num) {
  // return parseInt(num)

  // if(num >= 0) return Math.floor(num)
  // return Math.ceil(num)

  return Math.trunc(num)
}

// 取小数
function getDecimal(num) {
  // return num - Math.trunc(num)

  return num % 1
}

// num = 2.2222;
num = 17179869184.89;
// num = -2.2222;
// console.log('getInt', getInt(num))
// console.log('getDecimal', getDecimal(num))

// 实现匀速的js周期动画：
function run(el, duration) {
  const startTime = Date.now();
  function update() {
    // 时间 / 速度 = 画线的长度
    let p = (Date.now() - startTime) / duration;
    console.log('p', p);
    p %= 1;  // 长度取小数 才是
    // el.style.width = `${300 * p}px`;
    el.style.width = `${700 * p}px`;
    // requestAnimationFrame(update);
    console.log('el.style.width ------ ', el.style.width)
    if (el.style.width.split('px')[0] <= 250) {
      requestAnimationFrame(update);
    }
  }
  update();
}


function run1(el, duration) {
  // 做到匀速修改元素的高
  // 计算匀速
  let start = Date.now()
  function update() {
    console.log('date.now ----- ', Date.now() - start)
    let p = (Date.now() - start) / duration
    // p 取小数半部分
    p % 1
    console.log('p -----', p)
    el.style.width = `${700 * p} px`
    requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

const bar1 = document.getElementById('progress_bar1');
const bar2 = document.getElementById('progress_bar2');
// run1(bar1, 10000);
// run(bar2, 500);


// Day 5 如何正确判断一个字符串是数值？
function isNum(str) {
  // 把字符串每一个数字切割，然后字符串匹配是否是在 0-9 范围内
  let newStr = str.split('')
  newStr.forEach( i => {
    // if ()
  })
}

function isNum1(str) {
  // Number.isNaN 检查value 是否是 非数值
  return !Number.isNaN(parseFloat(str))
}

function isNum2(str) {
  return !isNaN(str)
}

function isNum4(str) {
  return isFinite(str)  // 判断是有限数值
}

function isNum3(str){
  // 先排除非字符串的情况
  return !/^\s*$/.test(str) && isFinite(str)
}

function isNum5(str) {
  return !isNaN(parseFloat(str)) && isFinite(str)
}

function isNum6(str) {
  return !Number.isNaN(parseFloat(str) && Number.isFinite(str))
}
str1 = '122bhb'
str2 = 'Infinity'
str3 = '-100e-3'
str4 = '-3e3.2'
str5 = '\t'  // 换行和空格转化为空
str6 = '\n'
str7 = '    '
console.log('isNum6', isNum6(str7))
console.log('parseFloat', parseFloat(str7) )  // 空字符串 使用  parseFloat 转化为 NaN 
