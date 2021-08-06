function duplicateCount(text: string): number {
  const textArray: string[] = text.toLowerCase().split("");
  let count = 0;
  const objRepeated: { [key: string]: number } = {};

  for (let i = 0; i < textArray.length; i++) {
    const isRepeatedLetter = objRepeated[textArray[i]];
    if (isRepeatedLetter) {
      objRepeated[textArray[i]]++;
    } else {
      objRepeated[textArray[i]] = 1;
    }
  }

  for (const key in objRepeated) {
    if (objRepeated[key] > 1) count++;
  }
  return count;
}

export default duplicateCount;
