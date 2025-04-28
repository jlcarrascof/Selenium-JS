const { Builder, By, until, Key } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    await driver.wait(until.titleContains('Selenium'), 1000);

    await new Promise(resolve => setTimeout(resolve, 3000));
  } finally {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await driver.quit();
  }
})();
