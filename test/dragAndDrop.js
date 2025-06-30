import { Builder, Browser, By } from "selenium-webdriver";

(async function dragAndDropFeature (){
    const driver = new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://the-internet.herokuapp.com/drag_and_drop");

    try {
      const blockA = await driver.findElement(By.id('column-a'));
      const blockB = await driver.findElement(By.id('column-b'));
      await driver.actions({async: true}).dragAndDrop(blockA,blockB).perform();
      await driver.actions({async: true}).dragAndDrop(blockB,blockA).perform();
      await driver.quit();
    }
    catch(err) {
      console.log("error occured: ",err)
    }




}) ();