// var newURL = currentWindow.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
// alert(newURL);

chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    // Since there can only be one active tab in one active window,
    //  the array has only one element
    var tab = array_of_Tabs[0];
    // Example:
    var url = tab.url;
     alert(url);
    // ... do something with url variable
});

function gettext() {
    var text1 = document.getElementById("Java")
    //var n = search("W3Schools");
     alert(text1);
}

gettext();

function search() {
    var str = "Visit W3Schools!";
    var n = str.search("Line");
    // document.getElementById("Line").innerHTML = n;
  //   alert(n)
    if(n = "Line"){

      // alert(mateched)

    }

      else {

      }


}

search();
