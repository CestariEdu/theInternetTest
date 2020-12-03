/// <reference types="cypress" />

import dynamicPage from '../pageObjects/dynamic.page';

describe('Test dynamic input', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_controls');
    })

    it('Assert input is enabled', () => {
        cy.get('#input-example > button').click();
        dynamicPage.validInput('be.enabled');
    });

    it('Insert text when input is enabled', () => {
        cy.get('#input-example > button').click();
        dynamicPage.validInput('be.enabled');
        dynamicPage.inputText('Hello World!');
    });

    it('Assert input is disabled by default', () => {
        dynamicPage.validInput('be.disabled');
    });
});
