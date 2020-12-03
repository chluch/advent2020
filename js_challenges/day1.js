const fs = require('fs');
const { performance } = require('perf_hooks');

const rawData = fs.readFileSync('../data/day1');
let nums = (rawData.toString()).split(/\r?\n/);
nums = nums.map(n => parseInt(n));

const calcAnswer = (n) => {
  return n * (2020 - n);
}

// Part 1 Solution v1 (Array)
const search1 = () => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums.includes(2020 - nums[i])) {
      return nums[i];
    }
  }
}
const t0 = performance.now();
const p1v1Answer = calcAnswer(search1());
const t1 = performance.now();
console.log(`Part 1 v1 took ${(t1 - t0).toFixed(4)} ms`)

// Part 1 Solution v2 (Set)
const numsSet = new Set(nums);
const search2 = () => {
  for (let i = 0; i < nums.length; i += 1) {
    if (numsSet.has(2020 - nums[i])) {
      return nums[i]
    }
  }
}
const t2 = performance.now();
const p1v2Answer = calcAnswer(search2());
const t3 = performance.now();
console.log(`Part 1 v2 took ${(t3 - t2).toFixed(4)} ms`)
console.log(`Answer to P1: ${p1v2Answer}`);

// Part 2
const search3 = () => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] !== nums[j]) {
        if (numsSet.has(2020 - nums[i] - nums[j])) {
          return [nums[i], nums[j]];
        }
      }
    }
  }
}
const t4 = performance.now();
const numArr = search3();
const p2Answer = numArr[0] * numArr[1] * (2020 - numArr[0] - numArr[1]);
const t5 = performance.now();
console.log(`Part 2 took ${(t3 - t2).toFixed(4)} ms`)
console.log(`Answer to P2: ${p2Answer}`);
