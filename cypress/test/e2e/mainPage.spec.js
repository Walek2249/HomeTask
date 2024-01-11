const mainPage = require('../../page-objects/mainPage');
const header = require('../../page-objects/components/header')

describe('main page tests', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by')
  })

  it('men banner should redirects correctly to the men section', () => {
    mainPage.menSectionBanner.click();
    cy.url().should('include', '/men-home/')
  })

  it('men button should redirects correctly to the men section', () => {
    header.menSectionBtn.click();
    cy.url().should('include', '/men-home/')
  })

  it('women banner should redirects correctly to the women section', () => {
    mainPage.womenSectionBanner.click();
    cy.url().should('include', '/women-home/')
  })

  it('women button should redirects correctly to the women section', () => {
    header.womenSectionBtn.click();
    cy.url().should('include', '/women-home/')
  })

  it('kids banner should redirects correctly to the kids section', () => {
    mainPage.kidsSectionBanner.click();
    cy.url().should('include', '/kids-home/')
  })

  it('kids button should redirects correctly to the kids section', () => {
    header.kidsSectionBtn.click();
    cy.url().should('include', '/kids-home/')
  })

});