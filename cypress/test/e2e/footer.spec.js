const mainPage = require('../../page-objects/mainPage');
const footer = require('../../page-objects/components/footer');
const catalogPage = require('../../page-objects/catalogPage')

    describe('footer tests ', function () {
    beforeEach(() => {
        mainPage.navigate('https://www.lamoda.by/')
      });

      it('check that mobile version is switched on from the footer', ()=>{
        footer.switchDisplayMode.click()
        cy.url().should('include', 'women-home/?sv=mob')
      })

      it('should go to Women hats page correctly', () => {
        footer.goToFooterWomenMenuBarSubCategory()
        cy.validateText(catalogPage.titleSubCategory, 'Женские головные уборы');
      })

      it('should go to Men bags page correctly', () => {
        footer.goTofooterMenMenuBarSubCategory()
        cy.validateText(catalogPage.titleSubCategory, 'Мужские сумки')
      })

      it('subscribe button should enabled after email be writing', () => {
        footer.goToBeSubscribed('qwerty@yy.com')
        footer.subscribeBtn.should('not.be.disabled')
      })
    
});
