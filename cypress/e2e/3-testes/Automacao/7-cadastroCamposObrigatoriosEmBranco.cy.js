describe('Acessando URL', () => {
    beforeEach(() => {
    // Acessar a URL para começar os testes do cadastro
    cy.viewport(1500, 1000);
    cy.visit('http://localhost:5400');
    });

    it('Cadastrar um novo usuário sem preencher os campos obrigatórios', () => {
        // Verifica se o campo contém "Novo Usuário", se sim, clique nele
        cy.get('#new-user').should('contain','Novo Usuário').click();

        // Preencher a Cidade de Nascimento
        // Procura pelo elemento "Cidade de Nascimento", clique nele e preencha com sua cidade no qual você nasceu
        cy.get('[placeholder="Cidade de nascimento"]').click().type('João Pessoa');

        // Salvar o cadastro do usuário
        // Verifique se o butão "Salvar" está visível
        // Se estiver visível, clique.
        cy.get('.sc-eCImPb > button').should('be.visible','Salvar').click();
    });
});