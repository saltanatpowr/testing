
describe( 'Sign Up Form Test Cases', function() {

    beforeEach( function() {
        cy.visit('')
    });

    context('3) Existing User Should be able to Login.', () => {
        it( 'Existing User try to sign up', function() {
            cy.signUp(Cypress.env('email'),Cypress.env('password'))
            //verify button Create New Plugin
            const btnCreateNewPlugin = cy.get('.create-new-plugin')
            btnCreateNewPlugin.should('be.visible')
            cy.signOut()
        });
    });
});
