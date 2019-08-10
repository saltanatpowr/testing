

export const getPricingForCard = (cardName) => {
    //click to Form builder selector
    const btnFormBuilder = cy.get('.chosen-plugin-container')
    btnFormBuilder.click()

    //choose Social Feed
    const socialFeedCard = cy.get('.app-card').contains(cardName)
    socialFeedCard.click()
}

export const comparePricesForEachPlan = (priceType, freePrice, starterPrice, proPrice, businessPrice) => {
    cy.get('.price-table__plan-price > ' + priceType).should(($lis) => {
        expect($lis.eq(0), 'Free').to.contain(freePrice)
        expect($lis.eq(1), 'Starter').to.contain(starterPrice)
        expect($lis.eq(2), 'Premium').to.contain(proPrice)
        expect($lis.eq(3), 'PRO').to.contain(businessPrice)
    })
}


    export const goToPaymentForSelectedPlan = (selectedPlanSelector) => {
    //const alertAccountMessage = cy.get('.generic-tooltip__close-icon').should('be.visible')
    //alertAccountMessage.click()

    const btnSelectPlan = cy.get(selectedPlanSelector).first()
    btnSelectPlan.click()
}

export const addNewPaymentCard = (holderName, cardNumber, cardExpMonth, cardExpYear, cardCVV, holderCity, holderAddress, holderState, holderZip, holderCountry) => {
    //click to radio 'Add New Card'

    //const rbAddNewCard = cy.get('.price-table__checkout-saved-cards-label').find('[value="new"]')
    //rbAddNewCard.click()

    //fill Payment Form
    cy.get('#frmNameCC').type(holderName)

    cy.get('#creditCardNumber').type(cardNumber)
    cy.get('#expMonth').type(cardExpMonth)
    cy.get('#expYear').type(cardExpYear)
    cy.get('#cvv').type(cardCVV)

    cy.get('#frmCityB').type(holderCity);
    cy.get('#frmAddressB').type(holderAddress);
    cy.get('#frmStateB').type(holderState)
    cy.get('#frmZipB').type(holderZip)
    cy.get('select').select(holderCountry)
}

export const submitPayment = () => {
    //submit with new payment form
    const btnConfirmPayment =  cy.get('.confirm-payment-button')
   btnConfirmPayment.click();
}

export const verifySuccessPayment = () => {
    cy.wait(10000);
        //verify success adter submitting
    cy.get('.price-table__checkout-success-title').should('be.visible')


}



export const clickUpgradeButton = () => {
    const btnUpgrade = cy.get('.button-upgrade').should('be.visible')
    btnUpgrade.click()
}


