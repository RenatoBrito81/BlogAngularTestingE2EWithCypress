describe('Post', () =>{
    
    beforeEach(() => {
        cy.login('usuario1@usuario.com.br','usuario1');
    });

    it('Novo', () => {
        cy.contains('New Article').click();
        cy.location('pathname').should('equal', '/editor');
        cy.get('[formcontrolname=title]').type('Cypress E2E - Teste2');
        cy.get('[formcontrolname=description]').type('Teste Ponta a Ponta');
        cy.get('[formcontrolname=body]').type('Agilidade, Qualidade');
        cy.contains('Publish Article').click();
        cy.get('h1').contains('Cypress E2E');
    });

    it('Editar', () => {
        cy.contains('usuario1').click();
        cy.location('pathname').should('contains', '/profile');
        cy.get('.article-preview').get('h1').first().click();
        cy.contains('Edit Article').click();
        cy.get('[formcontrolname=body]').clear();
        cy.get('[formcontrolname=body]').type('Economia');
        cy.contains('Publish Article').click();
        cy.contains('Economia');
    });
});