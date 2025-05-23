
import MenuPage from './MenuPage';

class AccountPage {
  navigateToAddAccount() {
    MenuPage.acessarAdicionarConta();
  }

  navigateToListAccounts() {
    MenuPage.acessarListarConta();
  }

  fillAccountName(name) {
    cy.get('input[id=nome]').clear().type(name);
  }

  submit() {
    cy.get('button[type=submit]').click();
  }

  createAccount(name) {
    this.navigateToAddAccount();
    this.fillAccountName(name);
    this.submit();
  }

  editAccount(oldName, newName) {
    this.navigateToListAccounts();
    cy.contains(oldName).parent().find('a[href*="editar"]').click();
    this.fillAccountName(newName);
    this.submit();
  }

  deleteAccount(name) {
    this.navigateToListAccounts();
    cy.contains(name).parent().find('a[href*="remover"]').click();
  }

  assertSuccessMessage(msg = 'Conta adicionada com sucesso!') {
    cy.contains(msg).should('be.visible');
  }

  assertErrorMessage(msg) {
    cy.contains(msg).should('be.visible');
  }
}

export default new AccountPage();
