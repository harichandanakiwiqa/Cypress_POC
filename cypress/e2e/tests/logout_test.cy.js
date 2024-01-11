const { logoutpage } = require("../Pages/logout.cy");
const { Loginpage } = require("../Pages/Sauce_login.cy");
const logout = new logoutpage();

describe("Logout test", () => {
  it("Sauce logout", () => {
    cy.visit("https://www.saucedemo.com");
    cy.fixture("loginsaucedemo").then(function (data) {
      logout.LoginDetails(data);

      logout.LoginButton();

      logout.logout_Page_Button();
    });
  });
});
