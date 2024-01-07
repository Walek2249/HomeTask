const BasePage = require('../basePage')
class Search extends BasePage {
  constructor(page) {
    super(page);
  }
  get searchInput() {
    return this.page.locator("input.DocSearch-Input");
  }
  async startSearch(searchValue) {
    await this.searchInput.fill(searchValue);
    await this.page.keyboard.press('Enter');
}
}
module.exports = Search;