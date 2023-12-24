const { Key } = require("webdriverio");

class Search {
  get searchInput() {
    return $("input.DocSearch-Input");
  }
  async startSearch(searchValue) {
    await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue(searchValue);

    await browser.pause(2000);
    await browser.keys(Key.Enter);
  }
}
module.exports = new Search();