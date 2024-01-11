const { myCalc } = require("../Chai_Assertion/calc.cy");
const expect = require("chai").expect;

describe("Basic Tests", () => {
  it.only("Sum- should return correct output with positive values", () => {
    const result = myCalc.sum(10, 20);
    cy.log("Sum", result);
    cy.expect(result).to.be.equal(30);
  });
  it("Sub- should return correct output with positive values", () => {
    const result = myCalc.sub(30, 20);
    cy.log("Sub", result);
    console.log(result);
    cy.expect(result).to.be.equal(10);
  });
  it("Mul- should return correct output with positive values", () => {
    const result = myCalc.mul(3, 2);
    cy.log("Mul", result);
    cy.expect(result).to.be.equal(6);
  });
});
