const pageElement = require('../Common/CommonPageLocators.json')

export class CommonPagelocators{

    ClickBackLink()
    {
        pageElement.locators.backLink.click();
    }

    ClickContinueButton()
    {
        pageElement.locators.continueButton.click();
    }

}
