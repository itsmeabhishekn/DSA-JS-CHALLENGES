const count_occurance = require("./count_occurance");

test("Count occurances of a character", () => {
  expect(count_occurance("hello", "l")).toBe(2);
  expect(count_occurance("programming", "m")).toBe(2);
  expect(count_occurance("banana", "a")).toBe(3);
});
