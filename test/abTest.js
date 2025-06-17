const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const {assert} = require('assert');

(async function AbortController() {
  // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://the-internet.herokuapp.com/abtest');

  try {
    //For checking page title
    const res = await driver.wait(until.titleContains('Internet'), 5000);
    console.log("res",res);
    var retriveHeadingValue = await driver.findElement(By.css('h3')).getText().then(function(value) {
      return value;
    });

    var expectedHeadingValue = "A/B Test Variation 1";

    assert.deepEqual(retriveHeadingValue, expectedHeadingValue);

    var retriveParaValue = await driver.findElement(By.css('p')).getText().then(function(value) {
      return value;
    });

    assert.notEqual(retriveParaValue,'');

    await driver.quit();
    
  }
  catch(err) {
    console.log("error is: omg",err);
  }
  
 


}) ();


