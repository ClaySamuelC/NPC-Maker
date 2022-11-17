import {tables} from './dict.js'
import {rollTable} from './roller.js'

tables.forEach((table) => {
  console.log(table.title + ': ' + rollTable(table));
});
