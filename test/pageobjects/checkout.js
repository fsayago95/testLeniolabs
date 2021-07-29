import Page from './page'

class Checkout extends Page {

    get firstName(){ return $('[data-test="firstName"]')}
    get lastName() { return $('[data-test="lastName"]')}
    get postalCode() { return $('[data-test="postalCode"]')}
    get btnContinue() {return $('[data-test="continue"]')}
    get btnFinish() {return $('[data-test="finish"]')}
    get messageOfPurchase() { return $('[data-test="complete-header"]')}

    async completeDataInCheckout(name, lastName, postalCode){
        await (await this.firstName).setValue(name)
        await (await this.lastName).setValue(lastName)
        await (await this.postalCode).setValue(postalCode)
        await (await this.btnContinue.click())
        await (await this.btnFinish.click())
    }
}

export default new Checkout()