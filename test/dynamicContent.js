import { Builder, By, until, Browser } from 'selenium-webdriver';
import { strict as assert } from 'assert';
(async function testDynamicContent(){
    try{
        const driver = new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("https://the-internet.herokuapp.com/dynamic_content");
        await driver.manage().window().maximize();
        const container = await driver.findElement(By.id('content'));
        const longText = await container.findElements(By.className('large-10'));
        const oldText = await longText[1].getText();
        await driver.navigate().refresh();
        
        const content = await driver.wait(until.elementLocated(By.id("content")), 5000);
        await driver.wait(until.elementIsVisible(content), 5000);
        
        const newlongText = await content.findElements(By.className('large-10'));
        const newText = await newlongText[1].getText();
        //(assert.strictEqual(oldText,newText)) ? console.log("content is not changing") : console.log("content is changing");
        (oldText == newText) ? console.log("content is not changing") : console.log("content is changing");

        //Test static content part
        let staticUrl = 'https://the-internet.herokuapp.com/dynamic_content?with_content=static';
        await driver.get(staticUrl.toString());


        const staticCont = await driver.findElement(By.id('content'));
        const staticlongText = await staticCont.findElements(By.className('large-10'));
        const staticoldText = await staticlongText[1].getText();
        await driver.navigate().refresh();
        
        const staticcontent = await driver.wait(until.elementLocated(By.id("content")), 5000);
        await driver.wait(until.elementIsVisible(staticcontent), 5000);
        
        const newlongTextStatic = await staticcontent.findElements(By.className('large-10'));
        const newTextStatic = await newlongTextStatic[1].getText();
        //(assert.strictEqual(oldText,newText)) ? console.log("content is not changing") : console.log("content is changing");
        (staticoldText == newTextStatic) ? console.log("content is static") : console.log("content is not static");


        await driver.quit();

    }
    catch(err){
      console.log("error is: ",err)
    }
})();