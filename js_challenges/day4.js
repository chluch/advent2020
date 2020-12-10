const fs = require('fs');

const rawData = fs.readFileSync('../data/day4', 'utf-8');
let data = rawData.toString().split(/\n\n/);
data = data.map((d) => d.replace(/\n/g, ' '));

const part1ValidPassports = (data) => {
  let count = 0;
  for (let i = 0; i < data.length; i += 1) {
    const fields = data[i].split(' ');
    if (fields.length >= 7) {
      const fieldsSet = new Set();
      for (let j = 0; j < fields.length; j += 1) {
        fieldsSet.add(fields[j].slice(0, 3));
      }
      if (fieldsSet.size === 7) {
        if (fieldsSet.has('pid') && !fieldsSet.has('cid')) {
          count += 1;
        }
      }
      else if (fieldsSet.size === 8) {
        count += 1;
      }
    }
  }
  return count;
}
console.log('Part 1 Answer:', part1ValidPassports(data));

const checkFields = (fields) => {
  if (!('pid' in fields)) {
    return false;
  }
  if (Object.keys(fields).length === 7 && ('cid' in fields)) {
    return false;
  }
  if (fields['byr'] > 2002 || fields['byr'] < 1920) {
    return false;
  };
  if (fields['iyr'] > 2020 || fields['iyr'] < 2010) {
    return false;
  }
  if (fields['eyr'] > 2030 || fields['eyr'] < 2020) {
    return false;
  }
  if (!fields['hcl'].match(/^#[0-9a-f]{6}/)) {
    return false;
  }
  if (!fields['pid'].match(/^[0-9]{9}$/)) {
    return false;
  }
  const eyeColours = new Set('amb blu brn gry grn hzl oth'.split(' '));
  if (!eyeColours.has(fields['ecl'])) {
    return false;
  }
  if (!fields['hgt'].match('cm') && !fields['hgt'].match('in')) {
    return false;
  }
  if (fields['hgt'].match('cm')) {
    const height = parseInt(fields['hgt']);
    if (height < 150 || height > 193) {
      return false;
    }
  }
  if (fields['hgt'].match('in')) {
    const height = parseInt(fields['hgt']);
    if (height < 59 || height > 76) {
      return false;
    }
  }
  return true;
}

const part2ValidPassports = (data) => {
  let count = 0;
  for (let i = 0; i < data.length; i += 1) {
    const passport = data[i].split(' ');
    if (passport.length >= 7) {
      const passportFields = {};
      for (let j = 0; j < passport.length; j += 1) {
        const temp = passport[j].split(':');
        passportFields[temp[0]] = temp[1];
      }
      checkFields(passportFields) ? count += 1 : null;
    }
  }
  return count;
}

console.log('Part 2 Answer:', part2ValidPassports(data));
