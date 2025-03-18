import findMissingLetter from "./findMissingLetter";

test("Find Missing Letter", () => {
  expect(findMissingLetter(["a", "b", "c", "e"])).toBe("d");
  expect(findMissingLetter(["X", "Z"])).toBe("Y");
  expect(findMissingLetter(["m", "n", "o", "q", "r"])).toBe("p");
  expect(findMissingLetter(["F", "G", "H", "J"])).toBe("I");
});
