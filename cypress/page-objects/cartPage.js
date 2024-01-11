const BasePage = require('./basePage')

class CartPage extends BasePage {
  constructor() {
    super();
  }

  get productCountTitle() {
    return cy.get ('.ui-checkout-cart__products-count')
  }
  get increaseQuantityProdBtn() {
    return cy.get('.ui-incrementor__increase > .icon')
  }
  get decreaseQuantityProdBtn() {
    return cy.get('.ui-incrementor__decrease > .icon')
  }
  get QuantityProd() {
    return cy.get('._quantity_3c6f5_56')
  }
  get CurrProdPrice() {
    return cy.get('._currentPrice_7h3td_87 > span')
  }
  get goToCheckoutBtn() {
    return cy.get('._buttonBackground_hj5hh_6 > .x-button')
  }
}

module.exports = new CartPage();