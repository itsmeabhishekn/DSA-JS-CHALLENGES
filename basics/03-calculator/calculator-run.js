const calculator = require("./calculator");

const result = calculator(10, 12, "+");
const result2 = calculator(10, 12, "-");
const result3 = calculator(10, 12, "*");
const result4 = calculator(10, 12, "/");

console.log(result, result2, result3, result4); // 22
