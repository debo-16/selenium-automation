import { Builder, Browser, By, until } from 'selenium-webdriver';
//import assert from "assert";



describe("check images are broken or not", function(){
  it("it succesfully checks the images",async function () {
    // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://the-internet.herokuapp.com/broken_images');

  //try {
    
    
     
    await driver.wait(until.elementsLocated(By.css('img')), 5000);
    // Check in browser if it's loaded properly
    const container = await driver.findElement(By.id('content'));

    // ✅ Get all img elements inside the container
    const images = await container.findElements(By.css('img'));

    for (let i=0; i<`${images.length}`; i++){
        const isBroken = await driver.executeScript(`
          const img = arguments[0];
          return !(img && img.complete && img.naturalWidth > 0);
        `, images[i]);
  
        console.log("isBroken",isBroken);
        
    }

   
  //}
  //catch(err) {
    //console.log("error is: ",err);
  //}
  });
});




/*(async function AbortController() {
  // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://the-internet.herokuapp.com/broken_images');

  try {
    
    
     
    await driver.wait(until.elementsLocated(By.css('img')), 5000);
    // Check in browser if it's loaded properly
    const container = await driver.findElement(By.id('content'));

    // ✅ Get all img elements inside the container
    const images = await container.findElements(By.css('img'));

    for (let i=0; i<`${images.length}`; i++){
        const isBroken = await driver.executeScript(`
          const img = arguments[0];
          return !(img && img.complete && img.naturalWidth > 0);
        `, images[i]);
  
        console.log("isBroken",isBroken);
        
    }

   
  }
  catch(err) {
    console.log("error is: ",err);
  }
  finally {
    //await driver.quit();
    
  }
 


}) ();*/


