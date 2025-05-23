Feature: Gerenciamento de contas

  Background: Usuário logado no sistema
    Given que estou logado no sistema

  Scenario: Criar uma nova conta
    When crio uma conta válida
    Then devo ver a mensagem "Conta adicionada com sucesso!"

  Scenario: Listar contas
    When acesso a listagem de contas
    Then devo ver a conta cadastrada

  Scenario: Editar conta existente
    When edito a conta para um novo nome
    Then devo ver a mensagem "Conta alterada com sucesso!"

  Scenario: Excluir conta existente
    When excluo a conta editada
    Then devo ver a mensagem "Conta removida com sucesso!"
