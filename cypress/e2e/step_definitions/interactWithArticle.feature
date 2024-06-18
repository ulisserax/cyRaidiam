Feature: User wants to interact with a specific article

    The user wants to interact with a specific article that it has found on the website.
    So the user will click on the article's title, will see the article's page and will
    be able to interact with the article's content by commenting, clicking on the like button and following the account that has posted the article.

    Scenario: User clicks on an article's title
        Given the user is on the home page
        When the user clicks on an article's title
        Then the user will be redirected to the article's page

    Scenario: User interacts with the article's content
        Given the user is on the article's page
        When the user interacts with the article's content
        Then the user will be able to comment, like and follow the account that has posted the article