document.addEventListener('DOMContentLoaded', function () {
    const actionButton = document.getElementById('actionButton');
    const statusElement = document.getElementById('status');

    actionButton.addEventListener('click', function () {
        // 获取当前标签页
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];

            // 向当前标签页发送消息
            chrome.tabs.sendMessage(activeTab.id, {
                message: "clicked_browser_action"
            });

            // 更新按钮文本
            actionButton.textContent = 'Clicked!';

            // 存储点击状态
            chrome.storage.local.set({
                lastClicked: new Date().toISOString()
            });
        });
    });

    // 检查上次点击时间
    chrome.storage.local.get('lastClicked', function (data) {
        if (data.lastClicked) {
            console.log('Last clicked:', new Date(data.lastClicked));
        }
    });

    // 获取当前标签页
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        const url = currentTab.url;

        if (url.includes('youtube.com')) {
            statusElement.textContent = '已激活';
            statusElement.style.color = '#4CAF50';
        } else {
            statusElement.textContent = '未在YouTube页面';
            statusElement.style.color = '#666';
        }
    });
}); 