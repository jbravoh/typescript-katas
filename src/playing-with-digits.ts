function digPow(number: number, power: number): number {
  const arrayNums = [...`${number}`].map((i) => parseInt(i));
  let sum = 0;
  for (let i = 0; i < arrayNums.length; i++) {
    sum += Math.pow(arrayNums[i], i + power);
  }
  const remainder = sum / number;
  return Number.isInteger(remainder) && remainder > 0 ? remainder : -1;
}
export default digPow;
