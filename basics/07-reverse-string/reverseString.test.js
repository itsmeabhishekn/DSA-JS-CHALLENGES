const reverseString = require("./reverseString");
test("Reversing a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("JavaScript")).toBe("tpircSavaJ");
  expect(reverseString("12345")).toBe("54321");
});
