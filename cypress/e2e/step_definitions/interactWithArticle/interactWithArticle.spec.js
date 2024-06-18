/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
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

When("the user clicks on an article's title", () => {
	cy.get('.preview-link > h1').first().then(($title) => {
        const articleTitle = $title.text().trim();
        cy.wrap(articleTitle).as('articleTitle');
    });
    cy.get('.preview-link > h1').first().click();
});

Then("the user will be redirected to the article's page", () => {
	cy.get('@articleTitle').then((articleTitle) => {
        cy.contains('.preview-link > h1', articleTitle).should('be.visible');
    });
});

Given("the user is on the article's page", () => {
    cy.get('.preview-link > h1').first().then(($title) => {
        const articleTitle = $title.text().trim();
        cy.wrap(articleTitle).as('articleTitle');
    });
    cy.get('.preview-link > h1').first().click();
    cy.get('@articleTitle').then((articleTitle) => {
        cy.contains('.preview-link > h1', articleTitle).should('be.visible');
    });
});

When("the user interacts with the article's content", () => {
	cy.get('p').should('be.visible');
});

Then("the user will be able to comment, like and follow the account that has posted the article", () => {
    cy.contains('button', 'Follow').should('be.visible').click();
    cy.contains('button', 'Favorite').should('be.visible').click();
    
    cy.get('textarea').type('Test Comment');
    cy.contains('button', 'Post Comment').click();
});
