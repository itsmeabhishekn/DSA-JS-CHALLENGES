const titleCase = require("./titleCase");

test("Converting string to title case", () => {
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("javascript programming")).toBe("Javascript Programming");
  expect(titleCase("openai chatbot")).toBe("Openai Chatbot");
});
