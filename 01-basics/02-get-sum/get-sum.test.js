const getSum = require("./get-sum");

test("calculating the sum of two numbers", () => {
  const num1 = 10;
  const num2 = 12;

  const result = getSum(num1, num2);

  expect(result).toBe(22);
});
