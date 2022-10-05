// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import loginPage from './pageObjects/loginPage'
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    const login = new loginPage();
    login.getEmailInput().type(email);
    login.getContinueButton().click();
    login.getPasswordInput().type(password);
    login.getLoginButton().click();
 })

 Cypress.Commands.add('LoginAPI',(login_api,email,password)=>{
    //cy.log(login_api + email + password);
    cy.request('POST', login_api,
    {email: email, password: password}).
    then(function(response){
        expect(response.status).to.eq(200);
        Cypress.env('accessToken',response.body.data.accessToken);
        Cypress.env('firebaseToken',response.body.data.firebaseToken);
    })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })