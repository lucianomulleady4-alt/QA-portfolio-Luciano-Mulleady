describe('Users API Tests', () => {
    const baseUrl = 'https://your-api-url.com/api'; // Replace with your actual API base URL

    it('should retrieve a list of users', () => {
        cy.request(`${baseUrl}/users`)
            .its('status')
            .should('equal', 200);
    });

    it('should create a new user', () => {
        const newUser = { 
            name: "John Doe",
            email: "john.doe@example.com"
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/users`,
            body: newUser,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .its('status')
        .should('equal', 201);
    });

    it('should update an existing user', () => {
        const updatedUser = {
            name: "Jane Doe"
        };

        cy.request({
            method: 'PUT',
            url: `${baseUrl}/users/1`, // Assumes user ID is 1
            body: updatedUser,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .its('status')
        .should('equal', 200);
    });

    it('should delete a user', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/users/1`, // Assumes user ID is 1
        })
        .its('status')
        .should('equal', 204);
    });
});