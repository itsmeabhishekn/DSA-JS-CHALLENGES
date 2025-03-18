import findFirstNonRepeatingCharacter from "./findFirstNonRepeatingCharacter ";

test("Find First Non-Repeating Character", () => {
  expect(findFirstNonRepeatingCharacter("aabccdeff")).toBe("b");
  expect(findFirstNonRepeatingCharacter("aabbcc")).toBe(null);
  expect(findFirstNonRepeatingCharacter("hello world")).toBe("h");
});
