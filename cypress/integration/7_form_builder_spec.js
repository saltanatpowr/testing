import {
    addNewTextElement, clickNext, clickSubmit,
    clickWorkWithPattern,
    dismissPopUp,
    selectShoppingCart, setCenterAlignmentToElement
} from "../utils/form_builder_util";

describe( 'Form Builder Test Cases', function() {

    beforeEach( function() {
        cy.visit('')
        cy.login(Cypress.env('email'),Cypress.env('password'))
    });

    context('7) Form Builder', () =>{
        it( 'Form builder', function() {
            cy.visit("/plugins/form-builder/standalone")
            dismissPopUp()
            selectShoppingCart()
            clickWorkWithPattern()
            addNewTextElement('Text Box', 'Hello POWr Rangers')
            clickNext()
            setCenterAlignmentToElement()
            clickNext()
            clickSubmit()
            cy.signOut()
        });
    })
});
