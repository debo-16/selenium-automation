const {Builder, Browser, By, until, Key, Select} = require('selenium-webdriver');

(async function AbortController() {
  // launch browser
  let driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.manage().window().maximize();
  //navigate to app
  await driver.get('https://acc-bunzlbdd.salnl.net/da');

  
  
  await driver.findElement(By.xpath('/html/body/div[1]/header/div[4]/div[3]/ul/li[2]/a')).click();
  await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('/html/body/div[1]/header/div[4]/div[3]/ul/li[2]/a'))), 500);

  await driver.findElement(By.xpath('//*[@id="ShopLoginForm_Login"]')).sendKeys('sprakash@salmon.com');
  await driver.findElement(By.xpath('//*[@id="ShopLoginForm_Password"]')).sendKeys('Eperium123');
  await driver.findElement(By.xpath('//*[@id="login-user-form"]/div[3]/button')).click();
  await driver.findElement(By.id('searchTerm_Header')).sendKeys('*',Key.ENTER);
  const selectElem = new Select(await driver.findElement(By.name('SortingAttribute')));
  //selectElem.selectByVisibleText('name ascending');
  selectElem.selectByValue('name-desc');


}) ();