const { Loginpage } = require("../Pages/Sauce_login.cy");
const { requestdemofields } = require("../Pages/Requestdemo.cy");

const request_demo = new requestdemofields();

describe("Request Demo", () => {
  it("Request for demo", () => {
    cy.visit("https://www.saucedemo.com");
    cy.fixture("loginsaucedemo").then(function (data) {
      request_demo.LoginDetails(data);

      request_demo.LoginButton();
      cy.origin("https://saucelabs.com/", () => {
        request_demo.requestDemoSignup();
        cy.visit("https://www.saucedemo.com");
      });
    });
  });
});
