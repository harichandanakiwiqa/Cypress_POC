describe("Cypress Assertions", () => {
  it.only("Should - Value Assertion for Textbox", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    cy.get('input[name="search"]').first().type("iphone");
    cy.screenshot();
    cy.get('input[name="search"]').first().should("have.value", "iphone");
    cy.get('input[name="search"]').first().should("not.have.value", "IPHONE");
  });
});
