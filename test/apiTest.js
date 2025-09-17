import { Builder, Browser,By } from "selenium-webdriver";
import axios, { Axios } from "axios";
import assert from 'assert';
(async function testApi() {
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  try {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    assert.deepEqual(response.status,200);
    console.log('the data from the API call is :',response.data);
    await driver.get('https://the-internet.herokuapp.com/status_codes');
    await driver.manage().window().maximize();
    await driver.quit();
  }
  catch(err) {
    console.log("Error is: ",err);
  }
})();