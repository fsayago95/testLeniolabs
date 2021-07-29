import Login from '../pageobjects/login'
import Inventory from '../pageobjects/inventory'
import Checkout from '../pageobjects/checkout'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await Login.open('https://www.saucedemo.com/');
        await Login.login('standard_user', 'secret_sauce');
        await Login.clickOnSubmit()
        await Inventory.clickOnAddtoCart()
        await Inventory.clickOnShoppingCart()
        await Inventory.clickOnCheckout()
        await Checkout.completeDataInCheckout('Franco', 'Sayago', '1405')
    });
});

