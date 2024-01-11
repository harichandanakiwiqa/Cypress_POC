/// <reference types="Cypress"/>
export class Loginpage {
  Login_username = "#user-name";
  Login_password = "#password";
  Login_button = "#login-button";
  validate_message =
    "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)";

  LoginDetails(data) {
    cy.get(this.Login_username).type(data.username);
    cy.get(this.Login_password).type(data.password);
  }

  LoginButton() {
    cy.get(this.Login_button).click();
  }
  validate(data) {
    cy.get(this.validate_message).contains(data.expected);
  }
}
