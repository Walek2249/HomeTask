const BasePage = require("./basePage");

class allureReporterPage extends BasePage {

get allureReporterHeader() {
    return $('header > h1');
  }
}

module.exports = new allureReporterPage();