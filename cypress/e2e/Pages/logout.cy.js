/// <reference types="Cypress"/>
const { Loginpage } = require("./Sauce_login.cy");

export class logoutpage extends Loginpage {
  menu_button = "#react-burger-menu-btn";

  logout_button = "#logout_sidebar_link";

  logout_Page_Button() {
    cy.get(this.menu_button).click();

    cy.get(this.logout_button).click();
  }
}
