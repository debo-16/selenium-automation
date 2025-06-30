import { Builder, Browser, By, until, Key, Select } from 'selenium-webdriver';
import dotenv from 'dotenv';
dotenv.config();
//import {'dotenv'} 

(async function AbortController() {
  // launch browser
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  const url = process.env.URL;
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get(url);


    const cookieAcceptButton = await driver.wait(
      until.elementLocated(By.id('onetrust-accept-btn-handler')), 20000
    );
    await driver.wait(until.elementIsVisible(cookieAcceptButton), 5000);
    await driver.wait(until.elementIsEnabled(cookieAcceptButton), 5000);
    await driver.sleep(5000)
    await cookieAcceptButton.click();
  await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/div[1]/header/div[4]/div[3]/ul/li[2]/a'))), 5000);
  await driver.findElement(By.xpath('/html/body/div[1]/header/div[4]/div[3]/ul/li[2]/a')).click();
  await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/div[1]/header/div[4]/div[3]/ul/li[2]/a'))), 5000);
  
  await driver.findElement(By.xpath('//*[@id="ShopLoginForm_Login"]')).sendKeys(email);
  await driver.findElement(By.xpath('//*[@id="ShopLoginForm_Password"]')).sendKeys(password);
  await driver.findElement(By.xpath('//*[@id="login-user-form"]/div[3]/button')).click();
  
  
  
  let cookie = await driver.manage().getCookie('userID');
  cookie ? console.log("test login passed") : console.log("test login failed");
  //await driver.findElement(By.id('searchTerm_Header')).sendKeys('*',Key.ENTER);
  //const selectElem = new Select(await driver.findElement(By.name('SortingAttribute')));
  //selectElem.selectByVisibleText('name ascending');
  //selectElem.selectByValue('name-desc');
await driver.quit();

}) ();