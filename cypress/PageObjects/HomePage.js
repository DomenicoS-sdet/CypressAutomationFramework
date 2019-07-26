/// <reference types="Cypress" />

export class HomePage  {

    constructor() {
        this.uri = 'https://www.phptravels.net/'
        this.pageTitle = 'PHPTRAVELS | Travel Technology Partner'
    } 

    flightBtn() {
        return cy.document().get('a[title="Flights"]');
    }

    hotelBtn() {
        return cy.document().get('a[title="Hotels"]');
    }

    toursBtn() {
        return cy.document().get('a[title="Tours"]');
    }

    carsBtn() {
        return cy.document().get('a[title="Cars"]');
    }

    citySearchField() {
        return cy.contains('Search by Hotel or City Name')
        .parent('div')
        .within(($div) => {cy.get('input')});
    }

    checkInField() {
        return cy.get('input[placeholder="Check in');
    }

    checkOutField() {
        return cy.get('input[placeholder="Check out"]');
    }

    travellersInput() {
        return cy.get('#travellersInput');
    }

    goTo() {
        cy.visit(this.uri)
    }

    getPageTitle() {
        return this.pageTitle
    }

    isHomePageReady() {
        cy.get('button')
        .should('contain','Search')
    }
}