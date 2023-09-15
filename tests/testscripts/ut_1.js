const {By, Key, Builder} = require("selenium-webdriver");
//require("chromedriver");
//import the selenium web driver
var webdriver = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");

const chromeProfilePath = "C:\\Users\\MKamil.Kamil_laptop\\AppData\\Local\\Google\\Chrome\\User Data";

var options = new chrome.Options();
options.addArguments(`--user-data-dir=${chromeProfilePath}`);


async function example(){
 
    //To wait for browser to build and launch properly
    try{
      var driver = await new Builder().forBrowser("chrome").build();;//await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    }
    catch(e){
      console.log(e);
    }

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://localhost/extensions/count-divs/dashboard.html");

     //await driver.wait(until.elementLocated(By.name('url'), 10000));
     //To send a search query by passing the value in searchString.
     let url = await driver.findElement(By.name("url")).getText();
     let divCount = await driver.findElement(By.name("count")).getText();

    /* //Verify the page title and print it
     var title = await driver.getTitle();
     console.log('Title is:',title);*/

     //It is always a safe practice to quit the browser after execution
     //await driver.quit();

     //To fetch http://google.com from the browser with our code.
     await driver.get(url);
     //To send a search query by passing the value in searchString.
     let divCountSrc = 151;//await driver.findElement(By.name("count")).getText();


     if(divCount == divCountSrc){
        console.log("Test Pass");
     }
     await driver.quit;

}
example();