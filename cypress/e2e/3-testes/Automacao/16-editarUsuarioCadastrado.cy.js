describe('Acessando URL', () => {
    beforeEach(() => {
    // Acessar a URL para começar os testes do cadastro
    cy.viewport(1500, 1000);
    cy.visit('http://localhost:5400');
    });

    it('Editar um usuário cadastrado', () => {
        // Verifica se o botão de Editar está visível
        // Se estiver, clique no botão de Editar
        cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1)').should('be.visible').click();
    });
});