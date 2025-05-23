class LoginPage {
  visit() {
    cy.clearCookies();
    cy.visit('/login', {
      onBeforeLoad(win) {
        win.sessionStorage.clear();
      }
    });
    cy.url().should('include', '/login');
    cy.get('input#email').should('be.visible');
  }

  fillEmail(email) {
    cy.get('input#email').type(email);
  }

  fillPassword(password) {
    cy.get('input#senha').type(password);
  }

  clickLogin() {
    cy.get('button[type=submit]').click();
  }

  loginWith(email, password) {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  
    cy.contains('Contas', { timeout: 10000 }).should('be.visible');
  }
}

export default new LoginPage();
