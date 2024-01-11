const { cartitemcheckoutfields } = require("../Pages/Checkout.cy");
const { Loginpage } = require("../Pages/Sauce_login.cy");
const { Additemtocart } = require("../Pages/Additemtocart.cy");

let itemcheckout = new cartitemcheckoutfields();

describe("Cart Check Out", () => {
  it("Checkout the product", () => {
    cy.visit("https://www.saucedemo.com");

    cy.fixture("loginsaucedemo").then(function (data) {
      itemcheckout.LoginDetails(data);
      itemcheckout.LoginButton();
      itemcheckout.AddtocartItem();
      itemcheckout.checkoutYourInformation();
      assert.equal("Checkout: Your Information", "Checkout: Your Information");
    });
  });
});
