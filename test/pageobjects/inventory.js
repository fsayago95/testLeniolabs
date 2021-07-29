import Page from './page'

class Inventory extends Page {

    /**
     * define selectors using getter methods
     */
    get btnAddToCartBackpack () { return $('[data-test="add-to-cart-sauce-labs-backpack"]') }
    get btnAddToCartTShirtRed () { return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')}
    get btnShoppingCart() { return $('.shopping_cart_link')}
    get btnCheckout() { return $('[data-test="checkout"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickOnAddtoCart () {
        await (await this.btnAddToCartBackpack.click())
        await (await this.btnAddToCartTShirtRed.click())
    }
    async clickOnShoppingCart(){
        await (await this.btnShoppingCart.click())
    }
   
   async clickOnCheckout(){
       await (await this.btnCheckout.click())
   }
   
}


export default new Inventory()