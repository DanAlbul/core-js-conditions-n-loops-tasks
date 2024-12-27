function convertToRomanNumerals(num) {
  const romans = {
		0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };

  let number = '';
  if (num >= 10) {
    let tenth = '';
    const dec = Math.floor(num / 10);
    for (let i = 0; i < dec; i += 1) tenth += romans['10'];
    const rem = num % 10;
    console.log(rem)
    return tenth + romans[rem] || '';
  }
  number += romans[num];

  return number;
}

const num = 10

const res = convertToRomanNumerals(num)

console.log(res)