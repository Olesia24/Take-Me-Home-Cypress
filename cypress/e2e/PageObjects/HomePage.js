class HomePage {
    visit() {
        cy.visit("https://take-me-home-sqbog.ondigitalocean.app/#/")
    }
    getLogo() {
        return cy.get('img[src="/assets/logo-removebg-DpNaDpCW.png"]')
    }
    getHomeLink() {
        return cy.get('a[href="#/"]').contains('Home')
    }
    getLinkWantHelp() {
        return cy.get('a[href="#/want-help"]').contains('I want to help')
    }
    getLinkHowItWork() {
        return cy.get('a[href="#/how-it-works"]').contains('How it work')
    }
    getLinkSignUp() {
        return cy.get('a[href="#/register"]').contains('Sign up')
    }
    getLinkSignIn() {
        return cy.get('a[href="#/login-form"]').contains('Sign in')
    }
    //------------------------------------------Body Test------------------------------------
    getTitle() {
        return cy.get('h1._text1_1nniy_24')
    }
    getBtnIFoundTheAnimal() {
        return cy.get('a[href="#/found-animal"]')
    }
    getBtnHowItWork() {
        return cy.get('._how_work_btn_1nniy_52 > ._found_pet_link_1nniy_64')
    }
    getBtnDogs() {
        return cy.get('img[src="/assets/dogs-BCeOB7HR.png"]')
    }
    getBtnCats() {
        return cy.get('img[src="/assets/cats-sHRez_ue.png"]')
    }
    getFooter() {
        return cy.get('a._aFooter_1pths_32')
    }

}
export default HomePage
    
    
