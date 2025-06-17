import { Browser, By, Builder} from "selenium-webdriver";
(async function dynamiccontrol(){
  const driver = await new Builder().forBrowser(Browser.CHROME).build();

  try {
    await driver.get("https://the-internet.herokuapp.com/dynamic_controls");
    await driver.manage().window().maximize();
    const checkbox = await driver.findElement(By.css('input[type="checkbox"]'));
    await driver.findElement(By.css('button[onclick="swapCheckbox()"]')).click();
    await driver.sleep(6000);
    
    checkbox.length ? console.log("Not working") : console.log("Working");
    const inputIsDisabled = await driver.findElement(By.css('input[type="text"]')).getAttribute('disabled');
    //await driver.quit();
    await driver.findElement(By.css('button[onclick="swapInput()"]')).click();
    await driver.sleep(6000);
    
    (inputIsDisabled == null) ? console.log("Not working") : console.log("Working");

    await driver.quit();

  }
  catch(err){
    console.log("error :",err);
  }

})();
