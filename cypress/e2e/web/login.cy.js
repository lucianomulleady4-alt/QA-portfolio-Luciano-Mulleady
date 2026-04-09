describe('Login Test Cases', () => {
    beforeEach(() => {
        cy.visit('/login'); // Visit the login page
    });

    it('should log in with valid credentials', () => {
        cy.get('input[name="username"]').type('validUsername');
        cy.get('input[name="password"]').type('validPassword');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard'); // Check if redirected to dashboard
    });

    it('should show an error for invalid credentials', () => {
        cy.get('input[name="username"]').type('invalidUsername');
        cy.get('input[name="password"]').type('invalidPassword');
        cy.get('button[type="submit"]').click();
        cy.get('.error-message').should('be.visible'); // Check if error message is displayed
    });

    it('should require username', () => {
        cy.get('input[name="password"]').type('validPassword');
        cy.get('button[type="submit"]').click();
        cy.get('.error-message').contains('Username is required').should('be.visible');
    });

    it('should require password', () => {
        cy.get('input[name="username"]').type('validUsername');
        cy.get('button[type="submit"]').click();
        cy.get('.error-message').contains('Password is required').should('be.visible');
    });
});