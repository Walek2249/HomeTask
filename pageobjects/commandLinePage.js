
const BasePage = require("./basePage");

class commandLinePage extends BasePage {
  constructor(page) {
    super(page);
  }

get commandLineHeader() {
    return this.page.locator('div.theme-doc-markdown.markdown > header');
  }
}

module.exports = commandLinePage;