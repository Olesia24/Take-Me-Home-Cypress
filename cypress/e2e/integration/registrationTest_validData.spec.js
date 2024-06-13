import RegistrationPage from "../PageObjects/RegistrationPage"


describe('Registration page Test with valid Data', ()=> {
  const registrationPage = new RegistrationPage()
  
  beforeEach(() => {
      registrationPage.visit()
  })

  it('should register with valid data 1', () => {
      const fullname = 'John'
      const username = 'Joh'
      const password = 'Joh1'
      const email = 'test1@gmail.com' 
       
      registrationPage.setFullName(fullname)
      registrationPage.setUserName(username)
      registrationPage.setPassword(password)
      registrationPage.setEmail(email) 
      registrationPage.clickCheckBox()
      registrationPage.buttonCreate()  
  })
  it('should register with valid data 2', () => {
    const fullname = 'John Black'
    const username = 'Joh2'
    const password = 'JohnBla1'
    const email = 'test2@gmail.com'
    
    registrationPage.setFullName(fullname)
    registrationPage.setUserName(username)
    registrationPage.setPassword(password)
    registrationPage.setEmail(email)
    registrationPage.clickCheckBox()
    registrationPage.buttonCreate()  
})
it('should register with valid data 3', () => {
  const fullname = 'John Black'
  const username = 'john3'
  const password = 'Joh1'
  const email = 'test1234@gmail.com'
  
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email)
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with valid data 4', () => {
  const fullname = 'John Black'
  const username = 'john4'
  const password = 'JohnBla1'
  const email = 'test1234@gmail.com'
  
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email)
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with valid data 5', () => {
  const fullname = 'John Black'
  const username = 'John5'
  const password = 'John1'
  const email = 'test1234@gmail.com'
  
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email)
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with valid data 6', () => {
  const fullname = 'John Black'
  const username = 'John6'
  const password = 'JohnBla1'
  const email = 'test1234@gmail.com'
  
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email)
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with valid data 7', () => {
  const fullname = 'John Black'
  const username = 'John!$%&'
  const password = 'John1'
  const email = 'test1234@gmail.com'
  
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email)
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with valid data 8', () => {
  const fullname = 'John Black'
  const username = 'John!$%&12'
  const password = 'JohnBla1'
  const email = 'test1234@gmail.com'
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email)
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
}) 
})
