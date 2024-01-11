const mainPage = require('../../page-objects/mainPage');
const productPage = require('../../page-objects/productPage');
const cartPage = require('../../page-objects/cartPage');
const header = require('../../page-objects/components/header');
const productModal = require('../../page-objects/productModal')

describe('cart functionality tests', function(){
    beforeEach(() => {
        mainPage.navigate('https://www.lamoda.by/')
      })

      it('product should be added to the cart', () => {
        header.doSearch('MP002XU086IN');
        productPage.addToCartButton.click();
        cy.validateText(productModal.modalTitle,'Товар добавлен в корзину')
      })
      
      it('increase quantity product button should worl correcltly', () => {
        header.doSearch('MP002XU086IN')
        productPage.addToCartButton.click();
        productModal.goToCartBtn.click();
        cartPage.increaseQuantityProdBtn.click();
        cy.validateText(cartPage.QuantityProd,'2')
      })
        
      })

      
