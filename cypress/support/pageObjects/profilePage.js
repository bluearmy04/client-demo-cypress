class profilePage{

    GetPersonalInformationBtn(){
        return cy.contains('Personal information');
    }

    GetMyProfileBtn(){
        return cy.contains('My profile');
    }

    GetAvatarAndNicknameBtn(){
        return cy.contains('Avatar and nickname');
    }

    GetChangePasswordBtn(){
        return cy.contains('Change password');
    }
}

export default profilePage