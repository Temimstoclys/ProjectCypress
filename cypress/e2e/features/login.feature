Feature: Login

 Scenario: Login com sucesso
  Given que estou na página de login
  When eu preencho minhas credenciais válidas
  And clico no botão de login
  Then devo ver a mensagem de boas-vindas "Bem vindo, Sr.Madruga!"
