const fs = require('fs');
const { performance } = require('perf_hooks');

const rawData = fs.readFileSync('../data/day2');
const pwList = rawData.toString().split(/\r?\n/);
pwList.pop(); // Remove newline at end of file

const countChars = (str) => {
  const counts = {};
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    counts[char] ? counts[char] += 1 : counts[char] = 1;
  }
  return counts;
}

const checkPW = (str, validCount) => {
  const temp = str.split(' ');

  const min = temp[0].split('-')[0];
  const max = temp[0].split('-')[1];
  const char = temp[1].slice(0, -1);
  const strToCheck = temp[2];

  const charCount = countChars(strToCheck)[char];
  if (charCount >= min && charCount <= max) {
    validCount += 1;
  }
  return validCount;
}

let valid = 0;
for (let i = 0; i < pwList.length; i += 1) {
  valid = checkPW(pwList[i], valid);
}
console.log(valid); // Answer to Part 1