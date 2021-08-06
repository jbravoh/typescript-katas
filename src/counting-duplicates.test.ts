import duplicateCount from "./counting-duplicates";

test("scount the number of duplicates", () => {
  expect(duplicateCount("")).toBe(0);
  expect(duplicateCount("abcde")).toBe(0);
  expect(duplicateCount("aabbcde")).toBe(2);
  expect(duplicateCount("aabBcd")).toBe(2);
  expect(duplicateCount("Indivisibility")).toBe(1);
  expect(duplicateCount("Indivisibilities")).toBe(2);
});
