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

    it('Check booking options are available', function() {
        const page = new HomePage();

        page.flightBtn().within(($a) => {
            cy.get('span').should('contain', 'Flights')});

        page.hotelBtn().within(($a) => {
            cy.get('span').should('contain', 'Hotels')});

        page.toursBtn().within(($a) => {
            cy.get('span').should('contain', 'Tours')});

       page.carsBtn().within(($a) => {
            cy.get('span').should('contain', 'Cars')});

        cy.screenshot()
    }) 

    it('Check when clicking Hotels the form is available', function() {
        const page = new HomePage();

        page.hotelBtn().click()

        page.checkInField().should('exist')
        page.checkOutField().should('exist')
        page.travellersInput().should('exist')
        page.citySearchField().should('exist')
        

        cy.screenshot()

    })

    })
})