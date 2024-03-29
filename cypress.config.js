const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 50000,
  screenshotOnRunFailure :false,
  reporter: 'cypress-mochawesome-reporter', //for html reports
  reporterOptions: {
    "reportDir": "cypress/reports",
      "quite": true,
      "overwrite": true,
      "html": true,
      reportPageTitle:"SalesVisionReport",
      reportFilename:"SalesVisionE2EReport",
      "json": false  
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
  },
})

