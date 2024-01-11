
Cypress.Commands.add('validateText', (element, text) => {
    element.should('have.text', text);
});

