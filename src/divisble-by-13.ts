function thirt(n: number): number {
  while (check(n) !== n) {
    if (check(n) === n) {
      return n;
    } else {
      n = check(n);
    }
  }
  return n;
}

function check(input: number): number {
  const multipliers = [1, 10, 9, 12, 3, 4];
  let checked = 0;
  const arrChecked = input.toString().split("").reverse();
  let i = 0;
  while (i < arrChecked.length) {
    checked +=
      parseInt(arrChecked[i], 10) * multipliers[i % multipliers.length];
    i++;
  }
  return checked;
}

export default thirt;
