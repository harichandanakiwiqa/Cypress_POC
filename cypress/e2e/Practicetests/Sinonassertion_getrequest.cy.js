const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(sinonChai);
chai.use(chaiAsPromised);
const expect = chai.expect;

const request = require("request");

it("should call request.get with correct url", () => {
  const getStub = sinon.stub(request, "get");

  getStub.resolves({ statusCode: 200 });

  return expect(request.get("http://api.example.com/data"))
    .to.eventually.have.property("statusCode", 200)
    .then(() => {
      expect(getStub).to.have.been.calledWith("http://api.example.com/data");
      getStub.restore();
    });
});
