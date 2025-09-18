const pageElement = require('../WhatTypeOfApplicattion/WhatTypeOfApplicationPageLocators.json')
const commonPageElement = require('../Common/CommonPageLocators.json') 

export class WhatTypeOfApplicationPageActions {

    VerifyPageElements() {
        cy.get(pageElement.locators.pageTitle).contains('What type of application is it?')
        cy.get(pageElement.locators.planningPermissionRadio).contains('Planning permission')
        cy.get(pageElement.locators.outLinePlanningPermWithSomeResrRadio).contains('Outline planning permission with some matters reserved')
        cy.get(pageElement.locators.outLinePlanningPermWithAllResrRadio).contains('Outline planning permission with all matters reserved')
        cy.get(pageElement.locators.approvalOfResrvMattersFollowingApprovalRadio).contains('Approval of reserved matters following outline approval')
        cy.get(pageElement.locators.planningPermissionAndListedBuildConsentRadio).contains('Planning permission and listed building consent for alterations, extension or demolition of a listed building')
        cy.get(commonPageElement.locators.continueButton).contains('Continue')
    }

    SelectRadioButton(option) {
        switch(option) {
            case "Planning permission":
                pageElement.locators.planningPermissionRadio.click();
                break;
            case "Outline planning permission with some matters reserved":
                pageElement.locators.outLinePlanningPermWithSomeResrRadio.click();
                break;
            case "Outline planning permission with all matters reserved":
                pageElement.locators.outLinePlanningPermWithAllResrRadio.click();                                                   
                break;
            case "Approval of reserved matters following outline approval":
                pageElement.locators.approvalOfResrvMattersFollowingApprovalRadio.click();                                                                      
                break;
            case "Planning permission and listed building consent for alterations, extension or demolition of a listed building":
                pageElement.locators.planningPermissionAndListedBuildConsentRadio.click();
                break;
        default:
    // code block
        }
    }             
}