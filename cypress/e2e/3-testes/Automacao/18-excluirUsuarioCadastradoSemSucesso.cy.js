describe('Acessando URL', () => {
    beforeEach(() => {
    // Acessar a URL para começar os testes do cadastro
    cy.viewport(1500, 1000);
    cy.visit('http://localhost:5400');
    });

    it('Excluir um usuário cadastrado', () => {
        // Verifica se o botão de Excluir está visível
        // Se estiver, clique nele
        // Deverá abrir uma aba com uma mensagem dizendo "Sucesso! Usuário deletado com sucesso!"
        // E então deverá ser excluído do sistema o usuário
        cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2)').should('be.visible').click();
        cy.get('.swal2-confirm').should('be.visible').click();
    });
});