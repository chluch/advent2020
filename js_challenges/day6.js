"use strict";
const fs = require('fs');

const rawData = fs.readFileSync('../data/day6', 'utf-8');
let data = rawData.toString().split(/\n\n/);
data = data.map((d) => d.replace(/\n/g, ' '));

const part1 = (data) => {
  const yesCounts = [];
  for (let i = 0; i < data.length; i += 1) {
    const yesses = new Set();
    const chars = data[i].split('');
    for (let j = 0; j < chars.length; j += 1) {
      if (chars[j] !== ' ') {
        yesses.add(chars[j]);
      }
    }
    yesCounts.push(yesses.size);
  }
  return yesCounts.reduce((a, b) => a + b);
}

console.log('Answer to Part 1: ', part1(data));

const countChars = (str) => {
  const counts = {};
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    counts[char] ? counts[char] += 1 : counts[char] = 1;
  }
  return counts;
}
const part2 = (data) => {
  const yesCounts = [];
  for (let i = 0; i < data.length; i += 1) {
    const yesSet = countChars(data[i]);
    const groupSize = yesSet[' '] + 1 || 1;
    let count = 0;
    for (let char in yesSet) {
      yesSet[char] === groupSize ? count += 1 : null;
      // console.log('char: ', char, 'occur:', yesSet[char], 'size: ', groupSize, 'count: ', count);
    }
    yesCounts.push(count);
  }
  return yesCounts.reduce((a, b) => a + b);
}

console.log('Answer to Part 2: ', part2(data));