Feature: The user wants to update its profile

    The user wants to update its account information in order to change the nickname, email and password.

    Scenario Outline: The user updates its profile
        Given the user is logged in
        When the user updates its "<nickname>", "<email>" and "<password>", after clicking on the profile page
        Then the user profile is updated
        Then the user is redirected to the profile page
        
        Examples:
            |   nickname   |     email      |   password |
            |   new_nick   |  new_email@com |   new_pass |