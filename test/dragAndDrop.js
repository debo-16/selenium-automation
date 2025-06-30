import { Builder, Browser, By } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import os from 'os';
import path from 'path';

(async function dragAndDropFeature() {
  const args = process.argv.slice(2);
  let browser = 'chrome';

  args.forEach(arg => {
    if (arg.startsWith('--browser=')) {
      browser = arg.split('=')[1];
    }
  });

  console.log(`Running tests in ${browser}...`);
  let driver;
  
    
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
    driver = new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
    await driver.get("https://the-internet.herokuapp.com/drag_and_drop");
    const blockA = await driver.findElement(By.id('column-a'));
    const blockB = await driver.findElement(By.id('column-b'));
    await driver.actions({async: true}).dragAndDrop(blockA,blockB).perform();
    await driver.actions({async: true}).dragAndDrop(blockB,blockA).perform();
    await driver.quit();




  })();