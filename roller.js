export const rollTable = (table) => {
  let dieValue = Math.floor(Math.random() * table.diceValue) + 1;

  let counter = 0;

  for (let i = 0; i < table.values.length; i++) {
    counter += table.values[i].weight

    if (counter >= dieValue) {
      return table.values[i].name;
    }
  }
};
