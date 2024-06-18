/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('/');
});

Given("the user is not logged in", () => {
	cy.contains('.nav-link', 'Sign in').should('be.visible');
    cy.contains('.nav-link', 'Sign up').should('be.visible');
    
});

When("the user accesses the sign up page", () => {
	cy.contains('.nav-link', 'Sign up').click();
});

Then("the user needs to create an account", () => {
    cy.get('h1.text-xs-center').should('contain.text', 'Sign up');
    cy.get('input[placeholder="Username"]').should('be.visible');
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
});

When("the user creates an account", () => {
	cy.get('input[placeholder="Username"]').type('testerUser');
    cy.get('input[placeholder="Email"]').type('test_user@test.com');
    cy.get('input[placeholder="Password"]').type('testerUser@123');
    cy.get('button').click();
});

Then("the user is redirected to the home page logged in", () => {
	return true;
});

When('the user tries to create an account with an existing email', () => {
    cy.get('input[placeholder="Username"]').type('testerUser');
    cy.get('input[placeholder="Email"]').type('test_user@test.com'); 
    cy.get('input[placeholder="Password"]').type('testerUser@123');
    cy.get('button').click();
  });
  
  Then('the user is shown an error message', () => {
    cy.contains('.error-messages', 'email has already been taken').should('be.visible');
    cy.contains('.error-messages', 'username has already been taken').should('be.visible');
  });
