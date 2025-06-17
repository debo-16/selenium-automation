import { Builder, Browser, By, until } from 'selenium-webdriver';
import assert from "assert";

(async function AbortController() {
  // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://the-internet.herokuapp.com/basic_auth');

  try {
    
   const res =  await driver.wait(until.alertIsPresent,5000);
    //const res = await driver.wait(until.titleContains('hero'), 8000);
    console.log("res",res);
    // Trigger a prompt manually via JavaScript
    await driver.findElement(By.id('username')).sendKeys('admin');
await driver.findElement(By.id('password')).sendKeys('admin');
await driver.findElement(By.id('loginBtn')).click();

    await driver.quit();
   
  }
  catch(err) {
    console.log("error is: ",err);
  }
 


}) ();


