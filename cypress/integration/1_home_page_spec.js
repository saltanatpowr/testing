
describe( 'Home Page Test Cases', function() {
    beforeEach( function() {
        cy.visit('')
    });

    it( '1) Home Page Should open and validate', function() {
        cy.url().should('eq', 'https://www.powr-staging.io/')
    });

    it( '1)  validate all the images.', function() {
        cy.get('.button').should('not.be.disabled')
    });

    it( '1) validate all  buttons are functional.', function() {
        cy.get('img').should('be.visible')
    });

});
