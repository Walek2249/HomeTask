const mainPage = require('../../page-objects/mainPage');
const citiesModal = require('../../page-objects/citiesModal');
const header = require('../../page-objects/components/header')



describe('cities modal tests ', function () {
    beforeEach(() => {
        mainPage.navigate('https://www.lamoda.by')
      })

    it('should displayed correct title ', () => {
        header.selectCityIcon.click();
        cy.validateText(citiesModal.citiesModalTitle, 'Где вы находитесь?')
    })

    it('should displayed validation message ', () => {
        citiesModal.toChooseInvalidCity('Марсель');
        cy.validateText(citiesModal.validationMessage, 'Пожалуйста, выберите значение из списка.')
    })

});