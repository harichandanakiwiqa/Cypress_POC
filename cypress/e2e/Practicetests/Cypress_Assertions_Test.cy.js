describe("GET Request Test", () => {
  it("Check the response status and data", () => {
    cy.visit("https://www.google.com/search?q=java+script+by+testers+talk");
    cy.get("#APjFqb").then((element) => {
      expect(element.text()).to.equal("java script by testers talk");
    });
    cy.get("#APjFqb").should("have.text", "java script by testers talk");
    cy.get("#APjFqb").should("contain", "java script by testers talk");
    cy.get("#APjFqb").should("be.visible");
  });
});
