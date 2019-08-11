
describe( 'Log In Form Test Cases', function() {

    beforeEach( function() {
        cy.visit('')
    });

    context('4) Forgot Password', () => {
        it( 'Reset password', function() {
            cy.resetPassword('sdu.leva9.po4ta.com')
        });
    });

    context('5) Log In Functionality', () => {
        it( 'Check simple Log In', function() {
            cy.login(Cypress.env('email'),Cypress.env('password'))
            cy.visit( '/users/me')
            cy.signOut()
        });
    });
});
