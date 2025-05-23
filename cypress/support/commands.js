Cypress.Commands.add('login', () => {
  cy.visit('/login');
  cy.get('#email').type('srmadruga123@gmail.com');
  cy.get('#senha').type('xyz@123');
  cy.get('button[type=submit]').click();
  cy.contains('Contas').should('be.visible');
});
