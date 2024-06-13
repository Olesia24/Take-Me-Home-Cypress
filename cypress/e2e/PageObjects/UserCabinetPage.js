class UserCabinet {
    constructor() {
        this.btnUserCabinet = 'a[href="#/personal-cabinet/admin1"]';
        this.btnChangePersonalDetails = 'a[href="#/edit-user"]';
        this.createAdvert = 'a[href="#/create-pet/"]';
        this.selectPetType = 'select[name="petType"]';
        this.selectCategory = 'select[name="category"]'; 
        this.selectSex = 'select[name="gender"]';          
        this.selectAge = 'select[name="age"]';          
        this.selectCountry = 'select[name="country"]';   
        this.enterCity = 'input[name="city"]';        
        this.titleInput = 'input[name="caption"]';        
        this.descriptionInput = 'textarea[name="description"]';
        this.addPhoto = 'input[type="file"]';
        this.btnSend = 'button._formButton_createPet_1v6ap_242';
    }
    visit() {
        cy.visit("https://take-me-home-sqbog.ondigitalocean.app/#/personal-cabinet/admin1");
    }
 
    navigateToCreatePet() {
        cy.get(this.createAdvert).click();
    }
 
    selectPetTypeOption(petType) {
        cy.get(this.selectPetType).select(petType);
    }
 
    selectCategoryOption(category) {
        cy.get(this.selectCategory).select(category);
    }
 
    selectSexOption(sex) {
        cy.get(this.selectSex).select(sex);
    }
 
    selectAgeOption(age) {
        cy.get(this.selectAge).select(age);
    }
 
    selectCountryOption(country) {
        cy.get(this.selectCountry).select(country);
    }
 
    enterCityOption(city) {
        cy.get(this.enterCity).type(city);
    }
 
    enterTitle(title) {
        cy.get(this.titleInput).type(title);
    }
 
    enterDescription(description) {
        cy.get(this.descriptionInput).type(description);
    } 
    addFotoPet(){
        cy.get(this.addPhoto).click(); // Hier geändert
    }
    clickSendButton(){
        cy.get(this.btnSend).click();
    }
}
export default UserCabinet;



    
    
