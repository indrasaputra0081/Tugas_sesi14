const LoginAction = require('../actions/login.action');
const HomeAction = require('../actions/home.action');
const AppHelper = require('../../utils/app.helper');
const { validUser, invalidUser, errorMessage } = require('../test_data/credentials');

describe('Sauce Demo Mobile App', () => {

    // ===== HOOKS =====
    before(async () => {
        await AppHelper.launchApp();
    });

    beforeEach(async () => {
        await AppHelper.resetApp();
    });

    afterEach(async function () {
        const name = this.currentTest.title.replace(/\s+/g, '_');
        await driver.saveScreenshot(`./reports/screenshots/${name}.png`);
    });

    after(async () => {
        await AppHelper.closeApp();
    });

    // ===== SCENARIOS =====
    it('Sukses login dengan kredensial valid', async () => {
        await LoginAction.login(validUser.username, validUser.password);
        expect(await HomeAction.isHomeDisplayed()).toBe(true);
    });

    it('Gagal login dengan password salah', async () => {
        await LoginAction.login(invalidUser.username, invalidUser.password);
        expect(await LoginAction.getErrorMessage()).toBe(errorMessage);
    });

    it('Sorting produk harga low to high', async () => {
        await LoginAction.login(validUser.username, validUser.password);
        await HomeAction.isHomeDisplayed();
        await HomeAction.sortBy('Price (low to high)');

        const prices = await HomeAction.getPrices();
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sorted);
    });

    it('Logout dari aplikasi', async () => {
        await LoginAction.login(validUser.username, validUser.password);
        await HomeAction.isHomeDisplayed();
        await HomeAction.logout();
        expect(await LoginAction.isLoginPageDisplayed()).toBe(true);
    });
});