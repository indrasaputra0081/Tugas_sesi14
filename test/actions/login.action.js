const LoginPage = require('../pageobjects/login.page');

class LoginAction {
    async login(username, password) {
        await LoginPage.usernameInput.waitForDisplayed({ timeout: 10000 });
        await LoginPage.usernameInput.setValue(username);
        await LoginPage.passwordInput.setValue(password);
        await LoginPage.loginButton.click();
    }

    async getErrorMessage() {
        await LoginPage.errorMessage.waitForDisplayed({ timeout: 5000 });
        return LoginPage.errorMessage.getText();
    }

    async isLoginPageDisplayed() {
        await LoginPage.loginButton.waitForDisplayed({ timeout: 5000 });
        return LoginPage.loginButton.isDisplayed();
    }
}

module.exports = new LoginAction();