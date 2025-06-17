import { Builder,Browser,By } from "selenium-webdriver";
const driver = await new Builder().forBrowser(Browser.CHROME).build();
(async function openmodal(){
  try{
    await driver.get("https://the-internet.herokuapp.com/entry_ad");
    await driver.manage().window().maximize();
    const modal = await driver.findElement(By.id('modal'));
    (modal) ? console.log("Working") : console.log("Not Working");
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="modal"]/div[2]/div[3]/p')).click();
    (modal) ? console.log("Working") : console.log("Not Working");
    await driver.findElement(By.id('restart-ad')).click();
    await driver.sleep(2000);
    (modal) ? console.log("Working") : console.log("Not Working");
    await driver.quit();
  } catch(err){
    console.log("error :",err);
  }
})();
