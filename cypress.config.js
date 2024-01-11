/// <reference types="@shelex/cypress-allure-plugin" />

const { defineConfig } = require("cypress");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });
      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureResultsPath: "cypress/allure-results",
      allureReuseAfterSpec: true,
    },
  },
});
