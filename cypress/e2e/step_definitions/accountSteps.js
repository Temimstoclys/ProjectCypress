
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import AccountPage from "../../pages/AccountPage";

Given("que estou logado no sistema", () => {
  cy.fixture('usuarios').then((usuario) => {
    LoginPage.loginWith(usuario.usuarioValido.email, usuario.usuarioValido.senha);
  });
});

When("crio uma conta válida", () => {
  cy.fixture('contas').then((conta) => {
    AccountPage.createAccount(conta.contaValida);
  });
});

Then("devo ver a mensagem {string}", (msg) => {
  cy.contains(msg).should("be.visible");
});

When("acesso a listagem de contas", () => {
  AccountPage.navigateToListAccounts();
});

Then("devo ver a conta cadastrada", () => {
  cy.fixture('contas').then((conta) => {
    cy.contains(conta.contaValida).should("exist");
  });
});

When("edito a conta para um novo nome", () => {
  cy.fixture('contas').then((conta) => {
    AccountPage.navigateToListAccounts();
    AccountPage.editAccount(conta.contaValida, conta.contaEditada);
  });
});

When("excluo a conta editada", () => {
  cy.fixture('contas').then((conta) => {
    AccountPage.navigateToListAccounts();
    AccountPage.deleteAccount(conta.contaEditada);
  });
});
