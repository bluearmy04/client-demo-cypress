class loginPage{
    getEmailInput(){
        return cy.get('#email');
    }

    getContinueButton(){
        return cy.get('.max-w-screen-sm > .flex');
    }

    getPasswordInput(){
        return cy.get('#password');
    }

    getLoginButton(){
        return cy.get('button[type="submit"]')
    }
}

export default loginPage