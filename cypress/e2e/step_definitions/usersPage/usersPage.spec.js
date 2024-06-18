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

Given("the user is logged in", () => {
	cy.contains('.nav-link', 'testerUser').should('be.visible');
    cy.contains('.nav-link', 'Home').should('be.visible');
    cy.contains('h1.logo-font', 'conduit').should('be.visible');
});

When("the user visits its own page", () => {
	return true;
});

Then("the user should see its profile", () => {
	return true;
});

Then("the user should see the articles it has made", () => {
	return true;
});

Then("the user should see the favorite articles", () => {
	return true;
});
