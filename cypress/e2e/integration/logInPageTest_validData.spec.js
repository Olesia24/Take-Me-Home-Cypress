import LoginPage from "../PageObjects/LoginPage"

describe('Login page Test with valid Data', ()=> {
  const loginPage = new LoginPage()
    
    beforeEach(() => {
        loginPage.visit()
      })
      it('should login with valid data 0', () => {
        const username = 'admin'
        const password = 'admin'
     
        loginPage.setUserName(username)
        loginPage.setPassword(password)
        loginPage.clickSubmit()
      
    })
      it('should login with valid data 1', () => {
        const username = 'Joh'
        const password = 'John1'
     
        loginPage.setUserName(username)
        loginPage.setPassword(password)
        loginPage.clickSubmit()
    })
    it('should login with valid data 2', () => {
      const username2 = 'Joh2'
      const password2 = 'JohnBla1'
  
      loginPage.setUserName(username2)
      loginPage.setPassword(password2)
      loginPage.clickSubmit()
      
  })
  it('should login with valid data 3', () => {
    const username = 'john3'
    const password = 'Joh1'

    loginPage.setUserName(username)
    loginPage.setPassword(password)
    loginPage.clickSubmit()
    
})
it('should login with valid data 4', () => {
  const username = 'john4'
  const password = 'JohnBla1'

  loginPage.setUserName(username)
  loginPage.setPassword(password)
  loginPage.clickSubmit()
  
})
it('should login with valid data 5', () => {
  const username = 'John5'
  const password = 'Joh1'

  loginPage.setUserName(username)
  loginPage.setPassword(password)
  loginPage.clickSubmit()
  
})
it('should login with valid data 6', () => {
  const username = 'John6'
  const password = 'JohnBla1'

  loginPage.setUserName(username)
  loginPage.setPassword(password)
  loginPage.clickSubmit()
  
}) 
it('should login with valid data 7', () => {
  const username = 'John!$%&'
  const password = 'Joh1'

  loginPage.setUserName(username)
  loginPage.setPassword(password)
  loginPage.clickSubmit()
  
})
it('should login with valid data 8', () => {
  const username = 'John!$%&12'
  const password = 'JohnBla1'

  loginPage.setUserName(username)
  loginPage.setPassword(password)
  loginPage.clickSubmit()
  
}) 
})