describe('Conduit Login', () => {

    it('Login com sucesso', () => {
        cy.login('usuario1@usuario.com.br','usuario1');
        cy.get('.nav-item:nth-child(4) > .nav-link').click();
        cy.get('.btn:nth-child(5)').click();
        cy.url().should('contain', '/settings');
    });

    it('Login com dados inválidos', () => {
        cy.login('usuario77@usuario.com.br','usuarioNaoExiste');
        cy.get('.error-messages > li').should('contain', 'email or password is invalid');
    });
});