const { Loginpage } = require("./Sauce_login.cy");

export class requestdemofields extends Loginpage {
  //menubuttonclick = '[alt="toggle menu"]';
  menu_button = "#react-burger-menu-btn";
  about_button = "#about_sidebar_link";
  requestdemobutton =
    "//body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]/button[1]";
  firstname = "#FirstName";
  lastname = "#LastName";
  email = "#Email";
  company = "#Company";
  phonenumber = "#Phone";
  country = "#Country";
  selectoption = "#Solution_Interest__c";
  intrest = "#Solution_Interest__c";
  checkbox1 = "#LblmktoCheckbox_37563_0";
  submitbutton = "button[type='submit']";
  //closebutton = "#LblmktoCheckbox_37543_0";

  requestDemoSignup() {
    cy.get(this.menu_button).click();

    cy.get(this.about_button).click();

    cy.get(this.requestdemobutton).click();

    //cy.get(this.firstname).type("chandana");
    //cy.get(this.lastname).type("p");
    cy.get(this.email).type("harichandanap53@gmail.com");
    cy.get(this.company).type("QA");
    //cy.get(this.phonenumber).type(123456789);

    //cy.get(this.country).trigger("India");
    cy.get(this.selectoption).trigger("Sauce Mobile");
    cy.get(this.checkbox1).click();
    cy.get(this.submitbutton).click();

    cy.log("Request demo submitted successfully.");
  }
}
