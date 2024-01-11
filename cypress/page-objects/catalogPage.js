const BasePage = require('./basePage');

class CatalogPage extends BasePage {
  constructor() {
    super();
  }
  get titleSubCategory () {
    return cy.get('._root_641wy_2._desktop_641wy_45 > div > div > h1')
  }
}

module.exports = new CatalogPage();