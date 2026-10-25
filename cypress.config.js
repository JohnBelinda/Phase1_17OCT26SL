const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    defaultCommandTimeout:10000,
    pageLoadTimeout:100000,
    requestTimeout:100000,
    responseTimeout:100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
     
  },
});
