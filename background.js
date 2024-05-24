// background.js

// Инициализация хранилища данных при установке расширения
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ viewedListings: [] });
    console.log("Hide Viewed Listings extension installed.");
});

// Обработка сообщений от content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("EVENT  " + request.action);
    if (request.action.includes("markAsViewed")) {
        console.log("da");
        chrome.storage.sync.get("viewedListings", (data) => {
            const viewedListings = data.viewedListings;
            if (!viewedListings.includes(request.listingId)) {
                viewedListings.push(request.listingId);
                chrome.storage.sync.set({ viewedListings }, () => {
                    sendResponse({ success: true });
                });
            } else {
                sendResponse({ success: false });
            }
        });
    } 
    if (request.action === "markAsViewedAndClose" && sender.tab) {
        console.log('Closing tab:', sender.tab.id);
        chrome.tabs.remove(sender.tab.id, () => {
            console.log('Tab closed:', sender.tab.id);
            sendResponse({ success: true });
        });
    }
    return true;  // Required to indicate asynchronous response
});
