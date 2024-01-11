const chai = require("chai");
const expect = chai.expect;

// Our test data
const numbers = [1, 2, 3, 4, 5];

describe("Numbers Test Suite", () => {
  it("should contain only numbers", () => {
    numbers.forEach((number) => {
      expect(number).to.be.a("number");
    });
  });

  it("should not contain any strings", () => {
    numbers.forEach((number) => {
      expect(number).to.not.be.a("string");
    });
  });

  it("should contain 5 numbers", () => {
    expect(numbers).to.have.lengthOf(5);
  });

  it("should not contain more than 5 numbers", () => {
    expect(numbers).to.not.have.lengthOf(6);
  });

  it("should contain 1, 2, 3, 4, and 5", () => {
    expect(numbers).to.include.members([1, 2, 3, 4, 5]);
  });
});
