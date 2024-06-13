class LoginPage{

    txtUserName= "input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    errorMsg = 'p._p_message_nk10u_206'; 
    

    visit() {
        cy.visit("https://take-me-home-sqbog.ondigitalocean.app/#/login-form")
    }
    setUserName(username)
    {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }
    verifyLoginFailure() {
        cy.get(this.errorMsg).should('be.visible').and('contain.text', 'Invalid username or password. Please try again.');
    }
}
export default LoginPage;
