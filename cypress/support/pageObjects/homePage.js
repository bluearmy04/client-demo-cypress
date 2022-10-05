class homePage{
    getSneakPreviewButton(){
        return cy.get('a[href="/dashboard"]').first();
    }

    getLoginButton(){
        return cy.get('a[href="/login"]');
    }

    getFooterAboutBtn()
    {
        return cy.get('.flex a[href="/about"]');
    }

    getFooterEmployeesBtn()
    {
        return cy.get('.flex a[href="/our-team"]');
    }

    getFooterCareerBtn()
    {
        return cy.get('.flex a[href*="careers.houseofmath.com"]');
    }

    getFooterMediaBtn()
    {
        return cy.get('.flex a[href="/media"]');
    }

    getFooterLecturesBtn()
    {
        return cy.get('.flex a[href="/lectures"]');
    }

    getFooterBlogBtn()
    {
        return cy.get('.flex a[href*="mentor-on-demand/blog"]');
    }

    getFooterActionBtn()
    {
        return cy.get('.flex a[href*="vitaransvar.com"]');
    }

    getFooterTutoringBtn()
    {
        return cy.get('.flex li a[href="/mentor-on-demand"]');
    }

    getFooterEncyclopediaBtn()
    {
        return cy.get('.flex li a[href="/encyclopedia"]');
    }

    getFooterBootcampsBtn()
    {
        return cy.get('.flex li a[href="/bootcamp"]');
    }

    getFooterMathEssenBtn()
    {
        return cy.get('.flex li a[href="/drill"]');
    }

    getFooterMathvaultBtn()
    {
        return cy.get('.flex li a[href="/math-vault"]');
    }
}
export default homePage;