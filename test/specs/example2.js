import Home from '../pageobjects/home'

describe('Example', () => {
    it('Example 2', async () => {
        Home.open("https://www.mercadolibre.com.ar/")
        Home.searchMiscellaneous()
        Home.clickOnSearch()
    })
})