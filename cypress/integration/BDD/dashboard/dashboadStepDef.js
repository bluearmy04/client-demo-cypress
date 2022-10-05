/// <reference types = "cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import dashboardPage from '../../../support/pageObjects/dashboardPage';
import profilePage from '../../../support/pageObjects/profilePage';

var url;
var login_api;
var email;
var password;

Given('I am logged in user',function(){
    
    cy.fixture('applicationData').then(function(data){
        if(String(Cypress.env('environment')).includes('stage'))
        {
            url = data.stage_credential.url;
            login_api = data.stage_credential.login_api;
            email = data.stage_credential.student_cred.email;
            password = data.stage_credential.student_cred.password;
            cy.log(url);
        }
        if(String(Cypress.env('environment')).includes('prod'))
        {
            url = data.prod_credential.url;
            login_api = data.prod_credential.login_api;
            email = data.prod_credential.student_cred.email;
            password = data.prod_credential.student_cred.password;
        }

        cy.LoginAPI(login_api,email,password).then(function(){
            cy.visit(url,
                {
                    onBeforeLoad(window)
                    {
                        window.localStorage.setItem('accessToken',Cypress.env('accessToken'));
                        window.localStorage.setItem('firebaseToken',Cypress.env('firebaseToken'));
                    }
                })
        })
    })
})

When('I have landed on the dashboard page',function(){
    cy.visit(url + 'dashboard');
})

Then('I should be able to go to the pages shown in the dashboard',function(){
    //cy.url().should('contain','dashboard')
    const dashboard = new dashboardPage();
    
    dashboard.getBootcampIcon().click();
    cy.get('h1').should('have.text','Bootcamps');
    cy.title().should('eq','Bootcamps | House of Math');

    cy.go('back');
    dashboard.getMathvaultIcon().click();
    //cy.url().contains('math-vault');
    cy.title().should('eq','Math Vault | House of Math');

    cy.go('back');
    dashboard.getMathEssentialIcon().click();
    //cy.url().contains('drill');
    cy.title().should('eq','Math Essentials | Theory & Exercises | Free Resource | House of Math');

    cy.go('back');
    dashboard.getMODIcon().click();
    cy.get('h1').should('have.text','Mentor-on-Demand');
    cy.title().should('eq','Mentor-on-Demand Revolutionizes Tutoring and Homework Help | House of Math');

    cy.go('back');
    dashboard.getEncyclopediaIcon().click();
    cy.title().should('eq','Free Math Encyclopedia | Fun & Easy Language | House of Math');

    cy.go('back');
    dashboard.getDigitalToolsIcon().click();
    cy.get('h1').should('have.text','Digital Tools');
    cy.title().should('eq','Digital Tools | House of Math');

    cy.go('back');
    dashboard.getMultgameIcon().click();
    cy.get('h1').should('have.text','Math Games');
    cy.title().should('eq','Math Games | House of Math');

    cy.go('back');
    dashboard.getStudyTipsIcon().click();
    cy.get('h1').should('have.text','Study Tips');
    cy.title().should('eq','Study Tips | House of Math');

    cy.go('back');
})

And('I should be able to check my user information in profile section',function(){
    const profile = new profilePage();
    
    cy.get('.h-8').click();
    cy.get('li a[href="/settings"]').click();
    cy.get('h1').should('have.text','Settings');
    cy.title().should('eq','Settings | House of Math');

    profile.GetPersonalInformationBtn().click();
    cy.get('input#email').invoke('val').should('not.be.empty');
    profile.GetMyProfileBtn().click();
    cy.get(':nth-child(3) > .text-xs').should('have.text','Years in school');
    profile.GetAvatarAndNicknameBtn().click();
    cy.get('#nickname').invoke('val').should('not.be.empty');
    profile.GetChangePasswordBtn().click();
    cy.get('#newPasswordConfirm').should('be.visible');

})