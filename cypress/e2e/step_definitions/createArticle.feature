Feature: User wants to create a new article

    The user decides to create a new article to fill the article's page. 
    They navigate to the äNew Article" page and fill in the required fields. They then click the "Create" button to submit the article. The system validates the input and creates the article. The user is then redirected to the article page where they can view the article they created.

    Scenario: User successfully creates a new article
        Given the user is on the "New Article" page
        When the user fills in the required fields
        And the user clicks the "Publish Article" button
        Then the system creates the article
        And the user goes to the main page
        And the user can view the article