// 监听所有链接和 <i> 标签的点击事件
document.addEventListener("click", function(event) {
  console.log("Click event triggered.");
  const target = event.target;

  // 检查点击的元素是否是一个链接或包含链接的元素
  if (target.tagName === "A" || (target.parentElement && target.parentElement.tagName === "A")) {
    event.preventDefault(); // 阻止默认行为
    const url = target.tagName === "A" ? target.getAttribute("href") : target.parentElement.getAttribute("href");
    chrome.runtime.sendMessage({ action: "openIncognito", url });
  }
});
