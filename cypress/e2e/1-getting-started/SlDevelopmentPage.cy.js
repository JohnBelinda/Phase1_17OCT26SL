///<reference types="cypress"/>
//<reference types="@cypress/xpath"/>

import {sd} from '../1-getting-started/PageObjectModel/SlDevPage';

describe('Web development page',()=>{
   beforeEach(() => {
     Cypress.on('uncaught:exception', (err, runnable) => {
      // Returning false prevents Cypress from automatically failing the test
      return false;
    })
  })
    it('TC-1_Verify the text "Web Development Courses"',()=>{
      cy.visit('https://www.simplilearn.com/courses/web-development');
      cy.contains('h1','Web Development Courses').should('be.visible');
    })
    it('TC-2_Verify the Title “Top Web Development”.',()=>{
      cy.visit('https://www.simplilearn.com/courses/web-development');
      cy.title().should('contain','Top Web Development');
    })
    it('TC-3_Search “Automation” and verify “Automation”.', () => {
      cy.visit('https://www.simplilearn.com/courses/web-development');
      cy.fixture('testdata.json').then((data)=>{
      data.forEach((dataItem)=>{
      sd.setSearchfun(dataItem.searchicon);
      cy.get('body').should('contain',dataItem.searchicon);
      })
    }) 
      
  })
})