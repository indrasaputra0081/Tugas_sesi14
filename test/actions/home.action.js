const HomePage = require('../pageobjects/home.page');

class HomeAction {
    async isHomeDisplayed() {
        await HomePage.productTitle.waitForDisplayed({ timeout: 10000 });
        return HomePage.productTitle.isDisplayed();
    }

    async sortBy(optionText) {
        await HomePage.sortButton.click();
        await HomePage.sortOption(optionText).waitForDisplayed({ timeout: 5000 });
        await HomePage.sortOption(optionText).click();
    }

    async getPrices() {
        const els = await HomePage.productPrices;
        const prices = [];
        for (const el of els) {
            prices.push(parseFloat((await el.getText()).replace('$', '')));
        }
        return prices;
    }

    async logout() {
        await HomePage.burgerMenu.click();
        await HomePage.logoutButton.waitForDisplayed({ timeout: 5000 });
        await HomePage.logoutButton.click();
    }
}

module.exports = new HomeAction();