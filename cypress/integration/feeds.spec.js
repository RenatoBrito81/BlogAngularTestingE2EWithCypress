describe('Conduit Feeds', () =>{
    it('Ver feeds', () => {
        cy.login('usuario1@usuario.com.br','usuario1');
        cy.get('.nav-pills > .nav-item:nth-child(1) > .nav-link').click();
        cy.get('.nav-pills > .nav-item:nth-child(2) > .nav-link').click();
        cy.get('app-article-preview:nth-child(1) .btn').click();
    });
});