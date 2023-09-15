const {By, Key, Builder} = require("selenium-webdriver");
//require("chromedriver");
//import the selenium web driver
var webdriver = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");

//const chromeProfilePath = "C:\\Users\\MKamil.Kamil_laptop\\AppData\\Local\\Google\\Chrome\\User Data";
const chromeProfilePath = "C:\\tmp\\newdir";

var options = new chrome.Options();
options.addArguments(`user-data-dir=${chromeProfilePath}`);
//options.addArguments("remote-debugging-port=9222");

async function example(){
 
    //To wait for browser to build and launch properly
    try{
      var driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    }
    catch(e){
      console.log(e);
    }

    let srcUrl = "https://developer.chrome.com/docs/extensions/mv3/getstarted/";
    await driver.get(srcUrl);
    //To fetch div count from the react cs with our code.
    let srcDivCount = await driver.findElement(By.className("logo__text")).getText();

    let tempArr = srcDivCount.split('#');
    srcDivCount = parseInt(tempArr[1]);
     //To fetch dashboard.
     await driver.get("http://localhost/extensions/count-divs/dashboard.html");

     //To read the url and div count from the dashboard
     let desUrl = await driver.findElement(By.name("url1")).getText();
     let desDivCount = await driver.findElement(By.name("count1")).getText();

     
     if(srcDivCount === parseInt(desDivCount) && srcUrl == desUrl){
        console.log("Test Pass");
     }
     //It is always a safe practice to quit the browser after execution
     await driver.quit();

}
example();