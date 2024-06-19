/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { checkPages } from '../../../support/page_objects/checkPages';
import { userActions } from '../../../support/page_objects/userActions';
import { faker } from '@faker-js/faker';


beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('/');
});

Given("the user is not logged in", () => {
    checkPages.loginPage();
});

When("the user accesses the sign up page", () => {
	cy.contains('.nav-link', 'Sign up').click();
});

Then("the user needs to create an account", () => {
    checkPages.signUpPage();
});

let fullName = faker.person.fullName();
let email = faker.internet.email();

When("the user creates an account", () => {
    userActions.toSignUp(fullName, email, Cypress.env('password'));
});

Then("the user is redirected to the home page logged in", () => {
	checkPages.homePage(fullName);
});

When('the user tries to create an account with an existing email', () => {
    userActions.toSignUp(fullName, email, Cypress.env('password'));
  });
  
  Then('the user is shown an error message', () => {
    cy.contains('.error-messages', 'email has already been taken').should('be.visible');
    cy.contains('.error-messages', 'username has already been taken').should('be.visible');
  });
