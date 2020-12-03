/// <reference types="cypress" />

import loginPage from '../pageObjects/login.page';

describe('Test login', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    })

    it('Sign in with correct credentials', () => {
        loginPage.inputLogin('tomsmith' , 'SuperSecretPassword');
        loginPage.alert('Your password is invalid')
    });

    it('Try Sign in with wrong credentials', () => {
        loginPage.inputLogin('jsilva', '101010');
        loginPage.alert('Your username is invalid')
    });

    it('Try Sign in with wrong password', () => {
        loginPage.inputLogin('tomsmith' , '101010');
        loginPage.alert('Your password is invalid')
    });
});
