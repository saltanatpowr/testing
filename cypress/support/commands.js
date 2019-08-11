// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add("signUp", (email, password) => {

    const btnSignUp = cy.get('.signUpTab.nav-btn:visible')
    btnSignUp.click()

    //Sign up in Sign Up Form
    const etEmail = cy.get('#new_registration_email')
    etEmail.type(email)
    const etPassword = cy.get('#new_registration_password')
    etPassword.type(password)
    const btnSubmit = cy.get('#sign-up-submit')
    btnSubmit.click()
})

Cypress.Commands.add("signOut", () => {



    const arrowAccountMenu = cy.get('.signed-in-menu').find('.fa')
    arrowAccountMenu.click()

    const menuItemSignOut = cy.get('.sign-out-container')
    menuItemSignOut.click()
})


Cypress.Commands.add("login", (email, password) => {

    //click to button Log in on HomePage
    const btnLogin = cy.get('.signInTab.button-secondary-outline.topnavsignin:visible')
    btnLogin.click()

    //log In on Login Form
    const etEmail = cy.get('#sign_in_email')
    etEmail.type(email)
    const etPassword = cy.get('#new_sign_in_password')
    etPassword.type(password)
    const btnSubmit = cy.get('#sign-in-submit')
    btnSubmit.click()

    //todo: rewrite this piece of code(shit) to direct login request in api and save token
    //todo: it very useful to save time of pre-test execution (for all test cases where we should be logined)
})

Cypress.Commands.add("resetPassword", (email) => {

    //click to button Log in on HomePage
    const btnLogin = cy.get('.signInTab.button-secondary-outline.topnavsignin:visible')
    btnLogin.click()

    //click reset password on login form
    const linkTextResetPassword = cy.get('.link.resetPassword').should('be.visible')
    linkTextResetPassword.click()

    //fill email to reset pass
    const etResetEmail = cy.get('#reset_password_email')
    etResetEmail.type('sdu.leva9.po4ta@gmail.com')

    //click button to submit reset
    const btnResetSubmit = cy.get('.powrbutton')
    btnResetSubmit.click()

    //verify reset is success
    //const noticeSuccessReset = cy.get('.notice--primary')
    //noticeSuccessReset.should('have.class', 'notice')

})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
