// 检查是否在YouTube网站上
if (window.location.hostname.includes('youtube.com')) {
    console.log('YouTube Link Converter: Active');

    // 创建一个函数来转换YouTube链接
    function convertToEmbedLink(url) {
        try {
            const urlObj = new URL(url);
            if (urlObj.pathname === '/watch' && urlObj.searchParams.has('v')) {
                const videoId = urlObj.searchParams.get('v');
                return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }
        } catch (e) {
            console.error('Error parsing URL:', e);
        }
        return url;
    }

    // 处理点击事件
    function handleLinkClick(event) {
        const link = event.target.closest('a');
        if (!link) return;

        const href = link.href;
        if (!href) return;

        // 检查是否是YouTube观看链接
        if (href.includes('youtube.com/watch?v=')) {
            event.preventDefault(); // 阻止默认行为
            const embedUrl = convertToEmbedLink(href);
            console.log('Converting link:', href, 'to:', embedUrl);
            window.location.href = embedUrl;
        }
    }

    // 添加点击事件监听器
    document.addEventListener('click', handleLinkClick, true);

    // 创建MutationObserver来处理动态加载的内容
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                // 如果有新节点添加，确保我们的事件处理器仍然有效
                console.log('New content loaded, ensuring click handlers are active');
            }
        });
    });

    // 配置观察器
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 记录扩展已激活
    console.log('YouTube Link Converter: Setup complete');
} else {
    console.log('YouTube Link Converter: Not on YouTube');
} 