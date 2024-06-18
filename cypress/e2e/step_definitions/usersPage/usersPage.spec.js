/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given("the user is logged in", () => {
	return true;
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
