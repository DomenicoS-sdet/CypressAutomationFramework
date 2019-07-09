/// <reference types="Cypress" />
describe('PHPTRAVELS Test', function() {

    context('PHPTRAVELS', () => {
        beforeEach(() => {
          cy.visit('https://www.phptravels.net/')
        })

    //Test if the page contains the Search button
    it('Search Button available', function(){
        cy.get('button')
        .should('contain','Search')
    })
    })
})