### Casos de Teste ###

# Cenário 1: Cadastro de um novo usuário com sucesso
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher todos os campos obrigatórios corretamente
  E clicar em "Salvar"
  Então eu devo ver na lista de usuários o novo usuário criado.

# Cenário 2: Tentativa de cadastro com o campo Nome em branco
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher todos os campos, exceto o campo Nome
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro indicando que o campo Nome é obrigatório.

# Cenário 3: Tentativa de cadastro com o campo E-mail em formato inválido
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher o campo E-mail com um formato inválido
  E preencher todos os outros campos corretamente
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro indicando que o E-mail deve ser válido.

# Cenário 4: Tentativa de cadastro com o campo Data em branco
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher todos os campos, exceto o campo Data
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro indicando que o campo Data é obrigatório.

# Cenário 5: Tentativa de cadastro sem selecionar uma Empresa
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher todos os campos, exceto o campo Empresa
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro "Atenção! Insira as empresas do usuário!".

# Cenário 6: Tentativa de cadastro com o campo Data do futuro
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher o campo Data com uma data do futuro
  E preencher todos os outros campos corretamente
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro indicando que a Data não pode ser no futuro.

# Cenário 7: Tentativa de cadastro com todos os campos obrigatórios em branco
  Dado que eu esteja na página de cadastro de usuário
  Quando eu clicar em "Salvar" sem preencher nenhum campo campo obrigatório
  Então eu devo ver mensagens de erro para todos os campos obrigatórios.

# Cenário 8: Tentativa de cadastro com o campo Telefone contendo caracteres inválidos
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher o campo Telefone com letras ou símbolos
  E preencher todos os outros campos corretamente
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro indicando que o Telefone deve conter apenas números.

# Cenário 9: Tentativa de cadastro com um E-mail já cadastrado
  Dado que eu esteja na página de cadastro de usuário
  E já exista um usuário com o E-mail preenchido
  Quando eu tentar cadastrar um novo usuário com o mesmo E-mail
  Então eu devo ver uma mensagem de erro indicando que o E-mail já está em uso.

# Cenário 10: Tentativa de cadastro com o campo Nome contendo caracteres especiais
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher o campo Nome com caracteres especiais
  E preencher todos os outros campos corretamente
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro indicando que o Nome não pode conter caracteres especiais.

# Cenário 11: Tentativa de cadastro com um Telefone já cadastrado
  Dado que eu esteja na página de cadastro de usuário
  E já exista um usuário com o Telefone preenchido
  Quando eu tentar cadastrar um novo usuário com o mesmo Telefone
  Então eu devo ver uma mensagem de erro indicando que o Telefone já está em uso.

# Cenário 12: Tentativa de cadastro com o campo E-mail sem o domínio
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher o campo E-mail sem o domínio (ex.: usuario@)
  E preencher todos os outros campos corretamente
  E clicar em "Salvar"
  Então eu devo ver uma mensagem de erro indicando que o E-mail deve conter um domínio válido.

# Cenário 13: Tentativa de cadastro de um novo usuário com 2 empresas
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher todos os campos obrigatórios corretamente
  E selecionar 2 empresas
  E clicar em "Salvar"
  Então eu devo ver um novo cadastro de usuário com todos os campos preenchidos e com 2 empresas.

# Cenário 14: Tentativa de cadastro de um novo usuário com 3 empresas
  Dado que eu esteja na página de cadastro de usuário
  Quando eu preencher todos os campos obrigatórios corretamente
  E selecionar todas as 3 empresas.
  E clicar em "Salvar"
  Então eu devo ver um novo cadastro de usuário com todos os campos preenchidos e com 3 empresas.

# Cenário 15: Tentativa de editar um usuário cadastrado com sucesso
  Dado que eu esteja na página de usuários cadastrados
  Quando eu clicar no botão de Editar
  E abrir uma aba com os dados do usuário já cadastrado
  Então eu devo conseguir editar todos os dados deste usuário que já estava cadastrado.

# Cenário 16: Tentativa de editar um usuário cadastrado sem sucesso
  Dado que eu esteja na página de usuários cadastrados
  Quando eu clicar no botão de Editar
  E não abrir nenhuma aba com as informações do usuário
  Então eu não consigo fazer a edição do usuário.

# Cenário 17: Tentativa de excluir um usuário cadastrado com sucesso
  Dado que eu esteja na página de usuário cadastrados
  Quando eu clicar no botão de excluir
  E visualizar uma aba dizendo "Sucesso! Usuário deletado com sucesso!"
  Então o usuário deverá ser excluído do sistema.

# Cenário 18: Tentativa de excluir um usuário cadastrado sem sucesso
  Dado que eu esteja na página de usuário cadastrados
  Quando eu clicar no botão de excluir
  E visualizar uma aba dizendo "Sucesso! Usuário deletado com sucesso!"
  E o usuário permanecer no sistema de usuários cadastrados
  Então não será possível excluir nenhum usuário cadastrado.