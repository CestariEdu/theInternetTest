const username = '#username';
const password = '#password';
const btnSign = '.fa-sign-in';
const alert = '#flash-messages';

export default class loginPage {
    static inputLogin(user, pass) {
        cy.get(username).type(user);
        cy.get(password).type(pass);
        cy.get(btnSign).click();
    }

    static alert(message) {
        cy.get(alert).contains(message);
    }
}