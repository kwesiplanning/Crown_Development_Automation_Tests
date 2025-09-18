// @ts-nocheck
/// <reference types="cypress"/>

import { projectInformation } from '../support/utils/createProjectInformation';
import { users } from '../fixtures/users';
import { urlPaths } from '../support/urlPaths.js';
import { Home_CasesPageActions } from './Pages/Cases/Home_CasesPageActions.js';
import { WhatTypeOfApplicationPageActions } from './Pages/WhatTypeOfApplicattion/WhatTypeOfApplicationPageActions.js'; 

const home_CasesPageActions = new Home_CasesPageActions();
const whatTypeOfApplicationPageActions = new WhatTypeOfApplicationPageActions();

describe('template spec', () => {
  let projectInfo;
  
  beforeEach('', ()=>{
		cy.login(users.applications.caseAdmin);
  })

  it('Navigate to Cases', () => {
    console.log('opened crown dev')
    cy.visit('/cases') 
    home_CasesPageActions.VerifyPageElements();
    home_CasesPageActions.CreateANewCase();
    whatTypeOfApplicationPageActions.VerifyPageElements();
  })
})