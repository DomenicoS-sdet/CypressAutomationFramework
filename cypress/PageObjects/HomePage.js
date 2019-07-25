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