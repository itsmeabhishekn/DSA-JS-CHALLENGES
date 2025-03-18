const helloWorld = require("./hello-world");

test("Returning 'Hellow World' as a string", () => {
  const result = helloWorld();
  expect(result).toBe("Hello World");
});
