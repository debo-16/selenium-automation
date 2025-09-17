import { Builder } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';
const { ServiceBuilder, Options } = firefox;
import * as geckodriver from 'geckodriver';

(async () => {
  console.log('GeckoDriver path:', geckodriver.path);
  const options = new Options()
    .setBinary('C:\\Program Files\\Mozilla Firefox\\firefox.exe');

  const service = new ServiceBuilder(geckodriver.path)
    .enableVerboseLogging();

  let driver;
  try {
    console.log('→ Starting Firefox...');
    driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .setFirefoxService(service)
      .build();
    console.log('Success! Title:', await driver.getTitle());
  } catch (e) {
    console.error('❌ Launch failed:', e);
  } finally {
    if (driver) await driver.quit();
  }
})();
