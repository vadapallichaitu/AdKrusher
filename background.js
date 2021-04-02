var str = window.location.href;
var patt =new RegExp("https://www.google.com/search");

chrome.tabs.onUpdated.addListener(function(alltabs) {
  
    
    
        chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
    

    return;
  
});
