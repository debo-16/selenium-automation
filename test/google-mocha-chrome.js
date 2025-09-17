import { Builder, By, until } from "selenium-webdriver";
import chrome from 'selenium-webdriver/chrome.js';

import { ServiceBuilder } from 'selenium-webdriver/chrome.js';
import chromedriver from 'chromedriver';
import path from 'path';

describe('should open amazon', function () {
  this.timeout(20000); // Extend timeout to 60s

  it('opens Google', async function () {
    console.log('✅ Chrome is about to launch');

    const options = new chrome.Options();
    //options.addArguments('--headless'); // Headless mode
    const logPath = path.resolve('./chromedriver.log');

    const service = new ServiceBuilder(chromedriver.path)
  .loggingTo(logPath)
  .enableVerboseLogging();

    let driver;

    try {
      driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(service)
        .build();

      console.log('✅ Chrome launched');

      console.log('Navigating to Google...');
  await driver.get('https://www.google.com/');
  console.log('Page loaded, getting title...');
  const title = await driver.getTitle();
  console.log('Page title is:', title);

    } catch (err) {
      console.error('❌ Error during test execution:', err);
      throw err;
    } finally {
      if (driver) {
        console.log('🧹 Quitting driver...');
        await driver.quit(); // ✅ this must be awaited
      }
    }
  });
});
