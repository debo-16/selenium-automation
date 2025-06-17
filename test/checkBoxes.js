import { Builder, Browser, By } from 'selenium-webdriver';
import assert from "assert";

(async function AbortController() {
  // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://the-internet.herokuapp.com/checkboxes');

  try {
    
    let checkboxes = await driver.findElements(By.css('input[type="checkbox"]'));
    //console.log(`Total checkboxes found: ${checkboxes}.length`);
    //console.log(`the total number of checkboxes is: ${checkboxes}.length`);
    console.log(`Total checkboxes found: ${checkboxes.length}`);
    let allChecked = true;
    for( let i=0; i< checkboxes.length; i++) {
      const isChecked = await checkboxes[i].isSelected();
      (isChecked) ? console.log(`number${i+1} checked:`,isChecked) : console.log(`number${i+1} checked:`,isChecked);
      if(!isChecked) {
        allChecked = false;
      }
    }

    console.log("all checkboxes are checked?",allChecked);

    //perfom click and see if getting checked and unchecked

    for( let i=0; i< checkboxes.length; i++) {
      const checkedBefore = await checkboxes[i].isSelected();
      await checkboxes[i].click();
      const checkedAfter = await checkboxes[i].isSelected();
      const result = assert.notEqual(checkedBefore,checkedAfter);
      (!result) ? console.log(`The ${i+1} checkbox is toggling`) : console.log(`The ${i+1} checkbox is not toggling click is not working`);

    }

    



    

   
  }
  catch(err) {
    console.log("error is: ",err);
  }
  finally {
    await driver.quit();
    
  }
 


}) ();


