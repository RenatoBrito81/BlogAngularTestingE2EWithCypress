/*
//Utilizando o Cypress Record no Google Chrome
describe('Cadastro de usuário', () => {
    it('Sucesso', () => {
        cy.visit('http://localhost:4200/');
        cy.get('.home-page').click();
        cy.get('.navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
        cy.get('.row').click();
        cy.get('.ng-valid').click();
        cy.get('.ng-valid').type('usuario1');
        cy.get('.form-group:nth-child(2) > .form-control').type('usuario1@usuario.com.br');
        cy.get('.ng-untouched').type('usuario1');
        cy.get('.btn').click();
        cy.get('.ng-dirty:nth-child(4)').submit();
    });
});
*/

describe('Conduit Cadastro', () => {
    const usuario = 'usuario' + (new Date()).getTime();
    const senha = 'senha' + (new Date()).getTime();

    it('Novo Usuário', () => {
        cy.visit('/register');
        cy.get('[formcontrolname=username]').type(usuario);
        cy.get('[formcontrolname=email]').type(usuario + '@email.com');
        cy.get('[formcontrolname=password]').type(senha);
        cy.get('.btn').click();
        cy.contains('.nav-item:nth-child(4) > .nav-link', usuario)
           .should('be.visible');
    });

    it('Usuário já existe', () => {
        cy.visit('/register');
        cy.get('[formcontrolname=username]').type(usuario);
        cy.get('[formcontrolname=email]').type(usuario + '@email.com');
        cy.get('[formcontrolname=password]').type(senha);
        cy.get('.btn').click();
        cy.location('pathname').should('equal', '/register');
        cy.get('.error-messages > li:nth-child(1)')
           .should('not.be.empty');
    });
});