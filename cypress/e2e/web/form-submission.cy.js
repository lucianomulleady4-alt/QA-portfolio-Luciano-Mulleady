describe('Form Submission Tests', () => {
    beforeEach(() => {
        cy.visit('/form'); // Adjust the URL to the actual form page
    });

    it('should submit the form successfully with valid data', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('This is a test message.');
        cy.get('form').submit();
        cy.contains('Form submitted successfully').should('be.visible'); // Adjust based on actual success message
    });

    it('should display validation error when email is invalid', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('invalid-email');
        cy.get('textarea[name="message"]').type('This is a test message.');
        cy.get('form').submit();
        cy.contains('Please enter a valid email address').should('be.visible'); // Adjust based on actual error message
    });

    it('should display validation error when required fields are empty', () => {
        cy.get('form').submit();
        cy.contains('This field is required').should('be.visible'); // Adjust based on actual error message
    });
});