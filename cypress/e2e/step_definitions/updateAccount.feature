Feature: The user wants to update its profile

    The user wants to update its account information in order to change the nickname, email and password.

    Scenario: The user updates its profile
        Given the user is logged in
        When the user updates its profile with the following information:
            | nickname | email          | password |
            | new_nick | new_email@com  | new_pass |
        Then the user profile is updated
        And the user is redirected to the profile page