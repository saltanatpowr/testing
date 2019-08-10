class LogInForm {

    fillEmail(value) {
        const field =  cy.get('#sign_in_email');
        field.clear();
        field.type(value);
        return this;
    }

    fillPassword(value) {
        const field = cy.get('#new_sign_in_password');
        field.clear();
        field.type(value);
        return this;
    }

    submit() {
        const button = cy.get('#sign-in-submit');
        button.click();
    }

    //todo: error handling + log in using other systems
}

export default LogInPage;