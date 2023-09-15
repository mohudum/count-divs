console.log("dashboard_content.js");
(async () => {
  await chrome.storage.local.get('list').then(SaveAndPostMessageToPage);
})();

chrome.runtime.onMessage.addListener((request) => {
    //debugger;
    console.log("Message from the background script:");
    console.log(request.info);

    if(request.info == "update"){
        (async () => {
            await chrome.storage.local.get('list').then(SaveAndPostMessageToPage);
        })();

    }
    return Promise.resolve({ response: "Received info" });
  });

  function SaveAndPostMessageToPage(list){
    //list = JSON.stringify(list);
    window.localStorage.setItem("list",JSON.stringify(list));
      console.log(location.href);
      window.postMessage({message:"update"}, '*');
  }
  //console.log(chrome.storage.local.get('dce'));