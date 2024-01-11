const BasePage = require('./basePage');
const header = require('./components/header')

class CitiesModal extends BasePage{
  constructor() {
    super();
  }

    get searchInput() {
        return cy.get('._rightCol_1tu7k_8 > div:nth-child(2) > div > div > div > div.input-material__group.input-material__group > div.input-material__input-group > div.input-material__input-wrapper')
    }
    get resultField() {
        return cy.get('._dropdown_104fn_7')
    }
    
    get citiesModalTitle() {
        return cy.get('._title_1tu7k_12')
    }
    get validationMessage() {
        return cy.get('div:nth-child(2) > div > div > div > div.input-material_bottom-block > div')
    }
    toChooseInvalidCity(city) {
        header.selectCityIcon.click();
        this.searchInput.type(city)
        this.citiesModalTitle.click()


    }
}
module.exports = new CitiesModal;