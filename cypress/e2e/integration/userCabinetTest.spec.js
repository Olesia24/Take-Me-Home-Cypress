import LoginPage from "../PageObjects/LoginPage";
import UserCabinet from "../PageObjects/UserCabinetPage";


describe('User-Cabinet Test', () => {
  const loginPage = new LoginPage();
  const userCabinet = new UserCabinet();

  beforeEach(() => {
    loginPage.visit();
  });
  
  it('Should create successful new advert', () => {   
    loginPage.setUserName('admin1');
    loginPage.setPassword('Admin1');
    loginPage.clickSubmit();

    cy.get(userCabinet.btnUserCabinet).click(); 
    userCabinet.navigateToCreatePet();

    userCabinet.selectPetTypeOption('cat');
    userCabinet.selectCategoryOption('big');
    userCabinet.selectSexOption('male');
    userCabinet.selectAgeOption('adult');
    userCabinet.selectCountryOption('USA');
    userCabinet.enterCityOption('New-York');
    userCabinet.enterTitle('I found beautiful adult cat');
    userCabinet.enterDescription('I recently found a beautiful adult cat. It appeared out of nowhere one sunny afternoon, gracefully wandering into my backyard. Its coat was a stunning mix of orange and white, gleaming in the sunlight.');
    
    
    const filePath = 'cat.jpg';
    cy.get(userCabinet.addPhoto).attachFile(filePath);

    userCabinet.clickSendButton();
  }); 
});
