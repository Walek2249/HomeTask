const BasePage = require('../basePage')
class Navbar extends BasePage {
  constructor(page) {
    super(page);
  }
  
    get docsTab() {
      return this.page.locator('.navbar__item.navbar__link[href="/docs/intro"]');
    }


    get searchButton() {
      return this.page.locator("button.DocSearch-Button");
    }
    get searchInput() {
      return this.page.locator("input.DocSearch-Input");
    }

    get colorToggleButton() {
      return this.page.locator(".clean-btn.toggleButton_gllP");
    }

    async clickDocsTab() {
      await this.docsTab.click();
    }

    async clickSearchButton() {
      await this.searchButton.click();
    }

    async clickColorToggleButton() {
      await this.colorToggleButton.click();
    }
  }

  module.exports = Navbar;