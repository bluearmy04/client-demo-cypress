    /// <reference types="cypress"/>
    import loginPage from '../../support/pageObjects/loginPage';

    describe('Authentication to website',function(){

        before(function(){
            cy.fixture('applicationData').then(function(data){
                this.data = data;
            })
        })
        
        it('Login',function(){
            let url;
            let email;
            let password;
            if(String(Cypress.env('environment')).includes('stage'))
            {
                url = this.data.stage_credential.url + "login";
                email = this.data.stage_credential.student_cred.email;
                password = this.data.stage_credential.student_cred.password;
                //cy.log(url + email + password);
            }
            if(String(Cypress.env('environment')).includes('prod'))
            {
                url = this.data.prod_credential.url + "login";
                email = this.data.prod_credential.student_cred.email;
                password = this.data.prod_credential.student_cred.password;
            }
            
            cy.visit(url);
            cy.login(email,password);
            cy.url().should('contain','dashboard').then(function(){
            const accessToken = window.localStorage.getItem('accessToken');
                const firebaseToken = window.localStorage.getItem('firebaseToken');
                expect(accessToken).to.not.equal(null);
                expect(firebaseToken).to.not.equal(null);
            })  
        })

        // it('LoginThroughAPI',function(){
        //     cy.LoginAPI().then(function(){
        //         cy.visit('https://staging.houseofmath.com/dashboard',
        //         {
        //             onBeforeLoad(window){
        //                 //console.log(Cypress.env('accessToken'));
        //                 window.localStorage.setItem('accessToken',Cypress.env('accessToken'));
        //                 window.localStorage.setItem('firebaseToken',Cypress.env('firebaseToken'));
        //             }
        //         })
        //     })
        // })
    })