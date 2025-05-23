const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://seubarriga.wcaquino.me",

    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      await addCucumberPreprocessorPlugin(on, config);

      on("after:spec", (spec, results) => {
        if (results && results.video) {
          fs.unlinkSync(results.video);
        }
      });

      return config;
    },

    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    env: {
      stepDefinitions: "cypress/e2e/step_definitions/**/*.js"
    }
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true
  }
});