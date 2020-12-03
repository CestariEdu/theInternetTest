const btnAction = '#input-example > button';
const txtMessage = '#message';
const inptText = '#input-example > input';

export default class dynamicPage {
    static validInput(status) {
        cy.get(inptText).should(status);
    }

    static inputText(text) {
        cy.get(inptText).type(text);
    }
}