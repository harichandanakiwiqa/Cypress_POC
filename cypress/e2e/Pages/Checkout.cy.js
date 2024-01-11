///<reference types="cypress"/>
const { Additemtocart } = require("./Additemtocart.cy");
const { Loginpage } = require("./Sauce_login.cy");
export class cartitemcheckoutfields extends Additemtocart {
  //fields

  checkout_button = "#checkout";
  backtohome = "#back-to-products";

  //Checkout: Your Information

  FirstName = "#first-name";
  LastName = "#last-name";
  PostalCode = "#postal-code";
  continue = "#continue";
  finish = "#finish";

  //Items in Cart

  checkoutYourInformation() {
    cy.get(this.checkout_button).click();
    cy.get(this.FirstName).type("chandana");
    cy.get(this.LastName).type("p");
    cy.get(this.PostalCode).type("500088");
    cy.get(this.continue).click();
    cy.get(this.finish).click();
    cy.wait(5000);
    cy.get(this.backtohome).click();
  }
}
