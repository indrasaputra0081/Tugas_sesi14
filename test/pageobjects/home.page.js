class HomePage {
    get productTitle()  { return $('android=new UiSelector().text("PRODUCTS")'); }
    get burgerMenu()    { return $('~test-Menu'); }
    get logoutButton()  { return $('~test-LOGOUT'); }
    get sortButton()    { return $('~test-Modal Selector Button'); }
    sortOption(text)    { return $(`android=new UiSelector().text("${text}")`); }
    get productPrices() { return $$('~test-Price'); }
}

module.exports = new HomePage();