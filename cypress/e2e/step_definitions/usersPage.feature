Feature: User wants to visit the user's page

    The user wants to visit its own page to see its profile, the articles it has made and the favorite ones.

Scenario: User visits its own page
    Given the user is logged in
    When the user visits its own page
    Then the user should see its profile
    And the user should see the articles it has made
    And the user should see the favorite articles