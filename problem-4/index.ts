//The loop runs from 1 to n, that is n times => O(n)
const sum_to_n_a = (a: number): number => {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += a + i;
  }
  return sum;
};

//The function makes n recursive calls => O(n)
function sum_to_n_b(b: number): number {
  if (b === 1) {
    return b;
  } else {
    return b + sum_to_n_b(b - 1);
  }
}

//Always perform a fixed number of operations, regardless of the value of c => O(1)
const sum_to_n_c = (c: number): number => {
  const sum = (c * (c + 1)) / 2;
  return sum;
};
