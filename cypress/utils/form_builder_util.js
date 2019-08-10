

export const dismissPopUp = () => {
    const btnGotIt = cy.contains("Got it!")
    btnGotIt.click()
}

export const selectShoppingCart = () => {
    const shoppingCartItem = cy.get(".fa-shopping-cart")
    shoppingCartItem.click()
}

export const clickWorkWithPattern = () => {
    const btnWorkWithPattern = cy.get(".button-full-width.js-nextSection")
    btnWorkWithPattern.click()
}

export const addNewTextElement = (elementName, elementTitle) => {
    const btnAddNewElement = cy.get('.button.button-primary.width100').first()
    btnAddNewElement.click()

    const elementItem = cy.contains(elementName)
    elementItem.click()

    if(elementTitle != null){
        const etElementTitle = cy.get('.text-component__content').find('.text-component__input')
        etElementTitle.type(elementTitle)
    }
}

export const clickNext = () => {
    const btnNext = cy.get('.powrDrilldownBackBtn')
    btnNext.click()
}

export const setCenterAlignmentToElement = () => {
    const designTab = cy.get('.nav-tabs').find('[data-index="4"]')
    designTab.click()

    const designLayoutItem = cy.contains('Layout')
    designLayoutItem.click()

    const btnDesignCenterAlignment = cy.get('.multitoggle-option-component-titleAlign-center').find('.feature-blocker')
    btnDesignCenterAlignment.click()
}

export const clickSubmit = () => {
    const btnSubmit = cy.get('.nextSection')
    btnSubmit.click()
}

