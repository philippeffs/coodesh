const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "z7vnok",
  e2e: {
    $schema:
      "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
    baseUrl: "https://magento.softwaretestingboard.com/",

    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
