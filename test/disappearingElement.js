import { Builder, Browser, By, until } from 'selenium-webdriver';
import assert from "assert";

(async function AbortController() {
  // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://the-internet.herokuapp.com/disappearing_elements');

  try {
  // Get all the links that is to be clicked
  const container = await driver.findElement(By.css('ul'));
  const links = await container.findElements(By.css('a'));
  console.log(`there are total ${links.length} navigation links`)
  //Loop and start linking one by one validating all links
  for(let i=0; i<links.length; i++) {
    await links[i].click();
    // wait till the redirection
    await driver.wait(until.urlContains('hero'));
    // check url
    const currentUrl = await driver.getCurrentUrl();
    console.log("current url is",currentUrl);

    //see if correct content is there or not
    const bodyText = await driver.findElement(By.css('body')).getText();
    (bodyText.includes('Not Found') ) ? console.log("Link not working") : console.log("link is working");
    //Go back to the original page
      await driver.navigate().back();

      // Wait again for the original page to load before next loop
      await driver.wait(until.elementLocated(By.css('h3')), 5000);

    
  }


   await driver.quit();
  }
  catch(err) {
    console.log("error is: ",err);
  }
}) ();


