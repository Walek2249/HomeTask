const BasePage = require('./basePage')

class ProductModal extends BasePage {
  constructor() {
    super();
  }

  get modalTitle() {
    return cy.get('.d-modal__header')
  }
  get contShoppingBtn() {
    return cy.get('.x-button_secondaryFilledWeb7184')
  }
  get goToCartBtn() {
    return cy.get('.d-modal__bottom > .x-button_primaryFilledWeb7184')
  }
  get closeModalIcon() {
    return cy.get('.d-modal__close-button > .icon')
  }
  get chooseSize() {
    return cy.get('._placeholder_1widv_51')
  }
}


module.exports = new ProductModal();