/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


const API_KEY = '775d7940cc2fa5c82f893684f564db65';

Given('I request weather data for latitude {int} and longitude {int}', (lat, lon) => {
    cy.request({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather',
      qs: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
      },
    }).as('weatherResponse');
  });

When("the response status code should be {int}", (statusCode) => {
	cy.get('@weatherResponse').its('status').should('eq', statusCode);
});

Then("the response should contain the weather information", () => {
	cy.get('@weatherResponse').its('body').should((body) => {
        expect(body).to.have.property('weather');
    });
});


Given("I request weather data for city {string}", (city) => {
	cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: {
            q: city,
            appid: API_KEY,
        },
    }).as('weatherResponse');
});

When("the response status code should be {int}", (statusCode) => {
	cy.get('@weatherResponse').its('status').should('eq', statusCode);
});

Then("the response should contain the weather information", () => {
    cy.get('@weatherResponse').its('body').should((body) => {
        expect(body).to.have.property('main');
        expect(body.main).to.have.property('temp');
      });
});

Given("I request weather data for city {string} with units {string}", (city, units) => {
	cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: {
            q: city,
            units: units,
            appid: API_KEY,
        },
    }).as('weatherResponse');
});

When("the response status code should be {int}", (statusCode) => {
	cy.get('@weatherResponse').its('status').should('eq', statusCode);
});

Then("the response should contain the weather information", () => {
    cy.get('@weatherResponse').its('body').should((body) => {
        expect(body).to.have.property('main');
        expect(body.main).to.have.property('temp');
      });
});

Given("I request weather data for city {string} with units {string}", (city, units) => {
	cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        qs: {
            q: city,
            units: units,
            appid: API_KEY,
        },
    }).as('weatherResponse');
});

When("the response status code should be {int}", (statusCode) => {
	cy.get('@weatherResponse').its('status').should('eq', statusCode);
});

Then("the response should contain the weather information", () => {
    cy.get('@weatherResponse').its('body').should((body) => {
        expect(body).to.have.property('main');
        expect(body.main).to.have.property('temp');
      });
});

Given("I request weather data with invalid latitude and longitude", () => {
	cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        failOnStatusCode: false,
        qs: {
            lat: 1000,
            lon: 1000,
            appid: API_KEY,
        },
    }).as('weatherResponse');
});

Then("the response should be incorrect and be 400", () => {
	cy.get('@weatherResponse').its('status').should('eq', 400);
});

Given("I request weather data with an invalid API key", () => {
	cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        failOnStatusCode: false,
        qs: {
            lat: 25,
            lon: 49,
            appid: '5c82f893684f564db65dsfsad9083',
        },
    }).as('weatherResponse');
});

Then("the response status code should be 401", () => {
	cy.get('@weatherResponse').its('status').should('eq', 401);
});

Given("I request weather data for a non-existent city", () => {
	cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        failOnStatusCode: false,
        qs: {
            q: 'nonexistentcity',
            appid: API_KEY,
        },
    }).as('weatherResponse');
});

Then("the response status code should be 404", () => {
	cy.get('@weatherResponse').its('status').should('eq', 404);
});

Given("I intercept weather data from an invalid endpoint", () => {
    
    cy.intercept('GET', '**/weather**', (req) => {
        cy.log('Intercepted request', req);
        req.reply({
          statusCode: 500,
          body: { error: 'Internal Server Error' }
        });
      }).as('weatherRequest');
});

When("I request weather data from an invalid endpoint", () => {
    cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        failOnStatusCode: false,
        qs: {
            q: 'London',
            appid: API_KEY,
        },
    }).as('weatherResponse');
});

Then("the simulated response status code should be 500", () => {
    cy.get('@weatherResponse').then((response) => {
        expect(response.status).to.eq(500);
      });
});
