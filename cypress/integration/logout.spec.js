describe('Logout', () => {
    it('Logout via perfil', () => {
        cy.login('usuario1@usuario.com.br','usuario1');
        cy.contains('Settings').click();
        cy.url().should('include', '/settings');
        cy.get('.btn-outline-danger').click();
    });
});