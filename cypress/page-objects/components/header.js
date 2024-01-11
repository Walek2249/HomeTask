const BasePage = require('../basePage');

class Header extends BasePage {
  constructor() {
    super();
  }

  get loginButton() {
    return cy.get('._root_12pcw_2 > [role="button"]')
  }
  get searchButton(){
    return cy.get('.x-button.x-button_primaryFilledWeb7184')
  }
  get searchInput() {
    return cy.get('._input_1su1z_19._inputShown_1su1z_43')
  }
  get womenSectionBtn() {
  return cy.get('[href="/women-home/?sitelink=topmenuW"]')
  }
  get menSectionBtn() {
  return cy.get('[href="/men-home/?sitelink=topmenuM"]')
  }
  get kidsSectionBtn() {
  return cy.get('[href="/kids-home/?sitelink=topmenuK"]')
  }
  get selectCityIcon() {
  return cy.get('._message_32s20_11')
  }
  get cityTitle() {
  return cy.get('._message_32s20_11 > :nth-child(1) > .notranslate')
  }
  get cartIcon() {
  return cy.get('a[href="/checkout/cart/"]')
  }
  doSearch(data) {
  this.searchInput.click();
  this.searchInput.type(data);
  this.searchButton.click()
  } 
}

module.exports = new Header();