let T = [22, 12, 34, 58, 96, 14, 115, 321, 194, 12, 13];

let sumOffIndex: number = 0;

for (let i = 0; i < T.length; i++) {
  if (i % 2 != 0) {
    sumOffIndex += T[i];
  }
}

console.log(sumOffIndex);
