/// <reference types="Cypress"/>
describe("Fixture Test", () => {
  it("Before each from fixture", () => {
    cy.fixture("example").then(function (data) {
      this.data = data;
      cy.log("THIS DATA", this.data);
    });
  });

  it("Pulls data from a fixture", () => {
    cy.fixture("example").then((data) => {
      cy.log("DATA", data);
    });
  });
  it("Updates fixture data inline", () => {
    cy.fixture("example").then((data) => {
      data.email = "updatedmail@xyz.com";
      cy.log("Updated email", data);
    });
  });
});
