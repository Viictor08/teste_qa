### CASOS DE TESTE API ###

# 1 - Home Route
  - Cenário: Verificar resposta da Home Route
    Dado que o servidor está em execução
    Quando eu faço uma requisição GET para a rota "/"
    Então a resposta deve ter o status 200
    E o corpo da resposta deve conter a mensagem "home"

# 2 - Get All Users
  - Cenário: Verificar resposta da Get All Users
    Dado que o servidor está em execução
    Quando eu faço uma requisição GET para a rota "/api/user"
    Então a resposta deve ter o status code 200
    E o corpo da resposta deve ser uma lista de usuários

# 3 - Get User by ID
  - Cenário: Verificar resposta da Get User by ID
    Dado que o servidor está em execução
    E existe um usuário com o ID 33
    Quando eu faço uma requisição GET para a rota "/api/user/33"
    Então a resposta deve ter o status 200
    E o corpo da resposta deve conter os dados do usuário com o ID 33

# 4 - Create User
  - Cenário: Criar um novo usuário
    Dado que o servidor está em execução
    Quando eu faço uma requisição POST para a rota "/api/user/create" com o corpo

      {
          "name": "João Victor Nunes",
          "email": "joaovictor@hotmail.com",
          "companies": ["Empresa1"]
      }
      
    Então a resposta deve ter o status 201
    E o corpo da resposta deve conter os dados do novo usuário criado

# 5 - Update User
  - Cenário: Atualizar um usuário existente
    Dado que o servidor está em execução
    E existe um usuário com o ID 33
    Quando eu faço uma requisição PATCH para a rota "/api/user/33/update" com o corpo
      
      {
          "name": "João Victor Nunes Atualizado",
          "email": "joaovictor2@hotmail.com",
          "companies": ["Empresa1", "Empresa2"]
      }
      
    Então a resposta deve ter o status 200
    E o corpo da resposta deve conter os dados atualizados do usuário com o ID 33

# 6 - Delete User
  - Cenário: Deletar um usuário existente
    Dado que o servidor está em execução
    E existe um usuário com o ID 33
    Quando eu faço uma requisição DELETE para a rota "/api/user/33/delete"
    Então a resposta deve ter o status 200
    E o corpo da resposta deve conter uma mensagem de confirmação de exclusão

# 7 - Get All Companies
  - Cenário: Verificar resposta da Get All Companies
    Dado que o servidor está em execução
    Quando eu faço uma requisição GET para a rota "/api/company"
    Então a resposta deve ter o status 200
    E o corpo da resposta deve ser uma lista de empresas

# 8 - Get Company by ID
  - Cenário: Verificar resposta da Get Company by ID
    Dado que o servidor está em execução
    E existe uma empresa com o ID 1
    Quando eu faço uma requisição GET para a rota "/api/company/1"
    Então a resposta deve ter o status 200
    E o corpo da resposta deve conter os dados da empresa com o ID 1

# 9 - Create Company
  - Cenário: Criar uma nova empresa
    Dado que o servidor está em execução
    Quando eu faço uma requisição POST para a rota "/api/company/create" com o corpo
      
      {
          "name": "Nova Empresa",
          "cnpj": "00.000.000/0000-00",
          "adress": {
              "cep": "12345-678",
              "country": "Brasil",
              "city": "São Paulo",
              "street_location": "Rua Exemplo",
              "number": "123",
              "district": "Centro"
          }
      }
      
    Então a resposta deve ter o status 201
    E o corpo da resposta deve conter os dados da nova empresa criada

# 10 - Update Company
  - Cenário: Atualizar uma empresa existente
    Dado que o servidor está em execução
    E existe uma empresa com o ID 1
    Quando eu faço uma requisição PATCH para a rota "/api/company/1/update" com o corpo
      
      {
          "name": "Empresa Atualizada",
          "cnpj": "11.111.111/1111-11",
          "adress": {
              "cep": "87654-321",
              "country": "Brazil",
              "state": "SP",
              "city": "São Paulo",
              "street": "Rua Augusta",
              "number": "456",
              "district": "Centro"
          }
      }
      
    Então a resposta deve ter o status 200
    E o corpo da resposta deve conter os dados atualizados da empresa com o ID 1

# 11 - Delete Company
  - Cenário: Deletar uma empresa existente
    Dado que o servidor está em execução
    E existe uma empresa com o ID 1
    Quando eu faço uma requisição DELETE para a rota "/api/company/1/delete"
    Então a resposta deve ter o status 200
    E o corpo da resposta deve conter uma mensagem de confirmação de exclusão