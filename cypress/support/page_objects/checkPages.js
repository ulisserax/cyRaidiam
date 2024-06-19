
export class CheckPages {
    loginPage() {
        cy.contains('.nav-link', 'Sign in').should('be.visible');
        cy.contains('.nav-link', 'Sign up').should('be.visible');
    }

    signUpPage() {
        cy.get('h1.text-xs-center').should('contain.text', 'Sign up');
        cy.get('input[placeholder="Username"]').should('be.visible');
        cy.get('input[placeholder="Email"]').should('be.visible');
        cy.get('input[placeholder="Password"]').should('be.visible');
    }

    homePage(nickname) {
        cy.contains('.nav-link', nickname).should('be.visible');
        cy.contains('.nav-link', 'Home').should('be.visible');
        cy.contains('h1.logo-font', 'conduit').should('be.visible');
    }

    profilePage() {
        cy.get('@user').then((username) => {
            cy.contains('h4', username).should('be.visible');
        });
    }

    articlesPage() {
        cy.get('.article-preview').should('be.visible').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
    }

    favoriteArticlesPage() {
        cy.contains('li.nav-item', 'Favorited Articles').click();
        cy.get('.article-preview').should('be.visible').each(($el) => {
            cy.wrap($el).should('be.visible');
        });
    }

    authorProfilePage() {
        cy.contains('h4', author).should('be.visible');
    }
}

export const checkPages = new CheckPages();