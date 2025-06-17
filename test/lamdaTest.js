//const { Builder } = require('selenium-webdriver');
import { Builder } from "selenium-webdriver";

const USERNAME = 't.sandeepvml';
const ACCESS_KEY = 'kbKFQDOlojviGEpKPZYOS3gEm4FlUzSGOhaF2TQK0kgNmZ42oU';

const GRID_URL = 'https://' + USERNAME + ':' + ACCESS_KEY + '@hub.lambdatest.com/wd/hub';

(async function runTest() {
  let capabilities = {
    platformName: 'iOS',
    deviceName: 'iPhone 13',
    platformVersion: '15.0',
    browserName: 'Safari',
    resolution: '1170x2532',
    isRealMobile: true,
    name: 'Node.js Selenium Test on iPhone', // test name
    build: 'LambdaTest Sample Build',        // CI/CD build name
  };

  let driver = await new Builder()
    .usingServer(GRID_URL)
    .withCapabilities(capabilities)
    .build();

  try {
    await driver.get('https://www.google.com');
    console.log('Test ran successfully!');
  } finally {
    await driver.quit();
  }
})();