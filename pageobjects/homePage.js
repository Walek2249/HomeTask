const BasePage = require("./basePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
      }

get homeTitle() {
        return this.page.locator('.hero__title');
      }
}

module.exports = HomePage;