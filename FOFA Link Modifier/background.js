
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "openIncognito") {
    chrome.windows.create({
      url: request.url,
      incognito: true
    });
  }
});
