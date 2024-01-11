///<reference types="cypress"/>
const { Loginpage } = require("./Sauce_login.cy");

export class Additemtocart extends Loginpage {
  Addtocart_button = "#add-to-cart-sauce-labs-bike-light";
  Shopping_cart_Container = "div[id='shopping_cart_container'] a span";

  AddtocartItem() {
    cy.get(this.Addtocart_button).click();
    cy.get(this.Shopping_cart_Container).click();
  }
}
