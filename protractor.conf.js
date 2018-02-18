require('ts-node').register();

module.exports.config = {
    specs: ['specs/*.ts'],
    baseUrl: 'https://movies-finder.firebaseapp.com/',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
        enableVNC: true,
        name: "SergeySS"
    },
    onPrepare: async function() {
        await browser.manage().timeouts().implicitlyWait(1000);
    }
}