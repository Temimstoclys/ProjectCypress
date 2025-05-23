
class MenuPage {
  acessarMenuContas() {
    cy.contains('Contas').click();
  }

  acessarAdicionarConta() {
    this.acessarMenuContas();
    cy.contains('Adicionar').click();
  }

  acessarListarConta() {
    this.acessarMenuContas();
    cy.contains('Listar').click();
  }
}

export default new MenuPage();
