"use strict";
const fs = require('fs');

const rawData = fs.readFileSync('../data/day5');
const data = rawData.toString().split(/\r?\n/);

const findRow = (arr, seats) => {
  let start = 0;
  let end = seats - 1;
  for (let i = 0; i < 7; i += 1) {
    if (arr[i] === 'F') {
      let mid = Math.floor(Math.abs(start - end) / 2);
      end = start + mid;
    }
    if (arr[i] === 'B') {
      let mid = Math.ceil(Math.abs(start - end) / 2);
      start = start + mid;
    }
  }
  return start;
}

const findColumn = (arr, seats) => {
  let start = 0;
  let end = seats - 1;
  for (let i = 7; i < 10; i += 1) {
    if (arr[i] === 'L') {
      let mid = Math.floor(Math.abs(start - end) / 2);
      end = start + mid;
    }
    if (arr[i] === 'R') {
      let mid = Math.ceil(Math.abs(start - end) / 2);
      start = start + mid;
    }
  }
  return start;
}

const getIds = (data) => {
  const ids = [];
  data.map((seat) => {
    const seatChars = seat.split('')
    ids.push((findRow(seatChars, 128) * 8 + findColumn(seatChars, 8)));
    return ids;
  })
  return ids.sort((a, b) => b - a);
}

console.log('Answer to Part 1: ', getIds(data)[0]);

const arr = (getIds(data));
const max = arr[0]
const min = arr[arr.length - 1];

// Part 2
for (let i = max; i >= min; i -= 1) {
  if (arr[max - i] !== i) {
    console.log('Answer to Part 2: ', arr[max - i] + 1); 
    break;
  }
}
