const { defineConfig } = require('cypress');

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1280,
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        defaultCommandTimeout: 25000,
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser = {}, launchOptions) => {
                if (browser.family === 'chromium' && browser.name !== 'electron') {
                    launchOptions.args.push("--incognito");
                    return launchOptions
                }

                if (browser.name === 'electron') {
                    launchOptions.preferences.incognito = true
                    return launchOptions
                }
        })
            return require('./cypress/plugins/index.js')(on, config);
            

        },
        specPattern: 'cypress/test/**/*.spec.{js,jsx,ts,tsx}',
        browsers: [
            {
                name: 'chrome',
                family: 'chromium',
                channel: 'stable',
                displayName: 'Chrome',
                version: '120.0.6099.200',
                path: 'C:\Program Files\Google\Chrome\Application\chrome.exe',
                minSupportedVersion: 64,
                majorVersion: '120',
                launchOptions: {
                    args: [
                        "--incognito"
                    ]
                }
            },
        ]
    },
  })