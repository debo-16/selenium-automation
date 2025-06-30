import { Builder, By, until } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import os from 'os';
import path from 'path';

(async function runTest() {
  // Get browser argument
  const args = process.argv.slice(2);
  let browser = 'chrome';

  args.forEach(arg => {
    if (arg.startsWith('--browser=')) {
      browser = arg.split('=')[1];
    }
  });

  console.log(`Running tests in ${browser}...`);

  let driver;

  try {
    if (browser === 'chrome') {
      const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-profile-'));
      const options = new chrome.Options()
        .addArguments('--headless')                 // headless for CI
        .addArguments('--no-sandbox')               // required for GitHub Actions
        .addArguments('--disable-dev-shm-usage')    // prevent crashes
        .addArguments(`--user-data-dir=${userDataDir}`);

      driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    } else {
      throw new Error('Only Chrome is supported in this script.');
    }
    await driver.get('https://the-internet.herokuapp.com/broken_images');
    await driver.wait(until.elementsLocated(By.css('img')), 5000);
    const container = await driver.findElement(By.id('content'));
    const images = await container.findElements(By.css('img'));
    for (let i = 0; i < images.length; i++) {
      const isBroken = await driver.executeScript(`
        const img = arguments[0];
        return !(img && img.complete && img.naturalWidth > 0);
      `, images[i]);
      console.log(`Image ${i + 1} is ${isBroken ? 'broken' : 'ok'}`);
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
})();
