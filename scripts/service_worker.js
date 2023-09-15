const dashboardurl = "http://localhost/extensions/count-divs/*";

function onError(error) {
    console.error(`Error: ${error}`);
  }

chrome.runtime.onInstalled.addListener(({reason}) => {
    if(reason == "install"){
        chrome.storage.local.set({'list':[]});
    }
})

async function updateList(input) {
    const { list } = await chrome.storage.local.get('list');
    list.push({ ...input, id:list.length+1});
    return chrome.storage.local.set({ list });
  }

    // Send response to content script via messaging
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    var tabs = null;
    updateList(message);

    (async () => {
        tabs = await chrome.tabs.query({url:[dashboardurl]});

        for(const tab of tabs) {
                chrome.tabs
                .sendMessage(tab.id, { info: "update" })
                .then((response) => {
                console.log("Message from the content script:");
                //console.log(response.response);
                })
                .catch(onError);
        }

        return true;
    })();

});

