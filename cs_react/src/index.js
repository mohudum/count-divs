/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var divElements = document.querySelectorAll("div");
var divElementsCount = divElements.length;

console.log(divElementsCount);

//now write the count in local storage
(async () => {
if(divElementsCount){
    await chrome.runtime.sendMessage({ url:window.location.href, divCount:divElementsCount });
}
})();

const root = ReactDOM.createRoot(document.querySelector('.logo__text'));
root.render(
  <React.StrictMode>
    <App count={divElementsCount}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
