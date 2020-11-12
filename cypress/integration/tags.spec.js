describe('Tags', () => {
    it('Adicionar', () => {
        cy.login('usuario1@usuario.com.br','usuario1');
        cy.contains('usuario1').click();
        cy.location('pathname').should('contains', '/profile');
        cy.get('.article-preview').get('h1').first().click();
        cy.contains('Edit Article').click();
        cy.get('[placeholder="Enter tags"]').type('Agil {enter} ');
        cy.get('[placeholder="Enter tags"]').type('E2E Agil {enter} ');
        cy.contains('Publish Article').click();
        cy.get('.tag-list').contains('E2E Agil');
    });
});