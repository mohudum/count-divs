# Getting Started with COUNT-DIVS Extension

## To build react content script (main.js)

In the project directory, go to cs_react directory, then run:

### `npm run build`

Creates a production build\
Once the build is completed, make sure main.js is created inside the build/static/js folder

The page will reload when you make changes.\
You may also see any lint errors in the console.


## To install chrome extension (count-divs)

1. Open the manifest.json, currently the extension will run the content script (main.js) when the user visits any page  that matches this url https://developer.chrome.com/docs/extensions/*. 

main.js is located in the path as shown in the image below. It is a react based content script.
 
2. dashboard.html is the AngularJS file dashboard application located in the same location as mainifest.json. Move it to your webserver folder, so that it can be accessed as http://localhost/extensions/count-divs/dashboard.html. Once you have moved the dashboard.html to your webserver www folder, then copy the path and update it in manifest.json

3. Since the service_worker.js requires tab permission to access and send messages to the other tab where the dashboard is running, we need to give the permissions for the same. In manifest.json, look for host_permissions and update the location to match where your dashboard application is running.

    "host_permissions":[
        "http://localhost/extensions/count-divs/*"
    ],

4. Update the dashboard applicaton’s path in the background script too. Make sure the dashboarurl variable in the service_worker.js is pointing to your dashboard application’s path as below.

    const dashboardurl = "http://localhost/extensions/count-divs/*";

5. Open chrome and navigate to chrome://extensions

6. Click on Load unpacked and select the folder where you have the above manifest.json. Extension will be loaded in the extensions page.

7. After the extension is loaded, visit the google’s extension pages (https://developer.chrome.com/docs/extensions/) in chrome browser. The Chrome Developers logo should be replaced as Divs # xxx where xxx is the count of divs in the specific page.

## Testing

You need to install required selenium drivers before running the test scripts.

### `npm install`

To run the test script, 
1. Go to the count-divs/tests/tescripts folder
2. Type node ut_1.js
3. Verify the output in the console after the test is completed.