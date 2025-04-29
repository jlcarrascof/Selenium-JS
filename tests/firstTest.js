const { Builder, By, Key } = require('selenium-webdriver');

async function example() {

// Launch the browser
let driver = await new Builder().forBrowser('firefox').build();

// Navigate to our application

await driver.get('http://lambdatest.github.io/sample-todo-app/');

// Add a todo
await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

// Close the browser
await driver.quit();

}

example();
