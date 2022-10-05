class dashboard{
    getBootcampIcon(){
        return cy.get(':nth-child(1) > a p:contains("Bootcamps")');
    }

    getMathvaultIcon(){
        return cy.get(':nth-child(2) > a p:contains("Math Vault")');
    }

    getMathEssentialIcon(){
        return cy.get(':nth-child(3) > a p:contains("Math Essentials")');
    }

    getMODIcon(){
        return cy.get(':nth-child(4) > a p:contains("Mentor-on-Demand")');
    }

    getEncyclopediaIcon(){
        return cy.get(':nth-child(5) > a p:contains("Encyclopedia")');
    }

    getDigitalToolsIcon(){
        return cy.get(':nth-child(6) > a p:contains("Digital Tools")');
    }

    getMultgameIcon(){
        return cy.get(':nth-child(7) > a p:contains("Games")');
    }

    getStudyTipsIcon(){
        return cy.get(':nth-child(8) > a p:contains("Study Tips")');
    }

}

export default dashboard