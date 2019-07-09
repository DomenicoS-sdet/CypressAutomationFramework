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

    it('Check booking options are available', function() {
       cy.get('a[title="Hotels"]').within(() => {
            cy.get('span').should('contain', 'Hotels')
       })
       cy.get('a[title="Flights"]').within(() => {
            cy.get('span').should('contain', 'Flights')
        })
        cy.get('a[title="Tours"]').within(() => {
            cy.get('span').should('contain', 'Tours')
        })
        cy.get('a[title="Cars"]').within(() => {
            cy.get('span').should('contain', 'Cars')
        })

    })

    it('Check when clicking Hotels the form is available', function() {
        cy.get('a[title="Hotels"]').click()

        cy.get('input[autocomplete="off"]').should('exist')
        cy.get('input[placeholder="Check in"]').should('exist')
        cy.get('input[placeholder="Check out"]').should('exist')
        cy.get('#travellersInput').should('exist')

    })
    })
})