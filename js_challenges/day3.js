const fs = require('fs');
// const { performance } = require('perf_hooks');

// Process data
const rawData = fs.readFileSync('../data/day3');
const rows = rawData.toString().split(/\r?\n/);

// Part 1
let start = 0;
let trees = 0;
for (let i = 0; i < rows.length; i += 1) {
  if (start > rows[i].length) {
    const newStart = start % rows[i].length;
    rows[i].charAt(newStart) === '#' ?  trees += 1 : null;
    start += 3;
  } else {
    rows[i].charAt(start) === '#' ?  trees += 1 : null
    start += 3;
  }
}
console.log(trees);