describe('Comentarios', () => {
    it('Escrever', () => {
        cy.login('usuario1@usuario.com.br','usuario1');
        cy.contains('Global Feed').click();
        cy.get('.preview-link').first().click();
        cy.get('.form-control').type('Sensacional');
        cy.get('.btn-primary').click();
        cy.contains('Sensacional');
    });
});