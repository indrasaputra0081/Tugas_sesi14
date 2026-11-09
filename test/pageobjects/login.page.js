class LoginPage {
    get usernameInput() { return $('~test-Username'); }
    get passwordInput() { return $('~test-Password'); }
    get loginButton()   { return $('~test-LOGIN'); }
    get errorMessage()  { return $('//*[@content-desc="test-Error message"]/android.widget.TextView'); }
}

module.exports = new LoginPage();