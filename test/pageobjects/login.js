import Page from './page'

class Login extends Page {

    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('[data-test="username"]') }
    get inputPassword () { return $('[data-test="password"]')}
    get btnSubmit() { return $('[data-test="login-button"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password)
    }
    async clickOnSubmit() {
        await (await this.btnSubmit.click())
    }
   
}


export default new Login()