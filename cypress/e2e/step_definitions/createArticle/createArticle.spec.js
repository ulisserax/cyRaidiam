/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


before(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('/');
});

Given("the user is on the {string} page", (newArticle) => {
    cy.contains('.nav-link', 'Sign in').click();
    cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
    cy.get('input[placeholder="Email"]').type('test_user@test.com');
    cy.get('input[placeholder="Password"]').type('testerUser@123');
    cy.get('button').click();
	cy.contains('.nav-link', newArticle).should('be.visible').click();
});

When("the user fills in the required fields", () => {
	cy.get('input[placeholder="Article Title"]').type('Test Article');
    cy.get('input[placeholder="What\'s this article about?"]').type('Test Article');
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test Article');
    cy.get('input[placeholder="Enter tags"]').type('Test Article');
});

When("the user clicks the {string} button", (confirmationButton) => {
	cy.contains('button', confirmationButton).click();
});

Then("the system creates the article", () => {
	cy.intercept('POST', '**/api/articles/**').as('publishArticle');
    cy.wait('@publishArticle').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });
});

Then("the user goes to the main page", () => {
    cy.contains('.nav-link', 'Home').click();
});

Then("the user can view the article", () => {
	return true;
});
