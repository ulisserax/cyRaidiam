/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { checkPages } from '../../../support/page_objects/checkPages';
import { userActions } from '../../../support/page_objects/userActions';


beforeEach(() => {
    //even considering cypress has a default local storage, it's just a guarantee that we're clearing it before each test
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('/');
});

Given("the user is on the login page", () => {
    checkPages.loginPage();
});

When("the user enters the correct credentials", () => {
    userActions.toLogin(Cypress.env("email"), Cypress.env("password"));
});

Then("the user should be redirected to the home page", () => {    
    checkPages.homePage('testerUser');
});

Then("the user should see the articles", () => {
	cy.get('.article-preview').should('be.visible').each(($el) => {
        cy.wrap($el).should('be.visible');
    });
});

Given("the user is on the login page", () => {
    checkPages.loginPage();
});

When("the user enters the incorrect credentials", () => {
    userActions.toIncorrectLogin('test_user99@test.com', 'testerUser@12399');
});

Then("the user should see an error message", () => {
	cy.contains('.error-messages', 'email or password is invalid').should('be.visible');
});

Then("the user should not be redirected to the home page", () => {
	cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
});
