import {tables} from './dict.js'

tables.forEach((table) => {

  let total = 0;

  table.values.forEach((value) => {
    total += value.weight;
  })

  if (total !== table.diceValue) {
    throw ('error in table (' + table.title + '): total weights (' + total + ') do not equal the written total dice value (' + table.diceValue) + ')';
  }
});

console.log('all tests passing');
