const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            on("task", {
                log(message) {
                    console.log(message);
                    return null;
                },
            });

            return config;
        },
        baseUrl: "https://blankfactor.com",
        viewportWidth: 1280,
        viewportHeight: 720,
        chromeWebSecurity: false,
    },
});
