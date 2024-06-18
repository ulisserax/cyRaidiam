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

Given("the user is on the main page", () => {
	cy.contains('.nav-link', 'testerUser').should('be.visible');
    cy.contains('.nav-link', 'Home').should('be.visible');
    cy.contains('h1.logo-font', 'conduit').should('be.visible');
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

