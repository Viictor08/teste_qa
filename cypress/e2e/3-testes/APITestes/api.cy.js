describe('Testes de API', () => {

  // 1 - Home Route
  it('Retorna a mensagem "home" na rota /', () => {
      cy.request('/').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.msg).to.eq('home');
      });
  });

  // 2 - Get All Users
  it('Retorna uma lista de usuários', () => {
      cy.request('/api/user').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
      });
  });

  // 3 - Get User by ID
  it('Retorna os dados de um usuário específico cujo o ID nós escolhemos para testar', () => {
      const userId = 33; // Substitua pelo ID de teste

      cy.request(`/api/user/${userId}`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('object');
          expect(response.body.id_user).to.eq('33');
      });
  });

  // 4 - Create User
  it('Cria um novo usuário', () => {
      const newUser = {
          name: 'João Victor Nunes',
          email: 'joaovictor@hotmail.com',
          companies: ['Empresa1']
      };

      cy.request({
          method: 'POST',
          url: '/api/user/create',
          body: newUser
      }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.name).to.eq(newUser.name);
      });
  });

  // 5 - Update User
  it('Atualiza um usuário já existente', () => {
      const userId = 1; // Substitua pelo ID de teste
      const updatedUser = {
          name: 'João Victor Atualizado',
          email: 'joaovictor@hotmail.com',
          companies: ['Empresa1', 'Empresa2']
      };

      cy.request({
          method: 'PATCH',
          url: `/api/user/${userId}/update`,
          body: updatedUser
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq(updatedUser.name);
      });
  });

  // 6 - Delete User
  it('Deleta um usuário já existente', () => {
      const userId = 33; // Substitua pelo ID de teste

      cy.request({
          method: 'DELETE',
          url: `/api/user/${userId}/delete`
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.include('deleted');
      });
  });

  // 7 - Get All Companies
  it('Retorna uma lista de empresas', () => {
      cy.request('/api/company').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
      });
  });

  // 8 - Get Company by ID
  it('Retorna os dados de uma empresa específica', () => {
      const companyId = 1; // Substitua pelo ID de teste

      cy.request(`/api/company/${companyId}`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('object');
          expect(response.body.id_company).to.eq('1');
      });
  });

  // 9 - Create Company
  it('Cria uma nova empresa', () => {
      const newCompany = {
          name: 'Nova Empresa',
          cnpj: '00.000.000/0000-00',
          adress: {
              cep: '12345-678',
              country: 'Brasil',
              city: 'São Paulo',
              street_location: 'Rua Exemplo',
              number: '123',
              district: 'Centro'
          }
      };

      cy.request({
          method: 'POST',
          url: '/api/company/create',
          body: newCompany
      }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.name).to.eq(newCompany.name);
      });
  });

  // 10 - Update Company
  it('Atualiza uma empresa já existente', () => {
      const companyId = 1; // Substitua pelo ID de teste
      const updatedCompany = {
          name: 'Empresa Atualizada',
          cnpj: '11.111.111/1111-11',
          adress: {
              cep: '87654-321',
              country: 'Brazil',
              state: 'SP',
              city: 'São Paulo',
              street: 'Rua Augusta',
              number: '456',
              district: 'Centro'
          }
      };

      cy.request({
          method: 'PATCH',
          url: `/api/company/${companyId}/update`,
          body: updatedCompany
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eq(updatedCompany.name);
      });
  });

  // 11 - Delete Company
  it('Deleta uma empresa já existente', () => {
      const companyId = 1; // Substitua pelo ID de teste

      cy.request({
          method: 'DELETE',
          url: `/api/company/${companyId}/delete`
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.include('deleted');
      });
  });
});