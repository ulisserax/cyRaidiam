Feature: User wants to visit other user's profile

    The user wants to visit other user's profile to see all their articles, and follow them.


Scenario: User visits other user's profile
    Given the user is on the home page
    When the user clicks on the profile of another user
    Then the user should be redirected to the profile page of the other user
    And the user should see all the articles of the other user
    And the user should see a follow button and click on it to follow the other user