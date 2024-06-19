/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { checkPages } from '../../../support/page_objects/checkPages';
import { userActions } from '../../../support/page_objects/userActions';


before(() => {
    cy.visit('/');
    userActions.toLogin(Cypress.env('email'), Cypress.env('password'));
});

Given("the user is on the home page", () => {
    checkPages.homePage('testerUser');
});

When("the user clicks on the profile of another user", () => {
    cy.get('a.author').eq(2).then(($authorName) => {
        const author = $authorName.text().trim();
        cy.wrap(author).as('author');
    });
    cy.get('a.author').eq(2).click();
});

Then("the user should be redirected to the profile page of the other user", () => {
	cy.get('@author').then((author) => {
        cy.contains('h4', author).should('be.visible');
    });
});

Then("the user should see all the articles of the other user", () => {
	cy.get('.article-preview').should('be.visible').each(($el) => {
        cy.wrap($el).should('be.visible');
    });
});

Then("the user should see a follow button and click on it to follow the other user", () => {
	cy.contains('button', 'Follow').should('be.visible').click();
});
