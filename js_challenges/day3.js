const fs = require('fs');
// const { performance } = require('perf_hooks');

// Process data
const rawData = fs.readFileSync('../data/day3');
// const rawExample = fs.readFileSync('../data/day3_example');
const rows = rawData.toString().split(/\r?\n/);
// const rows = rawExample.toString().split(/\r?\n/);

// Part 1
const countTrees = (rows, rightStep, downStep) => {
  let start = 0;
  let trees = 0;
  for (let i = 0; i < rows.length; i += downStep) {
    const index = start % rows[i].length;
    rows[i].charAt(index) === '#' ? trees += 1 : null;
    start += rightStep;
  }
return trees;
}
console.log(countTrees(rows, 3, 1)); // Answer to part 1

// Part 2
const a = countTrees(rows, 1, 1);
const b = countTrees(rows, 3, 1);
const c = countTrees(rows, 5, 1);
const d = countTrees(rows, 7, 1);
const e = countTrees(rows, 1, 2);
// console.log(a, b, c, d, e);
console.log(a * b * c * d * e); // Answer to part 2