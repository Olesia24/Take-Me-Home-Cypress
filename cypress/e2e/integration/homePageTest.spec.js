import HomePage from '../PageObjects/HomePage'

describe('Home Page Test', ()=> {
    const homePage = new HomePage()
    
    beforeEach(() => {
        homePage.visit()
        cy.get('img[src="/assets/logo-removebg-DpNaDpCW.png"]').should('be.visible')
      })
    
    it('should load the home page', () => { 
        cy.url().should('include', '#/')
      })
    
    it('Logo should be clickable and navigate to home page', () => {
        cy.get('img[src="/assets/logo-removebg-DpNaDpCW.png"]').click()
        cy.url().should('eq', 'https://take-me-home-sqbog.ondigitalocean.app/#/')
      })
    it('should display the link Home in the navigation bar', () => {
        homePage.getHomeLink().should('be.visible')
        homePage.getHomeLink().click();
    })
    it('should display the link Want to help in the navigation bar', () => {
        homePage.getLinkWantHelp().should('be.visible')
        homePage.getLinkWantHelp().click();
        cy.go('back')
    })
    it('should display the link How it work in the navigation bar', () => {
        homePage.getLinkHowItWork().should('be.visible')
        homePage.getLinkHowItWork().click() 
        cy.go('back')
    })
    it('should display the link Sign up in the navigation bar', () => {
        homePage.getLinkSignUp().should('be.visible')
        homePage.getLinkSignUp().click()
        cy.go('back')
    })
    it('should display the link Sign in in the navigation bar', () => {
        homePage.getLinkSignIn().should('be.visible')
        homePage.getLinkSignIn().click()
        cy.go('back')
    })
    //-------------------------Body Test-----------------------------------------------------------

    it('Should displayed Title', () => {
        homePage.getTitle().should('have.text', 'Connecting the hearts of those seeking a faithful friend with those in need of loving care!')
      })
    
    it('Button should be clickable and navigate to page I Found the animal', () => {
        homePage.getBtnIFoundTheAnimal().should('be.visible')
        homePage.getBtnIFoundTheAnimal().click()
        cy.go('back')
    })
    it('Button should be clickable and navigate to page How it works', () => {
      homePage.getBtnHowItWork().should('be.visible')
      homePage.getBtnHowItWork().click()
      cy.go('back')
    })
    it('Button should be clickable and navigate to page with Dogs', () => {
      homePage.getBtnDogs().should('be.visible')
      homePage.getBtnDogs().click()
      cy.go('back')
    })
    it('Button should be clickable and navigate to page with Cats', () => {
      homePage.getBtnCats().should('be.visible')
      homePage.getBtnCats().click()
      cy.go('back')
    })
    //--------------------------------Footer-------------------------------
    it('Link should be clickable and navigate to school page', () => {
      homePage.getFooter().should('be.visible')
      homePage.getFooter().click()
      cy.go('back')
    })
})