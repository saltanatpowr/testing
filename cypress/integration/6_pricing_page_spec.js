import faker from "faker";
import {
    getPricingForCard,
    goToPaymentForSelectedPlan,
    submitPayment,
    clickUpgradeButton,
    addNewPaymentCard, comparePricesForEachPlan, verifySuccessPayment
} from '../utils/pricing_util'


describe( 'Pricing Page Test Cases', function() {

    context('6) Pricing Page',() => {

        it( 'Check Prices for Social Feed', function() {
            cy.visit( '/pricing')
            cy.login(Cypress.env('email'),Cypress.env('password'))
            getPricingForCard('Social Feed')
            const priceFilters = [
                {priceType: '.dollar-price', freePrice:'0', starterPrice:'4', proPrice: '10', businessPrice:'62'}
                //{priceType: '.cent-price', freePrice:'', starterPrice:'49', proPrice: '79', businessPrice:'99'}

            ]
            cy.wrap(priceFilters)
                .each(filter => {
                    comparePricesForEachPlan(filter.priceType, filter.freePrice, filter.starterPrice, filter.proPrice, filter.businessPrice)
                })
            cy.signOut()
        });

        it( 'Check Payment Form', function() {
            const paymentCredentialsFilters = [
                //todo: rewrite PaymentData to class (too many fields)
                //MasterCard
                {pricingCard: 'Social Feed', selectedPlan: '.is-premium-btn',holderName: 'Abay', cardNumber:'5499 7400 0000 0057', expMonth:'4', expYear: '33', CVV:'998', city:'Almaty', address:'Koktem', state: 'state', zip:'998',country:'Afghanistan'},
                //Visa
                {pricingCard: 'Media Gallery',selectedPlan: '.is-pro-btn' ,holderName: 'Babay', cardNumber:'4111 1111 1111 1111', expMonth:'4', expYear: '33', CVV:'999', city:'Chicago', address:'South Side', state: 'Ill', zip:'1234567',country:'Kazakhstan'}
            ]

            cy.wrap(paymentCredentialsFilters)
                .each(filter => {
                    cy.visit("/pricing")
                    const randomEmail = faker.internet.email()
                    cy.signUp(randomEmail,'randompass')
                    getPricingForCard(filter.pricingCard)
                    goToPaymentForSelectedPlan(filter.selectedPlan)
                    addNewPaymentCard(filter.holderName, filter.cardNumber, filter.expMonth, filter.expYear, filter.CVV, filter.city, filter.address, filter.state,filter.zip,filter.country)
                    submitPayment()
                    verifySuccessPayment()
                    cy.signOut()
                })
        });

        it( 'Check Upgrade button', function() {
            //click on upgrade button (if i choose business plan, what to check??)
            cy.visit( "/pricing")
            cy.login(Cypress.env('email'),Cypress.env('password'))
            clickUpgradeButton()
            cy.signOut()
        });
    });
});
