import LoginPage from "../PageObjects/LoginPage"

describe('Login page Test with valid Data', ()=> {
  const loginPage = new LoginPage()
    
    beforeEach(() => {
        loginPage.visit()
      })
      
      it('should login with invalid username 1', () => {
        const invalidUsername = ' '
        const invalidPassword = 'Joh1'
     
        loginPage.setUserName(invalidUsername)
        loginPage.setPassword(invalidPassword)
        loginPage.clickSubmit()
        
        cy.wait(1000);
        loginPage.verifyLoginFailure();
    })
    it('should login with invalid username 2', () => {
      const invalidUsername = ' JohnTest123'
      const invalidPassword = 'Joh1'
   
      loginPage.setUserName(invalidUsername)
      loginPage.setPassword(invalidPassword)
      loginPage.clickSubmit()
      
      cy.wait(1000);
      loginPage.verifyLoginFailure();
  })
  it('should login with invalid username 3', () => {
    const invalidUsername = 'JohnTest123 '
    const invalidPassword = 'Joh1'
 
    loginPage.setUserName(invalidUsername)
    loginPage.setPassword(invalidPassword)
    loginPage.clickSubmit()
    
    cy.wait(1000);
    loginPage.verifyLoginFailure();
})
it('should login with invalid username 4', () => {
  const invalidUsername = 'John Black'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 5', () => {
  const invalidUsername = 'test1234@gmail.com'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 6', () => {
  const invalidUsername = 'JohnTest123_'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 7', () => {
  const invalidUsername = 'John'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 8', () => {
  const invalidUsername = 'JohnTest'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 9', () => {
  const invalidUsername = 'John!'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 10', () => {
  const invalidUsername = 'John@'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 11', () => {
  const invalidUsername = 'Fghjkkjjgf'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 12', () => {
  const invalidUsername = '«@><!;;'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 13', () => {
  const invalidUsername = '123456780'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 14', () => {
  const invalidUsername = 'SELECT* FROM'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 15', () => {
  const invalidUsername = 'JOHNTEST123'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 16', () => {
  const invalidUsername = 'johntest123'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
    
it('should login with invalid username 17', () => {
  const invalidUsername = 'johntest123.'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 18', () => {
  const invalidUsername = 'www.telran.com'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 19', () => {
  const invalidUsername = '0,00000000000'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 20', () => {
  const invalidUsername = '<input>'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid username 21', () => {
  const invalidUsername = '<script></script>'
  const invalidPassword = 'Joh1'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
//---------------------------Invalid User Password------------------------------------------
//username = 'Joh'
//password = 'John1'


it('should login with invalid userpassword 1', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = ' '

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 2', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'JohnTest123'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 3', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = ' Test1234!'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 4', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'Test1234! '

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 5', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'Test1234!'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 6', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'Test1234567890123456789098765432!'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 7', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'TEST1234!'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 8', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'test1234'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 9', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'Test1234'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 10', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = '1234567 !'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 11', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = '@*!<>;;;;'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 12', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'дылаофж'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 13', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'Test1234 5678'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 14', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'SELECT*FROM'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 15', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'www.telran.com'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 16', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = 'test1234@gmail.com'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 17', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = '0,00000000000'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 18', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = '<script></script>'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
it('should login with invalid userpassword 19', () => {
  const invalidUsername = 'Joh'
  const invalidPassword = '<input>'

  loginPage.setUserName(invalidUsername)
  loginPage.setPassword(invalidPassword)
  loginPage.clickSubmit()
  
  cy.wait(1000);
  loginPage.verifyLoginFailure();
})
}) 
