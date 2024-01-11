const BasePage = require("../basePage");

class Footer extends BasePage {
  constructor() {
    super();
  }

  get emailInput() {
    return cy.get('.input-material__input-group')
  }
  get checkBox() {
    return cy.get('.x-checkbox.x-checkbox_alignment_center')
  }
  get checkBoxContent() {
    return cy.get('div:nth-child(4) > div > span')
  }
  get subscribeBtn() {
    return cy.get('._buttons_1lmun_12 > button')
  }
  get resultTitle() {
    return cy.get('_titleResult_1lmun_30')
  }
  get switchDisplayMode() {
    return cy.get('._root_m3snj_6 > ._root_f9xmk_2')
  }
  get changeCountryBtn() {
    return cy.get('._countryName_xilgb_54')
  }
  get footerWomenMenuBar() {
    return cy.get('.x-footer-seo-menu-tabs > :nth-child(1)')
  }
  get footerMenMenuBar() {
    return cy.get('.x-footer-seo-menu-tabs > :nth-child(3)')
  }
  get footerKidsMenuBar() {
    return cy.get('.x-footer-seo-menu-tabs > :nth-child(5)')
  }
  get footerWomenMenuBarCategory() {
    return cy.get('div:nth-child(2) > .x-footer-seo-menu-tab-category_opened')
  }
  get footerMenMenuBarCategory() {
    return cy.get('div:nth-child(4) > .x-footer-seo-menu-tab-category_opened')
  }
  get footerWomenMenuBarSubCategory() {
    return cy.get('div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > a')
  }
  get footerMenMenuBarSubCategory() {
    return cy.get('div:nth-child(4) > div:nth-child(6) > div:nth-child(7) > a')
  }

  goToFooterWomenMenuBarSubCategory() {
  this.footerWomenMenuBar.click();
  this.footerWomenMenuBarCategory.click();
  this.footerWomenMenuBarSubCategory.click()
  }
  goToFooterMenMenuBarSubCategory() {
  this.footerMenMenuBar.click();
  this.footerMenMenuBarCategory.click();
  this.footerMenMenuBarSubCategory.click()
  }
  goToBeSubscribed (email) {
  this.emailInput.type(email);
  this.checkBoxContent.click() 
  }
}
module.exports = new Footer;
