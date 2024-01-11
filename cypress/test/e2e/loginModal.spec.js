const mainPage = require('../../page-objects/mainPage');
const loginModal = require('../../page-objects/loginModal')


describe('login modal tests ', function () {
    beforeEach(() => {
        mainPage.navigate('https://www.lamoda.by')
      });

    it('Login button should be enabled ', () => {
        loginModal.loginByEmail('login@test.com', 'password');
        loginModal.loginButton.should('not.be.disabled')
    })

    it('Login button should be disabled', () => {
        loginModal.loginByEmail('login@test.com', 'pass');
        loginModal.loginButton.should('be.disabled')
    })

    it('Forgot password`s description should be correct displayed  ', () => {
        loginModal.goToForgotPwdOption();
        cy.validateText(loginModal.forgotPwdDescription, 'Укажите адрес электронной почты, который вы использовали при оформлении заказов в Lamoda. Мы вышлем вам инструкцию по восстановлению пароля')
    })
    
    it('Error notification invalid user name should be correct displayed', () => {
        loginModal.loginByWrongEmail('login@test');
        cy.validateText(loginModal.errorNotificationlogin, 'Пожалуйста, проверьте, правильно ли указан адрес')
    })

    it('Error notification about password with short length should be correct displayed', () => {
        loginModal.loginByWrongPasswordLength('login@test.com', '123');
        cy.validateText(loginModal.errorNotificationlogin, 'Пароль должен содержать не менее 6 символов.')
    })

});