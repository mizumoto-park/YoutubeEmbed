// 监听扩展安装事件
chrome.runtime.onInstalled.addListener(function () {
    console.log('Extension installed');

    // 初始化存储
    chrome.storage.local.set({
        installDate: new Date().toISOString()
    });
});

// 监听来自 popup 或 content script 的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
        console.log("Browser action clicked");
        // 在这里可以添加更多功能
    } else if (request.message === "test_message") {
        console.log("Test message received");
        sendResponse({ status: "success" });
    }
    return true; // 保持消息通道开放
}); 