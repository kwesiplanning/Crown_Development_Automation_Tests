// @ts-nocheck
/// <reference types="cypress"/>

import { projectInformation } from '../support/utils/createProjectInformation';
import { users } from '../fixtures/users';
import { urlPaths } from '../support/urlPaths.js';

const { applications: applicationsUsers } = users;


describe('template spec', () => {
  let projectInfo;
  
  beforeEach('', ()=>{
    // projectInfo = x();
    // Crown development doesnt need the applicationusers
		cy.login(users.applications.caseAdmin);
		// createCasePage.createCase(projectInfo);
  })

  it('Navigate to Cases', () => {
    console.log('oppned crown dev')
    // cy.visit(urlPaths.appealsList);

    // cy.on('uncaught:exception', (e) => {
    //     return false
    // })

    cy.visit('/cases')  

  })
})