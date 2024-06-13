import RegistrationPage from "../PageObjects/RegistrationPage"


describe('Registration page Test with valid Data', ()=> {
  const registrationPage = new RegistrationPage()
  
  beforeEach(() => {
      registrationPage.visit()
  })

  it('should register with invalid fullname 1', () => {
      const fullname = ' '
      const username = 'qwerty123'
      const password = 'Test123'
      const email = 'test@gmail.com' 
       
      registrationPage.setFullName(fullname)
      registrationPage.setUserName(username)
      registrationPage.setPassword(password)
      registrationPage.setEmail(email) 
      registrationPage.clickCheckBox()
      registrationPage.buttonCreate()  
  })
  it('should register with invalid fullname 2', () => {
    const fullname = 'кенгшо'
    const username = 'qwerty123'
    const password = 'Test123'
    const email = 'test@gmail.com' 
     
    registrationPage.setFullName(fullname)
    registrationPage.setUserName(username)
    registrationPage.setPassword(password)
    registrationPage.setEmail(email) 
    registrationPage.clickCheckBox()
    registrationPage.buttonCreate()  
})
it('should register with invalid fullname 3', () => {
  const fullname = 'John123'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 4', () => {
  const fullname = 'John123!'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 5', () => {
  const fullname = '123'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 6', () => {
  const fullname = '«@><!;;'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 7', () => {
  const fullname = '<input>'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 8', () => {
  const fullname = '<script></script>'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 9', () => {
  const fullname = 'www.telran.com'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 10', () => {
  const fullname = 'SELECT*FROM'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 11', () => {
  const fullname = 'test1234@gmail.com'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid fullname 12', () => {
  const fullname = '0,00000000000'
  const username = 'qwerty123'
  const password = 'Test123'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
//----------------------Invalid Password--------------------------
it('should register with invalid password 13', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = ' '
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 14', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'Password12345678'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 15', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'test'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 16', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'test12'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 17', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'Test'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 18', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = '1234'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 19', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = '<script></script>'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 20', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'www.telran.com'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 21', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'SELECT*FROM'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 22', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'test1234@gmail.com'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 23', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = '0,0000000'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
it('should register with invalid password 24', () => {
  const fullname = 'John Black'
  const username = 'qwerty123'
  const password = 'Pass@><!'
  const email = 'test@gmail.com' 
   
  registrationPage.setFullName(fullname)
  registrationPage.setUserName(username)
  registrationPage.setPassword(password)
  registrationPage.setEmail(email) 
  registrationPage.clickCheckBox()
  registrationPage.buttonCreate()  
})
})
