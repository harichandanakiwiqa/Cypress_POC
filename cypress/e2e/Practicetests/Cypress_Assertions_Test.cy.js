describe("GET Request Test", () => {
  it("Check the response status and data", () => {
    cy.visit("https://www.google.com/search?q=java+script+by+testers+talk");
    cy.get('textarea[type="search"]').then((element) => {
      expect(element.text()).to.equal("javascript by testers talk");
    });
    cy.get('textarea[type="search"]').should(
      "have.text",
      "javascript by testers talk"
    );
    cy.get('textarea[type="search"]').should(
      "contain",
      "javascript by testers talk"
    );
    cy.get('textarea[type="search"]').should("be.visible");
  });
});
