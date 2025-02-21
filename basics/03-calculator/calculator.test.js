const calculator = require("./calculator");

test("performing arithmetic operations using the calculator function", () => {
  expect(calculator(10, 12, "+")).toBe(22);
  expect(calculator(10, 12, "-")).toBe(-2);
  expect(calculator(10, 12, "*")).toBe(120);
  expect(calculator(10, 12, "/")).toBeCloseTo(0.83);
  expect(calculator(10, 12, "invalid")).toBe("Invalid operation");
});
