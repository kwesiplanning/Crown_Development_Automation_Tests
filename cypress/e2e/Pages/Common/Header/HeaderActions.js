const pageElements = require('./HeaderLocators');

export class HeaderActions {
  
    verifyHeaderElements() {
        cy.get(pageElements.headerLogo).should('be.visible');
        cy.get(pageElements.planningInspectorateLbl).should('be.visible');
        cy.get(pageElements.planningInspectorateTitle).should('be.visible');
        cy.get(pageElements.allCasesLink).should('be.visible');
        cy.get(pageElements.signOutLink).should('be.visible');
    }   
}