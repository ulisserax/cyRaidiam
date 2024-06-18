/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


beforeEach(() => {
    //even considering cypress has a default local storage, it's just a guarantee that we're clearing it before each test
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('/');
});

Given("the user is on the login page", () => {
	cy.contains('.nav-link', 'Sign in').should('be.visible');
    cy.contains('.nav-link', 'Sign up').should('be.visible');
});

When("the user enters the correct credentials", () => {
    cy.contains('.nav-link', 'Sign in').click();
    cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
    cy.get('input[placeholder="Email"]').type('test_user@test.com');
    cy.get('input[placeholder="Password"]').type('testerUser@123');
    cy.get('button').click();
});

Then("the user should be redirected to the home page", () => {
	cy.contains('.nav-link', 'testerUser').should('be.visible');
    cy.contains('.nav-link', 'Home').should('be.visible');
    cy.contains('h1.logo-font', 'conduit').should('be.visible');
});

Then("the user should see the articles", () => {
	cy.get('.article-preview').should('be.visible').each(($el) => {
        cy.wrap($el).should('be.visible');
    });
});

Given("the user is on the login page", () => {
	cy.contains('.nav-link', 'Sign in').should('be.visible');
    cy.contains('.nav-link', 'Sign up').should('be.visible');
});

When("the user enters the incorrect credentials", () => {
	cy.contains('.nav-link', 'Sign in').click();
    cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
    cy.get('input[placeholder="Email"]').type('test_user99@test.com');
    cy.get('input[placeholder="Password"]').type('testerUser@12399');
    cy.get('button').click();
});

Then("the user should see an error message", () => {
	cy.contains('.error-messages', 'email or password is invalid').should('be.visible');
});

Then("the user should not be redirected to the home page", () => {
	cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
});
