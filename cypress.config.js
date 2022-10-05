const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  env:{
    environment: 'stage'
  },
  viewportWidth: 800,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 100000,
  //chromeWebSecurity: false,
  projectId: "vaj3v5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    //specPattern: 'cypress/integration/TestCases/*.js',
    specPattern: 'cypress/integration/BDD/*.feature'
  },
});
