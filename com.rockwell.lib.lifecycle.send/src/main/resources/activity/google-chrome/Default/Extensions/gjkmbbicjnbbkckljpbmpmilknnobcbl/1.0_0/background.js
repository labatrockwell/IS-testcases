
var targetWindow = null;
var tabCount = 0;

function start() {
  console.log("hey")
  chrome.windows.getCurrent(getWindows);
}

function getWindows(win) {
  targetWindow = win;
  console.log( "about to update "+targetWindow.id );
  chrome.windows.update( targetWindow.id, {state:"fullscreen"});
}

function getTabs(tabs) {
  tabCount = tabs.length;
  // We require all the tab information to be populated.
  chrome.windows.getAll({"populate" : true}, moveTabs);
}

function moveTabs(windows) {
  var numWindows = windows.length;
  var tabPosition = tabCount;

  for (var i = 0; i < numWindows; i++) {
    var win = windows[i];

    if (targetWindow.id != win.id) {
      var numTabs = win.tabs.length;

      for (var j = 0; j < numTabs; j++) {
        var tab = win.tabs[j];
        // Move the tab into the window that triggered the browser action.
        chrome.tabs.move(tab.id,
            {"windowId": targetWindow.id, "index": tabPosition});
        tabPosition++;
      }
    }
  }
}

start();

chrome.extension.onRequest.addListener(
function(request, sender, sendResponse) {
  start();
});