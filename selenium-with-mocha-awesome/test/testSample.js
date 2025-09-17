import { Builder, By, Key, until, Browser } from 'selenium-webdriver';
import assert from 'assert';
import chrome from 'selenium-webdriver/chrome.js';
import { ServiceBuilder } from 'selenium-webdriver/chrome.js';
import chromedriver from 'chromedriver';
import path from 'path';
describe('should test google', function () {
  this.timeout(20000);
  let driver;

  

  it('should open google and search for selenium', async function () {
    const options = new chrome.Options();
    const logPath = path.resolve('./chromedriver.log');

    const service = new ServiceBuilder(chromedriver.path)
  .loggingTo(logPath)
  .enableVerboseLogging();
    driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setChromeService(service)
    .build();
      console.log('Driver started successfully');
    console.log('Opening Google...');
    await driver.get('https://www.google.com/');

    const searchbar = await driver.findElement(By.css('textarea[name="q"]'));
    console.log('Typing search query...');
    await searchbar.sendKeys('selenium', Key.ENTER);

    console.log('Waiting for title to contain "selenium"...');
    await driver.wait(until.titleContains('selenium'), 10000);

    const title = await driver.getTitle();
    console.log('Page title:', title);
    assert.ok(title.toLowerCase().includes('selenium'));
    if (driver) {
      console.log('Quitting driver...');
      await driver.quit();
    }
  });

 
});
