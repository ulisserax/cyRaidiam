/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { userActions } from '../../../support/page_objects/userActions';

before(() => {
    cy.visit('/');
    userActions.toLogin(Cypress.env('email'), Cypress.env('password'));
});

Given("the user is logged in", () => {
    cy.get('.nav-link').eq(3).then(($user) => {
        const username = $user.text().trim();
        cy.wrap(username).as('user');
    });
    cy.get('@user').then((username) => {
        cy.contains('.nav-link', username).should('be.visible');
    });
    cy.contains('.nav-link', 'Home').should('be.visible');
    cy.contains('h1.logo-font', 'conduit').should('be.visible');
});

When("the user visits its own page", () => {
    cy.get('@user').then((username) => {
        cy.contains('.nav-link', username).click();
    });
});

Then("the user should see its profile", () => {
    cy.get('@user').then((username) => {
        cy.contains('h4', username).should('be.visible');
    });
});

Then("the user should see the articles it has made", () => {
    cy.contains('li.nav-item', 'My Articles').click();
    cy.get('.article-preview').should('be.visible').each(($el) => {
        cy.wrap($el).should('be.visible');
    });
});

Then("the user should see the favorite articles", () => {
    cy.contains('li.nav-item', 'Favorited Articles').click();
    cy.get('.article-preview').should('be.visible').each(($el) => {
        cy.wrap($el).should('be.visible');
    });
});
