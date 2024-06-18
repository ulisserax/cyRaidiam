Feature: The user is accessing the website for the first time

    The user is accessing the web app for the first time, so the user needs to create an account before logging in.


    Scenario: The user is accessing the website for the first time
        Given the user is not logged in
        When the user accesses the sign up page
        Then the user needs to create an account
        When the user creates an account
        Then the user is redirected to the home page logged in

    Scenario: The user tries to create an account with an existing email
        Given the user is not logged in
        When the user accesses the sign up page
        Then the user needs to create an account
        When the user tries to create an account with an existing email
        Then the user is shown an error message