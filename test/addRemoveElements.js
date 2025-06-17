const {Builder, Browser, By} = require('selenium-webdriver');
const assert = require("assert");

(async function AbortController() {
  // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://the-internet.herokuapp.com/add_remove_elements/');

  try {
    
    
    
    for(let i=1; i<=5; i++) {
      const button = await driver.findElement(By.css('button[onclick="addElement()"]'));
      //console.log("***",addElemBtn)
      await button.click();
      
      
      const delBtn = await driver.findElements(By.css('button[onclick="deleteElement()"]'));
      
      
      //const childCount = await driver.executeScript('return arguments[0].children.length;', parent);
      assert.strictEqual(delBtn.length, i);
    }
    
    
  }
  catch(err) {
    console.log("error is: ",err);
  }
  finally {
    console.log("Working..!!");
    //await driver.quit();
    
  }
 


}) ();


