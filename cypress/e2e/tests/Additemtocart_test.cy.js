const { Additemtocart } = require("../Pages/Additemtocart.cy");
const { Loginpage } = require("../Pages/Sauce_login.cy");

const additem = new Additemtocart();

describe("Add Item to Cart", () => {
  it("Item added to the cart successfully", () => {
    cy.visit("https://www.saucedemo.com");
    cy.fixture("loginsaucedemo").then(function (data) {
      additem.LoginDetails(data);

      additem.LoginButton();

      additem.AddtocartItem();
      cy.title().should("eq", "Swag Labs");
    });
  });
});
