const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    email: "email",
    password: "password",
  },

  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "cypress/e2e/step_definitions/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});