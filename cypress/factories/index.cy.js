const gadgetFactory = require("../factories/gadgetFactory.cy");

describe("Factoey tests", () => {
  it("Gadget Factory Test", () => {
    const myLaptop = gadgetFactory.createGadget("Laptop", {
      ram: 8,
      ssd: 256,
      name: "Bab's MacBook Pro",
    });
    const myTablet = gadgetFactory.createGadget("Tablet", {
      ram: 4,
      hdd: 128,
      name: "Bab's iPad",
      network: "4G",
    });
    cy.log(myLaptop);
    cy.log(myTablet);
  });
});
