

export const fillSearchBox = (text) => {
    const etSearchBox = cy.get('.app-search__search-input');
    etSearchBox.click().type(text);
}

export const verifyFoundedItemsSize = (size) => {
    cy.get('.app-card').should(($app_card) => {
        expect($app_card).to.have.length(size)
    })
}

