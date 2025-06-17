import { Builder, Browser, By } from "selenium-webdriver";
(async function dropDownFeature(){
    const driver = new Builder().forBrowser(Browser.CHROME).build();

    await driver.get("https://the-internet.herokuapp.com/dropdown");
    try {
        const element = await driver.findElement(By.id('dropdown'));
        const currVal = await element.findElement(By.css('option:checked')).getAttribute('value');
        const values = await element.getText();
        console.log("current value: ", currVal, values);
        // Now select the 2nd option and print its value
        await element.click();
        const option = await element.findElements(By.css('option'));
        await option[2].click();
        const newvalues = await element.findElement(By.css('option:checked')).getText();
        console.log("Now current value is: ", newvalues);
        await driver.quit();
    } catch(err) {
        console.log("Error encountered :",err)
    }
})();