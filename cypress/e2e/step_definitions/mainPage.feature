Feature: User wants to interact with articles on the main page

    The user wants to interact with articles that are on the main page.
    The way the user can interact with the articles is by clicking on the article, liking the article by clicking on the like button


    Scenario: User likes an article
        Given the user is on the main page
        When the user clicks on the like button for a specific article
        Then the like count should increase by 1