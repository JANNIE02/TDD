// factorial.test.js

const { expect } = require("chai");
const factorial = require("../factorial");

describe("Factorial Function", () => {
  it("should return 1 for 0! (0 factorial)", () => {
    expect(factorial(0)).to.equal(1);
  });

  it("should return 1 for 1! (1 factorial)", () => {
    expect(factorial(1)).to.equal(1);
  });

  it("should return 120 for 5! (5 factorial)", () => {
    expect(factorial(-5)).to.equal(120);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => factorial(-1)).to.throw("Factorial of a negative number is undefined");
  });
});
