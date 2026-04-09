/// <reference types="cypress" />

describe('Posts API', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    it('GET - Retrieve all posts', () => {
        cy.request(apiUrl)
            .its('status')
            .should('eq', 200);
    });

    it('GET - Retrieve a single post', () => {
        const postId = 1;
        cy.request(`${apiUrl}/${postId}`)
            .its('status')
            .should('eq', 200);
    });

    it('POST - Create a new post', () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: newPost,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .its('status')
        .should('eq', 201);
    });

    it('PUT - Update an existing post', () => {
        const postId = 1;
        const updatedPost = {
            id: postId,
            title: 'updated title',
            body: 'updated body',
            userId: 1,
        };
        cy.request({
            method: 'PUT',
            url: `${apiUrl}/${postId}`,
            body: updatedPost,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .its('status')
        .should('eq', 200);
    });

    it('DELETE - Delete a post', () => {
        const postId = 1;
        cy.request({
            method: 'DELETE',
            url: `${apiUrl}/${postId}`,
        })
        .its('status')
        .should('eq', 200);
    });
});