let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 25, 54, 97, 15];

let evenSum: number = 0;

for (let i = 0; i < table.length; i++) {
  if (table[i] % 2 === 0) {
    evenSum += table[i];
  }
}

console.log(evenSum);
