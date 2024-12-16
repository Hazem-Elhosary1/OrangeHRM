const { defineConfig } = require( "cypress" );

module.exports = defineConfig( {
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    specPattern: 'cypress/**/*.js',
    supportFile: 'cypress/support',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome', // Use Mochawesome for reports
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents( on, config ) {

    },
  },
} );
