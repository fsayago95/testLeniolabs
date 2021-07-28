import Page from '../pageobjects/page'

class Home extends Page {

    get  inputHome() {
         return $('.nav-search-input')
    }
    get  btnSearch(){
         return $('.nav-icon-search')
    }

    searchMiscellaneous(){
        this.inputHome.setValue("Messi")
    }
    clickOnSearch(){
        this.btnSearch.click()
    }
}

export default new Home()