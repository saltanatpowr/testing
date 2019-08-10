import {fillSearchBox, verifyFoundedItemsSize} from "../utils/plugin_util";

describe( 'Plugins Page Test Cases', function() {

    context('2) Search Functionality is working.', () =>{
        it( 'Search Box', function() {
            cy.visit('/plugins')
            fillSearchBox('popup');
            verifyFoundedItemsSize(1)
        });
    });
});
