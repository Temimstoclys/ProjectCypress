
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("que estou na página de login", () => {
  LoginPage.visit();
});

When("eu preencho minhas credenciais válidas", () => {
  cy.fixture('usuarios').then((usuario) => {
    LoginPage.fillEmail(usuario.usuarioValido.email);
    LoginPage.fillPassword(usuario.usuarioValido.senha);
  });
});

When("clico no botão de login", () => {
  LoginPage.clickLogin();
});

Then("devo ver a mensagem de boas-vindas {string}", (msg) => {
  cy.contains("Contas", { timeout: 10000 }).should("be.visible");
});
