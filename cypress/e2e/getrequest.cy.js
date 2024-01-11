/// <reference types="Cypress"/>
const { expect, use } = require("chai");
it("GET", () => {
  cy.request("GET", "https://jsonplaceholder.typicode.com/posts")
    .its("status")
    .should("equal", 200);
});
