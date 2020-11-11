describe('Perfil', () =>{
    it('Editar Perfil', () => {
        cy.login('usuario1@usuario.com.br','usuario1');
        cy.contains('usuario1').click();
        cy.contains('Edit Profile Settings').click();
        cy.get('[formcontrolname="image"]').clear();
        cy.get('[formcontrolname="image"]').type('https://thispersondoesnotexist.com/image');
        cy.get('[formcontrolname=password]').type('usuario1');
        cy.contains('Update Settings').click();
    });
});