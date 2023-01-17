let matrix = [
  [14, 25, 36, 57],
  [23, 54, 89, 55],
  [17, 88, 15, 64],
  [63, 15, 36, 55],
];
let sum: number = 0;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (i == j) {
      sum += matrix[i][j];
    }
  }
}

console.log(sum);
