/// <reference types="cypress"/>
import homePage from '../../support/pageObjects/homePage'

describe('Visit Home Page',function(){

    before(function(){
        cy.fixture('applicationData').then(function(data){
            this.data = data;
        })
        if(String(Cypress.env('environment')).includes('stage')){
            this.url = 'https://staging.houseofmath.com';
        }else{
            this.url = 'https://www.houseofmath.com';
        }
    })

    it('Home page Land & redirection check',function(){
        cy.visit(this.url);

        const home = new homePage();
        
        home.getSneakPreviewButton().click({force:true});
        cy.url().should('eq',this.url+'/dashboard');
        cy.get('span:contains("Explore")').should('be.visible');
        cy.visit(this.url);

        home.getLoginButton().click();
        cy.url().should('eq',this.url+'/login');
        cy.get('div:contains("Continue with Google")').should('be.visible');
        cy.get('div:contains("Continue with Facebook")').should('be.visible');
        cy.get('div:contains("Continue with TikTok")').should('be.visible');
        cy.visit(this.url);

        home.getFooterAboutBtn().click();
        cy.url().should('eq',this.url+'/about');
        cy.get('h1:contains("About Us")').should('be.visible');
        cy.go('back');

        home.getFooterEmployeesBtn().click();
        cy.url().should('eq',this.url+'/our-team');
        cy.get('h1:contains("The Super Crew")').should('be.visible');
        cy.get('div:contains("Vibeke Gwendoline Fængsrud")').should('be.visible');
        cy.go('back');

        //this page has console error
        //home.getFooterCareerBtn().click();
        //cy.url().should('eq','https://careers.houseofmath.com/')
        //cy.get('span:contains("The future of EdTech")').should('be.visible');
        //cy.go('back');

        home.getFooterMediaBtn().click();
        cy.url().should('eq',this.url+'/media');
        cy.get('h1:contains("Media")').should('be.visible');
        cy.go('back');

        home.getFooterLecturesBtn().click();
        cy.url().should('eq',this.url+'/lectures');
        cy.get('h1:contains("Lectures")').should('be.visible');
        cy.go('back');

        home.getFooterBlogBtn().click();
        cy.url().should('eq',this.url+'/mentor-on-demand/blog');
        cy.get('h1:contains("Blog articles")').should('be.visible');
        cy.go('back');


        // Cypress does not allow you to navigate to a different origin URL within a single test.
        //home.getFooterActionBtn().invoke('removeAttr','target').click();
        //cy.url().should('eq','https://vitaransvar.com/');
        //cy.get('h2:contains("Social responsibility")').should('be.visible');
        //cy.go('back');

        home.getFooterTutoringBtn().click();
        cy.url().should('eq',this.url+'/mentor-on-demand');
        cy.get('h1:contains("Mentor-on-Demand")').should('be.visible');
        cy.go('back');

        home.getFooterEncyclopediaBtn().click();
        cy.url().should('eq',this.url+'/encyclopedia');
        cy.get('h1:contains("Encyclopedia")').should('be.visible');
        cy.go('back');

        home.getFooterBootcampsBtn().click();
        cy.url().should('eq',this.url+'/bootcamp');
        cy.get('h2:contains("Numbers and Quantities")').should('be.visible');
        cy.go('back');

        home.getFooterMathEssenBtn().click();
        cy.url().should('eq',this.url+'/drill');
        cy.get('a[aria-label="Go to The Multiplication Table"]').should('be.visible');
        cy.go('back');

        home.getFooterMathvaultBtn().click();
        cy.url().should('eq',this.url+'/math-vault');
        cy.get('a[href="/math-vault/site-map"]').should('be.visible');
        cy.go('back');
    })
})