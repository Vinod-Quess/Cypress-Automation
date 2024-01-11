class FMS_Login{
    loginName="input[id='loginName']";
    password="input[id='loginPass']";
    loginBtn="input[name='loginButton']";

    
    setUserName(username){
        cy.get(this.loginName).type(username)
    }

    setPassword(pass){
        cy.get(this.password).type(pass)
    }

    clickSubmit(){
        cy.get(this.loginBtn).click()
    }

}

export default FMS_Login;