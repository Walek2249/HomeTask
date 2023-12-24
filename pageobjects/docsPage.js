const BasePage = require("./basePage");

class DocsPage extends BasePage {
    get reporterButton() {
        return $('li:nth-child(12) > div > a');
      }
    get allureReporterButton() {
        return $('.menu__link[href="/docs/allure-reporter"]');
      }
    
}

module.exports = new DocsPage();