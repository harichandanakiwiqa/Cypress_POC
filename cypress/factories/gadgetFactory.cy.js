const Laptop = require("../factories/laptop.cy");
const Tablet = require("../factories/tablet.cy");
const gadget = { Laptop, Tablet };

module.exports = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];
    return new GadgetType(attributes);
  },
};
