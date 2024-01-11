/// <reference types='Cypress'/>
const { Loginpage } = require("../Pages/Sauce_login.cy");

const login = new Loginpage();

describe("Login tests", () => {
  it("Sauce Login Page", () => {
    cy.visit("https://www.saucedemo.com");

    cy.fixture("loginsaucedemo").then(function (data) {
      login.LoginDetails(data);
      login.LoginButton();
      login.validate(data);
      cy.url().should("include", "/inventory.html");
    });
  });
});
