/// <reference types="@shelex/cypress-allure-plugin" />
require("@shelex/cypress-allure-plugin");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = (on, config) => {
  allureWriter(on, config);
  require("@cypress/code-coverage/task")(on, config);
  return config;
};
