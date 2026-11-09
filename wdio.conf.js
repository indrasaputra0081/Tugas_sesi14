exports.config = {
    runner: 'local',
    port: 4723,

    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': require('path').join(process.cwd(), 'app', 'brina.apk'),
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
        'appium:appWaitActivity': '*',
        'appium:noReset': false,
        'appium:newCommandTimeout': 240,
    }],

    logLevel: 'error',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
    ['appium', {
        command: 'appium',
    }],
],

    framework: 'mocha',
   reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false
    }]
],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },
};