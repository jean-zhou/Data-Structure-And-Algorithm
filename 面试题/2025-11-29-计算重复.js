/**
2025.11.29 qh 面试算法题, 给定一个字符串, 统计与前一个单词重复的个数, 例如
- `“dog cat”` 输出: 0
- `“dog cat cat”` 输出: 1,  cat重复出现,  共计1 次
- `“dog dog dog cat cat”` 输出: 2,  dog, cat重复出现,  共计2次
- `“dog dog dog cat cat dog dog”` 输出: 3, 刚开始dog重复, 接着cat重复出现, 接着dog又重复, 共计3次
 */
const countRepeat = (str) => {
  const strList = str.split(" ");
  let repeatTimes = 0;
  let preWord = strList[0];
  let epochRepeatTimes = 0;

  for (let i = 1; i < strList.length; i++) {
    const currentWord = strList[i];
    if (currentWord === preWord) {
      epochRepeatTimes += 1
      if (epochRepeatTimes === 1) {
        repeatTimes += 1;
      }
    } else {
      preWord = currentWord
      epochRepeatTimes = 0
    }
  }
  return repeatTimes;
}

const str = "dog dog dog cat cat";
const str1 = "dog dog dog cat cat dog dog";
console.log(countRepeat(str));
console.log(countRepeat(str1));