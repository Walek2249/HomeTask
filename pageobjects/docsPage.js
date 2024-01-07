const BasePage = require("./basePage");

class DocsPage extends BasePage {
  constructor(page) {
    super(page);
  }
    get commandLineButton() {
        return this.page.locator('.menu__link[href="/docs/test-cli"]');
      }

}

module.exports = DocsPage;