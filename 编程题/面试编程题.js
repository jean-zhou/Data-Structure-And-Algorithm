// 2022.3.2
// 函数参数为携带小括号的字符串，判断小括号是否合规，如果合规返回 true，否则返回 false
// 如果没有字符，表示合规，同时字符串可能包含<>, {} [] 和 ASIIC编码
// 测试用例
/**
 * '()'  => true
 * ')()(())' => false
 * '(' => false
 * '((()())(()()))' => true
 */
function solution(str) {
  if (!str) return true;
  let resArr = [];
  let sArr = str.split('');
  let count = 0;
  sArr.forEach(i => {
    if (i === ')' || i === '(') {
      resArr.push(i)
    }
  })
  // 根据一个测试用例修改 - 根据字符串，如果第一个是反括号，后边一定也是不合规
  if (resArr[0] === ')') return false
  resArr.forEach(j => {
    if (j === '(') {
      count++
    } else {
      count--
    }
  })

  if (count === 0) return true;
  return false;
}

// let str = ')()(())'
// let str = '((()())(()()))'
let str = '('
console.log(solution(str))

// const es6 的新定义
// 如何自己写一个编程题的测试用例