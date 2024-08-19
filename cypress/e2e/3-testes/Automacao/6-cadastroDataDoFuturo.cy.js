describe('Acessando URL', () => {
    beforeEach(() => {
    // Acessar a URL para começar os testes do cadastro
    cy.viewport(1500, 1000);
    cy.visit('http://localhost:5400');
    });

    it('Cadastrar um novo usuário com uma data do futuro', () => {
        // Verifica se o campo contém "Novo Usuário", se sim, clique nele
        cy.get('#new-user').should('contain','Novo Usuário').click();

        // Preencher o Nome
        // Procura pelo elemento "Nome", clique nele e preencha com seu nome
        cy.get('[placeholder="Nome"]').click().type('João Victor Nunes');

        // Preencher o Email
        // Procura pelo elemento "Email", clique nele e preencha com seu email
        cy.get('[placeholder="Email"]').click().type('joaovictornap@hotmail.com');

        // Preencher o Telefone
        // Procura pelo elemento Telefone, clique nele e preencha com seu telefone
        cy.get('[placeholder="Telefone"]').click().type('91111-1111');

        // Preencher a Cidade de Nascimento
        // Procura pelo elemento "Cidade de Nascimento", clique nele e preencha com sua cidade no qual você nasceu
        cy.get('[placeholder="Cidade de nascimento"]').click().type('João Pessoa');

        // Preencher com a Data de Nascimento
        // Procura pelo elemento data de nascimento, clique nele e para preencher a sua data de nascimento
        cy.get('[placeholder="Data de nascimento"]').click().type('2300-11-09');

        // Verificar se existe as 3 opções de Empresa e selecionar uma delas
        // Procura pelo elemento de Empresas e clique nele para abrir as opções
        cy.get('#search_input').click();

        // Verifica as opções que abriu, e verifica se possui 3 opções de empresas
        cy.get('.optionContainer li').should('have.length', 3);

        // Dentre as 3 opções de empresas que apareceram, escolhe a primeira opção que cujo tenha o nome "Empresa 1" e clique nela
        cy.get('.optionContainer li').first().should('have.text','Empresa 1').click();

        // Clique em algum outro elemento para fechar as opções de empresas
        cy.get('h2').click();

        // Salvar o cadastro do usuário
        // Verifique se o butão "Salvar" está visível
        // Se estiver visível, clique.
        cy.get('.sc-eCImPb > button').should('be.visible','Salvar').click();
    });
});