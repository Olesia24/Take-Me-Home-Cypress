class RegistrationPage{

    txtFullName = 'input[name="fullName"]';
    txtUserName = 'input[name="login"]';
    txtPassword = 'input[name="password"]';
    txtEmail = 'input[name="email"]';
    checkBox = 'input[name="agreeToTerms"]';
    btnCreate= 'button[type="submit"]';
    errorMsg = 'div._error_z0mit_259';

    visit() {
        cy.visit("https://take-me-home-sqbog.ondigitalocean.app/#/register")
    }

    setFullName(fullname) {
        cy.get(this.txtFullName).type(fullname);  
    }

    setUserName(username) {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }

    setEmail(email) {
        cy.get(this.txtEmail).type(email)
    }

    clickCheckBox() {
        cy.get(this.checkBox, { timeout: 10000 }).click();
    }

    buttonCreate() {
        cy.get(this.btnCreate).click()
    }
    errorMessage(){
        cy.get(this.errorMsg).should('be.visible').and('contain.text', 'Name can only contain Latin letters');
    }
}

export default RegistrationPage;
    
    
