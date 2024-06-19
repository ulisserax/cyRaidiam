/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { checkPages } from '../../../support/page_objects/checkPages';
import { userActions } from '../../../support/page_objects/userActions';


before(() => {
    cy.visit('/');
    userActions.toLogin(Cypress.env('email'), Cypress.env('password'));
});

Given("the user is on the main page", () => {
    checkPages.homePage('testerUser');
});

When("the user clicks on the like button for a specific article", () => {
	cy.get('div.article-preview').eq(0).find('button').click();
});

Then("the like count should increase by 1", () => {
	cy.get('div:nth-child(2) > div > button > span.counter').eq(0).should('be.visible');
    cy.get('div:nth-child(2) > div > button > span.counter').eq(0).then(($likeCount) => {
        const initialCount = parseInt($likeCount.text());
        cy.wrap($likeCount).as('likeCount');
        cy.get('@likeCount').click();

        cy.get('@likeCount').should('eq', (initialCount + 1).toString());
    });
});

