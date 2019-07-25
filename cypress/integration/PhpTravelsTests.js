import {HomePage} from '../PageObjects/HomePage';
/// <reference types="Cypress" />
describe('PHPTRAVELS Test', function() {
    
    context('PHPTRAVELS', () => {
        beforeEach(() => {
          const page = new HomePage();
          page.goTo();           
        })

    //Test if the page contains the Search button
     it('Search Button available', function(){
        const page = new HomePage();
        page.isHomePageReady();

        cy.screenshot()
    }) 

    it('Check HOTEL booking options are available', function() {
        const page = new HomePage();
        const hotels = page.getHotelBtn();
        hotels.should('contain', 'Hotels')
    })

    it('Check FLIGHTS booking options are available', function() {
        const page = new HomePage();
        const flights = page.getFlightsBtn();
        flights.should('contain', 'Flights');

        cy.screenshot()
    })

    it('Check TOURS booking options are available', function() {
        const page = new HomePage();
        const tours = page.getToursBtn();
        tours.should('contain', 'Tours');

        cy.screenshot()
    })

    it('Check CARS booking options are available', function() {
        const page = new HomePage();
        const cars = page.getCarsBtn();
        cars.should('contain', 'Cars');

        cy.screenshot()
    })

    //TODO: transform below using the page object
    it('Check when clicking Hotels the form is available', function() {
        cy.get('a[title="Hotels"]').click()

        cy.get('input[autocomplete="off"]').should('exist')
        cy.get('input[placeholder="Check in"]').should('exist')
        cy.get('input[placeholder="Check out"]').should('exist')
        cy.get('#travellersInput').should('exist')

        cy.screenshot()

    })

    //TODO: Add test to fill hotel booking using json file to retrieve informations

    })
})