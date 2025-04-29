const { Builder } = require('selenium-webdriver');

async function example() {

// Launch the browser
let driver = await new Builder().forBrowser('firefox').build();



// Navigate to our application

// Add a todo

// Close the browser

}
