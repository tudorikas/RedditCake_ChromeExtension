chrome.action.onClicked.addListener(async (tab) => {
    
    // Creating a tab needs the same workaround
    // tab = await chrome.tabs.create({url: "https://example.com"});

    chrome.scripting.executeScript({
        target: {
          tabId: tab.id
        },
        files: ['testScript.js'],
      });
    // do something with results
  });