/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


before(() => {
    cy.visit('/');
    cy.contains('.nav-link', 'Sign in').click();
    cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
    cy.get('input[placeholder="Email"]').type('test_user@test.com');
    cy.get('input[placeholder="Password"]').type('testerUser@123');
    cy.get('button').click();
});

Given("the user is on the home page", () => {
	cy.contains('.nav-link', 'testerUser').should('be.visible');
    cy.contains('.nav-link', 'Home').should('be.visible');
    cy.contains('h1.logo-font', 'conduit').should('be.visible');
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
