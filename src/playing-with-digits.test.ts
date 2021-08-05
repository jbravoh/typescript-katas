import digPow from "./playing-with-digits";
test("do kata", () => {
  expect(digPow(89, 1)).toBe(1);
  expect(digPow(92, 1)).toBe(-1);
  expect(digPow(46288, 3)).toBe(51);
});
