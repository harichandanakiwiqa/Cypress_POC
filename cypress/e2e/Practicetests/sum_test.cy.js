const chai = require("chai");
const add = require("../Practicetests/sum.cy");
const expect = chai.expect;

describe("Adding two numbers", () => {
  it.only("should add two positive numbers", () => {
    const callback = (err, result) => {
      const result1 = add(3, 5);
      expect(result).to.be.a("number");
      expect(result).to.equal(8);
      expect(err).toBeNull();
      expect(result).toBe(1);
      done();
    };
  });

  it("should add two negative numbers", () => {
    const result = add(-3, -5);
    expect(result).to.be.a("number");
    expect(result).to.equal(-8);
  });

  it("should add one positive number and one negative number", () => {
    const result = add(3, -5);
    expect(result).to.be.a("number");
    expect(result).to.equal(-2);
  });

  it("should add two numbers that results in a floating point number", () => {
    const result = add(3.5, 4.5);
    expect(result).to.be.a("number");
    expect(result).to.be.closeTo(8, 0.001);
  });
});
