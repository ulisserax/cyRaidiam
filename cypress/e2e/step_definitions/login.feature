Feature: The user wants to login to the application to interact with the articles

    To interact with the articles, the user must be logged in. The user can login to the application by providing the correct credentials and clicking the login button.


    Scenario: The user logs in with valid credentials
        Given the user is on the login page
        When the user enters the correct credentials
        Then the user should be redirected to the home page
        Then the user should see the articles

#================================================================
    
    Scenario: The user logs in with invalid credentials
        Given the user is on the login page
        When the user enters the incorrect credentials
        Then the user should see an error message
        Then the user should not be redirected to the home page