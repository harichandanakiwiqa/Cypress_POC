const { myCalc } = require("../Chai_Assertion/calc.cy");
const expect = require("chai").expect;
const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe("Sinon Chai, Spy Assertion", () => {
  it("spy add method", () => {
    //Arrange
    const spy = sinon.spy(myCalc, "sum");

    //Act
    myCalc.sum(10, 20);

    //assert
    sinon.assert.calledOnce(spy);

    sinon.assert.calledWith(spy, 10, 20);
  });
});
