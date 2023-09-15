const button = document.querySelector("button");

button.addEventListener("click", function() {
    chrome.storage.local.set({'list':[]});
});