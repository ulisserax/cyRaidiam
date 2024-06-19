/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { checkPages } from '../../../support/page_objects/checkPages';
import { userActions } from '../../../support/page_objects/userActions';


before(() => {
    cy.visit('/');
    userActions.toLogin(Cypress.env('email'), Cypress.env('password'));
});

Given("the user is logged in", () => {
    checkPages.homePage('testerUser');
});

When("the user updates its {string}, {string} and {string}, after clicking on the profile page", (nickname, email, password) => {
	cy.get('.nav-link').contains('testerUser').click();
    cy.get('a[href="#/settings"]').click();
    cy.get('input[placeholder="Your username"]').clear().type(nickname);
    cy.get('input[placeholder="Email"]').clear().type(email);
    cy.get('input[placeholder="Password"]').clear().type(password);
    cy.contains('button', 'Update Settings').click();
    cy.wrap(nickname).as('nickname');
});

Then("the user profile is updated", () => {
	cy.intercept('PUT', '/api/user').as('updateUser');
    cy.wait('@updateUser').its('response.statusCode').should('eq', 200);
    //return true;

});

Then("the user is redirected to the profile page", () => {
	cy.get('@nickname').then((nickname) => {
        cy.contains('a.nav-link', nickname).should('be.visible');
    });
    //return true;
});
