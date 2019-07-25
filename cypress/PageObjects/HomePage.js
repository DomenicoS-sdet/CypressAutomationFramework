/// <reference types="Cypress" />

export class HomePage  {

    constructor() {
        this.uri = 'https://www.phptravels.net/'
        this.pageTitle = 'PHPTRAVELS | Travel Technology Partner'
    }

    getHotelBtn() {
    const hotels = cy.document().get('a[title="Hotels"]').within(($a) => {
        cy.get('span')});
    return hotels;
    }
    
    getFlightsBtn() {
        
    const flights = cy.document().get('a[title="Flights"]').within(($a) => {
        cy.get('span')});

    return flights;
    }
    
    getToursBtn() {
    const tours = cy.document().get('a[title="Tours"]').within(($a) => {
        cy.get('span')});

    return tours;
    }

    getCarsBtn() {
    const cars = cy.document().get('a[title="Cars"]').within(($a) => {
        cy.get('span')});
    return cars;
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