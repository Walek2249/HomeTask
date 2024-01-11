const BasePage = require('./basePage')

class MainPage extends BasePage {
  constructor() {
    super();
  }
  get womenSectionBanner() {
    return cy.get('._items_16eml_2 > [href="/women-home/"]')
  }
  get menSectionBanner() {
    return cy.get('[href="/men-home/"]')
  }
  get kidsSectionBanner() {
    return cy.get('[href="/kids-home/"]')
  }
}

module.exports = new MainPage();