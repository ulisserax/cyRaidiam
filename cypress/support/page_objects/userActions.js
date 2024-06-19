

export class UserActions {

    toLogin(email, password) {
        cy.contains('.nav-link', 'Sign in').click();
        cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
        cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[placeholder="Password"]').type(password, {log: false});
        cy.get('button').click();
    }

    toIncorrectLogin(email, password) {
        cy.contains('.nav-link', 'Sign in').click();
        cy.get('h1.text-xs-center').should('contain.text', 'Sign in');
        cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[placeholder="Password"]').type(password, {log: false});
        cy.get('button').click();
    }

    toSignUp(username, email, password) {
        cy.get('input[placeholder="Username"]').type(username);
        cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[placeholder="Password"]').type(password, {log: false});
        cy.get('button').click();
    }

    toCreateArticle(title, description, body) {
        cy.contains('New Article').click();
        cy.get('input[placeholder="Article Title"]').type(title);
        cy.get('input[placeholder="What\'s this article about?"]').type(description);
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type(body);
        cy.contains('Publish Article').click();
    }

    editArticle(title, description, body) {
        cy.contains('Edit Article').click();
        cy.get('input[placeholder="Article Title"]').clear().type(title);
        cy.get('input[placeholder="What\'s this article about?"]').clear().type(description);
        cy.get('textarea[placeholder="Write your article (in markdown)"]').clear().type(body);
        cy.contains('Publish Article').click();
    }
}

export const userActions = new UserActions();