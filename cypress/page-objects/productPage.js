const BasePage = require('./basePage')

class ProductPage extends BasePage {
  constructor() {
    super();
  }

  get addToCartButton() {
    return cy.get('._recaptcha_lrjtr_7')
  }
  get modalTitle() {
    return cy.get('.d-modal__header')
  }
  get closeModalIcon() {
    return cy.get('.d-modal__close-button > .icon')
  }
  get chooseSize() {
    return cy.get('._placeholder_1widv_51')
  }
}


module.exports = new ProductPage();