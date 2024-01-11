const BasePage = require('./basePage')
const header = require('./components/header')

class LoginModal extends BasePage {
  constructor() {
    super();
  }

  get loginField() {
    return cy.get('.input-material__input-wrapper')
  }
  get loginFieldWithPassFieldEnabled() {
    return cy.get(':nth-child(2) > .input-material > .input-material__wrapper > .input-material__group > .input-material__input-group > .input-material__input-wrapper > .input-material__input-user-agent')
  }

  get errorNotificationlogin() {
    return cy.get('div.input-material__validation-message')  
  } 

  get passwordField() {
    return cy.get(':nth-child(3) > .input-material > .input-material__wrapper > .input-material__group > .input-material__input-group > .input-material__input-wrapper')
  }

  get loginButton() {
    return cy.get('div._footer_7r0bx_36 > button')
  }

  get errorNotification() {
    return cy.get('._message_11do5_46')
  }

  get forgotPwdButton() {
    return cy.get('._forgotPwd_7r0bx_18 > ._root_f9xmk_2')
  }

  get forgotPwdDescription() {
    return cy.get('._description_ht48r_8')
  }

  loginByEmail(login, password) {
    header.loginButton.click();
    this.loginField.type(login);
    this.passwordField.type(password)
  }
  loginByWrongEmail(login) {
    header.loginButton.click();
    this.loginField.type(login);
    this.passwordField.click()
  }
  loginByWrongPasswordLength(login, password) {
    header.loginButton.click();
    this.loginField.type(login);
    this.passwordField.type(password);
    this.loginFieldWithPassFieldEnabled.click()
  }
  goToForgotPwdOption() {
    header.loginButton.click();
    this.forgotPwdButton.click()
  }
}

module.exports = new LoginModal();