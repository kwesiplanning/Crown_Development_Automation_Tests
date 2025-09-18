const pageElements = require ('../../Pages/Cases/Home_CasesLocators.json')
const  headerPageActions = require ('../Common/Header/HeaderActions')

export class Home_CasesPageActions{

    VerifyPageElements(){
        cy.get(pageElements.locators.pageTitle).should('be.visible');
        cy.get(pageElements.locators.searchCaseLbl).should('be.visible');
        cy.get(pageElements.locators.searchHintText).should('be.visible');
        cy.get(pageElements.locators.searchCaseInput).should('be.visible');
        cy.get(pageElements.locators.searchBtn).should('be.visible');
        cy.get(pageElements.locators.createACaseLbl).should('be.visible');
        cy.get(pageElements.locators.createACaseLink).should('be.visible');

        cy.get(pageElements.locators.columnHeadingReference).should('be.visible');
        cy.get(pageElements.locators.columnHeadingSiteLocation).should('be.visible');
        cy.get(pageElements.locators.columnHeadingLocalPlanningAuth).should('be.visible');
        cy.get(pageElements.locators.columnHeadingApplicationType).should('be.visible');
        cy.get(pageElements.locators.columnHeadingStatus).should('be.visible');
    }

    CreateANewCase(){
        cy.get(pageElements.locators.createACaseLink).click();
    }

    ClickACaseHyperLink(caseNumber){
        // Enter the full case number e.g. CROWN/2025/0000226
        cy.get(`[data-sort-value="${caseNumber}"] > .govuk-link`).click();
    }

    SerachForACase(caseNumber){
        cy.get(pageElements.locators.searchCaseInput).type(caseNumber);
        cy.get(pageElements.locators.searchBtn).click();
    }
}